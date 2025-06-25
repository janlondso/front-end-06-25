import { useState } from "react"
import ArraysHome from "./ArraysHome"
import hinnadFailist from '../../data/hinnad.json'
import { Link } from "react-router-dom";


function Hinnad() {
    const [hinnad, setHinnad] = useState(hinnadFailist.slice());

    function reset() {
        setHinnad(hinnadFailist.slice());
    }
    
    function sorteeriKasvavalt(){
        hinnad.sort((a, b) => a.number - b.number);
        // setHinnad([...hinnad]); chatGPT versioon
        setHinnad(hinnad.slice());
    }

    function sorteeriKahanevalt() {
         hinnad.sort((a, b) => b.number - a.number);
         setHinnad(hinnad.slice()); // mlukoha ära lõikamine
    }

    function filtreeriSuuremadKui40(){
        const vastus = hinnad.filter(hind => hind.number > 40);
        setHinnad(vastus);
    }

    function filtreeriSuuremadKui60(){
        const vastus = hinnad.filter(hind => hind.number < 60);
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
       
        {hinnad.map((hind, index) =>
        <div key={hind.number}>
            {hind.number} {hind.sonana}
        <Link to={"/hind/" + index}>
        <button>Vt lahemalt</button>
        </Link>
        </div>)}
    </div>
  )
}

export default Hinnad