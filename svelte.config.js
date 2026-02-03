import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: "build",
      assets: "build",
      fallback: undefined,
      precompress: false,
      strict: true,
    }),
    prerender: {
      entries: ["*"],
    },
    paths: {
      // Set base path for GitHub Pages if needed
      // base: process.env.NODE_ENV === 'production' ? '/repo-name' : ''
    },
  },
};

export default config;
