'use client'
import React,{useState} from 'react';
import { addTags } from '@/app/action/addTag';
import { deleteTag } from '@/app/action/deletedById';
import { useTransition } from 'react';
import { useRouter } from 'next/navigation';
import type { category, tags } from '@prisma/client';

interface TagFormProps {
  options: category[];
  tag: tags[];
}

export default function TagForm({ options, tag }: TagFormProps) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const [processingMessage,setProcessingMessage] = useState("Processing...");

  async function handleSubmit(formData: FormData) {
    await startTransition(async () => {
      await addTags(formData);
      router.refresh();
      setProcessingMessage("Adding...");
    });
    setProcessingMessage("Processing...");
  }
  function handleSelected (e:any) {
    console.log(e.target.value);
  }
  async function handleDelete(id: string) {
    await startTransition(async () => {
      await deleteTag(id);
      router.refresh();
      setProcessingMessage("deleting...");
    });
    setProcessingMessage("Processing...");
  }

  return (
    <div>
      <form action={handleSubmit}>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
          <select
            name="categoryName"
            onChange={handleSelected}
            className="border border-gray-300 px-4 py-2 rounded-lg w-64"
          >
            {options.map((opt) => (
              <option key={opt.id} value={opt.name}>
                {opt.name}
              </option>
            ))}
          </select>

          <input
            type="text"
            name="tagName"
            required
            placeholder="Enter tag (e.g. Books)"
            className="border border-gray-300 px-4 py-2 rounded-lg flex-1 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          {isPending ? (
            <button disabled className="bg-gray-600 text-white px-6 py-2 rounded-lg">
              {processingMessage || "Processing"}
            </button>
          ) : (
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
              Add Tag
            </button>
          )}
        </div>
      </form>

      {/* Preview Tags */}
      <div className="flex flex-wrap justify-center gap-3 mt-4">
        {tag.map((t) => (
          <span
            key={t.id}
            className="flex items-center bg-green-100 gap-1.5 text-green-800 px-3 py-1 rounded-full text-sm"
          >
            {t.tagName}
            <button
              onClick={() => handleDelete(t.id)}
              className="rounded-full hover:bg-red-600 border cursor-pointer w-[1.3rem] h-[1.3rem] border-red-600 font-[300] text-red-600 hover:text-white"
            >
              x
            </button>
          </span>
        ))}
      </div>
    </div>
  );
}
