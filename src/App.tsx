import React, { useEffect, useState } from 'react';
import { getCryptoPrices } from './services/cryptoApi';
import styled from 'styled-components';

const App: React.FC = () => {
  const [cryptos, setCryptos] = useState<any[]>([]);

  useEffect(() => {
    const fetchPrices = async () => {
      const prices = await getCryptoPrices();
      setCryptos(prices);
    };

    fetchPrices();
  }, []);

  return (
    <Container>
      <Header>Crypto Price Tracker</Header>
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
  );
};

// Styled components
const Container = styled.div`
  font-family: 'Arial', sans-serif;
  background-color: #f4f4f4;
  padding: 20px;
  text-align: center;
  min-height: 100vh;
`;

const Header = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: #333;
`;

const CryptoList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const CryptoItem = styled.div`
  background-color: #fff;
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
  color: #444;
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
  color: #2cbe76;
  font-weight: bold;
`;

const MarketCap = styled.p`
  font-size: 1rem;
  color: #777;
`;

const Volume = styled.p`
  font-size: 1rem;
  color: #777;
`;

const PriceChange24h = styled.p<{ isPositive: boolean }>`
  font-size: 1rem;
  color: ${(props) => (props.isPositive ? 'green' : 'red')};
`;

const LoadingText = styled.p`
  font-size: 1.25rem;
  color: #888;
`;

export default App;
