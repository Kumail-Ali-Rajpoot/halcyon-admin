import React from "react";
import { prisma } from "@/lib/prisma";
import AdminProduct from "./AdminProduct";

export default async function AdminProductList() {
  const products = await prisma.products.findMany();

  return (
    <div className="w-full px-3 sm:px-4 py-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-pink-600 mb-6">
        🛍️ Admin Product Manager
      </h2>

      <div className="flex text-black flex-col-reverse gap-5">
        {
        products.length > 0?
        products.map((product) => (
         <AdminProduct key={product.id} product={product} />
        )): <h1 className="text-center capitalize leading-tight font-bold relative top-[5rem]">No products found!</h1>
      }
      </div>
    </div>
  );
}
