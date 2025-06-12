import { useRef, useState } from "react"

function LaenuKalkulaator() {
  const [kuumakse, setKuumakse] = useState(351.61);
  const [korgendatudKuumakse, setKorgendatudKuumakse] = useState(498.98);
  const [protsent, setProtsent] = useState(0);
  const [laenusumma, setLaenuSumma] = useState(75000);
  const [intress, setIntress] = useState(3.85);

  const ostuhindRef = useRef();
  const sissemakseRef = useRef();
  const perioodRef = useRef();
  const marginaalRef = useRef();
  const euriborRef = useRef();

  const arvutaKuumakse = () => {
    setIntress(Number(marginaalRef.current.value) + Number(euriborRef.current.value));

    setProtsent(sissemakseRef.current.value / ostuhindRef.current.value * 100);

    setLaenuSumma(ostuhindRef.current.value - sissemakseRef.current.value);

    setKuumakse((ostuhindRef.current.value - sissemakseRef.current.value) / 12 / perioodRef.current.value *
     (Number(marginaalRef.current.value) + Number(euriborRef.current.value))/2.3);

    setKorgendatudKuumakse((ostuhindRef.current.value - sissemakseRef.current.value) / 12 / perioodRef.current.value * 7/2.3);

  }



  return (
    <div>
        <label>Kinnisvara ostuhind:</label>
        <input ref={ostuhindRef} onChange={arvutaKuumakse} defaultValue={75000} type="number" /><br />
        <label>Sissemakse</label>
        <input ref={sissemakseRef} onChange={arvutaKuumakse} defaultValue={0} type="number" /><br />
        <label>Protsent</label>
        <input disabled value={protsent.toFixed(2)} type="number" /><br />
        <label>Laenusumma</label>
        <input disabled value={laenusumma} type="number" /><br />
        <label>Periood</label>
        {/* <input defaultValue={30} ref={perioodRef} type="number" /><br /> */}
        <select defaultValue={30} ref={perioodRef}>
          <option>5</option>
          <option>10</option>
          <option>15</option>
          <option>20</option>
          <option>25</option>
          <option>30</option>
        </select> <br />
        <label>Marginaal</label>
        <input defaultValue={1.7} ref={marginaalRef} onChange={arvutaKuumakse} type="number" /><br />
        <label>Euribor</label>
        <input defaultValue={2.15} ref={euriborRef} onChange={arvutaKuumakse} type="number" /><br />
        <label>Intress kokku</label>
        <input disabled value={intress.toFixed(2)} type="number" /><br />
        <div>Kuumakse {kuumakse.toFixed(2)} €</div>
        <div>Juhul kui sinu laenuintress peaks tõusma 7%-i, on laenumakse {korgendatudKuumakse.toFixed(2)} €</div>
    </div>
  )
}

export default LaenuKalkulaator