import HaldaHome from "./HaldaHome"
import tootajadFailist from '../../data/tootajad.json'
import { useState } from "react"
import { useRef } from "react";
import { Link } from "react-router-dom";



function HaldaTootajad() {
  const [tootajad, uuendaTootajad] = useState(tootajadFailist);
  const nimiRef = useRef();
  const ametRef = useRef();
  const telRef = useRef();
  
  const lisa = () => {
    if(nimiRef.current.value === ""){
      alert("Tühja nimega ei saa sisestada!");
      return;
    }
    if(ametRef.current.value === ""){
      alert("Ametinimeta ei saa sisestada!");
      return;
    }
    if(telRef.current.value === ""){
      alert("Telefonita ei saa sisestada!");
      return;
    }
    tootajadFailist.push({
      "eesnimi": nimiRef.current.value,
      "ametikoht": ametRef.current.value,
      "tel": telRef.current.value
    });
    uuendaTootajad(tootajadFailist.slice());
    nimiRef.current.value = "";
    ametRef.current.value = "";
    telRef.current.value = "";
  }

  const kustuta = (index) => {
    tootajadFailist.splice(index,1);
    uuendaTootajad(tootajadFailist.slice())
  }


  return (
    <div>
      <HaldaHome />
      <label>Eesnimi</label><br />
      <input ref={nimiRef} type="text" /><br />
      <label>Ametikoht</label><br />
      <input ref={ametRef} type="text" /><br />
      <label>Telefon</label><br />
      <input ref={telRef} type="number" /> <br />

       <div>Töötajaid kokku: {tootajad.length}</div>

      <button onClick={lisa}>Lisa uus</button> <br />
      
      <table>
        <thead>
          <tr>
            <th>Index</th>
            <th>Eesnimi</th>
            <th>Ametikoht</th>
            <th>Telefon</th>
            <th>Kustuta</th>
            <th>Muuda</th>
          </tr>
        </thead>
       <tbody>
        {tootajad.map((tootaja, index) =>
        <tr key={tootaja.eesnimi}>
          <td>{index}</td>
          <td>{tootaja.eesnimi}</td>
          <td>{tootaja.ametikoht}</td>
          <td>{tootaja.tel}</td>
          <td><button onClick={() => kustuta(index)}>x</button></td>
          <Link to={"/muuda-tootaja/" + index}>
            <button>Muuda</button>
          </Link>
        </tr>
        )}
       </tbody>
       </table>


    </div>
  )
}

export default HaldaTootajad