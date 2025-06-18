import { useState } from "react"

// renderdus - refresh või satutakse lehele ja kuvatakse esmakordselt välja HTML
// re-renderdus - kui useState-i setteriga uuendatakse HTMLi

// React jätab kõik meelde, et re-renderduse ajal ei peaks uuesti vaeva nägema
// välja arvatud tsüklid, kus on vaja teha manuaalne meeldejätmine key={} abil

function Ostukorv() {
  const [tooted, setTooted] = useState(["Coca", "Fanta", "Sprite"]);
  return (
    <div>
       {tooted.length > 0 ?
        <>
          <button onClick={() => setTooted([])}>Tühjenda</button>
          <div>Ostukorvis on {tooted.length} ese(t)</div>
        </> : 
        <div>Ostukorv on tühi</div>
        }
      {tooted.map(toode => <div key={toode}>{toode}</div>)}
    </div>
  )
}

export default Ostukorv