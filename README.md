# DigitalStore — Курсовой проект (ПМ 04)

## Описание
Клиентская часть интернет-магазина цифровых товаров (лицензий и ПО).

## Стек технологий
- React 18 + Vite
- React Router DOM (маршрутизация)
- Context API (управление состоянием корзины)
- Tailwind CSS (адаптивная верстка, mobile-first)
- DummyJSON API (имитация бэкенда)

## Как запустить
1. Установите зависимости: `npm install`
2. Запустите сервер разработки: `npm run dev`
3. Откройте http://localhost:5173 в браузере.

## Структура проекта
- `src/components` — переиспользуемые компоненты (Header, Footer, ProductCard)
- `src/pages` — страницы приложения
- `src/context` — глобальное состояние (CartContext)
- `src/services` — запросы к API
