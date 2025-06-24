
import { useState } from 'react'
import tegevusteFail from '../tegevused.json'

function Tegevused() {
    const [tegevused, uuendaTegevused] = useState(tegevusteFail);

    const n2itaKasutajaYks = () => {
        const vastus = tegevused.filter(element => element.userId === 1);
        uuendaTegevused(vastus);
    }
    const n2itaKasutajaKaks = () => {
        const vastus = tegevused.filter(element => element.userId === 2);
        uuendaTegevused(vastus);
    }
    const n2itaKasutajaKolm = () => {
        const vastus = tegevused.filter(element => element.userId === 3);
        uuendaTegevused(vastus);
    }
    const n2itaKoikValmis = () => {
        const vastus = tegevused.filter(element => element.completed === true);
        uuendaTegevused(vastus);
    }
    const n2itaKoikMitteValmis = () => {
        const vastus = tegevused.filter(element => element.completed !== true);
        uuendaTegevused(vastus);
    }
    const n2itaAlgavadT = () => {
        const vastus = tegevused.filter(element => element.title[0] === "t");
        uuendaTegevused(vastus);
    }
    const n2itaTahtiRohkemKui20 = () => {
        const vastus = tegevused.filter(element => element.title.length > 20);
        uuendaTegevused(vastus);
    }
    
    const n2itaKoiki = () => {
        uuendaTegevused(tegevusteFail);
    }

  return (
    <div>
        <div>Tegevuste arv on: {tegevused.length}tk</div>
        <button onClick={() => n2itaKasutajaYks()}>Kuva kõik kasutaja ID 1 tegevused</button>
        <button onClick={() => n2itaKasutajaKaks()}>Kuva kõik kasutaja ID 2 tegevused</button>
        <button onClick={() => n2itaKasutajaKolm()}>Kuva kõik kasutaja ID 3 tegevused</button>
        <button onClick={() => n2itaKoikValmis()}>Kuva kõik valmis tegevused</button>
        <button onClick={() => n2itaKoikMitteValmis()}>Kuva kõik mitte valmis tegevused</button>
        <button onClick={() => n2itaAlgavadT()}>Kuva kõik "t" tähega algavad tegevused</button>
        <button onClick={() => n2itaTahtiRohkemKui20()}>Kuva tegevused, mille on tähemärke rohkem kui 20</button>
        <button onClick={() => n2itaKoiki()}>Kuva kõik tegevused tagasi</button>
        {tegevused.map(element =>
            <div key={element}>
                <div>{element.userId}</div>
                <div>{element.Id}</div>
                <div>{element.title}</div>
                <div>{element.completed}</div>
                <br />
            </div>
        )}
    </div>);
}

export default Tegevused