import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Avaleht from './pages/Avaleht'
import VaataArvuteid from './pages/VaataArvuteid'
import Lisaarvuti from './pages/Lisaarvuti'
import Meist from './pages/Meist'
import Kontakt from './pages/Kontakt'
import Seaded from './pages/Seaded'
import { useState } from 'react'
import { useRef } from 'react'

function App() {
  const [sisseLogitud, muudaSisseLogitud] = useState("ei");
  const [sonum, muudaSonum] = useState("");

  const kasutajaNimiRef = useRef();
  const paroolRef = useRef();

  const logiSisse = () => {
    if(paroolRef.current.value === "123"){
      muudaSisseLogitud("jah")
      muudaSonum(kasutajaNimiRef.current.value + " , oled sisse logitud!")
    } else {
      muudaSonum("Vale parool, proovi uuesti!")
    }
  }

  const logiValja = () => {
    muudaSisseLogitud("ei")
    muudaSonum("")
  }

  return (
    <div>
      <div>{sonum}</div><br />
      { sisseLogitud === "ei" &&
      <div>
        <label>Kasutajanimi</label><br />
        <input ref={kasutajaNimiRef} type="text" /><br />
        <label>Parool</label><br />
        <input ref={paroolRef} type="password" /><br />
    </div>}
        {sisseLogitud === "ei" && <button onClick={ logiSisse}>Logi sisse</button> }
        {sisseLogitud === "jah" && <button onClick={ logiValja}>Logi välja</button>}
        <br /><br />
      <Link to="/">
        <button>Avalehele</button>
      </Link>
      <Link to="/all">
        <button>Vaata sülearvuteid</button>
      </Link>
      <Link to="/add">
        <button>Lisa sülearvuti</button>
      </Link>
      <Link to="/about-us">
        <button>Meist</button>
      </Link>
      <Link to="/contact">
        <button>Kontakt</button>
      </Link>
      <Link to="/seaded">
        <button>Seaded</button>
      </Link>

      <Routes>
        <Route path='' exact element={ <Avaleht /> } />
        <Route path='all' exact element={ <VaataArvuteid /> } />
        <Route path='add' exact element={ <Lisaarvuti /> } />
        <Route path='about-us' exact element={ <Meist /> } />
        <Route path='contact' exact element={ <Kontakt /> } />
        <Route path='seaded' element={ <Seaded />} />
      </Routes>
    </div>
  )
}

export default App
