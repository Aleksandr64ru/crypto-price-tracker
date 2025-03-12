import styled from 'styled-components';

export const ThemeToggle = styled.button`
  padding: 10px;
  background-color: ${(props) => props.theme.cardBg};
  border: 2px solid ${(props) => props.theme.text};
  border-radius: 5px;
  color: ${(props) => props.theme.text};
  cursor: pointer;
  transition:
    background-color 0.3s,
    color 0.3s,
    border-color 0.3s;

  &:hover {
    background-color: ${(props) => props.theme.text};
    color: ${(props) => props.theme.background};
    border-color: ${(props) => props.theme.background};
  }
`;
