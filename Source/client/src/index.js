import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/700.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Suspense>
);