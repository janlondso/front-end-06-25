import { useRef } from 'react';
import { useParams } from 'react-router-dom'

function MuudaUudis() {
    const { index } = useParams();
    const uudisRef = useRef();
    const uudisedLS = JSON.parse(localStorage.getItem("uudised")) || [];
    // Võtan kõik uudised LocalStoragest, võta jutumärgid maha ning kui on tühjus, siis võta hoopis tühjad kandilised sulud.
    const leitudUudis = uudisedLS[index]; // const found = array[i]

    const muuda = () => {
      uudisedLS[index] = uudisRef.current.value; // asendan array index-i vana uudise uue vastu
      // kui oleks objekt -> uudisedLS[index] = {"key1": value1, "key2": value2}
      localStorage.setItem("uudised", JSON.stringify(uudisedLS)); // uuendus LS-is, kus uudisedLS on uus v22rtus
    }

  return (
    <div>
      <label>Uudis</label> <br />
      <input ref={uudisRef} type="text" defaultValue={leitudUudis} /> <br />
      {/* defaultValue sisestab inputi vana uudise mille ref-iga vahetatakse v2lja */}
      <button onClick={muuda}>Muuda</button>
    </div>
  )
}

export default MuudaUudis