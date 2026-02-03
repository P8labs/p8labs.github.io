<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";
  import { contributors } from "$lib/data/content";
</script>

<Seo
  title="About"
  description="Learn about P8labs, an independent technology lab building experimental software and tools."
/>

<div class="page">
  <div class="container">
    <div class="page-header">
      <h1>About P8labs</h1>
    </div>

    <section class="about-section">
      <h2>What We Do</h2>
      <p>
        P8labs is an independent technology lab that builds tools, systems, and
        experimental software. Some projects are open-source; some are private
        intellectual property. Our work spans developer tools, infrastructure
        systems, AI/ML applications, and experimental frameworks.
      </p>
      <p>
        We believe in building thoughtfully, experimenting boldly, and sharing
        knowledge where we can. Not every project will be perfect—some are
        prototypes, some are actively maintained, and some are archived as
        learning experiences.
      </p>
    </section>

    <section class="founder-section">
      <h2>Founder</h2>
      <div class="founder-card">
        <div class="founder-avatar">
          <img
            src="https://priyanshupz.github.io/priyanshu.png"
            alt="Priyanshu Verma"
          />
        </div>
        <div class="founder-info">
          <h3>Priyanshu Verma</h3>
          <p class="founder-title">Founder & Engineer</p>
          <p class="founder-bio">
            Priyanshu is a software engineer passionate about building developer
            tools, systems software, and experimental projects. With experience
            across web development, infrastructure, and AI, he founded P8labs to
            explore ideas at the intersection of technology and craft.
          </p>
          <div class="founder-links">
            <a
              href="https://priyanshupz.github.io"
              target="_blank"
              rel="noopener noreferrer">Portfolio</a
            >
            <a
              href="https://github.com/priyanshupz"
              target="_blank"
              rel="noopener noreferrer">GitHub</a
            >
          </div>
        </div>
      </div>
    </section>

    {#if contributors.length > 0}
      <section class="contributors-section">
        <h2>Contributors</h2>
        <p class="section-description">
          P8labs collaborates with talented individuals across various projects.
        </p>
        <div class="contributors-grid">
          {#each contributors as contributor}
            <div class="contributor-card">
              <h4>{contributor.name}</h4>
              <p class="contributor-role">{contributor.role}</p>
              <a
                href={contributor.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Profile →
              </a>
            </div>
          {/each}
        </div>
      </section>
    {/if}
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
  }

  section {
    margin-bottom: 5rem;
  }

  section h2 {
    font-size: 1.75rem;
    font-weight: 600;
    color: #1a1a1a;
    margin-bottom: 1.5rem;
  }

  .about-section p {
    font-size: 1.125rem;
    font-weight: 300;
    color: #666;
    line-height: 1.8;
    max-width: 800px;
    margin-bottom: 1.5rem;
  }

  .founder-card {
    display: flex;
    gap: 2rem;
    max-width: 800px;
    padding: 2rem;
    border: 1px solid #e5e5e5;
    border-radius: 8px;
    background: #fafafa;
  }

  .founder-avatar {
    flex-shrink: 0;
  }

  .founder-avatar img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid #ffffff;
  }

  .founder-info h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #1a1a1a;
    margin-bottom: 0.25rem;
  }

  .founder-title {
    font-size: 1rem;
    font-weight: 400;
    color: #999;
    margin-bottom: 1rem;
  }

  .founder-bio {
    font-size: 1rem;
    font-weight: 300;
    color: #666;
    line-height: 1.7;
    margin-bottom: 1.5rem;
  }

  .founder-links {
    display: flex;
    gap: 1.5rem;
  }

  .founder-links a {
    font-size: 0.9375rem;
    font-weight: 500;
    color: var(--color-accent-red);
  }

  .section-description {
    font-size: 1.125rem;
    font-weight: 300;
    color: #666;
    margin-bottom: 2rem;
  }

  .contributors-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.5rem;
    max-width: 900px;
  }

  .contributor-card {
    padding: 1.5rem;
    border: 1px solid #e5e5e5;
    border-radius: 8px;
    background: #ffffff;
    transition: border-color 0.2s ease;
  }

  .contributor-card:hover {
    border-color: var(--color-accent-red);
  }

  .contributor-card h4 {
    font-size: 1.125rem;
    font-weight: 600;
    color: #1a1a1a;
    margin-bottom: 0.25rem;
  }

  .contributor-role {
    font-size: 0.875rem;
    font-weight: 400;
    color: #999;
    margin-bottom: 1rem;
  }

  .contributor-card a {
    font-size: 0.9375rem;
    font-weight: 500;
    color: var(--color-accent-red);
  }

  @media (max-width: 768px) {
    .page-header h1 {
      font-size: 2rem;
    }

    section h2 {
      font-size: 1.5rem;
    }

    .founder-card {
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 1.5rem;
    }

    .founder-avatar img {
      width: 100px;
      height: 100px;
    }

    .founder-links {
      justify-content: center;
    }

    .contributors-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
