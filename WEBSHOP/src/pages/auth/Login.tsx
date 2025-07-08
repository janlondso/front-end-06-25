import { useRef, useState } from "react"
import {ToastContainer, toast} from  'react-toastify'

function Login() {
  const [message, setMessage] = useState("");
    const [loggedIn, setLoggedIn] = useState("Sisesta kasutajanimi ja parool");
    const userNameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const login = () => {
        if (passwordRef.current === null ||
        userNameRef.current === null ) {
            return;
        }
        
        if(passwordRef.current.value.toLowerCase() === passwordRef.current.value) {
            toast.error("Parool peab sisaldama suuri tähti");
            return;
        }
        if(passwordRef.current.value.toUpperCase() === passwordRef.current.value) {
            toast.error("Parool peab sisaldama väikseid tähti");
            return;
        }
        if(passwordRef.current.value.length < 8) {
            toast.error("Parool peab sisaldama vähemalt 8 tähemärki");
            return;
        }

                
        if(passwordRef.current.value.includes("%") === false){
            toast.error("Ilma % märgita ei saa sisestada")
            return;
        }

        if (passwordRef.current.value === "A123456%") {
            setLoggedIn("jah");
            setMessage(userNameRef.current.value.toUpperCase() + ", oled sisselogitud");
            toast.success("Sisenemine õnnestus!");
            return;
        } 
        
        setMessage("Vale parool!");
        toast.error("proovi uuesti...");
        }

  return (
    <div className="login">
           {loggedIn === "Please enter username and password" && <div>{loggedIn}</div>}

            <div>{message}</div> <br />
            <label>Username</label> <br />
            <input ref={userNameRef} type="text" /> <br />
            <label>Password</label> <br />
            <input ref={passwordRef} type="password" /> <br /> <br />
            <button onClick={login}>Submit</button> <br />

             <ToastContainer
                position="bottom-right"
                autoClose={4000}
                theme="dark"
            />
    </div>
  )
}

export default Login