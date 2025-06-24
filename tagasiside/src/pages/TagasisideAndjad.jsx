import { useRef, useState } from 'react'
import nimed from '../nimed.json'

function TagasisideAndjad() {
    const [nimekiri, setNimekiri] = useState(nimed);
    const nimiRef = useRef();

    const filtreeriTahM = () => {
        const result = nimekiri.filter( item => item.startsWith("M"));
        setNimekiri(result)
    }
    const filtreeriKuusTahte = () => {
        const result = nimekiri.filter( item => item.length === 6);
        setNimekiri(result)
    }
    const filtreeriYOnViimane = () => {
        const result = nimekiri.filter( item => item.endsWith("y"));
        setNimekiri(result)
    }
    const sortZtoA = () => {
        nimekiri.sort((a, b) => b.localeCompare(a));
        //nimekiri.soret().reverse();
        setNimekiri(nimekiri.slice())
    }

    const lisaEst = () => {
        const vastus = nimekiri.map(item => "EST-" + item);
        setNimekiri(vastus);
    }
    const kustuta = (index) => {
        nimekiri.splice(index, 1);
        setNimekiri(nimekiri.slice());
    }
    const lisa = () => {
        nimekiri.push(nimiRef.current.value);
        setNimekiri(nimekiri.slice());
    }

  return (
    <div>
        <button onClick={() => filtreeriTahM()}>M- tahega algavad nimed</button>
        <button onClick={() => filtreeriKuusTahte()}>6- kohalised nimed</button>
        <button onClick={() => filtreeriYOnViimane()}>y-ga lopevad nimed</button>
        <button onClick={() => sortZtoA()}>Sorteeri Z to A</button>
        <button onClick={() => lisaEst()}>Est lisamine nimele</button>
        <br /><br />
        <div>Tagasisideandjad kokku on: {nimekiri.length} tk </div>
        <br />
        <label>Lisa uus nimi</label><br />
        <input ref={nimiRef} type="text" /><br />
        <button onClick={() => lisa()}>Lisa uus</button>
        <br /><br />
        {nimekiri.map((nimi, index) =>
        <div key={nimi}>
            <span>{index+1}. </span>
            <span>{nimi}</span>
            <button onClick={() => kustuta(index)}>X</button>
        </div>)}
        
    </div>
  )
}

export default TagasisideAndjad