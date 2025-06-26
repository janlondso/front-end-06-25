import { useParams } from 'react-router-dom'
import tootajadFailist from '../../data/tootajad.json'
function YksTootaja() {
  const { persoon } = useParams();
  const leitud = tootajadFailist.find(tootaja => tootaja.eesnimi === persoon);

  if(leitud === undefined) {
    return <div>Töötajat ei leitud!</div>;
  }

  return (
    <div>
      <div>{leitud.eesnimi}</div>
      <div>{leitud.ametikoht}</div>
      <div>{leitud.tel}</div>
    </div>
  )
}

export default YksTootaja