<script lang="ts">
  import "./layout.css";
  import { page } from "$app/state";
  import Logo from "$lib/components/Logo.svelte";

  let { children } = $props();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/build", label: "Build" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/terms", label: "Terms" },
    { href: "/dmca", label: "DMCA" },
  ];

  const currentPath = $derived(page.url.pathname);
</script>

<header class="header">
  <div class="container">
    <nav class="nav">
      <div class="brand">
        <a href="/">
          <Logo />
        </a>
      </div>
      <ul class="nav-links">
        {#each navLinks as link}
          <li>
            <a
              href={link.href}
              class:active={currentPath === link.href &&
                !link.href.startsWith("mailto")}
            >
              {link.label}
            </a>
          </li>
        {/each}
      </ul>
    </nav>
  </div>
</header>

<main class="main">
  {@render children()}
</main>

<footer class="footer">
  <div class="container">
    <div class="footer-content">
      <div class="footer-left">
        <p class="disclaimer">
          P8labs is an independent technology lab. Some projects are
          experimental and provided as-is without warranty.
        </p>
        <p class="domain-note">p8labs.tech is now p8labs.in</p>
      </div>

      <div class="footer-right">
        <div class="social-links">
          <a
            href="https://www.linkedin.com/company/p8labs"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://x.com/P8labs"
            target="_blank"
            rel="noopener noreferrer">X</a
          >
          <a
            href="https://peerlist.io/company/p8labs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Peerlist
          </a>
        </div>
        <div class="footer-links">
          <span>© {new Date().getFullYear()} P8labs</span>
          <a href="/contact">Contact</a>
          <a href="/terms">Terms</a>
          <a href="/dmca">DMCA</a>
        </div>
      </div>
    </div>
  </div>
</footer>

<style>
  .header {
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    padding: 0.9rem 0;
    background: rgba(255, 255, 255, 0.68);
    backdrop-filter: saturate(180%) blur(14px);
    -webkit-backdrop-filter: saturate(180%) blur(14px);
    position: sticky;
    top: 0;
    z-index: 100;
  }

  .footer-links a,
  .social-links a {
    border-radius: 4px;
  }

  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
  }

  .brand a {
    font-size: 1.5rem;
    font-weight: 600;
    color: #1a1a1a;
    text-decoration: none;
  }

  .brand a:hover {
    color: var(--color-accent-red);
  }

  .nav-links {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 2rem;
    align-items: center;
  }

  .nav-links a {
    font-size: 0.9375rem;
    font-weight: 400;
    color: #666;
    text-decoration: none;
    transition: color 0.2s ease;
    padding: 0.28rem 0.55rem;
    border-radius: 999px;
  }

  .nav-links a:hover {
    color: var(--color-accent-red);
  }

  .nav-links a.active {
    color: #522810;
    font-weight: 500;
    text-decoration: underline;
    text-underline-offset: 0.24rem;
    text-decoration-thickness: 2px;
  }

  .main {
    min-height: calc(100vh - 180px);
  }

  .footer {
    border-top: 1px solid rgba(0, 0, 0, 0.08);
    padding: 3rem 0;
    margin-top: 6rem;
    background: rgba(255, 255, 255, 0.72);
    backdrop-filter: blur(10px);
  }

  .footer-content {
    display: grid;
    grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr);
    gap: 1.5rem;
    align-items: start;
  }

  .footer-left {
    display: grid;
    gap: 0.6rem;
  }

  .footer-right {
    display: grid;
    gap: 0.8rem;
    justify-items: end;
  }

  .disclaimer {
    font-size: 0.875rem;
    font-weight: 400;
    color: #666;
    margin: 0;
    text-align: left;
  }

  .domain-note {
    margin: 0;
    font-size: 0.9rem;
    color: #333;
    font-weight: 400;
    text-align: left;
  }

  .social-links {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: flex-end;
  }

  .social-links a {
    font-size: 0.9rem;
    color: #555;
    text-decoration: none;
  }

  .social-links a:hover {
    color: var(--color-accent-red);
  }

  .footer-links {
    display: flex;
    gap: 1.5rem;
    font-size: 0.875rem;
    color: #777;
    flex-wrap: wrap;
    justify-content: flex-end;
  }

  .footer-links a {
    color: #666;
    text-decoration: none;
  }

  .footer-links a:hover {
    color: var(--color-accent-red);
  }

  @media (max-width: 768px) {
    .nav {
      flex-direction: column;
      gap: 1rem;
    }

    .nav-links {
      gap: 1rem;
      flex-wrap: wrap;
      justify-content: center;
    }

    .nav-links a {
      font-size: 0.875rem;
    }

    .footer-links {
      flex-direction: column;
      gap: 0.5rem;
      justify-content: flex-start;
    }

    .social-links {
      gap: 0.75rem;
      justify-content: flex-start;
    }

    .footer-content {
      grid-template-columns: 1fr;
    }

    .footer-right {
      justify-items: start;
    }
  }
</style>
