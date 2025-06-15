
import { useRef } from 'react'
import './App.css'
import { useState } from 'react';

function App() {
    const [laenuSumma, setLaenuSumma] = useState(75000);
    const ostuhindRef = useRef();
    const sissemakseRef = useRef();
    const marginaalRef = useRef();
    const euriborRef = useRef();
    const [intress, setIntress] = useState(4.44);
    const perioodRef = useRef();
    const [kuumakse, setKuumakse] = useState();

    const arvutaLaenusumma = () => {
      setLaenuSumma(Number(ostuhindRef.current.value) - Number(sissemakseRef.current.value));
    }
    const arvutaIntress = () => {
      setIntress(Number(marginaalRef.current.value) + Number(euriborRef.current.value));
    }
    const arvutaKuumakse = () => {
      setKuumakse(
        (ostuhindRef.current.value - sissemakseRef.current.value) / (perioodRef.current.value * 12) * (Number(marginaalRef.current.value) + Number(euriborRef.current.value))
      );
    }
  return (
    <>
     <label>Kinnisvara ostuhind</label>
     <input defaultValue={75000} ref={ostuhindRef} onChange={arvutaLaenusumma}  type="number" /> <br />
     <label>Sissemakse</label>
     <input defaultValue={0} ref={sissemakseRef} onChange={arvutaLaenusumma} type="number" /> <br />
     <div>Laenusumma: {laenuSumma}</div>
     <label>Periood</label>
     <input defaultValue={30} ref={perioodRef} onChange={arvutaKuumakse} type="number" /> <br />
     <label>Marginaal</label>
     <input defaultValue={1.7} ref={marginaalRef} onChange={arvutaIntress} type="number" /> <br />
     <label>Euribor</label>
     <input defaultValue={2.74} ref={euriborRef} onChange={arvutaIntress} type="number" /> <br />
     <div>Intress kokku: {intress.toFixed(2)}</div>
     <br /> <br />
     <div>Kuumakse: {kuumakse}</div>
    </>
  )
}

export default App
