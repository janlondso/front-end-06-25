import { useRef, useState } from "react"

function MaksimaalneKalkulaator() {
  const [kuumakse, setKuumakse] = useState(0);

  const kohustusedRef = useRef();
  const netoSisseRef = useRef();
  const ylalpeetavadRef = useRef();


  const arvutaKuumakse = () => {
    setKuumakse((netoSisseRef.current.value - kohustusedRef.current.value) -
    (kohustusedRef.current.value * ylalpeetavadRef.current.value) * 35/100);
  }

  return (
    <div>
      <label>Ulalpeetavad</label>
      <select onChange={arvutaKuumakse} defaultValue={0} ref={ylalpeetavadRef}>
        <option>0</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>4</option>
        <option>5</option>
      </select> <br />
      <label>Igakuised kohustused</label>
      <input onChange={arvutaKuumakse} defaultValue={1000} ref={kohustusedRef} type="number" /><br />
      <label>Netossissetulek</label>
      <input onChange={arvutaKuumakse} defaultValue={3000} ref={netoSisseRef} type="number"/> <br />
      <div>Maksimaalne pakutav limiit: {kuumakse.toFixed(2)} €</div>
    </div>
  )
}

export default MaksimaalneKalkulaator