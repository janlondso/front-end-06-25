import { useState } from 'react';
import './numbrid.css'

function Numbrid() {
    const numbers = [4, 23, 7, 39, 19, 0, 9, 14, 135, 15, 100];
    const [data, setData] = useState(numbers);

    const sortNumSuureneb = () => {
        data.sort((a, b) => a - b);
        setData(data.slice());
    }
    const sortNumKahaneb = () => {
        data.sort((a, b) => b - a);
        setData(data.slice());
    }
    const sortEsiNumTaheJarjes = () => {
        const sorted = data.slice().sort((a, b) => {
            const aFirstDigit = a.toString()[0];
            const bFirstDigit = b.toString()[0];
            return aFirstDigit.localeCompare(bFirstDigit);
        });
            setData(sorted);
    }

    const sortVastuPidJarjes = () => {
         const sorted = data.slice().sort((a, b) => {
            const aFirstDigit = a.toString()[0];
            const bFirstDigit = b.toString()[0];
            return bFirstDigit.localeCompare(aFirstDigit);
        });
            setData(sorted);
    }

    const filtSuuremKui8 = () => {
        const result = data.filter(item => item >= 8);
        setData(result);
    }
    const filtVaiksemKui10 = () => {
        const result = data.filter(item => item <= 10);
        setData(result);
    }
    const filtPaaris = () => {
        const result = data.filter(item => item % 2 === 0);
        setData(result);
    }
    const filtPaaritud = () => {
        const result = data.filter(item => item % 2 !== 0);
        setData(result);
    }
    const filtNumAlgUhega = () => {
        const result = data.filter(item => item.toString().startsWith("1"));
        setData(result);
    }

    const filtKusOnNum3 = () => {
        const result = data.filter(item => item.toString().includes("3"));
        setData(result);
    }

    function reset(){
        setData([4, 23, 7, 39, 19, 0, 9, 14, 135, 15, 100]);
    }
  return (
    <div className='numbrid'>
        <button className='btn' onClick={sortNumSuureneb}>Number suuruse järgi kasvavalt</button>
        <button className='btn' onClick={sortNumKahaneb}>Numbri suuruse järgi kahanevalt</button>
        <button className='btn' onClick={sortEsiNumTaheJarjes}>Esimese numbri järgi tähestiku järjekorras???</button>
        <button className='btn' onClick={sortVastuPidJarjes}>Vastupidises järjekorras esimese numbri osas</button>
        <br />
        <button className='btn' onClick={filtSuuremKui8}>Jäta alles suuremad kui 8</button>
        <button className='btn' onClick={filtVaiksemKui10}>Jäta alles väiksemad kui 10</button>
        <button className='btn' onClick={filtPaaris}>Jäta alles paarisarvud</button>
        <button className='btn' onClick={filtPaaritud}>Jäta alles paritud arvud</button>
        <button className='btn' onClick={filtNumAlgUhega}>Jäta alles numbrid mis algavad 1-ga</button>
        <button className='btn' onClick={filtKusOnNum3}>Vastupidises järjekorras esimese numbri osas</button>
        <button className='btn' onClick={reset}>Jäta alles numbrid mis sisaldavad 3.e, aga pikkus ei loe</button>
        {data.map(num => <div key={num}>{num}</div>)}
        <button className='btn' onClick={reset}>Reset</button>
    </div>
  )
}

export default Numbrid