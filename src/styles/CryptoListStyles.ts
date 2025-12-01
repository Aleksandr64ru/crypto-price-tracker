import styled from 'styled-components';

export const CryptoListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const LoadingText = styled.p`
  text-align: center;
  color: ${(props) => props.theme.textSecondary};
`;

export const NoResultsText = styled.p`
  text-align: center;
  color: ${(props) => props.theme.textSecondary};
`;

export const StyledCryptoList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  // Планшеты
  @media (min-width: 769px) and (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }

  // Десктоп
  @media (min-width: 1025px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;
