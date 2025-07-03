import { Link } from "react-router-dom"

function NavigationBar() {
  return (
    <div className="NavigationBar">
        <Link to="/"><button>Avaleht</button></Link>
        <Link to="/admin"><button>Admin</button></Link>
        <Link to="/cart"><button>Ostukorv</button></Link>
    </div>
  )
}

export default NavigationBar