import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&family=Poppins:wght@300;400;600&display=swap');

  body {
    font-family: 'Roboto', sans-serif;
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    transition: background-color 0.3s, color 0.3s;
  }

  h1, h2, button {
    font-family: 'Poppins', sans-serif;
  }
`;
