import { useEffect, useState } from 'react';
import { getProducts } from '../../services/api';

export default function AdminProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts(10).then(data => setProducts(data.products));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Админ-панель: Управление товарами</h1>
      <button className="bg-green-600 text-white px-4 py-2 rounded mb-4">+ Добавить товар</button>
      <div className="overflow-x-auto">
        <table className="w-full bg-white border rounded">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">ID</th>
              <th className="p-3 text-left">Название</th>
              <th className="p-3 text-left">Цена</th>
              <th className="p-3 text-left">Действия</th>
            </tr>
          </thead>
          <tbody>
            {products.map(p => (
              <tr key={p.id} className="border-t">
                <td className="p-3">{p.id}</td>
                <td className="p-3">{p.title}</td>
                <td className="p-3">{p.price} ₽</td>
                <td className="p-3">
                  <button className="text-blue-600 mr-2">Изменить</button>
                  <button className="text-red-600">Удалить</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
