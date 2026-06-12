import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { App } from './App';
import { LanguageProvider } from './context/LanguageContext';
import { ScrollToTop } from './components/layout/ScrollToTop';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LanguageProvider>
      <HashRouter>
        <ScrollToTop />
        <App />
      </HashRouter>
    </LanguageProvider>
  </React.StrictMode>
);
