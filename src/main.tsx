import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Page } from './pages/page'
import {HeroUIProvider} from '@heroui/react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <HeroUIProvider>
        <Page/>
     </HeroUIProvider>
  </StrictMode>,
)
