import React, { createContext, useContext, useEffect } from 'react';

const ThemeContext = createContext();

// The ThemeProvider applies the tenant’s theme (for example, primary/secondary colors)
// by setting CSS variables on the root element.
export const ThemeProvider = ({ theme, children }) => {
  useEffect(() => {
    const root = document.documentElement;
    if (theme.primaryColor) {
      root.style.setProperty('--primary-color', theme.primaryColor);
    }
    if (theme.secondaryColor) {
      root.style.setProperty('--secondary-color', theme.secondaryColor);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
  
