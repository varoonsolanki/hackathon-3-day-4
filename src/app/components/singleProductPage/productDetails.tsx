"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link"; 
import { FacebookIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import Rating from "@/app/components/rating";
import { Button } from "@/components/ui/button";

type Product = {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
  stockLevel: number;
};

type Props = {
  product: Product;
};

const ProductDetails: React.FC<Props> = ({ product }) => {
  const [count, setCount] = useState(1);

  const handleRatingChange = (rating: number) => {
    console.log("User selected rating:", rating);
  };

  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8">
      {/* Left Section */}
      <div className="lg:w-1/2 flex justify-center">
        <div className="w-full max-w-[500px] aspect-square relative">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="rounded-xl object-cover"
            sizes="(max-width: 1024px) 100vw, 500px"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2">
        <h1 className="text-2xl md:text-3xl lg:text-4xl">{product.name}</h1>
        <h1 className="text-lg md:text-xl lg:text-2xl mt-2">${product.price}</h1>
        <div className="flex items-center mt-4">
          <Rating maxRating={5} initialRating={3} onRate={handleRatingChange} />
          <h5 className="text-gray-700 pl-4 text-sm md:text-base">
            5 Customer Reviews
          </h5>
        </div>
        <p className="text-sm md:text-base lg:text-lg mt-4 lg:w-[75%]">
          {product.description}
        </p>

        {/* Quantity Selector */}
        <div className="flex items-center mt-6">
          <div className="flex items-center border border-gray-300 rounded-lg">
            <button
              onClick={() => setCount((prev) => Math.max(prev - 1, 1))}
              className="px-3 py-2 text-lg font-medium"
            >
              -
            </button>
            <span className="px-4">{count}</span>
            <button
              onClick={() => setCount((prev) => prev + 1)}
              className="px-3 py-2 text-lg font-medium"
            >
              +
            </button>
          </div>
          <Button variant="outline" className="ml-4 px-6 py-3 text-lg rounded-lg">
            Add To Cart
          </Button>
        </div>

        {/* Details */}
        <div className="mt-6 flex flex-col gap-2 text-sm md:text-base">
          <div className="flex">
            <span className="w-24">IN STOCK:</span>
            <span>{product.stockLevel}</span>
          </div>
          <div className="flex">
            <span className="w-24">CATEGORY:</span>
            <span>{product.category}</span>
          </div>
          <div className="flex">
            <span className="w-24">SHARE:</span>
            <div className="flex gap-4">
              <Link target="_blank" href={"https://www.facebook.com/varoon.kumar.1023"}>
                <FacebookIcon className="w-6 h-6 text-blue-600" />
              </Link>
              <Link target="_blank" href={"https://www.linkedin.com/in/varoon-kumar-23a967345/"}>
                <LinkedinIcon className="w-6 h-6 text-blue-700" />
              </Link>
              <Link target="_blank" href={"https://x.com/?lang=en"}>
                <TwitterIcon className="w-6 h-6 text-blue-500" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;