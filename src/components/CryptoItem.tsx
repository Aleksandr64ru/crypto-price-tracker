import React from 'react';
import {
  CryptoItem as StyledCryptoItem,
  CryptoImage,
  Price,
  PriceChange,
  Volume,
} from '../styles/CryptoStyles';
import { Crypto } from '../types/Crypto';
import { formatVolume } from '../utils/formatNumber';

interface CryptoItemProps {
  crypto: Crypto;
  index: number;
}

const CryptoItem: React.FC<CryptoItemProps> = ({ crypto, index }) => (
  <StyledCryptoItem>
    <span>{index + 1}.</span>
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <CryptoImage src={crypto.image} alt={crypto.name} />
        <span>
          {crypto.name} ({crypto.symbol.toUpperCase()})
        </span>
      </div>
    </div>
    <Price isPositive={crypto.price_change_percentage_24h > 0}>
      ${crypto.current_price.toLocaleString()}
    </Price>
    <PriceChange isPositive={crypto.price_change_percentage_24h > 0}>
      {crypto.price_change_percentage_24h.toFixed(2)}%
    </PriceChange>
    <Volume>Volume (24h): ${formatVolume(crypto.total_volume)}</Volume>
  </StyledCryptoItem>
);

export default CryptoItem;
