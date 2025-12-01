import { ThemeToggle as StyledThemeToggle } from '../styles/ThemeToggleStyles';

interface ThemeToggleProps {
  isDarkMode: boolean;
  onToggle: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDarkMode, onToggle }) => (
  <StyledThemeToggle onClick={onToggle} isDarkMode={isDarkMode}>
    <span className="emoji">{isDarkMode ? '🌞' : '🌜'}</span>
    <span className="text">{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
  </StyledThemeToggle>
);

export default ThemeToggle;
