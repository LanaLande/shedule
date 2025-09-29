import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {HeroUIProvider} from '@heroui/react'

import { BrowserRouter, Routes, Route } from 'react-router'
import { DaysPage } from './pages/days-page'
import { SosPage } from './pages/lana-page'
import { ROUTES } from './config/routes/routes.config'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <HeroUIProvider>
         <BrowserRouter>
            <Routes>
               <Route path={ROUTES.daysPage} element={<DaysPage/>}/>
               <Route path={ROUTES.sosPage} element={<SosPage/>}/>
            </Routes>
         </BrowserRouter>
      </HeroUIProvider>
  </StrictMode>,
)
