<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";
</script>

<Seo
  title="DMCA"
  description="DMCA takedown notice information for P8labs."
  image="/og/home.svg"
/>

<div class="page legal-page">
  <div class="container">
    <div class="page-header">
      <h1>DMCA Policy</h1>
      <p class="last-updated">Last updated: February 3, 2026</p>
    </div>

    <section class="legal-section">
      <h2>Digital Millennium Copyright Act (DMCA) Notice</h2>
      <p>
        P8labs respects the intellectual property rights of others and expects
        users to do the same. In accordance with the Digital Millennium
        Copyright Act of 1998 (DMCA), we will respond promptly to valid notices
        of alleged copyright infringement.
      </p>
    </section>

    <section class="legal-section">
      <h2>Filing a DMCA Takedown Notice</h2>
      <p>
        If you believe that content hosted or distributed by P8labs infringes
        your copyright, you may submit a DMCA takedown notice. To be valid, your
        notice must include:
      </p>
      <ul>
        <li>
          A physical or electronic signature of the copyright owner or
          authorized agent.
        </li>
        <li>
          Identification of the copyrighted work claimed to have been infringed.
        </li>
        <li>
          Identification of the material that is claimed to be infringing, with
          sufficient detail to locate it.
        </li>
        <li>
          Your contact information, including name, address, telephone number,
          and email address.
        </li>
        <li>
          A statement that you have a good faith belief that the use of the
          material is not authorized by the copyright owner, its agent, or the
          law.
        </li>
        <li>
          A statement that the information in the notice is accurate, and under
          penalty of perjury, that you are authorized to act on behalf of the
          copyright owner.
        </li>
      </ul>
    </section>

    <section class="legal-section">
      <h2>How to Submit a Notice</h2>
      <p>Please send DMCA takedown notices to:</p>
      <p class="contact-info">
        <strong>Email:</strong>
        <a href="mailto:hello@p8labs.tech">hello@p8labs.tech</a><br />
        <strong>Subject Line:</strong> DMCA Takedown Notice
      </p>
      <p>
        We will review all valid notices and take appropriate action, which may
        include removing or disabling access to the allegedly infringing
        material.
      </p>
    </section>

    <section class="legal-section">
      <h2>Counter-Notification</h2>
      <p>
        If you believe that material you posted was removed or disabled by
        mistake or misidentification, you may file a counter-notification. Your
        counter-notification must include:
      </p>
      <ul>
        <li>Your physical or electronic signature.</li>
        <li>
          Identification of the material that was removed and its location
          before removal.
        </li>
        <li>
          A statement under penalty of perjury that you have a good faith belief
          the material was removed or disabled as a result of mistake or
          misidentification.
        </li>
        <li>
          Your name, address, telephone number, and a statement that you consent
          to jurisdiction in your district.
        </li>
      </ul>
      <p>
        Counter-notifications should be sent to the same email address as
        takedown notices.
      </p>
    </section>

    <section class="legal-section">
      <h2>Repeat Infringers</h2>
      <p>
        P8labs may, in appropriate circumstances, terminate access for users who
        are repeat infringers of intellectual property rights.
      </p>
    </section>

    <section class="legal-section">
      <h2>Disclaimer</h2>
      <p>
        This DMCA policy does not constitute legal advice. For specific legal
        questions regarding copyright infringement, please consult with an
        attorney.
      </p>
    </section>

    <section class="legal-section">
      <h2>Contact Information</h2>
      <p>For all DMCA-related inquiries, please contact:</p>
      <p class="contact-info">
        <strong>P8labs</strong><br />
        <strong>Email:</strong>
        <a href="mailto:hello@p8labs.tech">hello@p8labs.tech</a>
      </p>
    </section>
  </div>
</div>

<style>
  .legal-page {
    padding: 4rem 0;
  }

  .page-header {
    margin-bottom: 3rem;
  }

  .page-header h1 {
    font-size: 3rem;
    font-weight: 600;
    color: #1a1a1a;
    margin-bottom: 0.5rem;
  }

  .last-updated {
    font-size: 0.9375rem;
    font-weight: 300;
    color: #999;
  }

  .legal-section {
    margin-bottom: 3rem;
    max-width: 800px;
  }

  .legal-section h2 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #1a1a1a;
    margin-bottom: 1rem;
  }

  .legal-section p {
    font-size: 1rem;
    font-weight: 300;
    color: #666;
    line-height: 1.8;
    margin-bottom: 1rem;
  }

  .legal-section ul {
    margin: 1rem 0;
    padding-left: 1.5rem;
  }

  .legal-section li {
    font-size: 1rem;
    font-weight: 300;
    color: #666;
    line-height: 1.8;
    margin-bottom: 0.5rem;
  }

  .contact-info {
    padding: 1.5rem;
    background: #fafafa;
    border-left: 3px solid var(--color-accent-red);
    border-radius: 4px;
  }

  .legal-section a {
    color: var(--color-accent-red);
    text-decoration: none;
  }

  .legal-section a:hover {
    color: var(--color-accent-orange);
  }

  @media (max-width: 768px) {
    .page-header h1 {
      font-size: 2rem;
    }

    .legal-section h2 {
      font-size: 1.25rem;
    }
  }
</style>
