import React from "react";
import { notFound } from "next/navigation";
import { productById } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/fetch";
import SingleProductBar from "../../singleProductPage/singleProductBar";
import ProductDetails from "../../singleProductPage/productDetails";
import RelatedProducts from "../../singleProductPage/relatedProducts";

type Product = {
  _id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  stockLevel: number;
};

type Props = {
  params: { productId: string };
};

export default async function SingleProductPage({ params }: Props) {
  // Fetch product data
  const product: Product | null = await sanityFetch({
    query: productById,
    params: { id: params.productId },
  });

  // If product is not found, show 404
  if (!product) {
    notFound();
  }

  // Pass product data to the Client Component
  return (
    <div className="px-4 sm:px-8">
      <SingleProductBar />
      <ProductDetails product={product} />
      <RelatedProducts/>
    </div>
  );
}