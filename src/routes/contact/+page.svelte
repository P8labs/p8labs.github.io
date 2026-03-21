<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";
  import {
    IconBriefcase2,
    IconHelpCircle,
    IconBrandLinkedin,
    IconMail,
    IconMessageCircle,
    IconShare3,
    IconUsersGroup,
    IconBrandX,
    IconRocket,
  } from "@tabler/icons-svelte";

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact P8labs",
    url: "https://p8labs.in/contact",
    mainEntity: {
      "@type": "Organization",
      name: "P8labs",
      url: "https://p8labs.in",
      contactPoint: [
        {
          "@type": "ContactPoint",
          email: "build@p8labs.in",
          contactType: "sales",
          availableLanguage: ["en"],
        },
        {
          "@type": "ContactPoint",
          email: "hello@p8labs.in",
          contactType: "customer support",
          availableLanguage: ["en"],
        },
      ],
      sameAs: [
        "https://www.linkedin.com/company/p8labs",
        "https://x.com/P8labs",
        "https://peerlist.io/company/p8labs",
      ],
    },
  };
</script>

<Seo
  title="Contact"
  description="Reach P8labs for product questions, software consulting, and collaboration opportunities."
  image="/og/home.svg"
  schema={contactSchema}
/>

<div class="page">
  <div class="container">
    <header class="page-header">
      <p class="eyebrow">Contact P8labs</p>
      <h1>Let us build with you.</h1>
      <p class="subtitle">
        Reach out for product support, custom software delivery, or developer
        collaboration.
      </p>
    </header>

    <section class="line-section">
      <div class="line-head">
        <IconBriefcase2 size={18} />
        <h2>Business Software</h2>
      </div>
      <p>Looking for a custom software solution for your team or company?</p>
      <a href="mailto:build@p8labs.in">build@p8labs.in</a>
    </section>

    <section class="line-section">
      <div class="line-head">
        <IconUsersGroup size={18} />
        <h2>General Queries</h2>
      </div>
      <p>
        Product feedback, partnership discussions, and all general
        communication.
      </p>
      <a href="mailto:hello@p8labs.in">hello@p8labs.in</a>
    </section>

    <section class="line-section">
      <div class="line-head">
        <IconShare3 size={18} />
        <h2>Social</h2>
      </div>
      <p>Follow updates and launch posts from P8labs.</p>
      <div class="social-links">
        <a
          href="https://www.linkedin.com/company/p8labs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandLinkedin size={15} /> LinkedIn
        </a>
        <a
          href="https://x.com/P8labs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandX size={15} /> X
        </a>
        <a
          href="https://peerlist.io/company/p8labs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconRocket size={15} /> Peerlist
        </a>
      </div>
    </section>

    <section class="line-section">
      <div class="line-head">
        <IconMessageCircle size={18} />
        <h2>How To Start Your Email</h2>
      </div>
      <ul class="tips-list">
        <li>Start with one sentence about what you are trying to build.</li>
        <li>Share the problem, not every detail.</li>
        <li>Add timeline only if you have one.</li>
        <li>Mention current progress: idea, prototype, or live.</li>
        <li>End with one clear ask: feedback, call, or collaboration.</li>
      </ul>
      <a
        class="cta-mail"
        href="mailto:build@p8labs.in?subject=First%20step%20with%20P8labs"
      >
        <IconMail size={15} /> Start by email now
      </a>
    </section>

    <section class="line-section faq">
      <div class="line-head">
        <IconHelpCircle size={18} />
        <h2>FAQs</h2>
      </div>
      <details>
        <summary>Do I need budget details in the first email?</summary>
        <p>
          No. First email is about the problem and intent. We can discuss scope
          and budget later.
        </p>
      </details>
      <details>
        <summary>How much detail should I share?</summary>
        <p>
          One clear paragraph is enough to start. Include problem, expected
          outcome, and timeline if available.
        </p>
      </details>
      <details>
        <summary>Can I pitch even if my idea is early stage?</summary>
        <p>
          Yes. Early-stage concepts are welcome. A rough outline is enough for
          first contact.
        </p>
      </details>
    </section>
  </div>
</div>

<style>
  .page {
    padding: 3.2rem 0 5rem;
  }

  .page-header {
    margin-bottom: 2rem;
  }

  .eyebrow {
    margin: 0 0 0.5rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-size: 0.76rem;
    color: #8b5d2f;
    font-weight: 600;
  }

  h1 {
    font-size: clamp(2rem, 5vw, 3.2rem);
    margin-bottom: 0.7rem;
  }

  .subtitle {
    margin: 0;
    color: #5e5e5e;
    max-width: 65ch;
  }

  .line-section {
    padding: 1rem 0 1.2rem;
    border-top: 1px solid #ebebeb;
  }

  .line-section:last-child {
    border-bottom: 1px solid #ebebeb;
  }

  .line-head {
    display: flex;
    align-items: center;
    gap: 0.45rem;
    margin-bottom: 0.55rem;
    color: #2f2f2f;
  }

  .line-head h2 {
    margin-bottom: 0;
    font-size: 1.08rem;
    font-weight: 600;
  }

  .line-section p {
    margin-bottom: 0.6rem;
    color: #5f5f5f;
    max-width: 72ch;
  }

  .tips-list {
    margin: 0;
    padding-left: 1.1rem;
    max-width: 76ch;
  }

  .tips-list li {
    margin-bottom: 0.45rem;
    color: #555;
  }

  .social-links {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
  }

  .social-links a {
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
    padding: 0.2rem 0;
    font-size: 0.88rem;
    color: #4b4b4b;
  }

  .social-links a:hover {
    color: #202020;
  }

  .faq details {
    border-top: 1px solid #ececec;
    padding: 0.7rem 0;
  }

  .faq details:first-of-type {
    border-top: 1px solid #ececec;
  }

  .faq summary {
    cursor: pointer;
    font-weight: 600;
    color: #2f2f2f;
  }

  .faq p {
    margin: 0.45rem 0 0;
    color: #5a5a5a;
  }

  .cta-mail {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    margin-top: 0.5rem;
    color: #5b3919;
    padding: 0.2rem 0;
    font-weight: 600;
    font-size: 0.85rem;
  }

  @media (max-width: 900px) {
    .page {
      padding-top: 2.4rem;
    }
  }
</style>
