import { useState } from "react";

function Words() {
    const words = ["spray", "elite", "exuberant", "destruction", "present"];
    const [w, f] = useState(words);
    const clean = () => {
        f(w.splice())
    }
  return (
   
    <div>
        <button onClick={clean}>Tühjenda</button>
        {w.map(word => <div key={word}>{word}</div>)}
        </div>
  )
}

export default Words