import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById } from '../services/api';
import { useCart } from '../context/CartContext';

export default function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductById(id)
      .then(data => { setProduct(data); setLoading(false); })
      .catch(() => { navigate('/404'); });
  }, [id, navigate]);

  if (loading) return <div className="p-10 text-center">Загрузка...</div>;
  if (!product) return null;

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <img src={product.images?.[0] || product.thumbnail} alt={product.title} className="w-full rounded-lg border" />
      <div>
        <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
        <p className="text-gray-500 mb-4">Артикул: {product.id} | Категория: {product.category}</p>
        <div className="text-3xl font-bold text-blue-600 mb-6">{product.price} ₽</div>
        <p className="text-gray-700 mb-6 leading-relaxed">{product.description}</p>
        <div className="flex gap-4">
          <button
            onClick={() => addToCart(product)}
            className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700"
          >
            Добавить в корзину
          </button>
          <button className="flex-1 border border-gray-300 py-3 rounded-lg font-semibold hover:bg-gray-50">
            Купить сейчас
          </button>
        </div>
        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold mb-2">Характеристики:</h3>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Мгновенная доставка ключа на email</li>
            <li>• Официальная гарантия производителя</li>
            <li>• Рейтинг: {product.rating} / 5</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
