import styled from 'styled-components';

export const CryptoItem = styled.div`
  display: grid;
  grid-template-columns: 40px 2fr 1fr 1fr 1fr 0.5fr;
  gap: 6px;
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

  // 📱 Адаптация под планшеты
  @media (max-width: 768px) {
    grid-template-columns: 30px 2fr 1fr 1fr 1fr 1fr;
    gap: 5px;
    padding: 8px;
  }

  // 📱 Адаптация под мобильные
  @media (max-width: 480px) {
    gap: 2px;
    padding: 5px;
  }
`;

export const Price = styled.span<{ isPositive: boolean }>`
  font-weight: bold;
  color: ${(props) =>
    props.isPositive ? props.theme.priceUp : props.theme.priceDown};

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

export const PriceChange = styled.span<{ isPositive: boolean }>`
  color: ${(props) =>
    props.isPositive ? props.theme.priceUp : props.theme.priceDown};

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const Volume = styled.span`
  font-size: 0.875rem;
  color: ${(props) => props.theme.text};
  display: flex;
  justify-content: flex-end;

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;
