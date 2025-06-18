import { useRef, useState } from "react"
import {ToastContainer, toast} from  'react-toastify'

function Sisselogimine() {
    const [sonum, muudaSonum] = useState("");
    const [sisselogitud, muudaSisselogitud] = useState("Sisesta kasutajanimi ja parool");
    const KasutajaNimiRef = useRef();
    const paroolRef = useRef();

    const logiSisse = () => {
        
        if(paroolRef.current.value.toLowerCase() === paroolRef.current.value) {
            toast.error("Parool peab sisaldama suuri tähti");
            return;
        }
        if(paroolRef.current.value.toUpperCase() === paroolRef.current.value) {
            toast.error("Parool peab sisaldama väikseid tähti");
            return;
        }
        if(paroolRef.current.value.length < 8) {
            toast.error("Parool peab sisaldama vähemalt 8 tähemärki");
            return;
        }
        // const upperCaseLetters = /[A-Z]/g;
        // if(paroolRef.current.value.match(upperCaseLetters)) {  
            //     toast.error("Parool peab sisaldama suuri tähti");
            //     return;
            // }
            
            // const lowerCaseLetters = /[a-z]/g;
            // if(paroolRef.current.value.match(lowerCaseLetters)) {  
                //     toast.error("Peab sisaldama väikseid tähti");
                //     return;
                // }
                
        if(paroolRef.current.value.includes("%") === false){
            toast.error("Ilma % märgita ei saa sisestada")
            return;
        }

        if (paroolRef.current.value === "A123456%") {
            muudaSisselogitud("jah");
            muudaSonum(KasutajaNimiRef.current.value.toUpperCase() + ", oled sisselogitud");
            toast.success("Sisenemine õnnestus!");
            return;
        } 
        
        muudaSonum("Vale parool!");
        toast.error("proovi uuesti...");
        }

  return (
    <div className="sisselogimine">
           {sisselogitud === "Sisesta kasutajanimi ja parool" && <div>{sisselogitud}</div>}
            <div>{sonum}</div> <br />
            <label>Kasutajanimi</label> <br />
            <input ref={KasutajaNimiRef} type="text" /> <br />
            <label>Parool</label> <br />
            <input ref={paroolRef} type="password" /> <br /> <br />
            <button onClick={logiSisse}>Kinnita</button> <br />

             <ToastContainer
                position="bottom-right"
                autoClose={4000}
                theme="dark"
            />
    </div>
  )
}

export default Sisselogimine