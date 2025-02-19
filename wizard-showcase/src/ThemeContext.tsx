import React, { createContext, useContext, useEffect } from 'react';

export interface Theme {
  primaryColor: string;
  secondaryColor: string;
  cssFile?: string;
  [key: string]: any;
}

const ThemeContext = createContext<Theme>({ primaryColor: '', secondaryColor: '' });

export const ThemeProvider: React.FC<{ theme: Theme }> = ({ theme, children }) => {
  useEffect(() => {
    const root = document.documentElement;
    if (theme.primaryColor) {
      root.style.setProperty('--primary-color', theme.primaryColor);
    }
    if (theme.secondaryColor) {
      root.style.setProperty('--secondary-color', theme.secondaryColor);
    }
    // Load optional tenant CSS file override.
    const existingLink = document.getElementById('tenant-theme-css') as HTMLLinkElement | null;
    if (theme.cssFile) {
      if (existingLink) {
        existingLink.href = theme.cssFile;
      } else {
        const link = document.createElement('link');
        link.id = 'tenant-theme-css';
        link.rel = 'stylesheet';
        link.href = theme.cssFile;
        document.head.appendChild(link);
      }
    } else if (existingLink) {
      existingLink.parentNode?.removeChild(existingLink);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): Theme => useContext(ThemeContext);
  
