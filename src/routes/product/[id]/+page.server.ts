import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { getProductById, getProductId } from "$lib/data/content";
import { marked } from "marked";
import sanitizeHtml from "sanitize-html";

export const prerender = false;

const parseGithubRepo = (
  repoUrl: string,
): { owner: string; repo: string } | null => {
  try {
    const parsed = new URL(repoUrl);

    if (parsed.hostname !== "github.com") {
      return null;
    }

    const [owner, repo] = parsed.pathname.split("/").filter(Boolean);

    if (!owner || !repo) {
      return null;
    }

    return { owner, repo: repo.replace(/\.git$/, "") };
  } catch {
    return null;
  }
};

interface GithubReadme {
  content: string;
  encoding: string;
  path: string;
  download_url: string | null;
}

interface GithubReadmeResult {
  markdown: string;
  owner: string;
  repo: string;
  readmePath: string;
  branch: string;
}

const decodeBase64Utf8 = (value: string): string =>
  new TextDecoder().decode(
    Uint8Array.from(atob(value.replace(/\n/g, "")), (char) =>
      char.charCodeAt(0),
    ),
  );

const resolveBranchFromDownloadUrl = (
  downloadUrl: string | null,
  owner: string,
  repo: string,
  readmePath: string,
): string => {
  if (!downloadUrl) {
    return "HEAD";
  }

  try {
    const parsed = new URL(downloadUrl);
    const prefix = `/${owner}/${repo}/`;

    if (
      parsed.hostname !== "raw.githubusercontent.com" ||
      !parsed.pathname.startsWith(prefix)
    ) {
      return "HEAD";
    }

    const suffix = parsed.pathname.slice(prefix.length);
    const pathSuffix = `/${readmePath}`;

    if (!suffix.endsWith(pathSuffix)) {
      return "HEAD";
    }

    return suffix.slice(0, -pathSuffix.length) || "HEAD";
  } catch {
    return "HEAD";
  }
};

const normalizeRelativeUrl = (
  value: string | null,
  owner: string,
  repo: string,
  branch: string,
  readmePath: string,
  mode: "link" | "image",
): string => {
  if (!value) {
    return "";
  }

  const trimmed = value.trim();

  if (
    !trimmed ||
    trimmed.startsWith("#") ||
    trimmed.startsWith("mailto:") ||
    trimmed.startsWith("tel:") ||
    /^(https?:)?\/\//i.test(trimmed)
  ) {
    return trimmed;
  }

  const readmeDir = readmePath.includes("/")
    ? readmePath.slice(0, readmePath.lastIndexOf("/") + 1)
    : "";
  const baseRoot =
    mode === "image"
      ? `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/`
      : `https://github.com/${owner}/${repo}/blob/${branch}/`;

  if (trimmed.startsWith("/")) {
    return new URL(trimmed.slice(1), baseRoot).toString();
  }

  return new URL(trimmed, `${baseRoot}${readmeDir}`).toString();
};

const markdownToHtml = (
  markdown: string,
  owner: string,
  repo: string,
  branch: string,
  readmePath: string,
): string => {
  const html = marked.parse(markdown, {
    gfm: true,
    breaks: true,
    walkTokens: (token) => {
      if (token.type === "link") {
        token.href = normalizeRelativeUrl(
          token.href,
          owner,
          repo,
          branch,
          readmePath,
          "link",
        );
      }

      if (token.type === "image") {
        token.href = normalizeRelativeUrl(
          token.href,
          owner,
          repo,
          branch,
          readmePath,
          "image",
        );
      }
    },
  }) as string;

  return sanitizeHtml(html, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat([
      "h1",
      "h2",
      "img",
      "table",
      "thead",
      "tbody",
      "tr",
      "th",
      "td",
      "del",
    ]),
    allowedAttributes: {
      ...sanitizeHtml.defaults.allowedAttributes,
      a: ["href", "name", "target", "rel"],
      img: ["src", "alt", "title"],
      th: ["align"],
      td: ["align"],
      code: ["class"],
      span: ["class"],
    },
    transformTags: {
      a: (tagName: string, attribs: Record<string, string>) => ({
        tagName,
        attribs: {
          ...attribs,
          rel: "noopener noreferrer",
          target: "_blank",
        },
      }),
    },
  });
};

const fetchReadme = async (
  fetch: (input: RequestInfo | URL, init?: RequestInit) => Promise<Response>,
  repoUrl: string,
): Promise<GithubReadmeResult | null> => {
  const repo = parseGithubRepo(repoUrl);

  if (!repo) {
    return null;
  }

  const response = await fetch(
    `https://api.github.com/repos/${repo.owner}/${repo.repo}/readme`,
    {
      headers: {
        Accept: "application/vnd.github+json",
      },
    },
  );

  if (!response.ok) {
    return null;
  }

  const payload = (await response.json()) as GithubReadme;

  if (payload.encoding !== "base64" || !payload.content) {
    return null;
  }

  const readmePath = payload.path || "README.md";
  const branch = resolveBranchFromDownloadUrl(
    payload.download_url,
    repo.owner,
    repo.repo,
    readmePath,
  );

  return {
    markdown: decodeBase64Utf8(payload.content),
    owner: repo.owner,
    repo: repo.repo,
    readmePath,
    branch,
  };
};

export const load: PageServerLoad = async ({ params, fetch }) => {
  const product = getProductById(params.id);

  if (!product) {
    error(404, "Product not found");
  }

  let readmeHtml: string | null = null;

  try {
    const readme = await fetchReadme(fetch, product.github ?? product.url);

    if (readme) {
      readmeHtml = markdownToHtml(
        readme.markdown,
        readme.owner,
        readme.repo,
        readme.branch,
        readme.readmePath,
      );
    }
  } catch {
    readmeHtml = null;
  }

  return {
    product,
    productId: getProductId(product),
    readmeHtml,
    hasReadme: Boolean(readmeHtml),
  };
};
