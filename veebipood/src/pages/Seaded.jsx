import { useState } from "react"

function Seaded() {

  const [keel, setKeel] = useState("et");

  return (
    <div>
      <button className={keel === "et" ? "keel-aktiivne" : undefined} onClick={() => setKeel("et")}>Eesti</button>
      <button className={keel === "en" ? "keel-aktiivne" : undefined} onClick={() => setKeel("en")}>English</button>
      <button className={keel === "es" ? "keel-aktiivne" : undefined} onClick={() => setKeel("es")}>Espanol</button>
      <button className={keel === "ru" ? "keel-aktiivne" : undefined} onClick={() => setKeel("ru")}>Pycckij</button>

      {keel === "et" && <div>Leht on eesti keelne</div>}
      {keel === "en" && <div>Page is in English</div>}
      {keel === "es" && <div>La página está en español</div>}
      {keel === "ru" && <div>Cтpaницa на русском языке</div>}
      {keel !== "et" && <i>Translation other than Estonian are not yet ready</i>}

    </div>
  )
}

export default Seaded