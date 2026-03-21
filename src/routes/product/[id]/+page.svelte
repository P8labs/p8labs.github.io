<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";
  import type { PageData } from "./$types";

  let { data }: { data: PageData } = $props();
</script>

<Seo
  title={`${data.product.name} README`}
  description={data.product.description ??
    `Read more about ${data.product.name}.`}
  image="/og/home.svg"
  schema={{
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: data.product.name,
    codeRepository: data.product.github ?? data.product.url,
    url: `https://p8labs.in/product/${data.productId}`,
    description:
      data.product.description ?? `Read more about ${data.product.name}.`,
    programmingLanguage: "TypeScript",
    maintainer: {
      "@type": "Organization",
      name: "P8labs",
      url: "https://p8labs.in",
    },
  }}
/>

<div class="page">
  <div class="container">
    <a class="back-link" href="/products">← Back to products</a>

    <header class="hero">
      <div>
        <p class="meta">/{data.productId}</p>
        <h1>{data.product.name}</h1>
        <p class="description">
          {data.product.description ?? "Project details and README preview."}
        </p>
      </div>
      <a
        class="repo-link"
        href={data.product.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        Open Project →
      </a>
    </header>

    {#if data.hasReadme && data.readmeHtml}
      <section class="readme-wrap">
        <h2>README</h2>
        <article class="markdown-body">{@html data.readmeHtml}</article>
      </section>
    {:else}
      <section class="private-note">
        <h2>README Not Available</h2>
        <p>
          This is a private project. Contact
          <a href="mailto:info@p8labs.in">info@p8labs.in</a>
          for more information.
        </p>
      </section>
    {/if}
  </div>
</div>

<style>
  .page {
    padding: 3rem 0 5rem;
  }

  .back-link {
    display: inline-block;
    margin-bottom: 1.25rem;
    font-size: 0.95rem;
    color: #666;
  }

  .hero {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid #ececec;
    padding-bottom: 1.5rem;
  }

  .meta {
    margin: 0 0 0.75rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    font-size: 0.75rem;
    color: #8a8a8a;
  }

  h1 {
    margin-bottom: 0.625rem;
    font-size: clamp(1.8rem, 4vw, 2.6rem);
  }

  .description {
    margin: 0;
    color: #555;
    max-width: 70ch;
  }

  .repo-link {
    white-space: nowrap;
    border: 1px solid #ddd;
    border-radius: 999px;
    padding: 0.55rem 0.9rem;
    font-weight: 600;
  }

  .readme-wrap,
  .private-note {
    border: 1px solid #ececec;
    border-radius: 10px;
    padding: 1rem;
    background: #fff;
  }

  .readme-wrap h2,
  .private-note h2 {
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }

  .markdown-body {
    margin: 0;
    padding: 0.5rem 0;
    font-size: 0.95rem;
    line-height: 1.65;
    color: #2f2f2f;
  }

  .markdown-body :global(h1),
  .markdown-body :global(h2),
  .markdown-body :global(h3) {
    margin-top: 1.4rem;
    margin-bottom: 0.55rem;
    line-height: 1.35;
  }

  .markdown-body :global(p),
  .markdown-body :global(ul),
  .markdown-body :global(ol) {
    margin: 0 0 0.8rem;
  }

  .markdown-body :global(code) {
    font-family: "SFMono-Regular", ui-monospace, Menlo, Consolas, monospace;
    background: #f5f5f5;
    padding: 0.08rem 0.25rem;
    border-radius: 4px;
    font-size: 0.9em;
  }

  .markdown-body :global(pre) {
    overflow-x: auto;
    background: #fafafa;
    border: 1px solid #ececec;
    border-radius: 8px;
    padding: 0.9rem;
  }

  .markdown-body :global(pre code) {
    background: transparent;
    padding: 0;
  }

  .markdown-body :global(img) {
    max-width: 100%;
    height: auto;
    border-radius: 6px;
    border: 1px solid #ececec;
  }

  .markdown-body :global(table) {
    width: 100%;
    border-collapse: collapse;
    margin: 1rem 0;
  }

  .markdown-body :global(th),
  .markdown-body :global(td) {
    border: 1px solid #ececec;
    padding: 0.5rem;
    text-align: left;
  }

  .private-note p {
    margin: 0;
  }

  @media (max-width: 768px) {
    .hero {
      flex-direction: column;
    }

    .repo-link {
      align-self: flex-start;
    }
  }
</style>
