import styled from 'styled-components';

export const ThemeToggle = styled.button`
  padding: 10px;
  border: 2px solid ${(props) => props.theme.text};
  border-radius: 5px;
  color: ${(props) => props.theme.text};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.text};
    color: ${(props) => props.theme.background};
  }
`;
