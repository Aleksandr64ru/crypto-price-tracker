import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: ${(props) => props.theme.cardBg};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin-bottom: 20px;
  transition: background-color 0.3s;
`;

export const HeaderTitle = styled.h1`
  font-size: 2rem;
  color: ${(props) => props.theme.text};
  margin: 0;
  font-family: 'Poppins', sans-serif;
`;
