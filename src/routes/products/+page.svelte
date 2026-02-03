<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";
  import { products } from "$lib/data/content";

  const statusColors: Record<string, string> = {
    active: "var(--color-accent-red)",
    prototype: "var(--color-accent-orange)",
    archived: "#999",
  };
</script>

<Seo
  title="Products"
  description="Browse open-source projects and tools built by P8labs."
  image="/og/home.svg"
/>

<div class="page">
  <div class="container">
    <div class="page-header">
      <h1>Products</h1>
      <p class="page-description">
        A collection of open-source tools and experimental projects.
      </p>
    </div>

    <div class="products-table">
      <div class="table-header">
        <div class="col-name">Name</div>
        <div class="col-category">Category</div>
        <div class="col-status">Status</div>
        <div class="col-link">Link</div>
      </div>
      {#each products as product}
        <div class="table-row">
          <div class="col-name">
            <a href={product.url} target="_blank" rel="noopener noreferrer">
              {product.name}
            </a>
          </div>
          <div class="col-category">{product.category}</div>
          <div class="col-status">
            <span
              class="badge"
              style="background: {statusColors[product.status]};"
            >
              {product.status}
            </span>
          </div>
          <div class="col-link">
            <a
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              class="external-link"
            >
              View →
            </a>
          </div>
        </div>
      {/each}
    </div>
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

  .products-table {
    border: 1px solid #e5e5e5;
    border-radius: 8px;
    overflow: hidden;
    background: #ffffff;
  }

  .table-header,
  .table-row {
    display: grid;
    grid-template-columns: 2fr 1.5fr 1fr 1fr;
    gap: 1rem;
    padding: 1rem 1.5rem;
    align-items: center;
  }

  .table-header {
    background: #fafafa;
    border-bottom: 1px solid #e5e5e5;
    font-weight: 600;
    font-size: 0.875rem;
    color: #666;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .table-row {
    border-bottom: 1px solid #f0f0f0;
    transition: background 0.15s ease;
  }

  .table-row:last-child {
    border-bottom: none;
  }

  .table-row:hover {
    background: #fafafa;
  }

  .col-name a {
    font-weight: 500;
    color: #1a1a1a;
  }

  .col-name a:hover {
    color: var(--color-accent-red);
  }

  .col-category {
    font-size: 0.9375rem;
    color: #666;
  }

  .badge {
    display: inline-block;
    padding: 0.25rem 0.625rem;
    border-radius: 4px;
    font-size: 0.75rem;
    font-weight: 600;
    color: #ffffff;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .external-link {
    font-size: 0.9375rem;
    color: var(--color-accent-red);
    font-weight: 500;
  }

  .external-link:hover {
    color: var(--color-accent-orange);
  }

  @media (max-width: 768px) {
    .page-header h1 {
      font-size: 2rem;
    }

    .products-table {
      border: none;
      border-radius: 0;
    }

    .table-header {
      display: none;
    }

    .table-row {
      grid-template-columns: 1fr;
      gap: 0.5rem;
      padding: 1.5rem 1rem;
      border: 1px solid #e5e5e5;
      border-radius: 8px;
      margin-bottom: 1rem;
      background: #ffffff;
    }

    .col-name,
    .col-category,
    .col-status,
    .col-link {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .col-name::before,
    .col-category::before,
    .col-status::before,
    .col-link::before {
      content: attr(data-label);
      font-weight: 600;
      font-size: 0.75rem;
      color: #999;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
  }
</style>
