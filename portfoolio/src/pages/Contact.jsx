import { useState } from "react"

function Contact() {
    const [city, setCity] = useState("Tallinn");
    const [mobile, setMobile] = useState("55 555 555");
    const [email, setEmail] = useState("oih@oihoih.com");
    const [sonum, setSonum] = useState("Muuda inglise keelseks");
    
    const changeData = () => {    
        setCity("London")
        setMobile("77 777 777")
        setEmail("london@london.uk")
        setSonum("Change to Estonian")
    }

  return (
        <div>
            <div>{city}</div>
            <div>{mobile}</div>
            <div>{email}</div>
            <button onClick={changeData}>{sonum}</button>
        </div>
)
    }

export default Contact