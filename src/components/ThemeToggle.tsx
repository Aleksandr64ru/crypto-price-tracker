import { ThemeToggle as StyledThemeToggle } from '../styles/ThemeToggleStyles';

interface ThemeToggleProps {
  isDarkMode: boolean;
  onToggle: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDarkMode, onToggle }) => (
  <StyledThemeToggle onClick={onToggle}>
    {isDarkMode ? '🌞 Light Mode' : '🌜 Dark Mode'}
  </StyledThemeToggle>
);

export default ThemeToggle;
