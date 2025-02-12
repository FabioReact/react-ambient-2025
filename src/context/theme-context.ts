import { createContext } from 'react';

type ThemeContextType = {
  isDarkMode: boolean;
  toggleDarkMode: (darkMode: boolean) => void;
};

const ThemeContext = createContext<ThemeContextType>(null!);

export { ThemeContext }