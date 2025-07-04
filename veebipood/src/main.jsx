import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './i18n';
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'leaflet/dist/leaflet.css';




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

// 1. 3.06 - React algus, pages, navigeerimine

// 2. 5.06. - UseState, useRef

// 3. 10.06. Dünaamiline CSS, componendi väljatõste
// veebimajutud: Firebase .web.app, toastify