// App.tsx
import React, { useEffect, useState } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { getCryptoPrices } from './services/cryptoApi';
import { lightTheme, darkTheme } from './theme';
import styled from 'styled-components';

// Глобальные стили
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&family=Poppins:wght@300;400;600&display=swap');

  body {
    font-family: 'Roboto', sans-serif;
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    transition: background-color 0.3s, color 0.3s;
  }

  h1, h2 {
    font-family: 'Poppins', sans-serif;
  }

  button {
    font-family: 'Poppins', sans-serif;
  }
`;

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
      <Container>
        <Header>
          Crypto Price Tracker
          <ThemeToggle onClick={() => setIsDarkMode(!isDarkMode)}>
            {isDarkMode ? '🌞 Light Mode' : '🌜 Dark Mode'}
          </ThemeToggle>
        </Header>
        <CryptoList>
          {cryptos.length > 0 ? (
            cryptos.map((crypto) => (
              <CryptoItem key={crypto.id}>
                <CryptoTitle>
                  <CryptoImage src={crypto.image} alt={crypto.name} />
                  {crypto.name} ({crypto.symbol.toUpperCase()})
                </CryptoTitle>
                <CryptoPrice>
                  ${crypto.current_price.toLocaleString()}
                </CryptoPrice>
                <MarketCap>
                  Market Cap: ${crypto.market_cap.toLocaleString()}
                </MarketCap>
                <Volume>
                  Volume (24h): ${crypto.total_volume.toLocaleString()}
                </Volume>
                <PriceChange24h
                  isPositive={crypto.price_change_percentage_24h > 0}
                >
                  24h Change: {crypto.price_change_percentage_24h.toFixed(2)}%
                </PriceChange24h>
              </CryptoItem>
            ))
          ) : (
            <LoadingText>Loading...</LoadingText>
          )}
        </CryptoList>
      </Container>
    </ThemeProvider>
  );
};

// Styled Components
const Container = styled.div`
  padding: 20px;
  text-align: center;
  min-height: 100vh;
`;

const Header = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ThemeToggle = styled.button`
  padding: 10px;
  background: none;
  border: 2px solid ${(props) => props.theme.text};
  border-radius: 5px;
  color: ${(props) => props.theme.text};
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => props.theme.text};
    color: ${(props) => props.theme.background};
  }
`;

const CryptoList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const CryptoItem = styled.div`
  background-color: ${(props) => props.theme.cardBg};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: left;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const CryptoTitle = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

const CryptoImage = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`;

const CryptoPrice = styled.p`
  font-size: 1.5rem;
  color: ${(props) => props.theme.priceUp};
  font-weight: bold;
`;

const MarketCap = styled.p`
  font-size: 1rem;
`;

const Volume = styled.p`
  font-size: 1rem;
`;

const PriceChange24h = styled.p<{ isPositive: boolean }>`
  font-size: 1rem;
  color: ${(props) =>
    props.isPositive ? props.theme.priceUp : props.theme.priceDown};
`;

const LoadingText = styled.p`
  font-size: 1.25rem;
  color: #888;
`;

export default App;
