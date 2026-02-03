<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";
</script>

<Seo
  title="P8labs"
  description="P8labs is an independent technology lab building software, developer tools, and experimental projects."
  image="/og/banner.png"
/>

<div class="hero">
  <div class="container">
    <div class="hero-content">
      <h1 class="hero-title">P8labs</h1>
      <p class="hero-subtitle">Independent technology lab.</p>
      <p class="hero-description">
        P8labs publishes some open-source projects while retaining private
        intellectual property.
      </p>
      <div class="hero-cta">
        <a href="/products" class="cta-link">Explore Products →</a>
      </div>
    </div>
  </div>
</div>

<style>
  .hero {
    padding: 8rem 0 10rem;
    background: #ffffff;
  }

  .hero-content {
    max-width: 700px;
    margin: 0 auto;
    text-align: center;
  }

  .hero-title {
    font-size: 4rem;
    font-weight: 600;
    color: #1a1a1a;
    margin-bottom: 1rem;
    letter-spacing: -0.02em;
  }

  .hero-subtitle {
    font-size: 1.5rem;
    font-weight: 400;
    color: #666;
    margin-bottom: 2rem;
  }

  .hero-description {
    font-size: 1.125rem;
    font-weight: 300;
    color: #666;
    line-height: 1.7;
    margin-bottom: 3rem;
  }

  .hero-cta {
    margin-top: 3rem;
  }

  .cta-link {
    display: inline-block;
    font-size: 1.125rem;
    font-weight: 500;
    color: var(--color-accent-red);
    padding: 0.75rem 2rem;
    border: 2px solid var(--color-accent-red);
    border-radius: 4px;
    transition: all 0.2s ease;
  }

  .cta-link:hover {
    background: var(--color-accent-red);
    color: #ffffff;
  }

  @media (max-width: 768px) {
    .hero {
      padding: 4rem 0 6rem;
    }

    .hero-title {
      font-size: 2.5rem;
    }

    .hero-subtitle {
      font-size: 1.25rem;
    }

    .hero-description {
      font-size: 1rem;
    }
  }
</style>
