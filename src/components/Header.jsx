import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, User, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../context/CartContext';

export default function Header() {
  const { cartItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const user = localStorage.getItem('user');

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-blue-400">DigitalStore</Link>

        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-blue-400">Главная</Link>
          <Link to="/catalog" className="hover:text-blue-400">Каталог ПО</Link>
          {user && <Link to="/profile" className="hover:text-blue-400">Кабинет</Link>}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Link to="/cart" className="relative p-2 hover:bg-gray-800 rounded">
            <ShoppingCart size={24} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
          {user ? (
            <button onClick={handleLogout} className="text-sm bg-red-600 px-3 py-1 rounded">Выйти</button>
          ) : (
            <Link to="/login" className="p-2 hover:bg-gray-800 rounded"><User size={24} /></Link>
          )}
        </div>

        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 p-4 space-y-3">
          <Link to="/" className="block py-2" onClick={() => setIsMenuOpen(false)}>Главная</Link>
          <Link to="/catalog" className="block py-2" onClick={() => setIsMenuOpen(false)}>Каталог</Link>
          <Link to="/cart" className="block py-2" onClick={() => setIsMenuOpen(false)}>Корзина ({totalItems})</Link>
          {user ? (
            <button onClick={() => { handleLogout(); setIsMenuOpen(false); }} className="block w-full text-left py-2 text-red-400">Выйти</button>
          ) : (
            <Link to="/login" className="block py-2" onClick={() => setIsMenuOpen(false)}>Войти</Link>
          )}
        </div>
      )}
    </header>
  );
}
