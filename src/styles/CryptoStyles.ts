import styled from 'styled-components';

export const CryptoList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
`;

export const CryptoItem = styled.div`
  display: grid;
  grid-template-columns: 40px 2fr 1fr 1fr 1fr;
  align-items: center;
  background-color: ${(props) => props.theme.cardBg};
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

export const CryptoImage = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

export const Price = styled.span<{ isPositive: boolean }>`
  font-weight: bold;
  color: ${(props) =>
    props.isPositive ? props.theme.priceUp : props.theme.priceDown};
`;

export const PriceChange = styled.span<{ isPositive: boolean }>`
  color: ${(props) =>
    props.isPositive ? props.theme.priceUp : props.theme.priceDown};
`;

export const Volume = styled.span`
  font-size: 0.875rem;
  color: ${(props) => props.theme.text};
  display: flex;
  justify-content: flex-end;
`;
