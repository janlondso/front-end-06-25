import { useNavigate, useParams } from 'react-router-dom'
import tootedFailist from '../../data/tooted.json'
import { useRef } from 'react';


function MuudaToode() {
  const { index } = useParams();
  const leitud = tootedFailist[index];
  
  const navigate = useNavigate();

  const nimiRef = useRef();
  const hindRef = useRef();
  const aktiivneRef = useRef();
  const piltRef = useRef();

  const muuda = () => {
    if (nimiRef.current.value === "") {
      alert("Sisesta nimi!");
      return;
    }
    if (hindRef.current.value === "") {
      alert("Sisesta nimi!");
      return;
    }
    if (piltRef.current.value === "") {
      alert("Sisesta nimi!");
      return;
    }
    tootedFailist[index] = {
      "nimi": nimiRef.current.value,
      "hind": hindRef.current.value,
      "aktiivne": aktiivneRef.current.checked,
      "pilt": piltRef.current.value
    }
    navigate("/halda-tooted");
  }

  return (
    <div>
       <label>Toote nimi</label> <br />
        <input ref={nimiRef} defaultValue={leitud.nimi} type="text"/> <br />
        <label>Toote hind</label> <br />
        <input ref={hindRef} defaultValue={leitud.hind} type="text"/> <br />
        <label>Toode pilt</label> <br />
        <input ref={piltRef} defaultValue={leitud.pilt} type="text"/> <br />
        <label>Toode aktiivne</label> <br />
        <input ref={aktiivneRef} defaultChecked={leitud.aktiivne} type="checkbox"/> <br />
        <button onClick={muuda}>Muuda</button>
    </div>
  )
}

export default MuudaToode