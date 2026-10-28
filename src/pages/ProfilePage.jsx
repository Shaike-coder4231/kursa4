export default function ProfilePage() {
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Личный кабинет</h1>
      <div className="bg-white p-6 rounded-lg border mb-6">
        <h2 className="text-lg font-semibold mb-2">Данные пользователя</h2>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Статус:</strong> Активный покупатель</p>
      </div>
      <h2 className="text-xl font-bold mb-4">История заказов</h2>
      <div className="bg-gray-50 p-8 text-center rounded-lg border border-dashed">
        <p className="text-gray-500">У вас пока нет оформленных заказов.</p>
      </div>
    </div>
  );
}
