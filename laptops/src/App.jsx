import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Avaleht from './pages/Avaleht'
import VaataArvuteid from './pages/VaataArvuteid'
import Lisaarvuti from './pages/Lisaarvuti'
import Meist from './pages/Meist'
import Kontakt from './pages/Kontakt'
import Seaded from './pages/Seaded'

function App() {

  return (
    <div>
      <Link to="/">
        <button>Avalehele</button>
      </Link>
      <Link to="/all">
        <button>Vaata sülearvuteid</button>
      </Link>
      <Link to="/add">
        <button>Lisa sülearvuti</button>
      </Link>
      <Link to="/about-us">
        <button>Meist</button>
      </Link>
      <Link to="/contact">
        <button>Kontakt</button>
      </Link>
      <Link to="/seaded">
        <button>Seaded</button>
      </Link>

      <Routes>
        <Route path='' exact element={ <Avaleht /> } />
        <Route path='all' exact element={ <VaataArvuteid /> } />
        <Route path='add' exact element={ <Lisaarvuti /> } />
        <Route path='about-us' exact element={ <Meist /> } />
        <Route path='contact' exact element={ <Kontakt /> } />
        <Route path='seaded' element={ <Seaded />} />
      </Routes>
    </div>
  )
}

export default App
