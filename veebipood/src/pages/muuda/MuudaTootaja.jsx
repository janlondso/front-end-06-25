import { useNavigate, useParams } from 'react-router-dom'
import tootajadFailist from '../../data/tootajad.json'
import { useRef } from 'react';

function MuudaTootaja() {
  const { index } = useParams();
  const leitud = tootajadFailist[index];

  const nimiRef = useRef();
  const ametRef = useRef();
  const telRef = useRef();

  const navigate = useNavigate();

  const muuda = () => {
    if(nimiRef.current.value === ""){
      alert("Sisesta nimi");
      return;
    }
    if(nimiRef.current.value === ""){
      alert("Sisesta ametikoht");
      return;
    }
    if(nimiRef.current.value === ""){
      alert("Sisesta telefon");
      return;
    }

    tootajadFailist[index] = {
      "eesnimi": nimiRef.current.value,
      "ametikoht": ametRef.current.value,
      "tel": telRef.current.value
    }
    navigate("/halda-tootajad");
  }

  return (
    <div>
      <label>Töötaja eesnimi</label> <br />
      <input ref={nimiRef} defaultValue={leitud.eesnimi} type="text" /> <br />
      <label>Töötaja ametikoht</label> <br />
      <input ref={ametRef} defaultValue={leitud.ametikoht} type="text" /> <br />
      <label>Töötaja telefon</label> <br />
      <input ref={telRef} defaultValue={leitud.tel} type="text" /> <br />
      <button onClick={muuda}>Muuda andmeid</button>
    </div>
  )
}

export default MuudaTootaja