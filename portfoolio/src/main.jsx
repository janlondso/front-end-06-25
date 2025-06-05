import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)

// 1. 03.06. - React algus, pages, navigerimine
// 2. 5.06. - useState, useRef
// 3. 10.06 - veebimajutus: Firebase .web.app

