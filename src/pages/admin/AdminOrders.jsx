import { useState } from 'react';

const mockOrders = [
    { id: 101, customer: 'ivan@example.com', total: 4500, status: 'Доставлен', date: '2026-10-25' },
{ id: 102, customer: 'anna@example.com', total: 1200, status: 'В обработке', date: '2026-10-27' },
];

export default function AdminOrders() {
    const [orders, setOrders] = useState(mockOrders);

    const changeStatus = (id, newStatus) => {
        setOrders(orders.map(o => o.id === id ? { ...o, status: newStatus } : o));
    };

    return (
        <div>
        <h1 className="text-2xl font-bold mb-6">Админ-панель: Управление заказами</h1>
        <div className="overflow-x-auto">
        <table className="w-full bg-white border rounded">
        <thead className="bg-gray-100">
        <tr>
        <th className="p-3 text-left">№ Заказа</th>
        <th className="p-3 text-left">Клиент</th>
        <th className="p-3 text-left">Сумма</th>
        <th className="p-3 text-left">Статус</th>
        <th className="p-3 text-left">Действия</th>
        </tr>
        </thead>
        <tbody>
        {orders.map(order => (
            <tr key={order.id} className="border-t">
            <td className="p-3">#{order.id}</td>
            <td className="p-3">{order.customer}</td>
            <td className="p-3">{order.total} ₽</td>
            <td className="p-3">
            <span className={`px-2 py-1 rounded text-xs ${
                order.status === 'Доставлен' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
            }`}>
            {order.status}
            </span>
            </td>
            <td className="p-3">
            {order.status !== 'Доставлен' && (
                <button
                onClick={() => changeStatus(order.id, 'Доставлен')}
                className="text-blue-600 hover:underline text-sm"
                >
                Подтвердить
                </button>
            )}
            </td>
            </tr>
        ))}
        </tbody>
        </table>
        </div>
        </div>
    );
}
