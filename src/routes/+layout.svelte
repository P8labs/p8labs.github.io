<script lang="ts">
  import "./layout.css";
  import { page } from "$app/state";
  import Logo from "$lib/components/Logo.svelte";

  let { children } = $props();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/about", label: "About" },
    { href: "/terms", label: "Terms" },
    { href: "/dmca", label: "DMCA" },
    { href: "mailto:hello@p8labs.tech", label: "Contact" },
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
      <p class="disclaimer">
        P8labs is an independent technology lab. Some projects are experimental
        and provided as-is without warranty.
      </p>
      <div class="footer-links">
        <span>© {new Date().getFullYear()} P8labs</span>
        <a href="/terms">Terms</a>
        <a href="/dmca">DMCA</a>
      </div>
    </div>
  </div>
</footer>

<style>
  .header {
    border-bottom: 1px solid #e5e5e5;
    padding: 1.5rem 0;
    background: #ffffff;
    position: sticky;
    top: 0;
    z-index: 100;
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
  }

  .nav-links a:hover {
    color: var(--color-accent-red);
  }

  .nav-links a.active {
    color: var(--color-accent-red);
    font-weight: 500;
  }

  .main {
    min-height: calc(100vh - 180px);
  }

  .footer {
    border-top: 1px solid #e5e5e5;
    padding: 3rem 0;
    margin-top: 6rem;
    background: #fafafa;
  }

  .footer-content {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .disclaimer {
    font-size: 0.875rem;
    font-weight: 300;
    color: #666;
    margin: 0;
  }

  .footer-links {
    display: flex;
    gap: 1.5rem;
    font-size: 0.875rem;
    color: #999;
    flex-wrap: wrap;
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
    }
  }
</style>
