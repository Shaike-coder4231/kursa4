import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getProducts } from '../services/api';
import ProductCard from '../components/ProductCard';

export default function HomePage() {
    const [featured, setFeatured] = useState([]);

    useEffect(() => {
        getProducts(4).then(data => setFeatured(data.products));
    }, []);

    return (
        <div>
        <div className="bg-blue-600 text-white rounded-xl p-8 mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Лицензионное ПО и цифровые ключи</h1>
        <p className="mb-6 text-blue-100">Мгновенная доставка на email. Гарантия активации.</p>
        <Link to="/catalog" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
        Перейти в каталог
        </Link>
        </div>

        <h2 className="text-2xl font-bold mb-6">Популярные товары</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featured.map(product => <ProductCard key={product.id} product={product} />)}
        </div>
        </div>
    );
}
