import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white text-lg font-bold mb-4">DigitalStore</h3>
          <p className="text-sm">Лицензионное программное обеспечение и цифровые ключи с мгновенной доставкой.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Навигация</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white">Главная</Link></li>
            <li><Link to="/catalog" className="hover:text-white">Каталог</Link></li>
            <li><Link to="/admin/products" className="hover:text-white">Админ-панель</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Контакты</h4>
          <p className="text-sm">Email: support@digitalstore.ru</p>
          <p className="text-sm">Тел: +7 (999) 000-00-00</p>
        </div>
      </div>
      <div className="border-t border-gray-800 text-center py-4 text-sm">
        © 2026 DigitalStore. Все права защищены.
      </div>
    </footer>
  );
}
