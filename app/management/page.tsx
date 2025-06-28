import CategoryForm from "@/components/CategoryForm";
import { prisma } from "@/lib/prisma";
import PreviewCategories from "@/components/PreviewCategories";

export default async function Page() {
  const tags = await prisma.category.findMany()
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
        <PreviewCategories tags={tags}/>

        {/* Add Tags to Selected Product Category */}
        <div className="border-t pt-6 mb-10">
          <h2 className="text-lg font-semibold text-gray-700 mb-4 text-center">
            Add Tags to a Category
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
            <select className="border border-gray-300 px-4 py-2 rounded-lg w-64">
              <option value="" disabled selected hidden>
                Select Category
              </option>
              <option>Belts</option>
              <option>Wallets</option>
              <option>Bags</option>
              <option>Caps</option>
            </select>
            <input
              type="text"
              placeholder="Enter tag (e.g. Leather)"
              className="border border-gray-300 px-4 py-2 rounded-lg flex-1 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
              Add Tag
            </button>
          </div>

          {/* Preview Tags (Example only) */}
          <div className="flex flex-wrap justify-center gap-3">
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
              Leather
            </span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
              Handmade
            </span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
              Luxury
            </span>
          </div>
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
