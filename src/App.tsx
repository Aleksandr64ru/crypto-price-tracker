import React, { useEffect, useState } from 'react';
import { getCryptoPrice } from './services/cryptoApi';
import styled from 'styled-components';

const App: React.FC = () => {
  const [prices, setPrices] = useState<{ [key: string]: number }>({});
  const cryptocurrencies = ['bitcoin', 'ethereum', 'litecoin'];

  useEffect(() => {
    const fetchPrices = async () => {
      const newPrices: { [key: string]: number } = {};
      for (const crypto of cryptocurrencies) {
        const price = await getCryptoPrice(crypto);
        if (price !== null) {
          newPrices[crypto] = price;
        }
      }
      setPrices(newPrices);
    };

    fetchPrices();
  }, []);

  return (
    <Container>
      <Header>Crypto Price Tracker</Header>
      <CryptoList>
        {cryptocurrencies.map((crypto) => (
          <CryptoItem key={crypto}>
            <CryptoTitle>
              {crypto.charAt(0).toUpperCase() + crypto.slice(1)} Price
            </CryptoTitle>
            {prices[crypto] ? (
              <CryptoPrice>${prices[crypto].toLocaleString()}</CryptoPrice>
            ) : (
              <LoadingText>Loading...</LoadingText>
            )}
          </CryptoItem>
        ))}
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
  flex-direction: column;
  align-items: center;
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
`;

const CryptoPrice = styled.p`
  font-size: 1.5rem;
  color: #2cbe76;
  font-weight: bold;
`;

const LoadingText = styled.p`
  font-size: 1.25rem;
  color: #888;
`;

export default App;
