import React from 'react';
import { Header as StyledHeader, HeaderTitle } from '../styles/HeaderStyles';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, onToggleTheme }) => (
  <StyledHeader>
    <HeaderTitle isDarkMode={isDarkMode}>Crypto Price Tracker</HeaderTitle>
    <ThemeToggle isDarkMode={isDarkMode} onToggle={onToggleTheme} />
  </StyledHeader>
);

export default Header;
