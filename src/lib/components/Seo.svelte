<script lang="ts">
  import { page } from "$app/state";

  export let title: string = "P8labs";
  export let description: string =
    "P8labs is an independent technology lab building software, developer tools, and experimental projects.";
  export let image: string = "/og/banner.png";
  export let type: string = "website";
  export let canonical: string = "";
  export let robots: string = "index, follow";

  $: fullTitle = title === "P8labs" ? title : `${title} | P8labs`;
  $: currentUrl = canonical || `https://p8labs.github.io${page.url.pathname}`;
  $: ogImage = image.startsWith("http")
    ? image
    : `https://p8labs.github.io${image}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "P8labs",
    url: "https://p8labs.github.io",
    logo: "https://p8labs.github.io/logo.png",
    sameAs: ["https://github.com/P8labs"],
    description: description,
  };
</script>

<svelte:head>
  <title>{fullTitle}</title>
  <meta name="title" content={fullTitle} />
  <meta name="description" content={description} />
  <meta name="robots" content={robots} />
  <link rel="canonical" href={currentUrl} />

  <meta property="og:type" content={type} />
  <meta property="og:url" content={currentUrl} />
  <meta property="og:title" content={fullTitle} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={ogImage} />
  <meta property="og:site_name" content="P8labs" />

  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content={currentUrl} />
  <meta property="twitter:title" content={fullTitle} />
  <meta property="twitter:description" content={description} />
  <meta property="twitter:image" content={ogImage} />

  {@html `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`}
</svelte:head>
