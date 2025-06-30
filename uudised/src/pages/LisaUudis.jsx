import { useState } from "react";
import { useRef } from "react"

function LisaUudis() {
  const [teavitus, setTeavitus] = useState("");
  const uudisedRef = useRef();

  const lisaUusUudis = () => {
    const uudised = JSON.parse(localStorage.getItem("uudised")) || [];
    uudised.push(uudisedRef.current.value);
    localStorage.setItem("uudised", JSON.stringify(uudised));
  }

  const kontrolli = () => {
    setTeavitus("");

    if (uudisedRef.current.value.charAt() === uudisedRef.current.value.charAt(0).toLowerCase()){
      setTeavitus("Sisestasid uudise väikse tähega, palun paranda!");
    } 

    if (uudisedRef.current.value.includes("  ")){
      setTeavitus("Sisestasid kaks tühikut, palun paranda!");
    } 
  }

  return (
    <div>
        <div>{teavitus}</div>
        <label>Sisesta uus uudis</label> <br />
        <input onChange={kontrolli} ref={uudisedRef} type="text" /> <br />
        <button onClick={lisaUusUudis}>Lisa uudis</button>
    </div>
  )
}

export default LisaUudis