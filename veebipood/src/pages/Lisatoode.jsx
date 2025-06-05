import { useRef } from "react";

function Lisatoode() {

  const nimiRef = useRef();

// function lisa(){
// }

const lisa = () => {
  if(nimiRef.current.value === ''){
    alert("Tühja nimetusega ei saa lisada!");
  } else {  
    alert("Toode lisatud: " + nimiRef.current.value);
  }
}

  return (
    <div>
      <label>Toote nime</label> <br />
      <input ref={nimiRef} type="text" /> <br />
      <button onClick={lisa}>Sisesta</button> <br />
    </div>
  )
}

export default Lisatoode