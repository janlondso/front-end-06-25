import { useState } from "react";
import ArraysHome from "./ArraysHome"
import tootajadFailist from '../../data/tootajad.json'
import { Link } from "react-router-dom";



function Tootajad() {

  const [personal, setPersonal] = useState(tootajadFailist.slice());

  const sortAtoZ = () => {
    personal.sort((a, b) => a.eesnimi.localeCompare(b.eesnimi));
    setPersonal(personal.slice());
  }
  const reset = () => {
    setPersonal(tootajadFailist);
  }

  return (
    <div>
        <ArraysHome />
        <div>Kokku on: {personal.length} töötajat</div>
        <button onClick={reset}>Taasta</button>
        <button onClick={sortAtoZ}>Sorteeri A-Z</button>

        <div>
          {personal.map(persoon => 
            <div key={persoon.eesnimi}>
            <div>{persoon.eesnimi}</div>
            <div>{persoon.ametikoht}</div>
            <div>{persoon.tel}</div>
            <Link to={"/tootaja/" + persoon.eesnimi}>
              <button>Tutvu lähemalt</button>
            </Link>
          </div>)}
        </div>
    </div>
  )
}

export default Tootajad