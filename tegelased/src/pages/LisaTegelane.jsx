import { useState } from "react"


function LisaTegelane() {
    const [sonum, uuendaSonum] = useState("");
    function lisaYks(){
        uuendaSonum("Tegelane lisatud!");
    }
  return (
    <div>
        <div>{sonum}</div>
        <label>Tegelase nimi</label><br />
        <input type="text" /><br />
        <button onClick={lisaYks}>Lisa uus</button><br />
    </div>
  )
}

export default LisaTegelane