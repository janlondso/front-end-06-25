import ArraysHome from "./ArraysHome"
import { useRef, useState } from "react"
import andmed from '../../data/autod.json'
import { Link } from "react-router-dom";
// import ostukorvFailist from '../../data/ostukorv.json'

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
    
    const otsingRef = useRef();

    const otsi = () => {
        const vastus = andmed.filter(auto => auto.nimi.includes(otsingRef.current.value));
        setAutod(vastus);
    }

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

    
    const filtreeriSisaldabLyhenditER = () => {
        const vastus = andmed.filter(auto => auto.nimi.includes("er"));
        setAutod(vastus);
    }
    const filtreeriIgaLopevad = () => {
        const vastus = andmed.filter(auto => auto.nimi.endsWith("i"));
        setAutod(vastus);
    }
    const filtreeriTapselt8Tahelised = () => {
        const vastus = andmed.filter(auto => auto.nimi.length === 8);
        setAutod(vastus);
    }
    const filtreeriVah8Tahelised = () => {
        const vastus = andmed.filter(auto => auto.nimi.length >= 8);
        setAutod(vastus);
    }
    const filtreeriTeineTahtE = () => {
        const vastus = andmed.filter(auto => auto.nimi[1] === "e");
        setAutod(vastus);
    }
    
    const muudaSuurteksTahtedeks = () => {
        // const vastus = autod.map(auto => auto); <-- muudab koik samaks
        // const vastus = autod.map(auto => ({nimi: auto.nimi.toUpperCase(), hind: auto.hind, aktiivne: auto.aktiivne, pilt: auto.pilt}));
        const vastus = autod.map(auto => ({ ...auto, nimi: auto.nimi.toUpperCase()}));
        setAutod(vastus);
        // ...auto --> jatab auto seest koik ulejaanud asjad samaks, mis on temal premal
    }
    // autod.sort((a,b) => -1;) <-- ei tee midagi sest miinusmargiga ei vaheta jarjekorda
    // .push(uus_vaartus) -- lisab loppu
    //.splice(index,1) -- kustutab
    // .sort((a,b) =>) Pluss/Miinus--> koguse samaks, muudab jarjekorda
    // .filter(element =>) True/False --> kogus vaheneb
    // .map(element => )-->UUS_Väärtus kogus sama, aga muudab igayht
        const reset = () => {
            setAutod(andmed.slice());
        }

        const lisaOstukorvi = (toode) => {
            // ostukorvFailist.push(toode);
            const ostukorvLS = JSON.parse(localStorage.getItem("ostukorv")) || [];
            ostukorvLS.push(toode);
            localStorage.setItem("ostukorv", JSON.stringify(ostukorvLS));
        }
        // tuleb LS tuhjendada -- parem klops -inpect - local storage- parem klops - delete
        const arvutaKokku = () => { 
        let summa = 0;
        autod.forEach(auto => summa =  summa + auto.hind);
        return summa; // returni jargne laheb HTML-i
        }


    return (
    <div>
        <div>Autode hinnad kokku: {arvutaKokku() }</div>
        <input ref={otsingRef}  onChange={otsi} type="text" /> <br />
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
        <br /><br />
        <button onClick={muudaSuurteksTahtedeks}>Muuda kõikide autode nimed suurteks tähtedeks</button>
        <br /><br />

        <div>Autode arv: {autod.length} tk</div>
        {autod.map(auto =>
            <div key={auto.nimi}>
            <div>{auto.nimi}</div>
            <div>{auto.hind} €</div>
            <div><img className="pilt" src={auto.pilt} alt="" /></div>
            <div>{auto.aktiivne ? <button onClick={() => lisaOstukorvi(auto)}>Lisa ostukorvi</button> : <i>Toode pole aktiivne</i>}</div>
            <Link to={"/auto/" + auto.nimi}>
                <button>Vaata lähemalt</button>
            </Link>
            </div>)}
    </div>
  )
}

export default Autod