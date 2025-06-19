import { useState } from 'react';
import './books.css'

function Books() {
    const books = ["The Great Gatsby", "War and Peace", "Hamlet", "Moby Dick", "Atomic Habits", "Da Vinci Code"];
    const [items, setItems] = useState(books);
    const sorteeriAZ = () => {
       items.sort((a,b) => a.localeCompare(b));
       setItems(items.slice());
    }

    const sorteeriZA = () => {
        items.sort((a,b) => b.localeCompare(a));
        setItems(items.slice());
    }

    const sorteeriLength = () => {
        items.sort((a,b) => a.length - b.length);
        setItems(items.slice());
    }

    const sorteeriTeineTaht = () => {
        items.sort((a,b) => a[1].localeCompare(b[1]));
        setItems(items.slice());
    }

    const sorteeriSonadKogus = () => {

        setItems(items.slice());
    }

    const sorteeriLengthMinYks = () => {
        items.sort((a,b) => a[a.length - 1].localeCompare(b[b.length - 1]));
        setItems(items.slice());
    }

    const filtreeriTheAlgavad = () => {
        const result = items.filter(item => item.includes("The"));
        setItems(result);
    }
    const filtreeriSisaldabEnd = () => {
        const result = items.filter(item => item.includes(" end "));
        setItems(result);
    }
    const filtreeriTahtiRohkemKui10 = () => {
        const result = items.filter( item => item.length >= 10);
        setItems(result);
    }
    const filtreeriTahtiVahemKui7 = () => {
        const result = items.filter( item => item.length <= 7);
        setItems(result);
    }
    const filtreeriKolmeRohkemSonalised = () => {}
    const filtreeriEelviimaneOnC = () => {}

    function reset(){
        setItems(books);
    }
  return (
    <div className='books'>
        <button className='sort-btn' onClick={sorteeriAZ}>from A to Z</button>
        <button className='sort-btn' onClick={sorteeriZA}>from Z to A</button>
        <button className='sort-btn' onClick={sorteeriLength}>Sõnapikkuse jargi</button>
        <button className='sort-btn' onClick={sorteeriTeineTaht}>Teise tähe jargi</button>
        <button className='sort-btn' onClick={sorteeriSonadKogus}>Sõnade arvu jargi</button>
        <button className='sort-btn' onClick={sorteeriLengthMinYks}>Eelviimase tähe järgi</button>
        <br />
        <button className='filt-btn' onClick={filtreeriTheAlgavad}>Jäta alles "The"ga algavad</button>
        <button className='filt-btn' onClick={filtreeriSisaldabEnd}>Jäta alles kellel keskel on "and"</button>
        <button className='filt-btn' onClick={filtreeriTahtiRohkemKui10}>Jäta alles rohkematetähemärkidega sõnad kui 10</button>
        <button className='filt-btn' onClick={filtreeriTahtiVahemKui7}>Jäta alles vähemate tähemärkidega kui 7</button>
        <button className='filt-btn' onClick={filtreeriKolmeRohkemSonalised}>Jäta alles kolme või rohkema sõnalised</button>
        <button className='filt-btn' onClick={filtreeriEelviimaneOnC}>Jäta alles kellel eelviimane täht on "c"</button>

        <button className='sort-btn blue-btn' onClick={reset}>Reset</button>

        {items.map(book => <div key={book}>{book}</div>)}
    </div>
  )
}

export default Books