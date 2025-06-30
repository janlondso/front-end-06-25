import { useRef, useState } from "react"

function LisaTegelane() {
    const [sonum, uuendaSonum] = useState("");

    const nimiRef = useRef();
    const perenimiRef = useRef();
    const elukohtRef = useRef();
    const vanusRef = useRef();

    const lisaUusTegelane = () => {
        if (nimiRef.current.value === ""){
            uuendaSonum("Palun sisesta tegelase nimi!");
        } else {
            uuendaSonum("Uus tegelane on lisatud")
            const tegelased = JSON.parse(localStorage.getItem("tegelased")) || [];
        tegelased.push({
            "eesnimi": nimiRef.current.value,
            "perenimi": perenimiRef.current.value,
            "elukoht": elukohtRef.current.value,
            "vanus": Number(vanusRef.current.value)
        })
        localStorage.setItem("tegelased", JSON.stringify(tegelased));
    }    
   }
        
  return (
    <div>
        <div>{sonum}</div>
        <label>Tegelase eesnimi</label><br />
        <input ref={nimiRef} type="text" /><br />
        <label>Perekonna nimi</label><br />
        <input ref={perenimiRef} type="text" /><br />
        <label>Tegelase elukoht</label><br />
        <input ref={elukohtRef} type="text" /><br />
        <label>Tegelase vanus</label><br />
        <input ref={vanusRef} type="number" /><br />
        <button onClick={lisaUusTegelane}>Lisa uus</button><br />
    </div>
  )
}

export default LisaTegelane