import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        localStorage.setItem('user', JSON.stringify({ email, role: 'user' }));
        navigate('/profile');
    };

    return (
        <div className="max-w-md mx-auto mt-10">
        <h1 className="text-2xl font-bold mb-6 text-center">Вход в личный кабинет</h1>
        <form onSubmit={handleLogin} className="space-y-4 bg-white p-6 rounded-lg border">
        <div>
        <label className="block text-sm font-medium mb-1">Email</label>
        <input required type="email" className="w-full border p-2 rounded" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div>
        <label className="block text-sm font-medium mb-1">Пароль</label>
        <input required type="password" className="w-full border p-2 rounded" defaultValue="123456" />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Войти</button>
        <p className="text-xs text-gray-500 text-center mt-4">Для демо используйте любой email и пароль "123456"</p>
        </form>
        </div>
    );
}
