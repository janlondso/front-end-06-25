import { useState } from "react";


function Avaleht() {
    const tegelased = JSON.parse(localStorage.getItem("tegelased")) || [];
    const [klikitudNimi, uuendaKlikitudNimi] = useState("");
        // [
        // {eesnimi: "Mickey", perenimi: "Mouse", elukoht: "Disneyland", vanus: 25},
        // {eesnimi: "Minnie", perenimi: "Mouse", elukoht: "Disneyland", vanus: 25},
        // {eesnimi: "Winnie", perenimi: "Pooh", elukoht: "Hundred Acre Wood", vanus: 20},
        // {eesnimi: "Roo", perenimi: "Kangroo", elukoht: "Hundred Acre Wood", vanus: 15},
        // {eesnimi: "Scooby", perenimi: "Doo", elukoht: "Crystal Cove", vanus: 30}
        //  ];

    const kuvaNimi = (tegelane) => {
        uuendaKlikitudNimi(tegelane.eesnimi);
        }

        const valiTegelane = (klikitudTegelane) => {
          const valitud = JSON.parse(localStorage.getItem("valitudTegelased")) || [];
          valitud.push(klikitudTegelane);
          localStorage.setItem("vaitudTegelased", JSON.stringify(valitud));
        }
   
  return (
    <div>
       {klikitudNimi !== "" && <div>Klikkasid tegelase {klikitudNimi} peal</div>}
        {tegelased.map((tegelane, index) =>
        <div key={index}>
            <div>{tegelane.eesnimi}</div>
            <div>{tegelane.perenimi}</div>
            <div>{tegelane.elukoht}</div>
            <div>{tegelane.vanus}</div>
            <button onClick={() => valiTegelane(tegelane)}>Vali tegelane</button> <br /> 
            <button onClick={() => kuvaNimi(tegelane)}>Kuva nimi</button>  <br /><br />
        </div>
        )}
    </div>
  )
}

export default Avaleht