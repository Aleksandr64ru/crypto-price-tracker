import React, { useState } from 'react';
import {
  SearchInputWrapper,
  SearchInputField,
} from '../styles/SearchInputStyle';

interface SearchInputProps {
  placeholder?: string;
  onSearch: (query: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = 'Поиск криптовалюты...',
  onSearch,
}) => {
  const [query, setQuery] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <SearchInputWrapper>
      <SearchInputField
        type="text"
        value={query}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </SearchInputWrapper>
  );
};

export default SearchInput;
