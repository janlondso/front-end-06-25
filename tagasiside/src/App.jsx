import { Link, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Tagasiside from './pages/Tagasiside'

function App() {

  return (
    <>
        <Link to="/"><button>Avaleht</button></Link>
        <Link to="/tagasiside"><button>Tagasiside</button></Link>
        
        <Routes>
          <Route path='/'element={<div>Tere</div>} />
          <Route path='/tagasiside'element={<Tagasiside />} />
        </Routes>
    </>
  )
     
}

export default App
