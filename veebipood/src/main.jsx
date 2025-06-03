import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom"

// Navigeerimiseks ehk URL-i vahetuseks on vaja:
// 1. installida node_modules kausta navigeerimiseks vajalikud koodijupid
//  --> npm install react-router-dom
// 2. importida BrowserRouter sellest installitud moodulist
//  --> import { BrowserRouter } from "react-router-dom"
// 3. ümbritseda <App /> element imporditud BrowserRouteriga
// 4. teha URLi ja HTMLi seoseid App.js failis

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
