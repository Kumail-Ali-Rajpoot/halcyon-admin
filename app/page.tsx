'use client';

import React from 'react';
import serverAction from '@/app/serverAction';
import { UploadCloud } from 'lucide-react';
import { usePathname } from 'next/navigation';
import CategoriesOptions from '@/components/CategoriesOptions';
import { useTransition } from 'react';

type InputField = {
  id: string;
  name: string;
  type: string;
  placeholder: string;
  label: string;
};

function Page() {
  const path = usePathname();
  const [isPending,startTransition] = useTransition();
  function handleClick(): void {
    if (path === "/products") {
    }
  }

  const inputs: InputField[] = [
    {
      name: "title",
      type: "text",
      label: "Enter title of product",
      id: "title",
      placeholder: "Title",
    },
    {
      name: "price",
      type: "number",
      label: "Enter price of product",
      id: "price",
      placeholder: "Price",
    },
    {
      name: "discountPrice",
      type: "number",
      label: "Enter discount price of product",
      id: "discountPrice",
      placeholder: "Discount Price",
    },
    {
      name: "rating",
      type: "number",
      label: "What will rating of your product",
      id: "rating",
      placeholder: "Rating",
    },
  ];

  async function handleSubmit(FormData: FormData): Promise<void> {
    const description = FormData.get("description")?.toString();
    const featureDescription = FormData.get("featureDescription")?.toString();
    const image = FormData.get("image") as File;
    // Validate input
    if (
      !description ||
      !featureDescription ||
      description.trim().length >= 150 ||
      featureDescription.trim().length >= 150
    ) {
      alert("Please enter fewer than 150 characters in both descriptions.");
      return;
    }

    if (!image || image.size === 0) {
      alert("Please select an image.");
      return;
    }
    startTransition(()=>{
      // handleClick();
    })
    await serverAction(FormData); // Submit data
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <form
        action={handleSubmit}
        className="bg-gray-900 text-white shadow-lg rounded-lg p-6 w-full max-w-md space-y-5"
      >
        <h2 className="text-2xl font-bold text-center text-amber-50">Add New Product</h2>

        {inputs.map((data) => (
          <div key={data.id}>
            <label htmlFor={data.id} className="font-semibold block text-sm text-amber-50 mb-1">
              {data.label}
            </label>
            <input
              required
              type={data.type}
              placeholder={data.placeholder}
              name={data.name}
              id={data.id}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        ))}

        {/* Description fields */}
        <div>
          <label htmlFor="description" className="block text-sm font-semibold text-amber-50 mb-1">
            Enter product description
          </label>
          <textarea
            className="w-full px-3 resize-none h-[10rem] py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            name="description"
            maxLength={150}
            placeholder="Description"
            id="description"
          ></textarea>

          <label htmlFor="featureDescription" className="block text-sm font-semibold text-amber-50 mb-1 mt-4">
            Enter product feature description
          </label>
          <textarea
            className="w-full px-3 resize-none h-[10rem] py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            name="featureDescription"
            maxLength={150}
            placeholder="Feature Description"
            id="featureDescription"
          ></textarea>
        </div>

        {/* Relative options */}
        <div>
          <label htmlFor="relativeSelect" className="font-semibold block text-sm text-amber-50 mb-1 mt-4">
            Relative Product
          </label>
          <select
            name="relative"
            id="relativeSelect"
            className="w-full bg-gray-900 font-semibold px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="home">Home</option>
            <option value="shop">Shop</option>
            <option value="recommended">Recommended</option>
            <option value="discount">Discount</option>
            <option value="feature">Feature</option>
          </select>

          {/* Category options */}
          <CategoriesOptions />
        </div>

        {/* Upload image */}
        <div className="my-6 text-amber-50 cursor-pointer">
          <label htmlFor="image" className="block text-sm font-semibold mb-2">
            Upload Image
          </label>
          <div className="flex items-center gap-4 border border-gray-300 rounded-md p-3 hover:shadow-sm transition">
            <UploadCloud className="w-6 h-6 text-amber-500" />
            <input
              type="file"
              required
              name="image"
              id="image"
              className="text-sm text-amber-500 font-medium focus:outline-none file:hidden"
            />
          </div>
        </div>

        {/* Processing text */}
        {
        isPending?
        (<div
          className={`w-full text-center bg-gray-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300`}
        >
          Processing...
        </div>)
        :
        /* Submit button */
        (<button
          type="submit"
          className={`w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300`}
        >
          Submit
        </button>)
  }
      </form>
    </div>
  );
}

export default Page;
