import { useState } from "react"

function Ilmumine() {
    const [n2itaLisaInfot, uuendaN2itaLisaInfot] = useState(false);
  return (
    <div>
        <div onClick={() => uuendaN2itaLisaInfot(!n2itaLisaInfot)}>
            Sooduskoodi sisestamine ja makse arvutuskäik
            {n2itaLisaInfot === true && <span>A</span>}
            {n2itaLisaInfot === false && <span>V</span>}
            </div>
            {n2itaLisaInfot === true && <div>Tellitavad tooted ja teenused
                    Lisatud teenused
                    Family pakett

                    Soodustus kuni 29.03.2023 
                    0,00 €/kuu

                    39,00 €/kuu

                    Videolaenutus

                    Sisaldub paketis
                    FOX NOW

                    Sisaldub paketis
                    HBO

                    Sisaldub paketis
                    National Geographic keskkond

                    Sisaldub paketis
                    Go3 Film / Paramount+

                    Sisaldub paketis
                    Lastenurk

                    Sisaldub paketis
                    Setanta Sportsi äpp

                    Sisaldub paketis
                    5 ekraani

                    Sisaldub paketis
                    Inspira +

                    Sisaldub paketis
                    Salvestamine

                    Sisaldub paketis
                </div>}
    </div>
  )
}

export default Ilmumine