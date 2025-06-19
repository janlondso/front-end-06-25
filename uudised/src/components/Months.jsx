import { useState } from "react";

function Months() {
    const months = ["March", "Jan", "Feb", "Dec"];
    const [w, f] = useState(months);
    const clean = () => {
        f(w.splice());
    }
  return (
    <div>
        <button onClick={clean}>Tühjenda</button>
        <div>Kokku on: {w.length} kuud.</div>
        { w.map(month => <div key={month}>{month}</div>)}
        {w.length === 0 && <div> Array is empty...</div>}       

    </div>
  )
}

export default Months