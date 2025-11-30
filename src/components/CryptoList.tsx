import React, { useState, useMemo } from 'react';
import { CryptoList as StyledCryptoList } from '../styles/CryptoStyles';
import CryptoItem from './CryptoItem';
import { Crypto } from '../types/Crypto';
import SearchInput from './SearchInput';

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
    return (
      <p className="text-center text-gray-500 dark:text-gray-400">
        Идёт загрузка...
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <SearchInput onSearch={setQuery} />
      <StyledCryptoList>
        {filteredCryptos.length > 0 ? (
          filteredCryptos.map((crypto, index) => (
            <CryptoItem key={crypto.id} crypto={crypto} index={index} />
          ))
        ) : (
          <p className="text-center text-gray-500 dark:text-gray-400">
            Криптовалюты не найдены
          </p>
        )}
      </StyledCryptoList>
    </div>
  );
};

export default CryptoList;
