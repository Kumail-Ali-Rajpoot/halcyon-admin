'use client';
import React from 'react';
import { category } from '@prisma/client';


function CategoriesOptions() {
  const [categories, setCategories] = React.useState<category[]>([]);
  React.useEffect(() => {
      const baseURL = window.location.origin;
      console.log(`Your URL is: ${baseURL}`);
    fetch(`${baseURL}/api/categories`)
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(err => console.error("Failed to fetch categories:", err));
  }, []);

  return (
    <div>
      <label htmlFor="categorySelect" className="font-semibold block text-sm text-gray-700 mb-1">
        Product Category
      </label>
      <select
        name="category"
        id="categorySelect"
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        {categories.map((cat) => (
          <option key={cat.id} value={cat.name}>
            {cat.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CategoriesOptions;
