import { useNavigate, useParams } from 'react-router-dom'
import hinnadFailist from '../../data/hinnad.json'
import { useRef } from 'react';

function MuudaHind() {
  const { index } = useParams();
  const leitud = hinnadFailist[index];
  const navigate = useNavigate();
  const hindRef = useRef();
  const sonaRef = useRef();

  const muuda = () => {
    if (hindRef.current.value <= 0){
        alert("Hind peab olema positiivne!");
        return;
    }

    hinnadFailist[index] =  { 
    "number": hindRef.current.value,
    "sonana": sonaRef.current.value
    }
    navigate("/halda-hinnad");
  }
  
  return (
    <div>
      <label>Hind</label> <br />
      <input ref={hindRef} defaultValue={leitud.number} type="number"/> <br />
      <label>Sonana</label><br />
      <input ref={sonaRef} defaultValue={leitud.sonana} type="text" /><br />
      <button onClick={muuda}>Muuda</button> <br />
    </div>
  )
}

export default MuudaHind