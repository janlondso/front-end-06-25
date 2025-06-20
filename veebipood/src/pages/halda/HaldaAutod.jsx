import { useRef, useState } from "react";
import HaldaHome from "./HaldaHome"
import andmed from '../../data/autod.json'

function HaldaAutod() {
      const [autod, setAutod] = useState(andmed);
      const nimiRef = useRef();
      const hindRef = useRef();
      const aktiivneRef = useRef();
      const piltRef = useRef();

      const lisa = () => {
        andmed.push({
          "nimi": nimiRef.current.value,
          "hind": hindRef.current.value,
          "aktiivne": aktiivneRef.current.value,
          "pilt": piltRef.current.value
        }
);

        setAutod(andmed.slice());
      }

      const kustutaEsimene = () => {
        andmed.splice(0, 1); // esimene nr mitmendat, teine mitu tk kustutada
        setAutod(andmed.slice()); 
      }

      const kustutaTeine = () => {
         andmed.splice(1, 1); // esimene nr mitmendat, teine mitu tk kustutada
        setAutod(andmed.slice()); 
      }
      const kustutaKolmas = () => {
         andmed.splice(2, 1); // esimene nr mitmendat, teine mitu tk kustutada
        setAutod(andmed.slice()); 
      }
      const kustutaNeljas = () => {
         andmed.splice(3, 1); // esimene nr mitmendat, teine mitu tk kustutada
        setAutod(andmed.slice()); 
      }

      const kustuta = (index) => {
        andmed.splice(index,1);
        setAutod(andmed.slice());
      }



  return (
    <div>
      <HaldaHome />
      <button onClick={kustutaEsimene}>Kustuta esimene</button>
      <button onClick={kustutaTeine}>Kustuta teine</button>
      <button onClick={kustutaKolmas}>Kustuta kolmas</button>
      <button onClick={kustutaNeljas}>Kustuta neljas</button>

      <br /><br />

      <label htmlFor="">Auto nimi</label> <br />
      <input ref={nimiRef} type="text"/> <br />

      <label htmlFor="">Auto hind</label> <br />
      <input ref={hindRef} type="text"/> <br />

      <label htmlFor="">Auto pilt</label> <br />
      <input ref={piltRef} type="text"/> <br />

      <label htmlFor="">Auto aktiivne</label> <br />
      <input ref={aktiivneRef} type="text"/> <br />
      
      <button onClick={lisa}>Sisesta</button> <br />

      <div>Autosid: {autod.length} tk</div>
    <table>
       <thead>
        <tr>
          <th>Index</th>
          <th>Auto nimi</th>
          <th>Auto hind</th>
          <th>Auto aktiivne</th>
          <th>Auto pilt</th>
          <th>Kustuta</th>
        </tr>
       </thead>
       <tbody>
       {autod.map((auto, index) =>
        <tr key={auto}>
          <td>{index}</td>
          <td>{auto.nimi}</td>
          <td>{auto.hind}</td>
          <td>{auto.aktiivne + 0}</td>
          <td><img style={{width:"50px", borderRadius: "10px"}} className="pilt" src={auto.pilt} alt="" /></td>
          <td><button onClick={ () => kustuta(index)}>x</button></td>
        </tr>)}
       
       </tbody>
    </table>
   
    </div>
  )
}

export default HaldaAutod