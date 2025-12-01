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
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
