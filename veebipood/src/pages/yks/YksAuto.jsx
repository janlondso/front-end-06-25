import { useParams } from "react-router-dom"
import autodFailist from '../../data/autod.json'

function YksAuto() {
    const { mark } = useParams();
    const leitud = autodFailist.find(auto => auto.nimi === mark);
  return (
    <div>
        <div>{leitud.nimi}</div>
        <div>{leitud.hind}</div>
        <div><img className="pilt" src={leitud.pilt} alt="" /></div>
        <div>{leitud.aktiivne ? "Aktiivne" : "Mitteaktiivne"}</div>
    </div>
  )
}

export default YksAuto