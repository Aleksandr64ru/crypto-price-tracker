import React, { useState, memo } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import {
  CryptoItem as StyledCryptoItem,
  Price,
  PriceChange,
  Volume,
} from '../styles/CryptoStyles';
import {
  ImageWrapper,
  ImageContainer,
  StyledCryptoImage,
  CryptoColumn,
} from '../styles/CryptoItemStyles';
import { Crypto } from '../types/Crypto';
import { formatVolume } from '../utils/formatNumber';
import SparklineChart from './SparklineChart';

interface CryptoItemProps {
  crypto: Crypto;
  index: number;
}

const CryptoItem: React.FC<CryptoItemProps> = memo(({ crypto, index }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  // безопасные значения вместо null
  const price = crypto.current_price ?? 0;
  const change24h = crypto.price_change_percentage_24h ?? 0;
  const volume24h = crypto.total_volume ?? 0;
  const sparkline = crypto.sparkline_in_7d?.price ?? [];

  return (
    <StyledCryptoItem>
      <span>{index + 1}.</span>

      <CryptoColumn>
        <ImageWrapper>
          <ImageContainer>
            {!imageLoaded && (
              <Skeleton
                circle
                width={32}
                height={32}
                baseColor="#e0e0e0"
                highlightColor="#f5f5f5"
              />
            )}

            <StyledCryptoImage
              src={crypto.image}
              alt={crypto.name}
              $loaded={imageLoaded}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageLoaded(true)}
            />
          </ImageContainer>

          <span>
            {crypto.name} ({crypto.symbol.toUpperCase()})
          </span>
        </ImageWrapper>
      </CryptoColumn>

      <Price isPositive={change24h > 0}>${price.toLocaleString()}</Price>

      <PriceChange isPositive={change24h > 0}>
        {change24h.toFixed(2)}%
      </PriceChange>
      <SparklineChart data={sparkline} />
      <Volume>Volume (24h): ${formatVolume(volume24h)}</Volume>
    </StyledCryptoItem>
  );
});

export default CryptoItem;
