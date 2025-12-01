import styled from 'styled-components';

export const ThemeToggle = styled.button<{ isDarkMode?: boolean }>`
  padding: 10px 20px;
  border: 2px solid ${(props) => props.theme.text};
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  background-color: ${(props) => props.theme.cardBg};
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s;

  .emoji {
    font-size: 1.2rem;
  }
  сд .text {
    background: ${(props) =>
      props.isDarkMode
        ? 'linear-gradient(270deg, #6a11cb, #2575fc, #00c6ff)'
        : 'linear-gradient(270deg, #ff6ec4, #7873f5, #42e695, #f9d423)'};
    background-size: 400% 400%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: gradientAnimation 8s ease infinite;
  }

  &:hover {
    border-color: ${(props) => props.theme.text};
  }

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
