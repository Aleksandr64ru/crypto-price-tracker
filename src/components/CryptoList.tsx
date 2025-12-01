import React, { useState, useMemo } from 'react';
import CryptoItem from './CryptoItem';
import SearchInput from './SearchInput';
import { Crypto } from '../types/Crypto';
import {
  CryptoListWrapper,
  StyledCryptoList,
  LoadingText,
  NoResultsText,
} from '../styles/CryptoListStyles';

interface CryptoListProps {
  cryptos: Crypto[];
  loading: boolean;
}

const CryptoList: React.FC<CryptoListProps> = ({ cryptos, loading }) => {
  const [query, setQuery] = useState<string>('');

  const filteredCryptos = useMemo(() => {
    if (!query) return cryptos;
    return cryptos.filter(
      (crypto) =>
        crypto.name.toLowerCase().includes(query.toLowerCase()) ||
        crypto.symbol.toLowerCase().includes(query.toLowerCase()),
    );
  }, [query, cryptos]);

  if (loading) {
    return <LoadingText>Идёт загрузка...</LoadingText>;
  }

  return (
    <CryptoListWrapper>
      <SearchInput onSearch={setQuery} />
      <StyledCryptoList>
        {filteredCryptos.length > 0 ? (
          filteredCryptos.map((crypto, index) => (
            <CryptoItem key={crypto.id} crypto={crypto} index={index} />
          ))
        ) : (
          <NoResultsText>Криптовалюты не найдены</NoResultsText>
        )}
      </StyledCryptoList>
    </CryptoListWrapper>
  );
};

export default CryptoList;
