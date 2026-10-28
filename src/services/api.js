const BASE_URL = 'https://dummyjson.com';

export const getProducts = async (limit = 20) => {
  const res = await fetch(`${BASE_URL}/products?limit=${limit}&delay=500`);
  if (!res.ok) throw new Error('Ошибка загрузки товаров');
  return res.json();
};

export const getProductById = async (id) => {
  const res = await fetch(`${BASE_URL}/products/${id}?delay=300`);
  if (!res.ok) throw new Error('Товар не найден');
  return res.json();
};

export const getCart = async (userId = 1) => {
  const res = await fetch(`${BASE_URL}/carts/user/${userId}?delay=300`);
  return res.json();
};
