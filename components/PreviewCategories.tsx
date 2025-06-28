'use client';
import React from 'react';
import handleClick from "@/app/action/deletedById"
import { useRouter } from 'next/navigation';
import { Delete } from 'lucide-react';
type Tag = {
  name: string;
  id: string;
  createdAt?: string;
};

export default function PreviewCategories({
  tags,
}: {
  tags: Tag[];
}) {
    const router = useRouter();
  return (
    <div className="border-t pt-6 mb-10">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">
        Header Categories Preview
      </h2>
      <nav className="flex flex-wrap gap-4 justify-center">
        {tags.map((data) => (
          <div key={data.id}>
            <span className="bg-gray-200 text-gray-800 px-4 py-2 rounded-[1rem] flex justify-center items-center gap-1">
              {data.name}
              <button
                onClick={() => {
                    handleClick(data.id)
                    router.refresh();
                }}
                className="hover:bg-red-600 hover:text-white text-2xl flex justify-center items-center font-sans font-[400] w-[1rem] cursor-pointer h-[1rem] text-red-600"
              >
                <Delete/>
              </button>
            </span>
          </div>
        ))}
      </nav>
    </div>
  );
}
