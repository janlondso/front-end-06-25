import { useRef } from "react"

function LisaUudis() {
  const uudisedRef = useRef();

  const lisaUusUudis = () => {
    const uudised = JSON.parse(localStorage.getItem("uudised")) || [];
    uudised.push(uudisedRef.current.value);
    localStorage.setItem("uudised", JSON.stringify(uudised));
  }

  return (
    <div>
        <label>Sisesta uus uudis</label> <br />
        <input ref={uudisedRef} type="text" /> <br />
        <button onClick={lisaUusUudis}>Lisa uudis</button>
    </div>
  )
}

export default LisaUudis