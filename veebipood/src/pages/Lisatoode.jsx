import { useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';


function Lisatoode() {

  const nimiRef = useRef();

// function lisa(){
// }

const lisa = () => {
  if(nimiRef.current.value === ''){
    toast.error("Tühja nimetusega ei saa lisada!");
  } else {  
    toast.success("Toode lisatud: " + nimiRef.current.value);
  }
  
// Ternary operator

  // nimiRef.current.value === "" ?
  //   alert("Tühja nimetusega ei saa lisada!") :
  //   alert("Toode lisatud: " + nimiRef.current.value)
}

  return (
    <div>
      <label>Toote nime</label> <br />
      <input ref={nimiRef} type="text" /> <br />
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