import { writeFileSync } from "fs";

const baseUrl = "https://p8labs.github.io";
const currentDate = new Date().toISOString();

const staticPages = [
  { url: "", changefreq: "weekly", priority: "1.0" },
  { url: "/about", changefreq: "monthly", priority: "0.8" },
  { url: "/products", changefreq: "weekly", priority: "0.9" },
  { url: "/terms", changefreq: "yearly", priority: "0.5" },
  { url: "/dmca", changefreq: "yearly", priority: "0.5" },
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPages
  .map(
    (page) => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>`;

writeFileSync("./static/sitemap.xml", sitemap);
console.log("✓ Sitemap generated successfully");
