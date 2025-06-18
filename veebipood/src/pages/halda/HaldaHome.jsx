import { Link } from "react-router-dom"


function HaldaHome() {
  return (
    <div>
        <Link to="/halda-esindused">
        <button>Halda esindused</button>
      </Link>
        <Link to="/halda-autod">
        <button>Halda autod</button>
      </Link>
        <Link to="/halda-hinnad">
        <button>Halda hinnad</button>
      </Link>
        <Link to="/halda-kasutajad">
        <button>Halda kasutajad</button>
      </Link>
        <Link to="/halda-tootajad">
        <button>Halda töötajad</button>
      </Link>
        <Link to="/halda-tooted">
        <button>Halda tooted</button>
      </Link>
    </div>
  )
}

export default HaldaHome