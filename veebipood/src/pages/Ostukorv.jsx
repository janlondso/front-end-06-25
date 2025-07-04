import { useState } from "react"
// import ostukorvFailist from '../data/ostukorv.json'
import { useTranslation } from "react-i18next";
import deleteIcon from '../assets/trash.png'

// renderdus - refresh või satutakse lehele ja kuvatakse esmakordselt välja HTML
// re-renderdus - kui useState-i setteriga uuendatakse HTMLi

// React jätab kõik meelde, et re-renderduse ajal ei peaks uuesti vaeva nägema
// välja arvatud tsüklid, kus on vaja teha manuaalne meeldejätmine key={} abil

function Ostukorv() {
    const { t } = useTranslation(); // votan LocalStotag-st seejarel jutumargid maha
  
  const [tooted, setTooted] = useState(JSON.parse(localStorage.getItem("ostukorv")) || []);

  const kustuta = (index) => {
    tooted.splice(index, 1); 
    setTooted(tooted.slice());
    localStorage.setItem("ostukorv", JSON.stringify(tooted));
  }

  return (
    <div>
       {tooted.length > 0 ?
        <>
          <button onClick={() => setTooted([])}>{t("cart.empty-button")}</button>
          <div>{t("cart.in-cart")} {tooted.length} {t("cart.item(s)")}</div>
        </> : 
        <div>{t("cart.empty-cart")}</div>
        }
      {tooted.map((toode, index) =>
      <div key={index}>
        {toode.nimi} - {toode.hind} €
        {/* <button onClick={() => kustuta(index)}>x</button> */}
        <img className="icon" src={deleteIcon} onClick={() => kustuta(index)} alt="" />
        </div>)}
    </div>
  )
}

export default Ostukorv