import { useState } from 'react';
import jookideNimekiri from '../joogid.json'


export default function Avaleht() {
    const [joogid, uuendaJoogid] = useState(jookideNimekiri);

  return (
    <div>Joogid:
      {joogid.map(jook =>
        <div key={jook}>
          <span>{jook}</span>
        </div>
      )}
    </div>
  )
}
