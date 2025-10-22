import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { HeroUIProvider } from '@heroui/react';

import { BrowserRouter, Routes, Route } from 'react-router';
import { MainPage } from './pages/main-page';
import { SosPage } from './pages/lana-page';
import { ROUTES } from './app/routes/routes';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HeroUIProvider>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.mainPage} element={<MainPage />} />
          <Route path={ROUTES.sosPage} element={<SosPage />} />
        </Routes>
      </BrowserRouter>
    </HeroUIProvider>
  </StrictMode>,
);
