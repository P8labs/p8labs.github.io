<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";

  const buildServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Build With P8labs",
    provider: {
      "@type": "Organization",
      name: "P8labs",
      url: "https://p8labs.in",
    },
    areaServed: "Worldwide",
    serviceType: "Custom software engineering and product collaboration",
    url: "https://p8labs.in/build",
    description:
      "Custom software delivery for businesses and collaboration opportunities for independent developers.",
  };
</script>

<Seo
  title="Build With P8labs"
  description="Custom software delivery for businesses and collaboration opportunities for independent developers."
  image="/og/home.svg"
  schema={buildServiceSchema}
/>

<div class="page">
  <div class="container">
    <section class="hero">
      <p class="eyebrow">Build With P8labs</p>
      <h1>
        Custom Software For Businesses. Open Collaboration For Developers.
      </h1>
      <p class="lead">
        We build practical software systems for product teams, operations teams,
        and startups that need reliable execution with clear ownership.
      </p>
      <div class="hero-actions">
        <a class="btn btn-primary" href="mailto:build@p8labs.in"
          >Contact build@p8labs.in</a
        >
        <a class="btn btn-secondary" href="/products">Browse Projects</a>
      </div>
    </section>

    <section class="panel">
      <h2>For Businesses</h2>
      <p>
        If you want to build a custom software solution, contact us at
        <a href="mailto:build@p8labs.in">build@p8labs.in</a>.
      </p>
      <ul>
        <li>Internal tools and dashboards</li>
        <li>Platform and API development</li>
        <li>Analytics and telemetry systems</li>
        <li>MVP to production delivery support</li>
      </ul>
    </section>

    <section class="panel">
      <h2>For Independent Developers</h2>
      <p>
        If you are an independent developer and want to pitch your ideas, go
        ahead.
      </p>
      <p>
        Share your concept, prototype, or roadmap at
        <a href="mailto:build@p8labs.in">build@p8labs.in</a> and we will review for
        potential collaboration.
      </p>
    </section>
  </div>
</div>

<style>
  .page {
    padding: 3rem 0 5rem;
  }

  .hero {
    border: none;
    border-radius: 0;
    padding: 0;
    margin-bottom: 1.5rem;
    background: transparent;
  }

  .eyebrow {
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #8b5d2f;
    font-size: 0.76rem;
    margin: 0 0 0.5rem;
    font-weight: 600;
  }

  h1 {
    font-size: clamp(2rem, 4vw, 3rem);
    margin-bottom: 0.75rem;
    max-width: 20ch;
  }

  .lead {
    font-size: 1rem;
    color: #565656;
    max-width: 65ch;
    margin-bottom: 1rem;
  }

  .hero-actions {
    display: flex;
    gap: 0.7rem;
    flex-wrap: wrap;
  }

  .btn {
    border-radius: 7px;
    padding: 0.5rem 0.9rem;
    font-size: 0.86rem;
    font-weight: 600;
    border: 1px solid rgba(0, 0, 0, 0.08);
    display: inline-flex;
    transition:
      transform 0.18s ease,
      box-shadow 0.2s ease,
      filter 0.2s ease;
  }

  .btn-primary {
    background: linear-gradient(135deg, #e45834 0%, #df2f4c 100%);
    color: #fff;
  }

  .btn-primary:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 16px rgba(223, 47, 76, 0.25);
    color: #fff;
  }

  .btn-secondary {
    background: #fff;
    color: #2a2a2a;
    border-color: #d9d9d9;
  }

  .btn-secondary:hover {
    transform: translateY(-1px);
    filter: brightness(0.98);
  }

  .panel {
    border: none;
    border-radius: 0;
    padding: 0;
    margin-bottom: 1rem;
    background: transparent;
    padding-bottom: 1rem;
    border-bottom: 1px solid #ececec;
  }

  .panel h2 {
    margin-bottom: 0.6rem;
    font-size: 1.3rem;
  }

  .panel p {
    margin: 0 0 0.7rem;
    color: #4f4f4f;
  }

  ul {
    margin: 0;
    padding-left: 1.1rem;
  }

  li {
    margin-bottom: 0.35rem;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.8rem;
    }
  }
</style>
