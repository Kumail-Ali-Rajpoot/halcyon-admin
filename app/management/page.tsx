import CategoryForm from "@/components/CategoryForm";
import { prisma } from "@/lib/prisma";
import PreviewCategories from "@/components/PreviewCategories";
import TagForm from "@/components/TagForm";
export default async function Page() {
  const category = await prisma.category.findMany();
  const tags = await prisma.tags.findMany();
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 py-12 px-4">
      <div className="w-full max-w-5xl bg-white rounded-xl shadow-lg p-8">
        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Manage Website Header Categories
        </h1>

        {/* Add Header Category */}
        <CategoryForm/>
        {/* Header Categories Preview */}
        <PreviewCategories tags={category}/>

        {/* Add Tags to Selected Product Category */}
        <div className="border-t pt-6 mb-10">
          <h2 className="text-lg font-semibold text-gray-700 mb-4 text-center">
            Add Tags to a Category
          </h2>
          <TagForm tag={tags} options={category}></TagForm>
        </div>

        {/* Products Section */}
        <div className="border-t pt-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4 text-center">
            Preview Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Sample Product Cards */}
            <div className="border p-4 rounded-lg shadow-sm hover:shadow-md transition bg-white">
              <div className="h-40 bg-gray-200 rounded mb-4"></div>
              <h3 className="text-lg font-bold text-gray-800 mb-1">Leather Belt</h3>
              <p className="text-sm text-gray-600">Category: Belts</p>
            </div>
            <div className="border p-4 rounded-lg shadow-sm hover:shadow-md transition bg-white">
              <div className="h-40 bg-gray-200 rounded mb-4"></div>
              <h3 className="text-lg font-bold text-gray-800 mb-1">Travel Wallet</h3>
              <p className="text-sm text-gray-600">Category: Wallets</p>
            </div>
            <div className="border p-4 rounded-lg shadow-sm hover:shadow-md transition bg-white">
              <div className="h-40 bg-gray-200 rounded mb-4"></div>
              <h3 className="text-lg font-bold text-gray-800 mb-1">Canvas Bag</h3>
              <p className="text-sm text-gray-600">Category: Bags</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
