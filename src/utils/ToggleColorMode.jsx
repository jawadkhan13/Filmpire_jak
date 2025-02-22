import React,{ useState,useMemo, createContext } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

export const ColorModeContext = createContext();
const ToggleColorMode = ({ children }) => {
    const [mode, setmode] = useState('dark');

    const toggleColorMode = () => {
        setmode((prevMode) => prevMode === 'dark' ? 'light' : 'dark');
      };

    const theme = useMemo(() => createTheme({
            palette: {
              mode,
            },
          }),[mode])
  return (
    <ColorModeContext.Provider value={{mode, setmode, toggleColorMode}}>
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default ToggleColorMode