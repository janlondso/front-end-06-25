import HaldaHome from "./HaldaHome"
import tootedFailist from '../../data/tooted.json'
import { useState } from "react"
import { useRef } from "react";
import { Link } from "react-router-dom";


function HaldaTooted() {
  const [tooted, uuendaTooted] = useState(tootedFailist);
  const nimiRef = useRef();
  const hindRef = useRef();
  const aktiivneRef = useRef();
  const piltRef = useRef();

  const lisa = () => {
    if(nimiRef.current.value === ""){
      alert("Tühja nimega ei saa sisestada!");
      return;
    }

    if(hindRef.current.value === ""){
      alert("Hinnata ei saa sisestada!");
      return;
    }

    if(piltRef.current.value === ""){
      alert("Pildita ei saa sisestada!");
      return;
    }

    tootedFailist.push({
          "nimi": nimiRef.current.value,
          "hind": hindRef.current.value,
          "aktiivne": aktiivneRef.current.checked, // true voi false
          "pilt": piltRef.current.value
    });

    uuendaTooted(tootedFailist.slice());
        nimiRef.current.value = "";
        hindRef.current.value = "";
        aktiivneRef.current.value = false;
        piltRef.current.value = "";
  }

  const kustuta = (index) => {
        tootedFailist.splice(index,1);
        uuendaTooted(tootedFailist.slice());
      }

  return (
    <div>
      <HaldaHome />
      <label>Toote nimi</label> <br />
        <input ref={nimiRef} type="text"/> <br />
        <label>Toote hind</label> <br />
        <input ref={hindRef} type="text"/> <br />
        <label>Toode pilt</label> <br />
        <input ref={piltRef} type="text"/> <br />
        <label>Toode aktiivne</label> <br />
        <input ref={aktiivneRef} type="checkbox"/> <br />
        <button onClick={lisa}>Sisesta</button> <br />
        <div>Tooteid kokku: {tooted.length} tk</div>
        <br />
        <table>
        <thead>
          <tr>
            <th>Index</th>
            <th>Toote nimi</th>
            <th>Toote hind</th>
            <th>Aktiivne</th>
            <th>Pilt</th>
            <th>Kustuta</th>
            <th>Muuda</th>
          </tr>
        </thead>
        <tbody>
        {tooted.map((toode, index) =>
          <tr key={toode.nimi}>
            <td>{index + 1 + "."}</td>
            <td>{toode.nimi}</td>
            <td>{toode.hind}</td>
            <td>{toode.aktiivne + 0}</td>
            <td><img style={{width:"50px", borderRadius: "10px"}} className="pilt" src={toode.pilt} alt="" /></td>
            <td><button onClick={() => kustuta(index)}>x</button></td>
          <Link to={"/muuda-toode/" + index}>
            <button>Muuda</button>
            </Link>
          </tr>)}
        </tbody>
      </table>
    </div>
  )
}

export default HaldaTooted