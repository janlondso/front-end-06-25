import { useState } from "react"

function Kontakt() {

    const [aadress, maaraAadress] = useState("Tallinn");
    const [telefon, maaraTelefon] = useState("5512345");
    const [email, maaraEmail] = useState("bla@baa.com");
    const [ingliseKeelne, setIngliseKeelne] = useState("ei");

    const vahetaKeel = () => {
      maaraAadress("London")
      maaraTelefon(9876654)
      maaraEmail("england@england.com")
      setIngliseKeelne("jah")
    }

  return (
    <div>
        <div>{aadress}</div>
        <div>{telefon}</div>
        <div>{email}</div>
        <button onClick={vahetaKeel}>Muuda inglise keelseks</button>
        {ingliseKeelne === "jah" && <div>Leht on inglisekeelne</div>}
    </div>
  )
}

export default Kontakt