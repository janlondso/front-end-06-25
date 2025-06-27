
import { useNavigate, useParams } from "react-router-dom"
import esindusedFailist from '../../data/esindused.json'
import { useRef } from "react";

function MuudaEsindus() {
  const {index} = useParams();
  const leitud = esindusedFailist[index];
  const esindusRef = useRef();
  const telefonRef = useRef();
  const aadressRef = useRef();
  const navigate = useNavigate();

  const muuda = () => {
    if(esindusRef.current.value === ""){
          alert("Tühja nimega ei saa lisada!")
          return;
        }
      
     esindusedFailist[index] = {
      "keskus": esindusRef.current.value,
      "tel": telefonRef.current.value,
      "aadress": aadressRef.current.value
     }
    navigate("/halda-esindused");
  }

  return (
    <div>
      <label>Esinduse nimi</label> <br />
      <input ref={esindusRef} defaultValue={leitud.keskus} type="text" /> <br />
      <label>Esinduse telefon</label> <br />
      <input ref={telefonRef} defaultValue={leitud.tel} type="text" /> <br />
      <label>Esinduse aadress</label> <br />
      <input ref={aadressRef} defaultValue={leitud.aadress} type="text" /> <br />
      <button onClick={muuda}>Muuda</button>
    </div>
  )
}

export default MuudaEsindus