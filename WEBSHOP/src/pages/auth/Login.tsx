import { useContext, useRef} from "react"
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
    const userNameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const {setLoggedIn} = useContext(AuthContext);
    const navigate = useNavigate();

    const login = () => {
      if (passwordRef.current === null ||
          userNameRef.current === null ) {
          return;
      }

      setLoggedIn(true);
      sessionStorage.setItem("token", "123");
      navigate("/admin")
    }

  return (
        <div className="login">
        <label>Username</label> <br />
        <input ref={userNameRef} type="text" /> <br />
        <label>Password</label> <br />
        <input ref={passwordRef} type="password" /> <br /> <br />
        <button onClick={login}>Submit</button> <br />
    </div>
  )
}

export default Login