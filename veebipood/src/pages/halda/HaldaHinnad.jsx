import { useRef, useState } from "react";
import HaldaHome from "./HaldaHome"
import hinnadFailist from '../../data/hinnad.json'
import { Link } from "react-router-dom";



function HaldaHinnad() {

      const [hinnad, setHinnad] = useState(hinnadFailist.slice());
      const hindRef = useRef();
      const sonaRef = useRef();

      const lisa = () => {

        if (hindRef.current.value <= 0){
          alert("Hind peab olema positiivne!");
          return;
        }

        hinnadFailist.push({
          "number": hindRef.current.value,
          "sonana": sonaRef.current.value
        });
        setHinnad(hinnadFailist.slice()); 
        hindRef.current.value = "";
        sonaRef.current.value = "";
      }

       const kustuta = (index) => {
        hinnadFailist.splice(index, 1); // esimene nr mitmendat, teine mitu tk kustutada
        setHinnad(hinnadFailist.slice()); 

      }

  return (
    <div>
      <HaldaHome />
      <label>Hind</label> <br />
      <input ref={hindRef} type="number"/> <br />
      <label>Sonana</label><br />
      <input ref={sonaRef} type="text" /><br />
      <button onClick={lisa}>Sisesta</button> <br />
      {/* <button onClick = {() => kustuta(0)}>Kustuta esimene</button>
      <button onClick = {() => kustuta(1)}>Kustuta teine</button>
      <button onClick = {() => kustuta(2)}>Kustuta kolmas</button>
      <button onClick = {() => kustuta(3)}>Kustuta neljas</button> */}
      <div>Hindasid: {hinnad.length} tk</div>
      <table>
        <thead>
          <tr>
            <th>Index</th>
            <th>Hind</th>
            <th>Sõnana</th>
            <th>Kustuta</th>
            <th>Muuda</th>
          </tr>
        </thead>
       <tbody>
       {hinnad.map((hind, index) =>
        <tr key={hind.number}>
          <td>{index}</td>
          <td>{hind.number}</td>
          <td>{hind.sonana}</td>
          <td><button onClick={() => kustuta(index) }>x</button></td>
          <Link to={"/muuda-hind/" + index}>
          <button>Muuda</button>
          </Link>
        </tr>)}
       
       </tbody>
    </table>
    </div>
  )
}

export default HaldaHinnad