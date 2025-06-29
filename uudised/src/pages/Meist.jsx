import { useState } from "react";
import nimekiri from '../tootajad.json'

function Meist() {
    const [kontaktid] = useState(nimekiri);
    const [n2itaKontakt, uuendaN2itaKontakt] = useState("");
    const [valitud, setValitud] = useState("");

    const votaYhendust = (kontakt) => {
        uuendaN2itaKontakt(kontakt.telefon);
        setValitud(kontakt.nimi);
    }

    return ( 
    <div>
        <div>See on meist leht, nähtav localhost: 3000/meist aadressil</div>
        <div>Meie töötajad:</div>
        <br />
        {kontaktid.map(kontakt =>
        <div className={kontakt.nimi === valitud ? "valitud" : undefined} key={kontakt}>
            <span>{kontakt.nimi} - </span>
            <span>{kontakt.ala}</span>
            <button onClick={() => votaYhendust(kontakt)}>Võta ühendust</button>
        </div> )} 
        <br />
        { n2itaKontakt !== "" && <div>Tema kontakt: {n2itaKontakt} </div>}
    </div>
     );
}

export default Meist;