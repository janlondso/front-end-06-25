import { useState } from "react"
import laigitud from "../assets/laigitud.svg";
import mittelaigitud from "../assets/mittelaigitud.svg";

// rfce --> snippets. loob reactis komponendi

//  renderdamine -/> HTML-i  esialgne väljakuvamine
// re renderdamine --> HTML-i uuest kuvamine useState-i setteri abiga

function Avaleht() {
    const [kogus, setKogus] = useState(0); // number, saab teha arvutusi: * /, võrrelda: < >
    // kogus, hind, vanus
    const [sonum, setSonum] = useState("Muuda kogust"); // string .includes(), .startsWith(), .reverse(), toLowerCase()
    // isikukood, tel nr, postiindeks
    const [like, setLike] = useState(false); // boolean. saan tagurpidi keerata: !true -> false !false -> true
    // makstud, registreerinud, taaisealine, tellitud, laos, sisseloginud
    
    function nulli(){
      setKogus(0);
      setSonum("Kogus nullitud!");
    }
    
    function vahenda(){
      setKogus(kogus - 1);
      setSonum("Kogus vähendatud!");
    }
    
    function suurenda(){
      setKogus(kogus + 1);
      setSonum("Kogus suurendatud!");
    }
  
  return (
    <div>
      {like === true && <img onClick={() => setLike(false)} src={laigitud} alt="" />}
      {like === false && <img onClick={() => setLike(true)} src={mittelaigitud} alt="" />}

      <br /><br />

      <div>{sonum}</div>
     {kogus !== 0 && <button onClick={nulli}>Tagasi nulli</button>}
      <br />
       <button disabled={kogus === 0} onClick={vahenda}>-</button>
      <span>{kogus}</span>
      <button onClick={suurenda}>+</button>
    </div>
  )
}

// Kui saadetakse kaasa parameeter, siis tuleb onClick sees teha: onClick={() => setKogus(0))}
// Kui ei saadeta, siis võib teha: onClick={nulli} , aga võib ka teha: onClick={() => nulli()}

// Kui panen nii: onClick={setKogus(0)}   või  onClick={suurenda()}, siis pannakse HTMLs
// funktsioon koheselt käima, ilma klikki ootamata. siis tekib lõputu loop.

export default Avaleht