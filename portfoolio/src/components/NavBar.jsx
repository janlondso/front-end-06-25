import { Link } from "react-router-dom"


function NavBar() {
  return (
    <div>
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
    </div>
  )
}

export default NavBar