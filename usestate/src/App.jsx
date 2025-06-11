
import { Link, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Muutmine from './pages/Muutmine'
import Kujundus from './pages/Kujundus'
import Ilmumine from './pages/Ilmumine'
import Hind from './pages/Hind'
import Telefon from './pages/Telefon'

function App() {
 
  return (
    <>
    <Link to="/muutmine"><button>Muutmine</button></Link>
    <Link to="/kujundus"><button>Kujundus</button></Link>
    <Link to="/ilmumine"><button>Ilmumine</button></Link>
    <Link to="/telefon"><button>Telefon</button></Link>
    <Link to="/hind"><button>Hind</button></Link>

     <Routes>
      <Route path='/' element={ <Navigate to="/ilmumine" />} />
      <Route path='/muutmine' element={ <Muutmine />} />
      <Route path='/kujundus' element={ <Kujundus />} />
      <Route path='/ilmumine' element={ <Ilmumine />} />
      <Route path='/telefon' element={ <Telefon />} />
      <Route path='/hind' element={ <Hind />} />
     </Routes>
    </>
  )
}

export default App
