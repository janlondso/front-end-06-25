
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Avaleht from './pages/Avaleht'
import Uudised from './pages/Uudised'
import Kontakt from './pages/Kontakt'
import Meist from './pages/Meist'
import Sisselogimine from './pages/Sisselogimine'
import Months from './pages/Months'
import Animals from './pages/Animals'
import Words from './pages/Words'

function App() {

  return (
    <>
      <Link to="/">
        <button>Avalehele</button>
      </Link>

      <Link to="/uudised">
        <button>Uudiste lehele</button>
      </Link>

      <Link to="/kontakt">
        <button>Võta meiega ühendust</button>
      </Link>

      <Link to="/meist">
        <button>Info meist</button>
      </Link>
      <Link to="/sisselogimine">
        <button>Sisselogimine</button>
      </Link>
      <Link to="/months">
        <button>Months</button>
      </Link>
      <Link to="/animals">
        <button>Animals</button>
      </Link>
      <Link to="/words">
        <button>Words</button>
      </Link>

      <Routes>
        <Route path='' element={ <Avaleht /> } />
        <Route path='uudised' element={ <Uudised />} />
        <Route path='kontakt' element={ <Kontakt />} />
        <Route path='meist' element={ <Meist /> } />
        <Route path='sisselogimine' element={ <Sisselogimine /> } />
        <Route path='months' element={ <Months /> } />
        <Route path='animals' element={ <Animals /> } />
        <Route path='words' element={ <Words /> } />
      </Routes>
    </>
  )
}

export default App
