import { useParams } from 'react-router-dom'
import jookideNimekiri from '../joogid.json'

export default function Jook() {
    const { number } = useParams();
    const leitud = jookideNimekiri[number];

    // if(leitud === undefined){
    //     return <div>Jooki ei leitud!</div>
    // }

  return (
    <div>
        {leitud}
        {leitud === undefined && <div>Jooki ei leitud!</div>}
    </div>
  )
}
