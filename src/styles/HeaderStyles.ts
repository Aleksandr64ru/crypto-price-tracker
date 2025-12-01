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

export const HeaderTitle = styled.h1<{ isDarkMode: boolean }>`
  font-size: 2rem;
  margin: 0;
  font-family: 'Poppins', sans-serif;

  background: ${(props) =>
    props.isDarkMode
      ? 'linear-gradient(270deg, #6a11cb, #2575fc, #00c6ff)'
      : 'linear-gradient(270deg, #ff6ec4, #7873f5, #42e695, #f9d423)'};
  background-size: 800% 800%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradientAnimation 10s ease infinite;

  @keyframes gradientAnimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;
