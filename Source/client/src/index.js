import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <HelmetProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </HelmetProvider>
);