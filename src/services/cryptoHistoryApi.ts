import axios from 'axios';
export const getCryptoPricesWithHistory = async (cryptoId: string) => {
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${cryptoId}/market_chart`,
      {
        params: {
          vs_currency: 'usd',
          days: '1', // Получаем данные за 1 день (24 часа)
          interval: 'minute', // Данные по минутам
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching historical data:', error);
    return { prices: [] };
  }
};
