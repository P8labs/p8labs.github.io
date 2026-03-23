import { redirect, error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { getProductById } from "$lib/data/content";

export const load: PageServerLoad = ({ params }) => {
  const product = getProductById(params.id);

  if (!product) {
    error(404, "Product not found");
  }

  if (product.pagesEnabled) {
    error(404, "Project page is served by GitHub Pages");
  }

  redirect(302, product.url);
};
