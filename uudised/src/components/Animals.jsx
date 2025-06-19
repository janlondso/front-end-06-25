import { useState } from "react";

function Animals() {
    const animals = ["pigs", "goats", "sheep"];
    const [w, f] = useState(animals);
    const clean = () => {
        f(w.splice());
    }
  return (
    <>
      <button onClick={clean}>Tyhjenda</button>
      <div>Kokku on: {w.length} looma.</div>
      <div>{w.map(animal => <div key={animal}>{animal}</div>)}</div>
      {w.length === 0 && <div>Pole yhtegi looma</div>}       

    </>
  )
}

export default Animals