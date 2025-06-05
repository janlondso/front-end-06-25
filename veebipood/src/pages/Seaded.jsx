import { useState } from "react"

function Seaded() {

  const [keel, setKeel] = useState("et");

  return (
    <div>
      <button onClick={() => setKeel("et")}>Eesti</button>
      <button onClick={() => setKeel("en")}>English</button>
      <button onClick={() => setKeel("es")}>Espanol</button>
      <button onClick={() => setKeel("ru")}>Pycckij</button>

      {keel === "et" && <div>Leht on eesti keelne</div>}
      {keel === "en" && <div>Page is in English</div>}
      {keel === "es" && <div>La página está en español</div>}
      {keel === "ru" && <div>Cтpaницa на русском языке</div>}
      {keel !== "et" && <i>Translation other than Estonian are not yet ready</i>}

    </div>
  )
}

export default Seaded