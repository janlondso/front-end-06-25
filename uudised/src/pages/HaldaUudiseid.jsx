import { useState } from "react";
import { Link } from "react-router-dom"

function HaldaUudiseid() {
    const [uudised, setUudised] = useState(JSON.parse(localStorage.getItem("uudised")) || []);

    const kustuta = (index) => {
        uudised.splice(index, 1);
        setUudised(uudised.slice());
        localStorage.setItem("uudised", JSON.stringify(uudised));
    }
  return (
    <div>
        <h2>Halda uudised</h2>
        <div>
            {uudised.map((uudis, index) =>
                <div key={index}>
                    <div>{uudis}</div>
                    <button onClick={() => kustuta(index)}>x</button> <br />
                    <Link to={"/muuda/" + index}>
                        <button>Muuda</button>
                    </Link>
                </div>
            )}
        </div>
    </div>
    
  )
}

export default HaldaUudiseid