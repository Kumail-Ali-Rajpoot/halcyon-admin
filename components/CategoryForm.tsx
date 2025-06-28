'use client'
import React, { useTransition, useState } from 'react';
import { addCategory } from '@/app/action/addCategory';
import { useRouter } from 'next/navigation';

export default function CategoryForm() {
  const router = useRouter();
      const [isPending, startTransition] = useTransition();
  const [input, setInput] = useState('');

  const handleSubmit = (formData: FormData) => {
    startTransition(async () => {
      await addCategory(formData);
      setInput('');
      router.refresh();
    });
  };
  return (
        <form action={handleSubmit}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <input
              type="text"
              name="name"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter header category (e.g. Belts, Bags)"
              className="flex-1 border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {isPending ? (
              <div className="bg-gray-400 text-white px-6 py-2 rounded-lg cursor-not-allowed">
                Processing...
              </div>
            ) : (
              <button
                type="submit"
                className="bg-blue-600 cursor-pointer active:bg-blue-800 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Add Category
              </button>
            )}
          </div>
        </form>

  )
}
