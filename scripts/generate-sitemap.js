import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";

const baseUrl = "https://p8labs.in";
const currentDate = new Date().toISOString();

const slugify = (value) =>
  value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

const escapeXml = (value) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

const extractProductIds = () => {
  const contentFilePath = resolve("./src/lib/data/content.ts");
  const source = readFileSync(contentFilePath, "utf-8");

  const productBlocks = source.match(/defineProduct\(\{[\s\S]*?\}\),/g) ?? [];
  const ids = [];

  for (const block of productBlocks) {
    const idMatch = block.match(/id:\s*"([^"]+)"/);
    const nameMatch = block.match(/name:\s*"([^"]+)"/);

    if (idMatch?.[1]) {
      ids.push(idMatch[1]);
      continue;
    }

    if (nameMatch?.[1]) {
      ids.push(slugify(nameMatch[1]));
    }
  }

  return [...new Set(ids)];
};

const staticPages = [
  { url: "", changefreq: "weekly", priority: "1.0" },
  { url: "/about", changefreq: "monthly", priority: "0.8" },
  { url: "/products", changefreq: "weekly", priority: "0.9" },
  { url: "/build", changefreq: "monthly", priority: "0.8" },
  { url: "/contact", changefreq: "monthly", priority: "0.7" },
  { url: "/terms", changefreq: "yearly", priority: "0.5" },
  { url: "/dmca", changefreq: "yearly", priority: "0.5" },
];

const productPages = extractProductIds().map((id) => ({
  url: `/product/${id}`,
  changefreq: "weekly",
  priority: "0.7",
}));

const sitemapPages = [...staticPages, ...productPages];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapPages
  .map(
    (page) => `  <url>
    <loc>${escapeXml(`${baseUrl}${page.url}`)}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>`;

writeFileSync("./static/sitemap.xml", sitemap);
console.log("✓ Sitemap generated successfully");
