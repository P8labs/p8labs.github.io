<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";
  import { getProductId, products, type Product } from "$lib/data/content";

  type Status = Product["status"];

  const statusMeta: Record<Status, { color: string; order: number }> = {
    active: { color: "var(--color-accent-red)", order: 1 },
    stable: { color: "#247b4b", order: 2 },
    prototype: { color: "var(--color-accent-orange)", order: 3 },
    archived: { color: "#9a9a9a", order: 4 },
  };

  const groupTitles: Record<string, string> = {
    tsbin: "tsbin ecosystem",
    independent: "independent projects",
  };

  const sortedProducts = [...products].sort((a, b) => {
    const statusCompare =
      statusMeta[a.status].order - statusMeta[b.status].order;
    if (statusCompare !== 0) {
      return statusCompare;
    }

    return a.name.localeCompare(b.name);
  });

  const latestActiveProducts = [...products]
    .reverse()
    .filter((product) => product.status === "active");

  const groupedProducts = sortedProducts.reduce<Record<string, Product[]>>(
    (groups, product) => {
      if (product.status === "active") {
        return groups;
      }

      const group = product.group ?? "independent";
      groups[group] ??= [];
      groups[group].push(product);
      return groups;
    },
    {},
  );

  const orderedGroups = Object.keys(groupedProducts).sort((a, b) => {
    if (a === "tsbin") {
      return -1;
    }

    if (b === "tsbin") {
      return 1;
    }

    if (a === "independent") {
      return 1;
    }

    if (b === "independent") {
      return -1;
    }

    return a.localeCompare(b);
  });

  const getGroupTitle = (group: string): string =>
    groupTitles[group] ?? `${group} projects`;

  const productsCollectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "P8labs Products",
    url: "https://p8labs.in/products",
    description: "Browse open-source projects and tools built by P8labs.",
    hasPart: sortedProducts.map((product) => ({
      "@type": "SoftwareApplication",
      name: product.name,
      applicationCategory: product.category,
      operatingSystem: "Web",
      url: `https://p8labs.in/product/${getProductId(product)}`,
    })),
  };
</script>

<Seo
  title="Products"
  description="Browse open-source projects and tools built by P8labs."
  image="/og/home.svg"
  schema={productsCollectionSchema}
/>

<div class="page">
  <div class="container">
    <div class="page-header">
      <h1>Products</h1>
      <p class="page-description">
        Open-source tools, experiments, and product families from P8labs.
      </p>
    </div>

    <section class="cta cta-top">
      <h2>Need software built for your business?</h2>
      <p>
        If you want to build a custom software solution, contact us at
        <a href="mailto:build@p8labs.in">build@p8labs.in</a>.
      </p>
      <p>
        If you are an independent developer and want to pitch your ideas, go
        ahead.
      </p>
      <a class="cta-link" href="/build">Explore Build With P8labs</a>
    </section>

    <section class="group-section latest-section">
      <div class="group-header">
        <h2>latest active projects</h2>
        <span>{latestActiveProducts.length} projects</span>
      </div>

      <div class="products-list">
        {#each latestActiveProducts as product}
          {@const productId = getProductId(product)}
          <article class="product-row">
            <div class="row-main">
              <h3>
                <a href={`/product/${productId}`}>{product.name}</a>
              </h3>

              <div class="chips">
                <span class="chip chip-category">{product.category}</span>
                <span
                  class="chip chip-status"
                  style="background-color: {statusMeta[product.status].color};"
                >
                  {product.status}
                </span>
              </div>
            </div>

            <p class="description">
              {product.description ?? "More details coming soon."}
            </p>

            {#if product.image || product.demoVideo}
              <div class="media-inline">
                {#if product.image}
                  <img src={product.image} alt={`${product.name} preview`} />
                {/if}

                {#if product.demoVideo}
                  <a
                    href={product.demoVideo}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="media-link"
                  >
                    Watch demo video
                  </a>
                {/if}
              </div>
            {/if}

            <div class="actions">
              <a href={`/product/${productId}`} class="action action-primary"
                >README</a
              >
              <a href={`/${productId}`} class="action action-secondary"
                >Direct</a
              >
              <a
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                class="action action-secondary"
              >
                External
              </a>
            </div>
          </article>
        {/each}
      </div>
    </section>

    {#each orderedGroups as group}
      <section class="group-section">
        <div class="group-header">
          <h2>{getGroupTitle(group)}</h2>
          <span>{groupedProducts[group].length} projects</span>
        </div>

        <div class="products-list">
          {#each groupedProducts[group] as product}
            {@const productId = getProductId(product)}
            <article class="product-row">
              <div class="row-main">
                <h3>
                  <a href={`/product/${productId}`}>{product.name}</a>
                </h3>

                <div class="chips">
                  <span class="chip chip-category">{product.category}</span>
                  <span
                    class="chip chip-status"
                    style="background-color: {statusMeta[product.status]
                      .color};"
                  >
                    {product.status}
                  </span>
                </div>
              </div>

              <p class="description">
                {product.description ?? "More details coming soon."}
              </p>

              {#if product.image || product.demoVideo}
                <div class="media-inline">
                  {#if product.image}
                    <img src={product.image} alt={`${product.name} preview`} />
                  {/if}

                  {#if product.demoVideo}
                    <a
                      href={product.demoVideo}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="media-link"
                    >
                      Watch demo video
                    </a>
                  {/if}
                </div>
              {/if}

              <div class="actions">
                <a href={`/product/${productId}`} class="action action-primary"
                  >README</a
                >
                <a href={`/${productId}`} class="action action-secondary"
                  >Direct</a
                >
                <a
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="action action-secondary"
                >
                  External
                </a>
              </div>
            </article>
          {/each}
        </div>
      </section>
    {/each}
  </div>
</div>

<style>
  .page {
    padding: 4rem 0;
  }

  .page-header {
    margin-bottom: 3rem;
  }

  .page-header h1 {
    font-size: 3rem;
    font-weight: 600;
    color: #1a1a1a;
    margin-bottom: 1rem;
  }

  .page-description {
    font-size: 1.125rem;
    font-weight: 300;
    color: #666;
    max-width: 600px;
  }

  .group-section {
    margin-bottom: 2rem;
  }

  .group-header {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    margin-bottom: 1rem;
  }

  .group-header h2 {
    font-size: 1.2rem;
    font-weight: 600;
    letter-spacing: 0.02em;
    text-transform: uppercase;
  }

  .group-header span {
    color: #767676;
    font-size: 0.9rem;
  }

  .products-list {
    border: 1px solid rgba(0, 0, 0, 0.08);
    border-radius: 8px;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.88);
  }

  .latest-section .products-list {
    border-color: #f1dcc4;
    box-shadow: 0 6px 20px rgba(255, 136, 43, 0.08);
  }

  .product-row {
    padding: 1rem 1.1rem;
    border-bottom: 1px solid #efefef;
    display: grid;
    gap: 0.75rem;
    transition:
      background-color 0.18s ease,
      transform 0.18s ease;
  }

  .product-row:last-child {
    border-bottom: none;
  }

  .product-row:hover {
    background: #fcfcfc;
    transform: translateY(-1px);
  }

  .row-main {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    align-items: flex-start;
  }

  .row-main h3 {
    font-size: 1.15rem;
  }

  .row-main h3 a {
    font-weight: 500;
    color: #1a1a1a;
  }

  .row-main h3 a:hover {
    color: var(--color-accent-red);
  }

  .chips {
    display: flex;
    gap: 0.45rem;
    flex-wrap: wrap;
    justify-content: flex-end;
  }

  .chip {
    display: inline-block;
    padding: 0.2rem 0.6rem;
    border-radius: 999px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .chip-category {
    color: #444;
    background: #f1f1f1;
  }

  .chip-status {
    color: #fff;
  }

  .description {
    font-size: 0.94rem;
    color: #5a5a5a;
    margin: 0;
    max-width: 75ch;
  }

  .media-inline {
    display: flex;
    gap: 0.75rem;
    align-items: center;
    flex-wrap: wrap;
  }

  .media-inline img {
    width: 140px;
    height: 84px;
    object-fit: cover;
    border-radius: 6px;
    border: 1px solid #ececec;
  }

  .media-link {
    font-weight: 600;
    font-size: 0.9rem;
  }

  .actions {
    display: flex;
    gap: 0.6rem;
    flex-wrap: wrap;
  }

  .action {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 7px;
    padding: 0.3rem 0.68rem;
    font-size: 0.78rem;
    font-weight: 600;
    border: 1px solid transparent;
    line-height: 1.2;
    transition:
      transform 0.18s ease,
      box-shadow 0.2s ease,
      filter 0.2s ease;
  }

  .action-primary {
    color: #fff;
    background: #1f1f1f;
  }

  .action-primary:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.16);
    color: #fff;
  }

  .action-secondary {
    color: #333;
    border-color: #d6d6d6;
    background: #fff;
  }

  .action-secondary:hover {
    border-color: #bbb;
    color: #111;
    transform: translateY(-1px);
    filter: brightness(0.98);
  }

  .cta {
    padding: 1rem;
    border: 1px solid rgba(0, 0, 0, 0.08);
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.88);
  }

  .cta-top {
    margin-bottom: 2rem;
  }

  .cta h2 {
    font-size: 1.35rem;
    margin-bottom: 0.5rem;
  }

  .cta p {
    margin-bottom: 0.4rem;
    color: #4f4f4f;
  }

  .cta-link {
    display: inline-flex;
    background: rgba(255, 255, 255, 0.9);
    margin-top: 0.4rem;
    font-weight: 600;
  }

  .group-section,
  .cta {
    animation: riseIn 0.35s ease both;
  }

  .group-section:nth-of-type(2) {
    animation-delay: 0.04s;
  }

  .group-section:nth-of-type(3) {
    animation-delay: 0.07s;
  }

  @keyframes riseIn {
    from {
      opacity: 0;
      transform: translateY(5px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .product-row,
    .action,
    .group-section,
    .cta {
      animation: none;
      transition: none;
    }
  }

  @media (max-width: 768px) {
    .page-header h1 {
      font-size: 2rem;
    }

    .group-header {
      flex-direction: column;
      gap: 0.3rem;
      align-items: flex-start;
    }

    .row-main {
      flex-direction: column;
      gap: 0.6rem;
    }

    .chips {
      justify-content: flex-start;
    }

    .media-inline img {
      width: 100%;
      max-width: 240px;
    }
  }
</style>
