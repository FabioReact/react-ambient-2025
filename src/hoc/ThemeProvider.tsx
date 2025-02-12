import { ThemeContext } from '@/context/theme-context';
import { PropsWithChildren, useState } from 'react';

const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode((b) => !b);
  };
  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
