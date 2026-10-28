import { useState, useEffect } from 'react';
import { getProducts } from '../services/api';
import ProductCard from '../components/ProductCard';

export default function CatalogPage() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState('');

    useEffect(() => {
        getProducts()
        .then(data => { setProducts(data.products); setLoading(false); })
        .catch(err => { setError(err.message); setLoading(false); });
    }, []);

    const filteredProducts = products.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase())
    );

    if (loading) return <div className="p-10 text-center">Загрузка цифровых лицензий...</div>;
    if (error) return <div className="p-10 text-center text-red-500">Ошибка: {error}</div>;

    return (
        <div>
        <h1 className="text-2xl font-bold mb-4">Каталог ПО и лицензий</h1>
        <input
        type="text"
        placeholder="Поиск по названию..."
        className="w-full p-2 border rounded mb-6"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
        ))}
        </div>
        </div>
    );
}
