import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white border rounded-lg shadow-sm hover:shadow-md transition p-4 flex flex-col">
      <Link to={`/product/${product.id}`} className="block">
        <img src={product.thumbnail} alt={product.title} className="w-full h-48 object-contain mb-4" />
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{product.title}</h3>
        <div className="flex items-center mb-2">
          <span className="text-yellow-500">★</span>
          <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
        </div>
      </Link>
      <div className="mt-auto flex items-center justify-between">
        <span className="text-xl font-bold text-gray-900">{product.price} ₽</span>
        <button
          onClick={() => addToCart(product)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          В корзину
        </button>
      </div>
    </div>
  );
}
