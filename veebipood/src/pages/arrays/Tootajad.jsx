import { useState } from "react";
import ArraysHome from "./ArraysHome"


function Tootajad() {

  const tootajad = ["Meelis", "Toomas", "Diana" ,"Aavo", "Eve", "Mati", "Mart", "Linda", "Siiri", "Ivo"];
  const [personal, setPersonal] = useState(tootajad);

  const sortAtoZ = () => {
    personal.sort((a, b) => a.localeCompare(b));
    setPersonal(personal.slice());
  }
  const reset = () => {
    setPersonal(tootajad);
  }

  return (
    <div>
        <ArraysHome />
        <div>Kokku on: {personal.length}</div>
        <button onClick={reset}>Reset</button>
        <button onClick={sortAtoZ}>sort A to Z</button>
        {personal.map(persoon => <div key={persoon}>{persoon}</div>)}
    </div>
  )
}

export default Tootajad