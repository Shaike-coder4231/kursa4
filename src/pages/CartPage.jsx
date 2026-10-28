import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { Trash2 } from 'lucide-react';

export default function CartPage() {
    const { cartItems, removeFromCart, total } = useCart();

    if (cartItems.length === 0) {
        return (
            <div className="text-center py-20">
            <h2 className="text-2xl font-bold mb-4">Корзина пуста</h2>
            <Link to="/catalog" className="text-blue-600 hover:underline">Перейти к покупкам</Link>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Корзина</h1>
        <div className="space-y-4 mb-8">
        {cartItems.map(item => (
            <div key={item.id} className="flex items-center gap-4 bg-white p-4 rounded-lg border">
            <img src={item.thumbnail} alt={item.title} className="w-20 h-20 object-contain" />
            <div className="flex-grow">
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-gray-500">{item.price} ₽ x {item.quantity}</p>
            </div>
            <div className="font-bold">{item.price * item.quantity} ₽</div>
            <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700 p-2">
            <Trash2 size={20} />
            </button>
            </div>
        ))}
        </div>
        <div className="bg-gray-50 p-6 rounded-lg flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-xl">Итого к оплате: <span className="font-bold text-blue-600">{total.toFixed(2)} ₽</span></div>
        <Link to="/checkout" className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700">
        Оформить заказ
        </Link>
        </div>
        </div>
    );
}
