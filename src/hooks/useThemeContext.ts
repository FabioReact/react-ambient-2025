import { ThemeContext } from '@/context/theme-context';
import { useContext } from 'react';

const useThemeContext = () => useContext(ThemeContext);

export default useThemeContext;
