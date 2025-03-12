import React from 'react';
import { CryptoList as StyledCryptoList } from '../styles/CryptoStyles';
import CryptoItem from './CryptoItem';
import { Crypto } from '../types/Crypto';
// Описание пропсов для компонента CryptoList
interface CryptoListProps {
  cryptos: Crypto[];
}

const CryptoList: React.FC<CryptoListProps> = ({ cryptos }) => (
  <StyledCryptoList>
    {cryptos.length > 0 ? (
      cryptos.map((crypto, index) => (
        <CryptoItem key={crypto.id} crypto={crypto} index={index} />
      ))
    ) : (
      <p>Loading...</p>
    )}
  </StyledCryptoList>
);

export default CryptoList;
