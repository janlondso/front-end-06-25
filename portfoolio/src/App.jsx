import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Work from './pages/Work'
import Hobbies from './pages/Hobbies'
import Courses from './pages/Courses'
import Contact from './pages/Contact'
import AboutMe from './pages/AboutMe'
import Home from './pages/Home'
import Seaded from './pages/Seaded'
import NavBar from './components/NavBar'

function App() {

  return (
    <div className='app'>

      {/* <NavBar /> - läks avalehele */}
      
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='about-me' element={<AboutMe />} />
        <Route path='contact' element={ <Contact /> } />
        <Route path="lang" element={<Seaded />} />

        {/*  */}
        <Route path='work' element={ <Work />} />
        <Route path='hobbies' element={ <Hobbies /> } />
        <Route path='courses' element={ <Courses />} />
      </Routes>

        <a href="https://facebook.com/jee" className="facebook-button">
          <img src="/facebook.png" alt="Facebook logo" />
          <span>Facebook</span>
        </a>

    </div>
  )
}

export default App
