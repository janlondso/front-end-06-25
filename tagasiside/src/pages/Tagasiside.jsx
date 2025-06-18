import { useState } from "react";


function Tagasiside() {
    const tagasisided = ["Oli hea", "Huvitav", "Teistsugune", "Põnev"];
    const [m, f] = useState(tagasisided);

  return (
    <div>
        {m.map(tagasiside => <div>{tagasiside}</div>)}
    </div>
  )
}

export default Tagasiside
