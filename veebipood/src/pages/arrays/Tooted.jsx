import ArraysHome from "./ArraysHome"
import tootedFailist from '../../data/tooted.json'
import { useRef, useState } from "react"
import { Link } from "react-router-dom";



function Tooted() {
  const [tooted, uuendaTooted] = useState(tootedFailist.slice());
  const otsingRef = useRef();

  const otsi = () => {
        const vastus = tootedFailist.filter(toode => toode.nimi.includes(otsingRef.current.value));
        uuendaTooted(vastus);
    }


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
    uuendaTooted(tootedFailist.splice());
  }

 const lisaOstukorvi = (toode) => {
  const ostukorvLS = JSON.parse(localStorage.getItem("ostukorv")) || [];
  ostukorvLS.push(toode);
  localStorage.setItem("ostukorv", JSON.stringify(ostukorvLS));
 }

 const arvutaKokku = () => {
  let summa = 0;
  tooted.forEach(toode =>  summa = summa + toode.hind);
  return summa;
 }

  return (
    <div>
        <div>Toodete hinnad kokku: {arvutaKokku()} </div>
        <input ref={otsingRef} onChange={otsi} type="text" /> <br />
        <div>Kokku on: {tooted.length} töötajat</div>
        <button onClick={reset}>Taasta</button>
        <ArraysHome />
        <button onClick={sortAtoZ}>Sorteeri A-Z</button>
        <button onClick={sorteeriHindKasv}>Sorteeri hind kasvavalt</button>
        <button onClick={sorteeriHindKah}>Sorteeri hind kahanevalt</button>

        <div>
          {tooted.map(toode => 
            <div key={toode.nimi}>
            <div>{toode.nimi}</div>
            <div>{toode.hind}</div>
            <div><img className="pilt" src={toode.pilt} alt="" /></div>
            <div>{toode.aktiivne ? <button onClick={() => lisaOstukorvi(toode)}>Lisa ostukorvi</button> : <i>Toode pole aktiivne</i>}</div>
            <Link to={"/toode/" + toode.nimi}>
              <button>Tutvu tootega lähemalt</button>
            </Link>
          </div>)}
        </div>
    
    </div>
  )
}

export default Tooted