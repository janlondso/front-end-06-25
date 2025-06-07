import { useState } from "react"


function Contact() {
    const [keel, setKeel] = useState("et");

    const vahetaKeel = () => {    
        if(keel === "et"){
            setKeel("en");
        }  else {
            setKeel("et");
        } 
    }

  return (
    <div>
        {keel === "et" && 
        <div>
            <div>Tallinn</div>
            <div>55 555 555</div>
            <div>oih@oihoih.com</div>
            <button onClick={vahetaKeel}>Muuda inglise keelseks</button>
        </div>}

        { keel === "en" &&
            <div>
            <div>London</div>
            <div>80 800 800</div>
            <div>london@london.com</div>
            <button onClick={vahetaKeel}>Turn to Estonian</button>
        </div>}
    </div>
)
    }

export default Contact