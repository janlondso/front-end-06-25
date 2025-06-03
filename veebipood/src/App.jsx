import "./App.css";
import { Link, Route, Routes} from "react-router-dom"
import Avaleht from "./pages/Avaleht";
import Ostukorv from "./pages/Ostukorv";
import Lisatoode from "./pages/Lisatoode";
import Esindused from "./pages/Esindused";
import Kinkekaart from "./pages/Kinkekaart";
import Seaded from "./pages/Seaded";
import NotFound from "./pages/NotFound";


function App() {
  return (
    <>
    <Link to="/">
         <img
        className="pilt"
        src="https://images.unsplash.com/photo-1726137570036-cc7e8b1b58c1?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
        alt=""
      />
      </Link>
     
      <Link to="/ostukorv">
        <button>Ostukorvi</button>
      </Link>

      <Link to="/lisa-toode">
        <button>Toodet lisama</button>
      </Link>

      <Link to="/esindused">
        <button>Esindustes</button>
      </Link>

      <Link to="/osta-kinkekaart">
        <button>Kinkekaartide lehele</button>
      </Link>

      <Link to="/seaded">
        <button>Seadetes</button>
      </Link>
   
  {/*  path - mis jargneb baasURL-le. localhost: 5173 */}
      <Routes>
        <Route path="/" element={<Avaleht />} />
        <Route path="/ostukorv" element={<Ostukorv />} />
        <Route path="/lisa-toode" element={<Lisatoode />} />
        <Route path="/esindused" element={<Esindused />} />
        <Route path="/osta-kinkekaart" element={<Kinkekaart />} />
        <Route path="/seaded" element={<Seaded />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
