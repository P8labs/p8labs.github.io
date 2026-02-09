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

    <section class="people-section">
      <h2>People Behind P8labs</h2>

      <div class="person">
        <div class="person-avatar">
          <img
            src="https://priyanshupz.github.io/priyanshu.png"
            alt="Priyanshu Verma"
          />
        </div>
        <div class="person-info">
          <h3>Priyanshu Verma</h3>
          <p class="person-role">Founder</p>
          <p class="person-bio">
            Founder of P8labs, focused on building intelligent software,
            developer tools, and experimental systems while leading the lab's
            vision and engineering direction.
          </p>
          <a
            href="https://priyanshupz.github.io"
            target="_blank"
            rel="noopener noreferrer">Website →</a
          >
        </div>
      </div>

      <div class="person">
        <div class="person-avatar">
          <img src="/som.png" alt="Somveer Singh Verma" />
        </div>
        <div class="person-info">
          <h3>Somveer Singh Verma</h3>
          <p class="person-role">Strategic Advisor</p>
          <p class="person-bio">
            Provides strategic guidance and practical business perspective to
            P8labs, supporting long-term thinking and validating key decisions.
          </p>
          <a
            href="https://www.linkedin.com/in/somveer-singh-verma-66344843/"
            target="_blank"
            rel="noopener noreferrer">LinkedIn →</a
          >
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

    <p class="closing-paragraph">
      P8labs operates with a focus on thoughtful engineering, responsible
      experimentation, and long-term independence. We build deliberately,
      explore ideas with care, and share what we learn along the way.
    </p>

    <p class="closing-paragraph">
      If this resonates with you and you'd like to be part of the journey, reach
      out at
      <a href="mailto:contact@p8labs.tech">contact@p8labs.tech</a>.
    </p>
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

  .people-section {
    max-width: 800px;
  }

  .people-section h2 {
    margin-bottom: 60px;
  }

  .person {
    display: flex;
    gap: 2rem;
    margin-bottom: 4rem;
  }

  .person:last-child {
    margin-bottom: 0;
  }

  .person-avatar {
    flex-shrink: 0;
  }

  .person-avatar img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
  }

  .person-info h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #1a1a1a;
    margin-bottom: 0.5rem;
  }

  .person-role {
    font-size: 0.9375rem;
    font-weight: 400;
    color: #999;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 1rem;
  }

  .person-bio {
    font-size: 1rem;
    font-weight: 300;
    color: #666;
    line-height: 1.7;
    margin-bottom: 1.5rem;
  }

  .person-info a {
    font-size: 0.9375rem;
    font-weight: 400;
    color: #1a1a1a;
    text-decoration: none;
    border-bottom: 1px solid #1a1a1a;
  }

  .person-info a:hover {
    opacity: 0.6;
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

  .closing-paragraph {
    font-size: 1rem;
    font-weight: 300;
    color: #666;
    line-height: 1.7;
    max-width: 800px;
    margin-top: 4rem;
    margin-bottom: 1.5rem;
  }

  .closing-paragraph:last-of-type {
    margin-bottom: 0;
  }

  .closing-paragraph a {
    color: #1a1a1a;
    text-decoration: none;
    border-bottom: 1px solid #1a1a1a;
  }

  .closing-paragraph a:hover {
    opacity: 0.6;
  }

  @media (max-width: 768px) {
    .page-header h1 {
      font-size: 2rem;
    }

    section h2 {
      font-size: 1.5rem;
    }

    .person {
      flex-direction: column;
      align-items: flex-start;
      gap: 1.5rem;
      margin-bottom: 3rem;
    }

    .person-avatar img {
      width: 100px;
      height: 100px;
    }

    .contributors-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
