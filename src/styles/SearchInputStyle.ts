import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-5px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const SearchInputWrapper = styled.div`
  position: relative; /* для иконки внутри */
  width: 100%;
  max-width: 16rem; /* md:w-64 */
  margin: 0 auto 1rem; /* центрирование и отступ снизу */
  display: flex;
  justify-content: center;
  animation: ${fadeIn} 0.5s ease-out;

  @media (min-width: 768px) {
    margin-bottom: 1.5rem;
  }

  @media (min-width: 1024px) {
    margin-bottom: 2rem;
  }
`;

export const SearchInputField = styled.input`
  width: 100%;
  padding: 0.5rem 1rem 0.5rem 2.5rem; /* отступ слева для иконки */
  border-radius: 1rem;
  border: 2px solid ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.cardBg};
  color: ${(props) => props.theme.text};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  transition: all 0.3s;

  &::placeholder {
    color: ${(props) => props.theme.text}80; /* полупрозрачный цвет */
  }

  &:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  &:focus {
    outline: none;
    border-color: transparent;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);
  }

  /* Адаптивные размеры */
  @media (min-width: 768px) {
    padding: 0.75rem 1rem 0.75rem 2.5rem;
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.25rem 0.5rem 0.25rem 2rem;
    font-size: 0.875rem;
  }
`;
