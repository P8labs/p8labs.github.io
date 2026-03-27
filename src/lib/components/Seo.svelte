<script lang="ts">
  import { page } from "$app/state";

  type JsonLd = Record<string, unknown>;

  export let title: string = "P8labs";
  export let description: string =
    "P8labs is an independent technology lab building software, developer tools, and experimental projects.";
  export let image: string = "/og/banner.png";
  export let type: string = "website";
  export let canonical: string = "";
  export let robots: string = "index, follow";
  export let schema: JsonLd | JsonLd[] | null = null;
  export let includeOrganizationSchema: boolean = true;
  export let includeWebPageSchema: boolean = true;
  export let includeWebSiteSchema: boolean = false;

  $: fullTitle = title === "P8labs" ? title : `${title} | P8labs`;
  $: currentUrl = canonical || `https://p8labs.in${page.url.pathname}`;
  $: ogImage = image.startsWith("http") ? image : `https://p8labs.in${image}`;
  $: pathname = page.url.pathname;

  const organizationSchema: JsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "P8labs",
    url: "https://p8labs.in",
    logo: "https://p8labs.in/logo.png",
    sameAs: ["https://github.com/P8labs", "https://p8labs.tech"],
    description,
  };

  $: webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: fullTitle,
    url: currentUrl,
    description,
    inLanguage: "en",
    isPartOf: {
      "@type": "WebSite",
      name: "P8labs",
      url: "https://p8labs.in",
    },
  } satisfies JsonLd;

  const webSiteSchema: JsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "P8labs",
    url: "https://p8labs.in",
    inLanguage: "en",
    hasPart: [
      {
        "@type": "SiteNavigationElement",
        name: "Build With P8labs",
        url: "https://p8labs.in/build",
      },
      {
        "@type": "SiteNavigationElement",
        name: "Products",
        url: "https://p8labs.in/products",
      },
      {
        "@type": "SiteNavigationElement",
        name: "About Us",
        url: "https://p8labs.in/about",
      },
      {
        "@type": "SiteNavigationElement",
        name: "Contact",
        url: "https://p8labs.in/contact",
      },
    ],
    publisher: {
      "@type": "Organization",
      name: "P8labs",
      url: "https://p8labs.in",
    },
  };

  $: customSchemas = Array.isArray(schema) ? schema : schema ? [schema] : [];

  $: graph = [
    ...(includeOrganizationSchema ? [organizationSchema] : []),
    ...(includeWebPageSchema ? [webPageSchema] : []),
    ...(includeWebSiteSchema || pathname === "/" ? [webSiteSchema] : []),
    ...customSchemas,
  ];

  const safeJson = (value: unknown): string =>
    JSON.stringify(value)
      .replace(/</g, "\\u003c")
      .replace(/-->/g, "--\\>")
      .replace(/<\//g, "<\\/");

  $: jsonLdString = safeJson(graph);
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

  {@html `<script type="application/ld+json">${jsonLdString}</script>`}
</svelte:head>
