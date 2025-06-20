"use client";
import React from "react";

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

export default function AdminProductList() {
  return (
    <div className="w-full px-4 py-6 max-h-[600px]">
      <h2 className="text-2xl font-bold mb-4 text-pink-600">Admin Product Manager</h2>
      <div className="space-y-4">
        {dummyProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg p-4 border border-gray-200 flex gap-4"
          >
            <img
              src={product.image}
              alt={product.title}
              width={100}
              height={130}
              className="rounded-md object-cover"
            />
            <div className="flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-lg font-semibold">{product.title}</h3>
                <p className="text-gray-600">{product.price}</p>
              </div>

              <div className="flex gap-2 mt-3">
                <button className="bg-blue-500 text-white text-sm px-3 py-1 rounded hover:bg-blue-600">
                  Edit
                </button>
                <button className="bg-red-500 text-white text-sm px-3 py-1 rounded hover:bg-red-600">
                  Delete
                </button>
                <button className="bg-gray-500 text-white text-sm px-3 py-1 rounded hover:bg-gray-600">
                  View
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
