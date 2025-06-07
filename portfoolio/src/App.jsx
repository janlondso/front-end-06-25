import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Work from './pages/Work'
import Hobbies from './pages/Hobbies'
import Courses from './pages/Courses'
import Contact from './pages/Contact'
import AboutMe from './pages/AboutMe'
import Home from './pages/Home'
import Seaded from './pages/Seaded'

function App() {

  return (
    <div className='app'>

      <Link to="/">
        <button>Avaleht</button>
      </Link>
      <Link to="/about-me">
        <button>Minust</button>
      </Link>
      <Link to="/contact">
        <button>Kontakt</button>
      </Link>

      <Link to="/lang">
        <button >Vali keel</button>
      </Link>

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
