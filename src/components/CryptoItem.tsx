import React, { useState } from 'react';
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

const CryptoItem: React.FC<CryptoItemProps> = ({ crypto, index }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

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

      <Price isPositive={crypto.price_change_percentage_24h > 0}>
        ${crypto.current_price.toLocaleString()}
      </Price>

      <PriceChange isPositive={crypto.price_change_percentage_24h > 0}>
        {crypto.price_change_percentage_24h.toFixed(2)}%
      </PriceChange>

      <Volume>Volume (24h): ${formatVolume(crypto.total_volume)}</Volume>

      <SparklineChart data={crypto.sparkline_in_7d?.price || []} />
    </StyledCryptoItem>
  );
};

export default CryptoItem;
