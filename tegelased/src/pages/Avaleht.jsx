import { useState } from "react";


function Avaleht() {
    const [klikitudNimi, uuendaKlikitudNimi] = useState("");
    const tegelased = [
        {eesnimi: "Mickey", perenimi: "Mouse", elukoht: "Disneyland"},
        {eesnimi: "Minnie", perenimi: "Mouse", elukoht: "Disneyland"},
        {eesnimi: "Winnie", perenimi: "Pooh", elukoht: "Hundred Acre Wood"},
        {eesnimi: "Roo", perenimi: "Kangroo", elukoht: "Hundred Acre Wood"},
        {eesnimi: "Scooby", perenimi: "Doo", elukoht: "Crystal Cove"}
         ]

    const kuvaNimi = (tegelane) => {
        uuendaKlikitudNimi(tegelane.eesnimi);
        }
   
  return (
    <div>
       {klikitudNimi !== "" && <div>Klikkasid tegelase {klikitudNimi} peal</div>}
        {tegelased.map(tegelane =>
        <div key={tegelane}>
            <div>{tegelane.eesnimi}</div>
            <div>{tegelane.perenimi}</div>
            <div>{tegelane.elukoht}</div>
            <button onClick={() => kuvaNimi(tegelane)}>X</button>
        </div>
        )}
    </div>
  )
}

export default Avaleht