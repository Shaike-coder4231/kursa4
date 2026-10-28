import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function CheckoutPage() {
    const { total, cartItems, clearCart } = useCart();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: '', name: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            alert(`Заказ успешно оформлен! Ключи отправлены на ${formData.email}`);
            clearCart();
            navigate('/');
        }, 1500);
    };

    return (
        <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Оформление заказа</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
        <div>
        <label className="block text-sm font-medium mb-1">Ваше имя</label>
        <input required type="text" className="w-full border p-2 rounded"
        value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
        </div>
        <div>
        <label className="block text-sm font-medium mb-1">Email (для отправки ключа)</label>
        <input required type="email" className="w-full border p-2 rounded"
        value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
        </div>
        <div className="bg-gray-50 p-4 rounded mt-6">
        <h3 className="font-semibold mb-2">Ваш заказ:</h3>
        <p className="text-sm text-gray-600 mb-2">Товаров: {cartItems.length}</p>
        <p className="text-xl font-bold">К оплате: {total.toFixed(2)} ₽</p>
        </div>
        <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-400"
        >
        {isSubmitting ? 'Обработка...' : 'Оплатить и получить ключи'}
        </button>
        </form>
        </div>
    );
}
