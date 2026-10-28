import { HashRouter, Routes, Route, Outlet, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import AdminProducts from './pages/admin/AdminProducts';
import AdminOrders from './pages/admin/AdminOrders';
import { CartProvider } from './context/CartContext';

const Layout = () => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-grow container mx-auto px-4 py-6">
      <Outlet />
    </main>
    <Footer />
  </div>
);

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('user');
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

function App() {
  return (
    <CartProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="catalog" element={<CatalogPage />} />
            <Route path="product/:id" element={<ProductPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="checkout" element={<CheckoutPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
            <Route path="admin/products" element={<ProtectedRoute><AdminProducts /></ProtectedRoute>} />
            <Route path="admin/orders" element={<ProtectedRoute><AdminOrders /></ProtectedRoute>} />
            <Route path="*" element={
              <div className="text-center py-20">
                <h1 className="text-3xl font-bold mb-4">404: Страница не найдена</h1>
                <a href="/" className="text-blue-500 hover:underline">На главную</a>
              </div>
            } />
          </Route>
        </Routes>
      </HashRouter>
    </CartProvider>
  );
}

export default App;
