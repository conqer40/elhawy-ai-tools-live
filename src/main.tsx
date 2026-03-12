import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { DesignProvider } from './context/DesignContext';
import './i18n'; // Initialize i18n
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <DesignProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </DesignProvider>
    </BrowserRouter>
  </StrictMode>
);
