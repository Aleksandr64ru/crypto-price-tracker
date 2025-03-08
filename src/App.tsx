import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { getCryptoPrices } from './services/cryptoApi';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyle } from './styles/GlobalStyle';
import {
  CryptoList,
  CryptoItem,
  CryptoImage,
  Price,
  PriceChange,
} from './styles/CryptoStyles';
import { ThemeToggle } from './styles/ThemeToggleStyles';
import { Header, HeaderTitle } from './styles/HeaderStyles';

const App: React.FC = () => {
  const [cryptos, setCryptos] = useState<any[]>([]);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(
    () => localStorage.getItem('theme') === 'dark',
  );

  useEffect(() => {
    const fetchPrices = async () => {
      const prices = await getCryptoPrices();
      setCryptos(prices);
    };
    fetchPrices();
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Header>
        <HeaderTitle>Crypto Price Tracker</HeaderTitle>
        <ThemeToggle onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? '🌞 Light Mode' : '🌜 Dark Mode'}
        </ThemeToggle>
      </Header>
      <CryptoList>
        {cryptos.length > 0 ? (
          cryptos.map((crypto, index) => (
            <CryptoItem key={crypto.id}>
              <span>{index + 1}.</span>
              <CryptoImage src={crypto.image} alt={crypto.name} />
              <span>
                {crypto.name} ({crypto.symbol.toUpperCase()})
              </span>
              <Price isPositive={crypto.price_change_percentage_24h > 0}>
                ${crypto.current_price.toLocaleString()}
              </Price>
              <PriceChange isPositive={crypto.price_change_percentage_24h > 0}>
                {crypto.price_change_percentage_24h.toFixed(2)}%
              </PriceChange>
            </CryptoItem>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </CryptoList>
    </ThemeProvider>
  );
};

export default App;
