
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Link to="/">
        <button>Avalehele</button>
      </Link>

      <Link to="/uudised">
        <button>Uudiste lehele</button>
      </Link>

      <Link to="/kontakt">
        <button>Võta meiega ühendust</button>
      </Link>

      <Link to="/meist">
        <button>Info meist</button>
      </Link>

      <Routes>
        <Route path='' element={ <div>See on avaleht, nähtav localhost: 3000 aadressil</div>} />
        <Route path='uudised' element={ <div>See on uudiste leht, nähtav localhost: 3000/uudised aadressil</div>} />
        <Route path='kontakt' element={ <div>See on kontaktide leht, nähtav localhost: 3000/kontakt aadressil</div>} />
        <Route path='meist' element={ <div>See on meist leht, nähtav localhost: 3000/meist aadressil</div>} />
      </Routes>
    </>
  )
}

export default App
