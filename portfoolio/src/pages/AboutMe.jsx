import {Link} from 'react-router-dom'

function AboutMe() {
  return (
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

         <iframe width="560" height="315" src="https://www.youtube.com/embed/nuDpLN2dazU?si=7VBuz5MUBUEupkZF" title="YouTube video player" frameborder="0" allow="" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

      </div>
  )
}

export default AboutMe