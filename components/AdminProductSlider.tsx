"use client";

import React from "react";
import { prisma } from "@/lib/prisma";

export default async function AdminProductList() {
  const products = await prisma.products.findMany();

  return (
    <div className="w-full px-3 sm:px-4 py-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-pink-600 mb-6">
        🛍️ Admin Product Manager
      </h2>

      <div className="flex flex-col gap-5">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all p-4 flex flex-col lg:flex-row gap-4"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full lg:w-[200px] h-[180px] object-contain rounded-md border"
            />

            <div className="flex flex-col justify-between flex-grow min-w-0">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                  {product.title}
                </h3>

                <div className="text-sm text-gray-600 space-y-1 mb-3">
                  <p><strong>Price:</strong> {product.price}</p>
                  <p><strong>Discount:</strong> {product.discountPrice}</p>
                  <p><strong>Rating:</strong> {product.rating} ⭐</p>
                  <p><strong>Added:</strong> {new Date(product.createdAt).toLocaleDateString()}</p>
                </div>

                <p className="text-sm text-gray-700 mb-1 line-clamp-3">
                  <strong>Description:</strong> {product.description}
                </p>
                <p className="text-sm text-gray-700 mb-1 line-clamp-2">
                  <strong>Feature:</strong> {product.featureDescription}
                </p>
                <p className="text-sm text-gray-700 mb-2 line-clamp-1">
                  <strong>Relative Info:</strong> {product.relative}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-3">
                <button className="bg-blue-600 text-white text-sm px-4 py-1.5 rounded-md hover:bg-blue-700 transition">
                  ✏️ Edit
                </button>
                <button className="bg-red-500 text-white text-sm px-4 py-1.5 rounded-md hover:bg-red-600 transition">
                  🗑️ Delete
                </button>
                <button className="bg-gray-700 text-white text-sm px-4 py-1.5 rounded-md hover:bg-gray-800 transition">
                  🔍 View
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
