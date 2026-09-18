import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './styles';
import {
  Navbar,
  Hero,
  About,
  Projects,
  Services,
  Contact,
  Footer,
} from './components/sections';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('blense-theme');
    if (saved !== null) {
      return saved === 'dark';
    }
    // Dark-first por padrão, respeitando preferência do sistema se houver
    return true;
  });

  useEffect(() => {
    localStorage.setItem('blense-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const currentTheme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <Navbar isDarkMode={isDarkMode} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
