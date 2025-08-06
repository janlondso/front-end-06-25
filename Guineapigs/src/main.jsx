import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GuineaPigsContainer from "./containers/GuineaPigsContainer"
import './index.css'

createRoot(document.getElementById('app')).render(
  <StrictMode>
    <GuineaPigsContainer />
  </StrictMode>,
)
