import axios from 'axios';

const BASE_URL = 'https://api.coingecko.com/api/v3';

export const getCryptoPrice = async (id: string) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/simple/price?ids=${id}&vs_currencies=usd`,
    );
    return response.data[id].usd;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};
