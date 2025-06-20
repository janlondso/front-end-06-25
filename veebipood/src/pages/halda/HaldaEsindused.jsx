import HaldaHome from "./HaldaHome"
import esindusedJSON from '../../data/esindused.json'
import { useRef, useState } from "react"



function HaldaEsindused() {
  const [esindused, setEsindused] = useState(esindusedJSON.slice());
  const esindusRef = useRef();
 
  const lisa = () => {
        if(esindusRef.current.value === ""){
          alert("Tühja nimega ei saa lisada!")
          return;
        }

        esindusedJSON.push(esindusRef.current.value);
        setEsindused(esindusedJSON.slice());
        esindusRef.current.value = "";
  }

  const kustuta = (index) => {
    esindusedJSON.splice(index,1);
    setEsindused(esindusedJSON.slice());
  }

  return (
    <div>
      <HaldaHome />

     <label>Esinduse nimi</label> <br />
      <input ref={esindusRef} type="text"/> <br />
      <button onClick={lisa}>Sisesta</button> <br />

     <div>Hindasid: {esindused.length} tk</div>
      <table>
        <thead>
          <tr>
            <th>Index</th>
            <th>Esinduse nimi</th>
            <th>Kustuta</th>
          </tr>
        </thead>
       <tbody>
       {esindused.map((esindus, index) =>
        <tr key={esindus}>
          <td>{index}</td>
          <td>{esindus}</td>
          <td><button onClick={() => kustuta(index) }>x</button></td>
        </tr>)}
       
       </tbody>
    </table>
    </div>
  )
}

export default HaldaEsindused