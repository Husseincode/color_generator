/** @format */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { PageContextProvider } from './context/context.tsx';
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PageContextProvider>
      <App />
      <Toaster />
    </PageContextProvider>
  </StrictMode>
);
