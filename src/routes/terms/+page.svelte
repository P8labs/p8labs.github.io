<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";
</script>

<Seo
  title="Terms of Service"
  description="Terms of Service for P8labs products and services."
  image="/og/home.svg"
/>

<div class="page legal-page">
  <div class="container">
    <div class="page-header">
      <h1>Terms of Service</h1>
      <p class="last-updated">Last updated: February 3, 2026</p>
    </div>

    <section class="legal-section">
      <h2>1. Definitions</h2>
      <p>
        "P8labs," "we," "us," or "our" refers to P8labs, an independent
        technology lab. "Services" refers to all software, tools, websites, and
        products provided by P8labs. "User," "you," or "your" refers to any
        individual or entity accessing or using our Services.
      </p>
    </section>

    <section class="legal-section">
      <h2>2. Acceptance of Terms</h2>
      <p>
        By accessing or using any P8labs Services, you agree to be bound by
        these Terms of Service. If you do not agree to these terms, you may not
        use our Services.
      </p>
    </section>

    <section class="legal-section">
      <h2>3. User Obligations</h2>
      <p>You agree to:</p>
      <ul>
        <li>
          Use our Services in compliance with all applicable laws and
          regulations.
        </li>
        <li>
          Not use our Services for any unlawful, harmful, or malicious purposes.
        </li>
        <li>
          Not attempt to reverse engineer, decompile, or disassemble proprietary
          software.
        </li>
        <li>
          Not redistribute, resell, or sublicense any proprietary components
          without permission.
        </li>
        <li>Respect intellectual property rights as outlined below.</li>
      </ul>
    </section>

    <section class="legal-section">
      <h2>4. Intellectual Property</h2>
      <p>
        P8labs retains all rights, title, and interest in proprietary software,
        tools, and content. Open-source projects are licensed under their
        respective licenses (e.g., MIT, Apache 2.0, GPL). Usage of open-source
        projects is governed by their individual license terms.
      </p>
      <p>
        Any proprietary software, private repositories, or unlicensed materials
        remain the exclusive property of P8labs and may not be used, copied,
        modified, or distributed without explicit written permission.
      </p>
    </section>

    <section class="legal-section">
      <h2>5. Disclaimer of Warranties</h2>
      <p>
        P8labs Services are provided "as is" and "as available" without
        warranties of any kind, either express or implied, including but not
        limited to warranties of merchantability, fitness for a particular
        purpose, or non-infringement.
      </p>
      <p>
        Some projects are experimental, in prototype stages, or archived. We
        make no guarantees regarding reliability, accuracy, availability, or
        suitability for any particular use case.
      </p>
    </section>

    <section class="legal-section">
      <h2>6. Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by law, P8labs shall not be liable for
        any indirect, incidental, special, consequential, or punitive damages,
        or any loss of profits, revenue, data, or use, arising from or related
        to your use of our Services.
      </p>
      <p>
        In no event shall P8labs' total liability exceed the amount paid by you
        (if any) for accessing or using the Services.
      </p>
    </section>

    <section class="legal-section">
      <h2>7. Governing Law</h2>
      <p>
        These Terms of Service shall be governed by and construed in accordance
        with the laws of the jurisdiction in which P8labs operates, without
        regard to its conflict of law provisions.
      </p>
    </section>

    <section class="legal-section">
      <h2>8. Changes to Terms</h2>
      <p>
        P8labs reserves the right to modify these Terms of Service at any time.
        Changes will be effective immediately upon posting. Your continued use
        of our Services constitutes acceptance of the updated terms.
      </p>
    </section>

    <section class="legal-section">
      <h2>9. Contact Information</h2>
      <p>
        For questions or concerns regarding these Terms of Service, or to report
        claims of intellectual property infringement, please contact us at:
      </p>
      <p>
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
