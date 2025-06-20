import { useRef, useState } from "react";
import HaldaHome from "./HaldaHome"
import hinnadFailist from '../../data/hinnad.json'



function HaldaHinnad() {

      const [hinnad, setHinnad] = useState(hinnadFailist.slice());
      const hindRef = useRef();

      const lisa = () => {
        hinnadFailist.push(hindRef.current.value);
        setHinnad(hinnadFailist.slice()); 
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
            <th>Kustuta</th>
          </tr>
        </thead>
       <tbody>
       {hinnad.map((hind, index) =>
        <tr key={hind}>
          <td>{index}</td>
          <td>{hind}</td>
          <td><button onClick={() => kustuta(index) }>x</button></td>
        </tr>)}
       
       </tbody>
    </table>
    </div>
  )
}

export default HaldaHinnad