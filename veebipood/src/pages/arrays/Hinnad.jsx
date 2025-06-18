import { useState } from "react"
import ArraysHome from "./ArraysHome"


function Hinnad() {
    const [hinnad, setHinnad] = useState([44, 9, 12, 34, 65, 87, 116, 55, 77, 430]);

    function reset() {
        setHinnad([44, 9, 12, 34, 65, 87, 116, 55, 77, 430]);
    }
    
    function sorteeriKasvavalt(){
        hinnad.sort((a, b) => a - b);
        // setHinnad([...hinnad]); chatGPT versioon
        setHinnad(hinnad.slice());
    }

    function sorteeriKahanevalt() {
         hinnad.sort((a, b) => b - a);
         setHinnad(hinnad.slice()); // mlukoha ära lõikamine
    }

    function filtreeriSuuremadKui40(){
        const vastus = hinnad.filter(hind => hind > 40);
        setHinnad(vastus);
    }

    function filtreeriSuuremadKui60(){
        const vastus = hinnad.filter(hind => hind < 60);
        setHinnad(vastus);
    }

  return (
    <div>
        <ArraysHome />
        <button onClick={reset}>Reset</button>
        <button onClick={sorteeriKasvavalt}>Sorteeri kasvavalt</button>
       <button onClick={sorteeriKahanevalt}> Sorteeri kahanevalt</button>
       <button onClick={filtreeriSuuremadKui40}> Jäta alles suuremad kui 40</button>
       <button onClick={filtreeriSuuremadKui60}> Jäta alles suuremad kui 60</button>
       <div>Hindade arv {hinnad.length} tk</div> 
        {hinnad.map(hind => <div key={hind}>{hind}</div>)}
    </div>
  )
}

export default Hinnad