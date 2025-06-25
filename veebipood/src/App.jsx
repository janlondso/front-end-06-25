import "./App.css";
import { Route, Routes} from "react-router-dom"
import Avaleht from "./pages/Avaleht";
import Ostukorv from "./pages/Ostukorv";
import Lisatoode from "./pages/Lisatoode";
import Esindused from "./pages/arrays/Esindused";
import Kinkekaart from "./pages/Kinkekaart";
import Seaded from "./pages/Seaded";
import NotFound from "./pages/NotFound";
import Menu from "./components/Menu";
import Kalkulaator from "./pages/Kalkulaator";
import Tooted from "./pages/arrays/Tooted";
import Tootajad from "./pages/arrays/Tootajad";
import Kasutajad from "./pages/arrays/Kasutajad";
import Hinnad from "./pages/arrays/Hinnad";
import Autod from "./pages/arrays/Autod";
import ArraysHome from "./pages/arrays/ArraysHome";
import HaldaHome from "./pages/halda/HaldaHome";
import HaldaAutod from "./pages/halda/HaldaAutod";
import HaldaEsindused from "./pages/halda/HaldaEsindused";
import HaldaHinnad from "./pages/halda/HaldaHinnad";
import HaldaKasutajad from "./pages/halda/HaldaKasutajad";
import HaldaTootajad from "./pages/halda/HaldaTootajad";
import HaldaTooted from "./pages/halda/HaldaTooted";
import MuudaAuto from "./pages/muuda/MuudaAuto";
import MuudaEsindus from "./pages/muuda/MuudaEsindus";
import MuudaHind from "./pages/muuda/MuudaHind";
import MuudaKasutaja from "./pages/muuda/MuudaKasutaja";
import MuudaTootaja from "./pages/muuda/MuudaTootaja";
import MuudaToode from "./pages/muuda/MuudaToode";
import YksAuto from "./pages/yks/YksAuto";
import YksEsindus from "./pages/yks/YksEsindus";
import YksHind from "./pages/yks/YksHind";
import YksKasutaja from "./pages/yks/YksKasutaja";
import YksTootaja from "./pages/yks/YksTootaja";
import YksToode from "./pages/yks/YksToode";


function App() {
  return (
    <>
      <Menu />
   
  {/*  path - mis jargneb baasURL-le. localhost: 5173 */}
      <Routes>
        <Route path="/" element={<Avaleht />} />
        <Route path="/ostukorv" element={<Ostukorv />} />
        <Route path="/lisa-toode" element={<Lisatoode />} />
        <Route path="/osta-kinkekaart" element={<Kinkekaart />} />
        <Route path="/kalkulaator" element={<Kalkulaator />} />
        <Route path="/seaded" element={<Seaded />} />

        <Route path="/arrays" element={<ArraysHome />} />
        <Route path="/autod" element={<Autod />} />
        <Route path="/esindused" element={<Esindused />} />
        <Route path="/hinnad" element={<Hinnad />} />
        <Route path="/kasutajad" element={<Kasutajad />} />
        <Route path="/tootajad" element={<Tootajad />} />
        <Route path="/tooted" element={<Tooted />} />

        <Route path="/halda" element={<HaldaHome />} />
        <Route path="/halda-autod" element={<HaldaAutod />} />
        <Route path="/halda-esindused" element={<HaldaEsindused />} />
        <Route path="/halda-hinnad" element={<HaldaHinnad />} />
        <Route path="/halda-kasutajad" element={<HaldaKasutajad />} />
        <Route path="/halda-tootajad" element={<HaldaTootajad />} />
        <Route path="/halda-tooted" element={<HaldaTooted />} />

        <Route path="/muuda-auto" element={<MuudaAuto />} />
        <Route path="/muuda-esindus" element={<MuudaEsindus />} />
        <Route path="/muuda-hind" element={<MuudaHind />} />
        <Route path="/muuda-kasutaja" element={<MuudaKasutaja />} />
        <Route path="/muuda-tootaja" element={<MuudaTootaja />} />
        <Route path="/muuda-toode" element={<MuudaToode/>} />

        <Route path="/auto/:mark" element={<YksAuto />} />
        <Route path="/esindus/:pood" element={<YksEsindus />} />
        <Route path="/hind/:index" element={<YksHind />} />
        <Route path="/kasutaja" element={<YksKasutaja />} />
        <Route path="/tootaja" element={<YksTootaja />} />
        <Route path="/toode" element={<YksToode/>} />
        
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
