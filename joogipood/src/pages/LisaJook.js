import { useRef } from 'react';
import jookideNimekiri from '../joogid.json'

export default function LisaJook() {
    const jookRef = useRef();

    const lisaUusJook = () => {
    jookideNimekiri.push(jookRef.current.value);
  }

  return (
    <div>
      <label>Sisesta uus jook</label>
      <input ref={jookRef} type="text" />
      <button onClick={() => lisaUusJook()}>Lisa jook</button>
    </div>
  )
}
