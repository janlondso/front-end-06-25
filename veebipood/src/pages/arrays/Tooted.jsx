import ArraysHome from "./ArraysHome"
import tootedFailist from '../../data/tooted.json'
import { useState } from "react"
import { Link } from "react-router-dom";



function Tooted() {
  const [tooted, uuendaTooted] = useState(tootedFailist.slice());

  const sortAtoZ = () => {
    tooted.sort((a, b) => a.nimi.localeCompare(b.nimi));
    uuendaTooted(tooted.slice());
  }

  const sorteeriHindKasv = () => {
         tooted.sort((a,b) => a.hind - b.hind); 
        uuendaTooted(tooted.slice());
    }
  const sorteeriHindKah = () => {
         tooted.sort((a,b) => b.hind - a.hind); 
        uuendaTooted(tooted.slice());
    }

  const reset = () => {
    uuendaTooted(tootedFailist);
  }

  return (
    <div>
        <ArraysHome />
        <div>Kokku on: {tooted.length} töötajat</div>
        <button onClick={reset}>Taasta</button>
        <button onClick={sortAtoZ}>Sorteeri A-Z</button>
        <button onClick={sorteeriHindKasv}>Sorteeri hind kasvavalt</button>
        <button onClick={sorteeriHindKah}>Sorteeri hind kahanevalt</button>

        <div>
          {tooted.map(toode => 
            <div key={toode.nimi}>
            <div>{toode.nimi}</div>
            <div>{toode.hind}</div>
            <div>{toode.aktiivne ? <button>Lisa ostukorvi</button> : <i>Toode pole aktiivne</i>}</div>
            <div><img className="pilt" src={toode.pilt} alt="" /></div>
            <Link>
              <button>Tutvu tootega lähemalt</button>
            </Link>
          </div>)}
        </div>
    
    </div>
  )
}

export default Tooted