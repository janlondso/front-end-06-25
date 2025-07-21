import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='' element={ <HomePage /> } />
        <Route path='/notfound' element={ <NotFound /> } />
      </Routes>
    </div>
  )
}

export default App
