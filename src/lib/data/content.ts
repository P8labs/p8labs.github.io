export interface Product {
  name: string;
  category: string;
  status: "active" | "prototype" | "archived";
  url: string;
  description?: string;
}

export interface Contributor {
  name: string;
  role: string;
  url: string;
}

export const products: Product[] = [
  {
    name: "tsbin-mail",
    category: "Developer Tools",
    status: "active",
    url: "https://github.com/P8labs/tsbin-mail",
    description:
      "A temporary email service that allows user to create disposible email addresses and recieve emails without registration.",
  },
  {
    name: "linkey",
    category: "Developer Tools",
    status: "active",
    url: "https://github.com/P8labs/linkey",
    description:
      "Create a short version of your links. Free Forever Elevate your online presence with our powerful URL shortening service.",
  },
  {
    name: "StatStream",
    category: "Analytics",
    status: "active",
    url: "https://github.com/P8labs/StatStream",
    description:
      "StatStream is a web analytics tracking project designed to monitor and store website statistics using Discord for reporting.",
  },
  {
    name: "sso-service",
    category: "Infrastructure",
    status: "active",
    url: "https://github.com/P8labs/sso-service",
    description:
      "The SSO Service is a robust Single Sign-On (SSO) solution designed to streamline authentication and authorization across multiple applications.",
  },
  {
    name: "sangeet",
    category: "Desktop App",
    status: "active",
    url: "https://github.com/P8labs/sangeet",
    description:
      "A Desktop Music App which is supported by Jiosaavn music library.",
  },
  {
    name: "circle_wallet",
    category: "Blockchain",
    status: "active",
    url: "https://github.com/P8labs/circle_wallet",
    description:
      "This project is a custom wallet application built on Circle's Programmable Wallets platform.",
  },
  {
    name: "stock-charts",
    category: "Finance",
    status: "active",
    url: "https://github.com/P8labs/stock-charts",
    description: "A stocks chart system powered by fluvio.",
  },
  {
    name: "Bhagwad-Gita-API",
    category: "API",
    status: "active",
    url: "https://github.com/P8labs/Bhagwad-Gita-API",
    description:
      "Project: Bhagavad Gita API Free to use Bhagavad Gita Slokhs and explainations in english and hindi languages",
  },
  {
    name: "rainbow",
    category: "Tools",
    status: "archived",
    url: "https://github.com/P8labs/rainbow",
    description:
      "Unleash your creativity with Rainbow – the ultimate online tool for unlimited and free multimedia conversion.",
  },
  {
    name: "build-journal",
    category: "Productivity",
    status: "prototype",
    url: "https://github.com/P8labs/build-journal",
    description: "A project jounal and snippet keeper.",
  },
  {
    name: "GitPaste",
    category: "Tools",
    status: "prototype",
    url: "https://github.com/P8labs/GitPaste",
    description:
      "GitPaste is an Obsidian plugin designed to simplify handling and managing images in your notes.",
  },
  {
    name: "tsbin",
    category: "Developer Tools",
    status: "active",
    url: "https://github.com/P8labs/tsbin",
    description: "A temp bin for free",
  },
  {
    name: "tsbin-paper",
    category: "Developer Tools",
    status: "active",
    url: "https://github.com/P8labs/tsbin-paper",
  },
];

export const contributors: Contributor[] = [
  // Add contributors here as needed
  // Example:
  // {
  //   name: "Jane Doe",
  //   role: "Backend Developer",
  //   url: "https://github.com/janedoe",
  // },
];
