import { useRef, useState } from "react"
import ArraysHome from "./ArraysHome";
import esindusedJSON from '../../data/esindused.json'
import { Link } from "react-router-dom";

function Esindused() {
  const[linn, setLinn] = useState("Tallinn");
  const [esindused, setEsindused] = useState(esindusedJSON.slice());
  const otsingRef = useRef();

  const otsi = () => {
    const vastus = esindusedJSON.filter(esindus =>
      esindus.keskus.toLowerCase().includes(otsingRef.current.value.toLowerCase())
    );
      setEsindused(vastus);
  }

  const arvutaKokku = () => { 
        let summa = 0;
        esindused.forEach( esindus => summa = summa + esindus.keskus.length);
        return summa; // returni jargne laheb HTML-i
    }

  return (
    <div>
      <ArraysHome />
      <div>Esinduste keskuste tahemargid kokku: {arvutaKokku()}</div>
      <input ref={otsingRef} onChange={otsi} type="text" />
      
      <div>Hetkel aktiivne linn on: {linn}</div>
      <button className={linn === "Tallinn" ? "linn-aktiivne" : undefined} onClick={() => setLinn("Tallinn")}>Tallinn</button>
      <button className={linn === "Tartu" ? "linn-aktiivne" : undefined} onClick={() => setLinn("Tartu")}>Tartu</button>
      <button className={linn === "Narva" ? "linn-aktiivne" : undefined} onClick={() => setLinn("Narva")}>Narva</button>
      <button className={linn === "Pärnu" ? "linn-aktiivne" : undefined} onClick={() => setLinn("Pärnu")}>Pärnu</button>

    {linn === "Tallinn" &&
      <>
      {esindused.map( esindus =>
      <div key={esindus.keskus}>
        {esindus.keskus}
        <Link to={"/esindus/" + esindus.keskus}>
          <button>Vt kontaktandmed</button>
        </Link>
      </div> )}

      {/* <div>Ülemiste</div>
      <div>Rocca al Mare</div>
      <div>Magistrali</div>
      <div>Vesse</div>
      <div>Kristiine</div>
      <div>Järveotsa</div> */}
    </>}

   {linn === "Tartu" && 
    <>
      <div>Raatuse</div>
      <div>Lõunakeskus</div>
    </>}
    
      {linn === "Narva" && <div>Fama</div>}

      {linn === "Pärnu" && <div>Port Artur 2</div>}
    </div>
  )
}

export default Esindused