import { useParams } from "react-router-dom"
import esindusedFailist from '../../data/esindused.json'

function YksEsindus() {
    // <Route path="/esindus/:pood" element={<YksEsindus />} />
    const { pood } = useParams(); // votab URL-i muutuja vaartuse
    const leitud = esindusedFailist.find(esindus => esindus.keskus === pood);

    if (leitud === undefined){
        return <div>Esindust ei leitud</div>;
    }
// "", 0, {}, [] -- > tyhjad vaartused
// udefined, null --> tyhjus

  return (
    <div>
        <div>{leitud.keskus}</div>
        <div>{leitud.tel}</div>
        <div>{leitud.aadress}</div>
    </div>
  )
}

export default YksEsindus