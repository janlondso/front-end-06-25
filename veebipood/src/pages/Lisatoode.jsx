import { useRef, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import tootedFailist from '..///data/tooted.json'

function Lisatoode() {
  const [tooted, uuendaTooted] = useState(tootedFailist);
  const nimiRef = useRef();
  const hindRef = useRef();
  const aktiivneRef = useRef();
  const piltRef = useRef();

const lisa = () => {
  if(nimiRef.current.value === ''){
    toast.error("Tühja nimetusega ei saa lisada!");
  } else {  
    toast.success("Toode lisatud: " + nimiRef.current.value);
  }
  if(hindRef.current.value === ''){
    toast.error("Ilma hinnata ei saa lisada!");
  } else {  
    toast.success("Hind lisatud: " + hindRef.current.value);
  }
 
  if(piltRef.current.value === ''){
    toast.error("Ilma pildita ei saa lisada!");
  } else {  
    toast.success("Pilt lisatud: " + piltRef.current.value);
  }
  tootedFailist.push({
          "nimi": nimiRef.current.value,
          "hind": hindRef.current.value,
          "aktiivne": aktiivneRef.current.checked, 
          "pilt": piltRef.current.value
        }
      );
      uuendaTooted(tootedFailist.slice());
        nimiRef.current.value = "";
        hindRef.current.value = "";
        aktiivneRef.current.value = false;
        piltRef.current.value = "";
      }

  return (
    <div>
      <div>Hetkel tooteid kokku {tooted.length} tk</div>
      <label>Toote nimi</label> <br />
      <input ref={nimiRef} type="text" /> <br />
      <label>Toote hind</label> <br />
      <input ref={hindRef} type="text" /> <br />
      <label>Toode aktiivne</label> <br />
      <input ref={aktiivneRef} type="text" /> <br />
      <label>Toote pilt</label> <br />
      <input ref={piltRef} type="text" /> <br />
      
      <button onClick={lisa}>Sisesta</button> <br />
      
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        theme="dark"
      />
    </div>
  )
}

export default Lisatoode