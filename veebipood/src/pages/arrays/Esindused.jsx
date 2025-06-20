import { useState } from "react"
import ArraysHome from "./ArraysHome";
import esindusedJSON from '../../data/esindused.json'

function Esindused() {
  const[linn, setLinn] = useState("Tallinn");
  return (
    <div>
      <ArraysHome />
      
      <div>Hetkel aktiivne linn on: {linn}</div>
      <button className={linn === "Tallinn" ? "linn-aktiivne" : undefined} onClick={() => setLinn("Tallinn")}>Tallinn</button>
      <button className={linn === "Tartu" ? "linn-aktiivne" : undefined} onClick={() => setLinn("Tartu")}>Tartu</button>
      <button className={linn === "Narva" ? "linn-aktiivne" : undefined} onClick={() => setLinn("Narva")}>Narva</button>
      <button className={linn === "Pärnu" ? "linn-aktiivne" : undefined} onClick={() => setLinn("Pärnu")}>Pärnu</button>

    {linn === "Tallinn" &&
      <>
      {esindusedJSON.map( esindus => <div key={esindus}> {esindus} </div> )}

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