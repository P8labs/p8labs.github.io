export interface Product {
  id?: string;
  name: string;
  category: string;
  status: "active" | "stable" | "prototype" | "archived";
  url: string;
  github?: string;
  description?: string;
  group?: string;
  image?: string;
  demoVideo?: string;
}

export interface Contributor {
  name: string;
  role: string;
  url: string;
}

const slugify = (value: string): string =>
  value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

const defineProduct = (product: Product): Product => ({
  ...product,
  id: product.id ?? slugify(product.name),
});

export const products: Product[] = [
  defineProduct({
    name: "Trackion",
    category: "Analytics Tool",
    status: "active",
    url: "https://trackion.tech",
    github: "https://github.com/P8labs/trackion",
    description:
      "A telemetry aka Analytics tool that can be self hosted and used to see page view or track the projects.",
  }),
  defineProduct({
    name: "dXon",
    category: "Developer Tools",
    status: "active",
    url: "https://github.com/P8labs/dxon",
    description:
      "A small tool to spin up dev containers quickly. nothing fancy. just simple environments so your host system doesn't get polluted.",
  }),
  defineProduct({
    name: "dockless",
    category: "Infrastructure",
    status: "active",
    url: "https://github.com/P8labs/dockless",
    description:
      "A lightweight Platform as a Service (PaaS) designed for Raspberry Pi nodes, written in Rust.",
  }),
  defineProduct({
    name: "foxd",
    category: "Automation",
    status: "prototype",
    url: "https://github.com/P8labs/foxd",
    description:
      "A lightweight Rust daemon for observing local networks, tracking device presence, and reacting to changes in real time.",
  }),
  defineProduct({
    name: "tsbin-locam",
    category: "Tools",
    status: "stable",
    group: "tsbin",
    url: "https://github.com/P8labs/tsbin-locam",
    description:
      "A Privacy-first QR scanner and camera utility that runs entirely in your browser. ",
  }),
  defineProduct({
    name: "tsbin-mail",
    category: "Tools",
    status: "stable",
    group: "tsbin",
    url: "https://github.com/P8labs/tsbin-mail",
    description:
      "A temporary email service that allows user to create disposible email addresses and recieve emails without registration.",
  }),
  defineProduct({
    name: "tsbin",
    category: "Tools",
    status: "stable",
    group: "tsbin",
    url: "https://github.com/P8labs/tsbin",
    description: "A temp bin for free",
  }),

  defineProduct({
    name: "tsbin-paper",
    category: "Tools",
    status: "stable",
    group: "tsbin",
    url: "https://github.com/P8labs/tsbin-paper",
    description:
      "A minimal tool to turn Markdown into beautiful images or publish it permanently on IPFS.",
  }),
  defineProduct({
    name: "jocasta",
    category: "AI Tool",
    status: "stable",
    url: "https://jocasta.live",
    description:
      "A personal AI assistant that helps you manage documents, learn faster, and connect ideas, all with full control and end-to-end privacy. ",
  }),
  defineProduct({
    name: "linkey",
    category: "Developer Tools",
    status: "archived",
    url: "https://github.com/P8labs/linkey",
    description:
      "Create a short version of your links. Free Forever Elevate your online presence with our powerful URL shortening service.",
  }),
  defineProduct({
    name: "StatStream",
    category: "Analytics",
    status: "stable",
    url: "https://github.com/P8labs/StatStream",
    description:
      "StatStream is a web analytics tracking project designed to monitor and store website statistics using Discord for reporting.",
  }),
  defineProduct({
    name: "sso-service",
    category: "Infrastructure",
    status: "archived",
    url: "https://github.com/P8labs/sso-service",
    description:
      "The SSO Service is a robust Single Sign-On (SSO) solution designed to streamline authentication and authorization across multiple applications.",
  }),
  defineProduct({
    name: "sangeet",
    category: "Desktop App",
    status: "archived",
    url: "https://github.com/P8labs/sangeet",
    description:
      "A Desktop Music App which is supported by Jiosaavn music library.",
  }),
  defineProduct({
    name: "stock-charts",
    category: "Finance",
    status: "archived",
    url: "https://github.com/P8labs/stock-charts",
    description: "A stocks chart system powered by fluvio.",
  }),
  defineProduct({
    name: "Bhagwad-Gita-API",
    category: "API",
    status: "archived",
    url: "https://github.com/P8labs/Bhagwad-Gita-API",
    description:
      "Project: Bhagavad Gita API Free to use Bhagavad Gita Slokhs and explainations in english and hindi languages",
  }),
  defineProduct({
    name: "rainbow",
    category: "Tools",
    status: "archived",
    url: "https://github.com/P8labs/rainbow",
    description:
      "Unleash your creativity with Rainbow – the ultimate online tool for unlimited and free multimedia conversion.",
  }),
  defineProduct({
    name: "build-journal",
    category: "Productivity",
    status: "archived",
    url: "https://github.com/P8labs/build-journal",
    description: "A project jounal and snippet keeper.",
  }),
  defineProduct({
    name: "GitPaste",
    category: "Tools",
    status: "prototype",
    url: "https://github.com/P8labs/GitPaste",
    description:
      "GitPaste is an Obsidian plugin designed to simplify handling and managing images in your notes.",
  }),
];

export const getProductId = (product: Product): string =>
  product.id ?? slugify(product.name);

const productsById = new Map(
  products.map((product) => [getProductId(product).toLowerCase(), product]),
);

export const getProductById = (id: string): Product | undefined =>
  productsById.get(id.toLowerCase());

export const contributors: Contributor[] = [
  // Add contributors here as needed
  // Example:
  // {
  //   name: "Jane Doe",
  //   role: "Backend Developer",
  //   url: "https://github.com/janedoe",
  // },
];
