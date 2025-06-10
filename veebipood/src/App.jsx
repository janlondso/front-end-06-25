import "./App.css";
import { Route, Routes} from "react-router-dom"
import Avaleht from "./pages/Avaleht";
import Ostukorv from "./pages/Ostukorv";
import Lisatoode from "./pages/Lisatoode";
import Esindused from "./pages/Esindused";
import Kinkekaart from "./pages/Kinkekaart";
import Seaded from "./pages/Seaded";
import NotFound from "./pages/NotFound";
import Menu from "./components/Menu";
import Kalkulaator from "./pages/Kalkulaator";


function App() {
  return (
    <>
      <Menu />
   
  {/*  path - mis jargneb baasURL-le. localhost: 5173 */}
      <Routes>
        <Route path="/" element={<Avaleht />} />
        <Route path="/ostukorv" element={<Ostukorv />} />
        <Route path="/lisa-toode" element={<Lisatoode />} />
        <Route path="/esindused" element={<Esindused />} />
        <Route path="/osta-kinkekaart" element={<Kinkekaart />} />
        <Route path="/kalkulaator" element={<Kalkulaator />} />
        <Route path="/seaded" element={<Seaded />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
