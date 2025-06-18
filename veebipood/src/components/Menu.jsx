import { Link } from "react-router-dom"

function Menu() {
  return (
    <div>
        <Link to="/">
         <img
        className="pilt"
        src="https://images.unsplash.com/photo-1726137570036-cc7e8b1b58c1?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
        alt=""
      />
      </Link>
     
      <Link to="/ostukorv">
        <button>Ostukorvi</button>
      </Link>

      <Link to="/lisa-toode">
        <button>Toodet lisama</button>
      </Link>
      
      <Link to="/osta-kinkekaart">
        <button>Kinkekaartide lehele</button>
      </Link>
      <Link to="/seaded">
        <button>Seaded</button>
      </Link>
      <Link to="/kalkulaator">
        <button>Kalkulaator</button>
      </Link>

      <Link to="/arrays">
        <button>Array-d</button>
      </Link>
      <Link to="/halda">
        <button>Mine arraysid muutma</button>
      </Link>
    </div>
  )
}

export default Menu