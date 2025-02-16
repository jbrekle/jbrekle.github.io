import React, { useState, useEffect } from 'react';
import { loadConfig } from './configLoader';
import Wizard from './components/Wizard';
import { LanguageProvider, useLanguage } from './i18n';
import { ThemeProvider } from './ThemeContext';

function App() {
  const [config, setConfig] = useState(null);

  useEffect(() => {
    // Load the config file at runtime (based on URL param "tenant")
    loadConfig()
      .then(cfg => {
        setConfig(cfg);
      })
      .catch(err => {
        console.error("Failed to load config:", err);
      });
  }, []);

  if (!config) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Loading configuration...</p>
      </div>
    );
  }

  return (
    <ThemeProvider theme={config.theme}>
      <LanguageProvider defaultLanguage={navigator.language.slice(0, 2)}>
        <div className="min-h-screen bg-gray-100">
          {/* Header with title and language selector */}
          <header className="bg-white shadow">
            <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
              <h1 className="text-xl font-bold">{config.title || "Wizard Prototype"}</h1>
              <LanguageSelector />
            </div>
          </header>
          <main className="max-w-4xl mx-auto py-6 px-4">
            <Wizard config={config} />
          </main>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

function LanguageSelector() {
  const { language, setLanguage, availableLanguages } = useLanguage();
  return (
    <select
      value={language}
      onChange={(e) => setLanguage(e.target.value)}
      className="border rounded p-1"
    >
      {availableLanguages.map(lang => (
        <option key={lang.code} value={lang.code}>
          {lang.label}
        </option>
      ))}
    </select>
  );
}

export default App;
  
