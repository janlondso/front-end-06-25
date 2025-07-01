import { useRef, useState } from "react"
import ArraysHome from "./ArraysHome"
import hinnadFailist from '../../data/hinnad.json'
import { Link } from "react-router-dom";


function Hinnad() {
    const [hinnad, setHinnad] = useState(hinnadFailist.slice());
    const otsingRef = useRef();
    
    const otsi = () => {
        const vastus = hinnadFailist.filter(hind => hind.number.toString().includes(otsingRef.current.value));
        setHinnad(vastus);
    }

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

    const arvutaKokku = () => { 
        let summa = 0;
        // for (let index = 0; index < hinnad.length; index++) {
        //     summa = summa + [index].number;
        // }

        //variant2
        // for ( let hind of hinnad) {
        //     summa = summa + hind.number;
        // }
        //varinat 3
        hinnad.forEach(hind => summa + hind.number);
    
    return summa; // returni jargne laheb HTML-i
    }

    // kaima tombamine: onClick, onChange jne
    // kui on () => otsi() siis peab miski selle kaima tombama
    // kui on inClick={reset}  siis peab kaima tombama
    //<div>Kõikide hindade summa on: {arvutaKokku()} €</div> laheb koheselt kaima

  return (
    <div>
        <ArraysHome />
        <div>Kõikide hindade summa on: {arvutaKokku()} €</div>
        <input ref={otsingRef}  onChange={otsi} type="text" /> <br />
        
        <button onClick={reset}>Reset</button>
       <div>Hindade arv {hinnad.length} tk</div> 
        <button onClick={sorteeriKasvavalt}>Sorteeri kasvavalt</button>
       <button onClick={sorteeriKahanevalt}> Sorteeri kahanevalt</button>
       <button onClick={filtreeriSuuremadKui40}> Jäta alles suuremad kui 40</button>
       <button onClick={filtreeriSuuremadKui60}> Jäta alles suuremad kui 60</button>
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