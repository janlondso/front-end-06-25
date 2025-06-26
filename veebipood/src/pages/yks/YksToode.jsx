import { useParams } from 'react-router-dom'
import tootedFailist from '../../data/tooted.json'

function YksToode() {
  const { produkt } = useParams();
  const leitud = tootedFailist.find(toode => toode.nimi === produkt);

  if (leitud === undefined){
        return <div>Toodet ei leitud</div>;
    }

  return (
    <div>
      <div>{leitud.nimi}</div>
      <div>{leitud.hind}</div>
      <div><img className="pilt-big" src={leitud.pilt} alt="" /></div>
      <div>{leitud.aktiivne ? "Aktiivne" : "Mitteaktiivne"}</div>
    </div>
  )
}

export default YksToode