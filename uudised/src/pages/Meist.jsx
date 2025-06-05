import { useState } from "react";

function Meist() {
    const [kontakt, n2itaKontakt] = useState("");

    return ( 
    <div>
        <div>See on meist leht, nähtav localhost: 3000/meist aadressil</div>
        <div>Võta meiega ühendust</div>
        <br />
        <div>Arvo Pärt</div>
        <div>Uudisteklippide taustamuusika</div>
        <button onClick={() => n2itaKontakt('+37258 888 888')}>Võta ühendust</button>
        <br />
        <div>Kelly Sildaru</div>
        <div>Püstolreporter</div>
        <button onClick={() => n2itaKontakt('+37256 999 999')}>Võta ühendust</button>
        <br />
        <div>Lennart Meri</div>
        <div>President</div>
        <button onClick={() => n2itaKontakt('+37256 111 111')}>Võta ühendust</button>
        <br />
        <div>Jaagup Kreem</div>
        <div></div>
        <div>Välisturgude spetsialist</div>
        <button onClick={() => n2itaKontakt('+372 52 222 222')}>Võta ühendust</button>
        <br /> <br />
        { kontakt !== "" && <div>Tema kontakt: {kontakt} </div>}
    </div>
     );
}

export default Meist;