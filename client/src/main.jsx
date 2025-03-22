import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/main_screen'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainScreen />
  </StrictMode>,
)
