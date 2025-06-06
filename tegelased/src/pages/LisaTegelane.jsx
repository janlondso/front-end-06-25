import { useRef, useState } from "react"


function LisaTegelane() {
    const [sonum, uuendaSonum] = useState("");
    const nimiRef = useRef();

    const lisaUusTegelane = () => {
        if(nimiRef.current.value === ""){
            uuendaSonum("Tühja nimetusega ei saa lisada!")
        } else {
            uuendaSonum("Toode lisatud! " + nimiRef.current.value)
        }
    }
  return (
    <div>
        <div>{sonum}</div>
        <label>Tegelase nimi</label><br />
        <input ref={nimiRef} type="text" /><br />
        <button onClick={lisaUusTegelane}>Lisa uus</button><br />
    </div>
  )
}

export default LisaTegelane