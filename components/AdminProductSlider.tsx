"use client";
import React from "react";
import { prisma } from "@/lib/prisma"

type Product = {
  id: number;
  title: string;
  price: string;
  image: string;
};

const dummyProducts: Product[] = [
  {
    id: 1,
    title: "IGI 2 Game",
    price: "Free",
    image:
      "https://www.bing.com/th/id/OIP.voK0k8vc2DJtP7yKaOPHKwHaIa?w=156&h=211&c=8&rs=1&qlt=90&o=6&cb=ircwebpc1&pid=3.1&rm=2",
  },
  {
    id: 2,
    title: "GTA Vice City",
    price: "$5.00",
    image:
      "https://www.bing.com/th/id/OIP.voK0k8vc2DJtP7yKaOPHKwHaIa?w=156&h=211&c=8&rs=1&qlt=90&o=6&cb=ircwebpc1&pid=3.1&rm=2",
  },
  {
    id: 3,
    title: "NFS Most Wanted",
    price: "$9.99",
    image:
      "https://www.bing.com/th/id/OIP.voK0k8vc2DJtP7yKaOPHKwHaIa?w=156&h=211&c=8&rs=1&qlt=90&o=6&cb=ircwebpc1&pid=3.1&rm=2",
  },
  {
    id: 4,
    title: "Hitman Contracts",
    price: "$4.00",
    image:
      "https://www.bing.com/th/id/OIP.voK0k8vc2DJtP7yKaOPHKwHaIa?w=156&h=211&c=8&rs=1&qlt=90&o=6&cb=ircwebpc1&pid=3.1&rm=2",
  },
];

export default async function AdminProductList() {
  const products = await prisma.products.findMany();
  return (
    <div className="w-full px-4 py-6 max-h-full">
      <h2 className="text-2xl font-bold mb-6 text-pink-600 text-center">
        Admin Product Manager
      </h2>
      <div className="space-y-6">
        {dummyProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-xl p-4 border border-gray-200 flex flex-col sm:flex-row sm:items-center gap-4"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full md:w-[150px] h-[220px] md:h-[130px] object-contain rounded-md"
            />
            <div className="flex flex-col justify-between flex-grow w-full">
              <div className="mb-3">
                <h3 className="text-lg font-semibold">{product.title}</h3>
                <p className="text-gray-600">{product.price}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <button className="bg-blue-500 text-white text-sm px-4 py-1.5 rounded-md hover:bg-blue-600 transition">
                  Edit
                </button>
                <button className="bg-red-500 text-white text-sm px-4 py-1.5 rounded-md hover:bg-red-600 transition">
                  Delete
                </button>
                <button className="bg-gray-500 text-white text-sm px-4 py-1.5 rounded-md hover:bg-gray-600 transition">
                  View
                </button>
              </div>
            </div>
          </div>
        ))}
        {
        products.map((product)=> (
        <img
              src={product.image}
              alt={product.description}
              className="w-full md:w-[150px] h-[220px] md:h-[130px] object-contain rounded-md"
            />
        ))
      }
      </div>
    </div>
  );
}
