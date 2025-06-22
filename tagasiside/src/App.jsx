import { Link, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Tagasiside from './pages/Tagasiside'
import TagasisideAndjad from './pages/TagasisideAndjad'

function App() {

  return (
    <>
        <Link to="/"><button>Avaleht</button></Link>
        <Link to="/tagasiside"><button>Tagasiside</button></Link>
        <Link to="/tagasisideandjad"><button>Tagasisideandjad</button></Link>
        
        <Routes>
          <Route path='/'element={<div>Tere</div>} />
          <Route path='/tagasiside'element={<Tagasiside />} />
          <Route path='/tagasisideandjad'element={<TagasisideAndjad />} />
        </Routes>
    </>
  )
     
}

export default App
