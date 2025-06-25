import React from "react";
import { prisma } from "@/lib/prisma";

type Order = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  city: string;
  region: string;
  createdAt?: string;
  productId: string;
};

export default async function OrderCard({ order }: { order: Order }) {
  const product = await prisma.products.findUnique({
    where: {
      id: order.productId,
    },
  });

  return (
    <div className="w-full bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white px-6 py-4 md:py-6">
        <h2 className="text-lg md:text-2xl font-bold tracking-wide">
          Order by {order.firstName} {order.lastName}
        </h2>
        {order.createdAt && (
          <p className="text-sm md:text-base opacity-90">
            Ordered on {new Date(order.createdAt).toLocaleDateString()}
          </p>
        )}
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row gap-6 p-4 md:p-6">
        {/* Product Image + Title */}
        <div className="md:w-1/3 flex flex-col items-center justify-center text-center">
          <div className="w-full max-w-[200px]">
            <img
              src={`data:${product?.imageType};base64,${product?.imageBase64}`}
              alt={product?.title || "Product Image"}
              className="rounded-xl shadow-md object-contain w-full h-auto max-h-[200px]"
            />
            <h3 className="mt-3 text-base md:text-lg font-semibold text-gray-800">{product?.title}</h3>
          </div>
        </div>

        {/* Order Info */}
        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm md:text-base text-gray-700">
          <p>
            <span className="font-semibold">Email:</span> {order.email}
          </p>
          <p>
            <span className="font-semibold">Phone:</span> {order.phoneNumber}
          </p>
          <p className="col-span-full sm:col-span-1">
            <span className="font-semibold">Address:</span> {order.address}
          </p>
          <p>
            <span className="font-semibold">City:</span> {order.city}
          </p>
          <p>
            <span className="font-semibold">Region:</span> {order.region}
          </p>
        </div>
      </div>
    </div>
  );
}
