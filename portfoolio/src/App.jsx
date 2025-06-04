import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Work from './pages/Work'
import Hobbies from './pages/Hobbies'
import Courses from './pages/Courses'

function App() {

  return (
    <div className='app'>
      <img className="main-picture" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29ufGVufDB8fDB8fHww" alt="" />
      <div className="rectangle"></div>

      <div className="navigation-pictures">
        <Link className="main-link" to="work">
          <img src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnJhbmRzfGVufDB8fDB8fHww" alt="" />
          <p>Tööde lehele</p>
        </Link>
        <Link className="main-link" to="hobbies"> 
          <img src="https://images.unsplash.com/photo-1508599589920-14cfa1c1fe4d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJyYW5kc3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
          <p>Hobide lehele</p>
        </Link>
        <Link className="main-link" to="courses">
          <img src="https://images.unsplash.com/photo-1614231125961-38323d6c485b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YnJhbmRzfGVufDB8fDB8fHww" alt="" />
          <p>Kursuste lehele</p>
        </Link>
      </div>

      <iframe width="560" height="315" src="https://www.youtube.com/embed/nuDpLN2dazU?si=7VBuz5MUBUEupkZF" title="YouTube video player" frameborder="0" allow="" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

      <Routes>
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
