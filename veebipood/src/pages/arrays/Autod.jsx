import ArraysHome from "./ArraysHome"
import { useState } from "react"


function Autod() {
    const andmed = ["Ferrari", "Ford", "Lamborghini", "BMW", "Audi", "Tesla", "Mercedes"];
    const [autod, setAutod] = useState(andmed);
  
// kui on tähestiku järgi sorteerimine: localeCompare
  // kui on numbrite sorteerimine: üks miinus teine

    const sorteeriAZ = () => {
        autod.sort((a,b) => a.localeCompare(b)); // tahestiku jargi
        setAutod(autod.slice());
    }

    const sorteeriZA = () => {
        autod.sort((a,b) => b.localeCompare(a)); // tahestiku jargi tagurpidi
        setAutod(autod.slice());
    }

    const sorteeriTahedKasv = () => {
        autod.sort((a,b) => a.length - b.length);
        setAutod(autod.slice());
    }

    const sorteeriTahedKah = () => {
        autod.sort((a,b) => b.length - a.length); 
        setAutod(autod.slice());
    }

    const sorteeriKolmasTahtAZ = () => {
         autod.sort((a,b) => a[2].localeCompare(b[2])); 
        //  autod.sort((a,b) => a.at(2).localeCompare(b.at(2))); 
        //  autod.sort((a,b) => a.charAt(2).localeCompare(b.chatAr(2))); 
        setAutod(autod.slice());
    }

    const reset = () => {
        setAutod(andmed);
    }

    const filtreeriSisaldabLyhenditER = () => {
        const vastus = autod.filter(auto => auto.includes("er"));
        setAutod(vastus);
    }
    const filtreeriIgaLopevad = () => {
        const vastus = autod.filter(auto => auto.endsWith("i"));
        setAutod(vastus);
    }
    const filtreeriTapselt8Tahelised = () => {
        const vastus = autod.filter(auto => auto.length === 8);
        setAutod(vastus);
    }
    const filtreeriVah8Tahelised = () => {
        const vastus = autod.filter(auto => auto.length >= 8);
        setAutod(vastus);
    }
    const filtreeriTeineTahtE = () => {
        const vastus = autod.filter(auto => auto[1] === "e");
        setAutod(vastus);
    }

    return (
    <div>
        <button onClick={reset}>Reset</button>
        <ArraysHome />
        <button onClick={sorteeriAZ}>Sortreeri A-Z</button>
        <button onClick={sorteeriZA}>Sortreeri Z-A</button>
        <button onClick={sorteeriTahedKasv}>Sortreeri tähemärgid kasvavalt</button>
        <button onClick={sorteeriTahedKah}>Sortreeri tähemärgid kasvavalt</button>
        <button onClick={sorteeriKolmasTahtAZ}>Sortreeri kolmas taht A-Z</button>
        <br /><br />
        <button onClick={filtreeriSisaldabLyhenditER} >Jata alles -er- lyhendid sisaldavad</button>
        <button onClick={filtreeriIgaLopevad}>Jata alles -i- tähega lopevad</button>
        <button onClick={filtreeriTapselt8Tahelised}>Jäta alles täpselt 8 tähelised</button>
        <button onClick={filtreeriVah8Tahelised}>Jäta alles vähemalt 8 tähelised</button>
        <button onClick={filtreeriTeineTahtE}>Jäta alles millel teine taht on -e-</button>
        <div>Autode arv: {autod.length} tk</div>
        {autod.map(auto => <div key={auto}>{auto}</div>)}
    </div>
  )
}

export default Autod