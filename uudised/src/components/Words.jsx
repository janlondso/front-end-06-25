import { useState } from "react";

function Words() {
    const words = ["spray", "elite", "exuberant", "destruction", "present"];
    const [w, f] = useState(words);

    const clean = () => {
        f(w.splice());
        console.log(w);
    }

  return (
       <div>
          <button onClick={clean}>Tühjenda</button>
          <div>Kokku on: {w.length} sõna.</div>
          {w.map(word => <div key={word}>{word}</div>)}
          {w.length === 0 && <div>No words...</div>}       
     </div>
  )
}

export default Words