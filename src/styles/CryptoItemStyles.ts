// src/styles/CryptoItemStyles.ts
import styled from 'styled-components';

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ImageContainer = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
`;

export const StyledCryptoImage = styled.img<{ $loaded: boolean }>`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  transition: opacity 0.3s ease;
  opacity: ${({ $loaded }) => ($loaded ? 1 : 0)};
  display: ${({ $loaded }) => ($loaded ? 'block' : 'none')};
`;

// 🆕 Обёртка для колонки (замена div с flexDirection: 'column')
export const CryptoColumn = styled.div`
  display: flex;
  flex-direction: column;
`;
