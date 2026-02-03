<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";
  import { products } from "$lib/data/content";

  const activeProjects = products.filter((p) => p.status === "active").length;
  const totalProjects = products.length;

  const featuredProjects = products
    .filter((p) => p.status === "active")
    .slice(0, 3);

  const capabilities = [
    {
      title: "Open Source",
      description:
        "Building tools and systems available to the community under permissive licenses.",
    },
    {
      title: "Experimental",
      description:
        "Exploring cutting-edge technologies and innovative approaches to common problems.",
    },
    {
      title: "Production Ready",
      description:
        "Creating reliable, scalable solutions for real-world applications.",
    },
  ];
</script>

<Seo
  title="P8labs"
  description="P8labs is an independent technology lab building software, developer tools, and experimental projects."
  image="/og/banner.png"
/>

<div class="hero">
  <div class="background-effect">
    <div class="gradient-orb orb-1"></div>
    <div class="gradient-orb orb-2"></div>
    <div class="gradient-orb orb-3"></div>
  </div>

  <div class="container">
    <div class="hero-content">
      <h1 class="hero-title">P8labs</h1>
      <p class="hero-subtitle">Independent technology lab.</p>
      <p class="hero-description">
        Building software, developer tools, and experimental systems. Some
        projects are open-source; some are private intellectual property.
      </p>
      <div class="hero-cta">
        <a href="/products" class="cta-link">Explore Products →</a>
      </div>
    </div>
  </div>
</div>

<section class="stats-section">
  <div class="container">
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-number">{activeProjects}</div>
        <div class="stat-label">Active Projects</div>
      </div>
      <div class="stat-card">
        <div class="stat-number">{totalProjects}</div>
        <div class="stat-label">Total Projects</div>
      </div>
      <div class="stat-card">
        <div class="stat-number">Open</div>
        <div class="stat-label">Source Focus</div>
      </div>
    </div>
  </div>
</section>

<section class="capabilities-section">
  <div class="container">
    <h2 class="section-title">What We Build</h2>
    <div class="capabilities-grid">
      {#each capabilities as capability}
        <div class="capability-card">
          <h3>{capability.title}</h3>
          <p>{capability.description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<section class="featured-section">
  <div class="container">
    <div class="section-header">
      <h2 class="section-title">Featured Projects</h2>
      <a href="/products" class="view-all-link">View All →</a>
    </div>
    <div class="featured-grid">
      {#each featuredProjects as project}
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          class="project-card"
        >
          <div class="project-header">
            <h3>{project.name}</h3>
            <span class="project-category">{project.category}</span>
          </div>
          {#if project.description}
            <p class="project-description">{project.description}</p>
          {/if}
          <span class="project-link-text">View Project →</span>
        </a>
      {/each}
    </div>
  </div>
</section>

<section class="team-section">
  <div class="container">
    <div class="team-content">
      <h2 class="section-title">About the Team</h2>
      <p class="team-description">
        P8labs was founded by <a
          href="https://priyanshupz.github.io"
          target="_blank"
          rel="noopener noreferrer">Priyanshu Verma</a
        >, a software engineer passionate about building developer tools,
        systems software, and experimental projects. With experience across web
        development, infrastructure, and AI, P8labs explores ideas at the
        intersection of technology and craft.
      </p>
      <p class="team-description">
        We collaborate with talented contributors and the open-source community
        to bring these projects to life. Every project is an opportunity to
        learn, experiment, and push boundaries.
      </p>
      <div class="team-cta">
        <a href="/about" class="secondary-link">Learn More About Us →</a>
      </div>
    </div>
  </div>
</section>

<style>
  .hero {
    padding: 8rem 0 10rem;
    background: #ffffff;
    position: relative;
    overflow: hidden;
  }

  .background-effect {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    pointer-events: none;
  }

  .gradient-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    opacity: 0.15;
    animation: float 20s ease-in-out infinite;
  }

  .orb-1 {
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, #e53935 0%, transparent 70%);
    top: -250px;
    left: -100px;
    animation-delay: 0s;
  }

  .orb-2 {
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, #ff6a00 0%, transparent 70%);
    top: 200px;
    right: -150px;
    animation-delay: -7s;
  }

  .orb-3 {
    width: 350px;
    height: 350px;
    background: radial-gradient(circle, #e53935 0%, transparent 70%);
    bottom: -100px;
    left: 50%;
    transform: translateX(-50%);
    animation-delay: -14s;
  }

  @keyframes float {
    0%,
    100% {
      transform: translate(0, 0) scale(1);
    }
    33% {
      transform: translate(30px, -30px) scale(1.1);
    }
    66% {
      transform: translate(-20px, 20px) scale(0.9);
    }
  }

  .hero-content {
    max-width: 700px;
    margin: 0 auto;
    text-align: center;
    position: relative;
    z-index: 1;
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
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(229, 57, 53, 0.2);
  }

  /* Stats Section */
  .stats-section {
    padding: 4rem 0;
    background: #fafafa;
    border-top: 1px solid #e5e5e5;
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    max-width: 900px;
    margin: 0 auto;
  }

  .stat-card {
    text-align: center;
  }

  .stat-number {
    font-size: 3rem;
    font-weight: 600;
    color: var(--color-accent-red);
    margin-bottom: 0.5rem;
    letter-spacing: -0.02em;
  }

  .stat-label {
    font-size: 0.9375rem;
    font-weight: 400;
    color: #666;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  /* Capabilities Section */
  .capabilities-section {
    padding: 6rem 0;
    background: #ffffff;
  }

  .section-title {
    font-size: 2.5rem;
    font-weight: 600;
    color: #1a1a1a;
    text-align: center;
    margin-bottom: 4rem;
    letter-spacing: -0.02em;
  }

  .capabilities-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;
    max-width: 1000px;
    margin: 0 auto;
  }

  .capability-card {
    padding: 2rem;
    background: #fafafa;
    border: 1px solid #e5e5e5;
    border-radius: 8px;
    transition: all 0.3s ease;
  }

  .capability-card:hover {
    border-color: var(--color-accent-red);
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  }

  .capability-card h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: #1a1a1a;
    margin-bottom: 0.75rem;
  }

  .capability-card p {
    font-size: 0.9375rem;
    font-weight: 300;
    color: #666;
    line-height: 1.7;
    margin: 0;
  }

  /* Featured Section */
  .featured-section {
    padding: 6rem 0;
    background: #fafafa;
    border-top: 1px solid #e5e5e5;
  }

  .section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3rem;
  }

  .view-all-link {
    font-size: 1rem;
    font-weight: 500;
    color: var(--color-accent-red);
    text-decoration: none;
    transition: color 0.2s ease;
  }

  .view-all-link:hover {
    color: var(--color-accent-orange);
  }

  .featured-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }

  .project-card {
    padding: 2rem;
    background: #ffffff;
    border: 1px solid #e5e5e5;
    border-radius: 8px;
    text-decoration: none;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
  }

  .project-card:hover {
    border-color: var(--color-accent-red);
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  }

  .project-header {
    display: flex;
    justify-content: space-between;
    align-items: start;
    margin-bottom: 1rem;
    gap: 1rem;
  }

  .project-card h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: #1a1a1a;
    margin: 0;
  }

  .project-category {
    font-size: 0.75rem;
    font-weight: 600;
    color: #999;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    white-space: nowrap;
  }

  .project-description {
    font-size: 0.9375rem;
    font-weight: 300;
    color: #666;
    line-height: 1.7;
    margin-bottom: 1.5rem;
    flex-grow: 1;
  }

  .project-link-text {
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--color-accent-red);
    transition: color 0.2s ease;
  }

  .project-card:hover .project-link-text {
    color: var(--color-accent-orange);
  }

  /* Team Section */
  .team-section {
    padding: 6rem 0;
    background: #ffffff;
  }

  .team-content {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
  }

  .team-description {
    font-size: 1.125rem;
    font-weight: 300;
    color: #666;
    line-height: 1.8;
    margin-bottom: 1.5rem;
  }

  .team-description a {
    color: var(--color-accent-red);
    text-decoration: none;
    font-weight: 500;
    transition: color 0.2s ease;
  }

  .team-description a:hover {
    color: var(--color-accent-orange);
  }

  .team-cta {
    margin-top: 2.5rem;
  }

  .secondary-link {
    font-size: 1rem;
    font-weight: 500;
    color: var(--color-accent-red);
    text-decoration: none;
    transition: color 0.2s ease;
  }

  .secondary-link:hover {
    color: var(--color-accent-orange);
  }

  @media (max-width: 1024px) {
    .capabilities-grid,
    .featured-grid {
      grid-template-columns: repeat(2, 1fr);
    }
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

    .stats-grid {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .section-title {
      font-size: 2rem;
    }

    .capabilities-grid,
    .featured-grid {
      grid-template-columns: 1fr;
    }

    .section-header {
      flex-direction: column;
      align-items: start;
      gap: 1rem;
    }

    .gradient-orb {
      filter: blur(60px);
    }

    .orb-1 {
      width: 300px;
      height: 300px;
    }

    .orb-2 {
      width: 250px;
      height: 250px;
    }

    .orb-3 {
      width: 200px;
      height: 200px;
    }
  }
</style>
