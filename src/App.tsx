import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { getCryptoPrices } from './services/cryptoApi';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyle } from './styles/GlobalStyle';
import Header from './components/Header';
import CryptoList from './components/CryptoList';
import { Crypto } from './types/Crypto';

const App: React.FC = () => {
  const [cryptos, setCryptos] = useState<Crypto[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // <-- добавлено
  const [isDarkMode, setIsDarkMode] = useState<boolean>(
    () => localStorage.getItem('theme') === 'dark',
  );

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const prices = await getCryptoPrices();
        setCryptos(prices);
      } finally {
        setLoading(false); // <-- загрузка закончена
      }
    };
    fetchPrices();
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Header
        isDarkMode={isDarkMode}
        onToggleTheme={() => setIsDarkMode(!isDarkMode)}
      />

      <CryptoList cryptos={cryptos} loading={loading} />
    </ThemeProvider>
  );
};

export default App;
