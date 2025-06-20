import ArraysHome from "./ArraysHome"
import { useState } from "react"
import andmed from '../../data/autod.json'

// renderdamine --> HTMLi esialgne väljakuvamine
// re-renderdamine --> HTMLi uuesti kuvamine useState-i setteri abiga

// kui on tähestiku järgi sorteerimine: localeCompare
// kui on numbrite sorteerimine: üks miinus teine

// key-sid läheb vaja re-renderdamisel. renderdamisel pannakse key'd külge, 
//                                          kogu HTML jäetakse meelde
// re-renderdamisel, et vaeva vähendada (et ei peaks kogu HTMLi otsast peale uuesti läbi käima),
//    võetakse mälukohad ja array'l tuleb mälukohad manuaalselt panna key= abiga

function Autod() {
    const [autod, setAutod] = useState(andmed.slice());

    const sorteeriAZ = () => {
        autod.sort((a,b) => a.nimi.localeCompare(b.nimi)); // tahestiku jargi
        setAutod(autod.slice());
    }

    const sorteeriZA = () => {
        autod.sort((a,b) => b.nimi.localeCompare(a.nimi)); // tahestiku jargi tagurpidi
        setAutod(autod.slice());
    }

    const sorteeriTahedKasv = () => {
        autod.sort((a,b) => a.nimi.length - b.nimi.length);
        setAutod(autod.slice());
    }

    const sorteeriTahedKah = () => {
        autod.sort((a,b) => b.nimi.length - a.nimi.length); 
        setAutod(autod.slice());
    }

    const sorteeriKolmasTahtAZ = () => {
         autod.sort((a,b) => a.nimi[2].localeCompare(b.nimi[2])); 
        //  autod.sort((a,b) => a.at(2).localeCompare(b.at(2))); 
        //  autod.sort((a,b) => a.charAt(2).localeCompare(b.chatAr(2))); 
        setAutod(autod.slice());
    }

    const reset = () => {
        setAutod(andmed.slice());
    }

    const filtreeriSisaldabLyhenditER = () => {
        const vastus = autod.filter(auto => auto.nimi.includes("er"));
        setAutod(vastus);
    }
    const filtreeriIgaLopevad = () => {
        const vastus = autod.filter(auto => auto.nimi.endsWith("i"));
        setAutod(vastus);
    }
    const filtreeriTapselt8Tahelised = () => {
        const vastus = autod.filter(auto => auto.nimi.length === 8);
        setAutod(vastus);
    }
    const filtreeriVah8Tahelised = () => {
        const vastus = autod.filter(auto => auto.nimi.length >= 8);
        setAutod(vastus);
    }
    const filtreeriTeineTahtE = () => {
        const vastus = autod.filter(auto => auto.nimi[1] === "e");
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
        {autod.map(auto => <div key={auto}>
            <div>{auto.nimi}</div>
            <div>{auto.hind} €</div>
            <div><img className="pilt" src={auto.pilt} alt="" /></div>
            <div>{auto.aktiivne ? <button>Lisa ostukorvi</button> : <i>Toode pole aktiivne</i>}</div>
            </div>)}
    </div>
  )
}

export default Autod