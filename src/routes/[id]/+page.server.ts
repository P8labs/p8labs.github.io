import { redirect, error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { getProductById } from "$lib/data/content";

export const load: PageServerLoad = ({ params }) => {
  const product = getProductById(params.id);

  if (!product) {
    error(404, "Product not found");
  }

  if (product.pagesEnabled) {
    redirect(302, `/product/${params.id}`);
  }

  redirect(302, product.url);
};
