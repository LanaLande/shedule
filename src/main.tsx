import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { HeroUIProvider } from '@heroui/react';

import { BrowserRouter, Routes, Route } from 'react-router';
import { MainPage } from './pages/main-page';
import { SosPage } from './pages/lana-page';
import { ROUTES } from './app/routes/routes';
import { TimeProvider } from './app/providers/time-provider';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HeroUIProvider>
      <BrowserRouter>
        <TimeProvider>
          <Routes>
            <Route path={ROUTES.mainPage} element={<MainPage />} />
            <Route path={ROUTES.sosPage} element={<SosPage />} />
          </Routes>
        </TimeProvider>
      </BrowserRouter>
    </HeroUIProvider>
  </StrictMode>,
);
