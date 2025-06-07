import { useState } from "react"


function Meist() {

const [message, maaraMessage] = useState("Vali mõni tegevus");

  return (
    <div>
      <div>{message}</div>
      <button onClick={() => {maaraMessage("Selleks saada e-mail jobs@html-css.com")}}>Kandideeri tööle</button>
      <button onClick={() => {maaraMessage("Meil on 10 töötajat, kelle info ilmub veebilehele lähiajal")}}>Vaata meie töötajaid</button>
      <button onClick={() => {maaraMessage("Ühenduse võtmiseks mine lehele Kontakt")}}>Võta meiega ühendust</button>
    </div>
  )
}

export default Meist