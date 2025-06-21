// app/page.tsx
import React from 'react';
import serverAction from '@/app/serverAction';
import { UploadCloud } from 'lucide-react';

type InputField = {
  id: string;
  name: string;
  type: string;
  placeholder: string;
  label: string;
};

function Page() {
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


  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <form action={serverAction} className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md space-y-5">
        <h2 className="text-2xl font-bold text-center text-gray-800">Add New Product</h2>

        {inputs.map((data) => (
          <div key={data.id}>
            <label htmlFor={data.id} className="block text-sm font-medium text-gray-700 mb-1">
              {data.label}
            </label>
            <input
              type={data.type}
              placeholder={data.placeholder}
              name={data.name}
              id={data.id}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        ))}
        <div>
          <label
          className="block text-sm font-medium text-gray-700 mb-1"
          htmlFor="description">Enter product description</label>
          <textarea 
          className="w-full px-3 resize-none h-[10rem] py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          name="description" 
          placeholder='Description'
          id="description"></textarea>
          <label
          className="block text-sm font-medium text-gray-700 mb-1"
          htmlFor="featureDescription">Enter product feature description</label>
          <textarea 
          className="w-full px-3 resize-none h-[10rem] py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          name="featureDescription" 
          placeholder='Feature Description'
          id="featureDescription"></textarea>
        </div>
        <div>
          <label htmlFor="relativeSelect" className="block text-sm font-medium text-gray-700 mb-1">
            Select Relative
          </label>
          <select
            name="relative"
            id="relativeSelect"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="home">Home</option>
            <option value="electronics">Shop</option>
            <option value="clothing">Recommended</option>
            <option value="games">Discount</option>
          </select>
        </div>
        {/* Upload image section */}
    <div className="my-6 cursor-pointer">
      <label
        htmlFor="image"
        className="block text-sm font-semibold text-gray-700 mb-2"
      >
        Upload Image
      </label>

      <div className="flex items-center gap-4 border border-gray-300 rounded-md p-3 cursor-pointer hover:shadow-sm transition">
        <UploadCloud className="w-6 h-6 text-gray-500" />
        <input
          type="file"
          name="image"
          id="image"
          className="text-sm text-gray-600 font-medium focus:outline-none file:hidden"
        />
      </div>
    </div>
      {/* Submit button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Page;
