import { useState } from 'react';
import jookideNimekiri from '../joogid.json'
import { Link } from 'react-router-dom';


export default function Avaleht() {
    const [joogid, uuendaJoogid] = useState(jookideNimekiri);

  return (
    <div>Joogid:
      <br/><br/>
      {joogid.map((jook, index) =>
        <div key={jook}>
          <div>{index + 1}</div>
          <span>{jook}</span> <br />
          <Link to={"/jook/" + index}>
          <button>Vaata lähemalt</button>
          </Link>
          <br/><br/>
        </div> 
      )}
    </div>
  )
}
