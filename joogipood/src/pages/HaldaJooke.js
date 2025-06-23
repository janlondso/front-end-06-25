import { useState } from "react"
import jookideNimekiri from '../joogid.json'


export default function HaldaJooke() {
  const [joogid, uuendaJoogid] = useState(jookideNimekiri);

  const kustuta = (index) => {
    joogid.splice(index,1);
    uuendaJoogid(joogid.slice());
  }

  return (
    <div>
      {joogid.map((jook, index) =>
      <div key={jook}>
        {jook}
        <button onClick={() => kustuta(index)}>x</button>
      </div>)}
      
    </div>
  )
}
