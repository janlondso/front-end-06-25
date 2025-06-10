
import { Link, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Muutmine from './pages/Muutmine'
import Kujundus from './pages/Kujundus'
import Ilmumine from './pages/Ilmumine'

function App() {
 
  return (
    <>
    <Link to="muutmine">
      <button>Muutmine</button>
    </Link>
    <Link to="kujundus">
      <button>Kujundus</button>
    </Link>
    <Link to="ilmumine">
      <button>Ilmumine</button>
    </Link>

     <Routes>
      <Route path='/' element={ <Navigate to="/ilmumine" />} />
      <Route path='/muutmine' element={ <Muutmine />} />
      <Route path='/kujundus' element={ <Kujundus />} />
      <Route path='/ilmumine' element={ <Ilmumine />} />
     </Routes>
    </>
  )
}

export default App
