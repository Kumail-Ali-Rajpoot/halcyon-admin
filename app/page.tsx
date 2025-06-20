import React from 'react';

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
      name: "brand",
      type: "text",
      label: "Enter brand name",
      id: "brand",
      placeholder: "Brand",
    },
    {
      name: "category",
      type: "text",
      label: "What type of product",
      id: "category",
      placeholder: "Category",
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
      <form className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md space-y-5">
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
