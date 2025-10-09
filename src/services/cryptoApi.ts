import axios from 'axios';

// Функция для получения данных о нескольких криптовалютах
export const getCryptoPrices = async () => {
  try {
    const response = await axios.get(
      'https://api.coingecko.com/api/v3/coins/markets',
      {
        params: {
          vs_currency: 'usd',
          order: 'market_cap_desc', // Сортируем по рыночной капитализации
          per_page: 15, // Получаем первые 10 криптовалют
          page: 1, // Начинаем с первой страницы
          sparkline: true, // не большай график рядом с монетой
        },
      },
    );
    return response.data; // Возвращаем данные
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};
