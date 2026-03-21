<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";
  import { getProductId, products } from "$lib/data/content";

  const activeProjects = products.filter((p) => p.status === "active").length;
  const stableProjects = products.filter((p) => p.status === "stable").length;
  const totalProjects = products.length;

  const latestActive = [...products]
    .reverse()
    .filter((p) => p.status === "active")
    .slice(0, 4);

  const buildAreas = [
    {
      title: "Custom Product Engineering",
      description:
        "From idea to production systems with practical architecture, strong delivery rhythm, and clean maintainable code.",
    },
    {
      title: "Developer Tools",
      description:
        "Tools that remove friction for teams and independent developers building fast-moving products.",
    },
    {
      title: "Data and Analytics",
      description:
        "Telemetry and analytics systems that help teams understand product usage and make better decisions.",
    },
  ];

  const latestActiveSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Latest Active Projects",
    itemListOrder: "https://schema.org/ItemListOrderDescending",
    itemListElement: latestActive.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "SoftwareApplication",
        name: project.name,
        url: `https://p8labs.in/product/${getProductId(project)}`,
        applicationCategory: project.category,
      },
    })),
  };
</script>

<Seo
  title="P8labs"
  description="P8labs builds software for businesses, ships open products, and collaborates with independent developers."
  image="/og/banner.png"
  schema={latestActiveSchema}
  includeWebSiteSchema={true}
/>

<section class="intro-surface">
  <div class="hero-wrap">
    <div class="container">
      <section class="hero">
        <p class="eyebrow">p8labs.tech is now p8labs.in</p>
        <h1>Engineering software for teams, products, and bold ideas.</h1>
        <p class="hero-description">
          We build custom software for businesses, ship open products, and help
          independent developers turn strong ideas into real systems.
        </p>
        <p class="personal-note">
          Built with care by real people at P8labs, with a focus on clear code,
          thoughtful UX, and practical outcomes.
        </p>
        <div class="hero-actions">
          <a href="/build" class="btn btn-primary">Start a Build Project</a>
          <a href="/products" class="btn btn-secondary">Explore Products</a>
          <a href="/contact" class="btn btn-ghost">Contact</a>
        </div>
      </section>
    </div>
  </div>

  <section class="stats-section">
    <div class="container">
      <div class="stats-shell">
        <p class="stats-kicker">At a glance</p>
        <div class="stats-grid">
          <div class="stat-card">
            <p class="stat-label">Active Projects</p>
            <div class="stat-main">
              <div class="stat-number">{activeProjects}</div>
              <span class="stat-unit">live</span>
            </div>
            <p class="stat-note">Receiving updates and feature work</p>
          </div>
          <div class="stat-card">
            <p class="stat-label">Stable Projects</p>
            <div class="stat-main">
              <div class="stat-number">{stableProjects}</div>
              <span class="stat-unit">ready</span>
            </div>
            <p class="stat-note">Production-safe with maintained quality</p>
          </div>
          <div class="stat-card">
            <p class="stat-label">Total Projects</p>
            <div class="stat-main">
              <div class="stat-number">{totalProjects}</div>
              <span class="stat-unit">built</span>
            </div>
            <p class="stat-note">Across products, tooling, and data systems</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</section>

<section class="active-section">
  <div class="container">
    <div class="section-header">
      <h2>Latest Active Projects</h2>
      <a href="/products">View all products</a>
    </div>
    <div class="project-list">
      {#each latestActive as project}
        {@const productId = getProductId(project)}
        <article class="project-row">
          <div>
            <h3><a href={`/product/${productId}`}>{project.name}</a></h3>
            {#if project.description}
              <p>{project.description}</p>
            {/if}
          </div>
          <div class="row-right">
            <span>{project.category}</span>
            <a href={`/product/${productId}`}>README</a>
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>

<section class="service-section">
  <div class="container">
    <div class="section-header">
      <h2>Build With P8labs</h2>
    </div>
    <div class="service-list">
      <article class="service-row">
        <h3>For Businesses</h3>
        <p>
          Build custom software systems with practical architecture and fast,
          iterative delivery.
        </p>
        <a href="mailto:build@p8labs.in">build@p8labs.in</a>
      </article>
      <article class="service-row">
        <h3>For Independent Developers</h3>
        <p>
          Pitch your product idea or prototype and collaborate with us on
          shipping it to production.
        </p>
        <a href="/build">See collaboration details</a>
      </article>
    </div>
  </div>
</section>

<section class="what-build-section">
  <div class="container">
    <div class="section-header">
      <h2>What We Build</h2>
    </div>
    <div class="build-grid">
      {#each buildAreas as area}
        <article class="build-item">
          <h3>{area.title}</h3>
          <p>{area.description}</p>
        </article>
      {/each}
    </div>
  </div>
</section>

<section class="team-section">
  <div class="container">
    <div class="section-header">
      <h2>About the Team</h2>
    </div>
    <div class="team-copy">
      <p>
        P8labs was founded by
        <a
          href="https://priyanshupz.github.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Priyanshu Verma
        </a>, focused on building useful software, developer tools, and systems
        that solve real operational problems.
      </p>
      <p>
        We collaborate with contributors and independent developers to explore
        strong ideas, ship them with quality, and keep improving through open
        feedback loops.
      </p>
      <a href="/about" class="team-link">Learn more about us</a>
    </div>
  </div>
</section>

<section class="social-section">
  <div class="container">
    <div class="social-card">
      <div class="section-header">
        <h2>Connect With P8labs</h2>
      </div>
      <p class="social-description">
        Follow product updates, releases, engineering notes, and collaboration
        opportunities.
      </p>
      <div class="social-links">
        <a
          href="https://www.linkedin.com/company/p8labs"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a href="https://x.com/P8labs" target="_blank" rel="noopener noreferrer"
          >X</a
        >
        <a
          href="https://peerlist.io/company/p8labs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Peerlist
        </a>
      </div>
    </div>
  </div>
</section>

<style>
  .intro-surface {
    position: relative;
    overflow: hidden;
  }

  .hero-wrap {
    padding: 2.75rem 0 2rem;
  }

  .hero {
    border: none;
    border-radius: 8px;
    padding: 1.4rem;
    background: transparent;
    backdrop-filter: blur(6px);
  }

  .eyebrow {
    margin: 0 0.23rem 0.46rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-size: 0.76rem;
    color: #8b5d2f;
    font-weight: 600;
  }

  h1 {
    margin-bottom: 0.75rem;
    font-size: clamp(2rem, 5vw, 3.8rem);
    line-height: 1.12;
    max-width: 18ch;
    color: #161616;
    text-wrap: balance;
  }

  .hero-description {
    font-size: 1rem;
    color: #454545;
    line-height: 1.7;
    max-width: 62ch;
    margin-bottom: 0.4rem;
  }

  .personal-note {
    margin: 0 0 1rem;
    font-size: 0.92rem;
    color: #555;
    max-width: 64ch;
  }

  .hero-actions {
    display: flex;
    gap: 0.7rem;
    flex-wrap: wrap;
  }

  .btn {
    border-radius: 7px;
    padding: 0.52rem 0.92rem;
    font-size: 0.85rem;
    font-weight: 600;
    border: none;
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
    background: #ffffff;
    color: #1d1d1d;
    border: 1px solid #e0e0e0;
  }

  .btn-ghost {
    background: #fff7ef;
    color: #5e3f20;
    border: 1px solid #f0d8be;
  }

  .btn-secondary:hover,
  .btn-ghost:hover {
    transform: translateY(-1px);
    filter: brightness(0.98);
  }

  .stats-section {
    padding: 0;
    margin: 0;
  }

  .stats-shell {
    padding: 0;
    background: transparent;
    border: none;
  }

  .stats-kicker {
    margin: 0 0 0.7rem;
    font-size: 0.73rem;
    font-weight: 700;
    letter-spacing: 0.09em;
    text-transform: uppercase;
    color: #8f5e2c;
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    border-top: 1px solid #ececec;
    border-bottom: 1px solid #ececec;
  }

  .stat-card {
    text-align: left;
    border: none;
    border-right: 1px solid #ececec;
    border-radius: 0;
    padding: 0.85rem 0.9rem;
    background: transparent;
  }

  .stat-card:last-child {
    border-right: none;
  }

  .stat-main {
    display: flex;
    align-items: baseline;
    gap: 0.35rem;
  }

  .stat-number {
    font-size: 2rem;
    font-weight: 600;
    color: var(--color-accent-red);
    line-height: 1;
  }

  .stat-label {
    margin: 0 0 0.35rem;
    font-size: 0.78rem;
    color: #5e5e5e;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-weight: 700;
  }

  .stat-unit {
    font-size: 0.8rem;
    color: #8a8a8a;
    font-weight: 600;
  }

  .stat-note {
    margin: 0.35rem 0 0;
    font-size: 0.82rem;
    color: #5f5f5f;
    line-height: 1.5;
  }

  .active-section,
  .service-section,
  .what-build-section,
  .team-section,
  .social-section {
    padding: 2rem 0;
  }

  .section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    min-height: 2rem;
  }

  .section-header h2 {
    font-size: 1.8rem;
    margin: 0;
  }

  .project-list {
    border: 1px solid rgba(0, 0, 0, 0.08);
    border-radius: 8px;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.88);
  }

  .project-row {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;
    padding: 1rem;
    border-bottom: 1px solid #ececec;
    transition: background-color 0.18s ease;
  }

  .project-row:last-child {
    border-bottom: none;
  }

  .project-row:hover {
    background: #fcfcfc;
  }

  .project-row h3 {
    margin: 0 0 0.5rem;
    font-size: 1.15rem;
  }

  .project-row p {
    margin: 0;
    color: #5d5d5d;
    font-size: 0.94rem;
    max-width: 70ch;
  }

  .row-right {
    display: flex;
    align-items: center;
    gap: 0.65rem;
    flex-wrap: wrap;
    justify-content: flex-end;
    min-width: 180px;
  }

  .row-right span {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    border-radius: 999px;
    padding: 0.2rem 0.55rem;
    background: #f2f2f2;
    color: #444;
    font-weight: 600;
  }

  .row-right a {
    font-size: 0.82rem;
    border-radius: 7px;
    border: 1px solid #d9d9d9;
    color: #333;
    padding: 0.3rem 0.6rem;
    font-weight: 600;
    background: #fff;
  }

  .service-section .section-header {
    justify-content: flex-start;
  }

  .service-section h2 {
    font-size: 1.8rem;
  }

  .service-list {
    border: none;
    border-radius: 8px;
    overflow: hidden;
    background: transparent;
  }

  .service-row {
    padding: 1rem;
    border-bottom: 1px solid #ececec;
    background: transparent;
  }

  .service-row:last-child {
    border-bottom: none;
  }

  .service-row h3 {
    margin-bottom: 0.5rem;
  }

  .service-row p {
    margin-bottom: 0.7rem;
    color: #5c5c5c;
  }

  .build-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1rem;
  }

  .build-item {
    padding: 0.2rem 0 1rem;
    border-bottom: 1px solid #ececec;
  }

  .build-item:last-child {
    border-bottom: none;
  }

  .build-item h3 {
    margin-bottom: 0.45rem;
    font-size: 1.08rem;
  }

  .build-item p {
    margin: 0;
    color: #5a5a5a;
    font-size: 0.94rem;
    line-height: 1.65;
  }

  .team-copy {
    max-width: 78ch;
  }

  .team-copy p {
    color: #575757;
    line-height: 1.72;
    margin-bottom: 0.8rem;
  }

  .team-link {
    display: inline-flex;
    margin-top: 0.2rem;
    font-weight: 600;
  }

  .social-section .section-header {
    justify-content: flex-start;
  }

  .social-card {
    border: none;
    border-radius: 8px;
    padding: 0;
    background: transparent;
  }

  .social-card h2 {
    font-size: 1.35rem;
  }

  .social-description {
    margin: 0 0 0.8rem;
    color: #5d5d5d;
    max-width: 65ch;
  }

  .social-links {
    display: flex;
    gap: 0.8rem;
    flex-wrap: wrap;
  }

  .hero,
  .stats-grid,
  .active-section,
  .service-section,
  .social-section {
    animation: riseIn 0.45s ease both;
  }

  .stats-grid {
    animation-delay: 0.05s;
  }

  .active-section {
    animation-delay: 0.09s;
  }

  .service-section {
    animation-delay: 0.12s;
  }

  .social-section {
    animation-delay: 0.14s;
  }

  @keyframes riseIn {
    from {
      opacity: 0;
      transform: translateY(6px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .hero,
    .stats-grid,
    .active-section,
    .service-section,
    .social-section,
    .btn,
    .project-row,
    .row-right a {
      animation: none;
      transition: none;
    }
  }

  @media (max-width: 768px) {
    .hero-wrap {
      padding-top: 2rem;
    }

    .stats-grid {
      grid-template-columns: 1fr;
      gap: 0;
    }

    .stats-shell {
      padding: 0;
    }

    .stat-card {
      border-right: none;
      border-bottom: 1px solid #ececec;
      padding: 0.85rem 0;
    }

    .stat-card:last-child {
      border-bottom: none;
    }

    .section-header {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;
    }

    .project-row {
      flex-direction: column;
    }

    .build-grid {
      grid-template-columns: 1fr;
    }

    .row-right {
      justify-content: flex-start;
      min-width: 0;
    }
  }
</style>
