import React from "react";
import Image from "next/image";
import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/fetch";
import { allProduct } from "@/sanity/lib/queries";
import Header from "./header";
import ShopBar from "./shopBar";

type Product = {
  _id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
};

export default async function ShopProducts() {
  const products: Product[] = await sanityFetch({ query: allProduct });

  return (
    <>
      <Header />
      <ShopBar />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-center">
        {products.map((product) => (
          <Link key={product._id} href={`/components/shop/${product._id}`}>
            <div className="flex flex-col items-center cursor-pointer group">
              <div className="w-[287px] h-[287px] overflow-hidden rounded-xl">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  width={287}
                  height={287}
                  className="rounded-lg object-cover w-full h-full transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg"
                />
              </div>
              <h2 className="text-xl font-bold text-center mt-2">{product.name}</h2>
              <p className="text-[14px] md:text-[16px] text-black mt-4">{product.description}</p>
              <p className="text-[18px] md:text-[24px] text-black">${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
