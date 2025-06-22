'use client'
// @/components/AdminProduct.tsx
import { deleteProduct } from '@/app/action/delete';
import { useRouter } from 'next/navigation';
type Product = {
  id: number;
  title: string;
  price: string;
  discountPrice: string;
  rating: number;
  createdAt: string | Date;
  description: string;
  featureDescription: string;
  relative: string;
  image: string;
};

type Props = {
  product: Product;
};

function AdminProduct({ product }:Props) {
  const router = useRouter();
  function handleEdit () {
    router.push(`/edit/${product.id}`);
  }
  return (
    <div
      key={product.id}
      className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all p-4 flex flex-col lg:flex-row gap-4"
    >
      <img
        src={product.image}
        alt={product.title}
        className="w-full lg:w-[200px] h-[180px] object-contain rounded-md border"
      />

      <div className="flex flex-col justify-between flex-grow min-w-0">
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
            {product.title}
          </h3>

          <div className="text-sm text-gray-600 space-y-1 mb-3">
            <p><strong>Price:</strong>RS {product.price}</p>
            <p><strong>Discount Price:</strong>RS {product.discountPrice}</p>
            <p><strong>Rating:</strong> {product.rating} ⭐</p>
            <p><strong>Added:</strong> {new Date(product.createdAt).toLocaleDateString()}</p>
          </div>

          <p className="text-sm text-gray-700 mb-1 line-clamp-3">
            <strong>Description:</strong> {product.description}
          </p>
          <p className="text-sm text-gray-700 mb-1 line-clamp-2">
            <strong>Feature:</strong> {product.featureDescription}
          </p>
          <p className="text-sm text-gray-700 mb-2 line-clamp-1">
            <strong>Relative:</strong> {product.relative}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mt-3">
          <button onClick={handleEdit} className="bg-blue-600 text-white text-sm px-4 py-1.5 rounded-md hover:bg-blue-700 transition">
            ✏️ Edit
          </button>
        <form action={deleteProduct}>
          <input type="hidden" name="id" value={product.id} />
          <button 
          className="bg-red-500 text-white text-sm px-4 py-1.5 rounded-md hover:bg-red-600 transition"
          type="submit">Delete</button>
        </form>
          <button className="bg-gray-700 text-white text-sm px-4 py-1.5 rounded-md hover:bg-gray-800 transition">
            🔍 View
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminProduct;
