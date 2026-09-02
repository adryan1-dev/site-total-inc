import { StrictMode } from 'react'
import { preload } from 'react-dom'
import { createRoot } from 'react-dom/client'
import archivoLatin from '@fontsource-variable/archivo/files/archivo-latin-wdth-normal.woff2?url'
import App from './App.tsx'
import './index.css'

preload(archivoLatin, { as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' })

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
