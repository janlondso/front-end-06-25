import './App.css';
import {Link, Route, Routes} from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import LisaJook from './pages/LisaJook';
import HaldaJooke from './pages/HaldaJooke';


function App() {
  return (
    <div className="App">
      <Link to="/"><button>Avaleht</button></Link>
      <Link to="/lisa"><button>Lisa jook</button></Link>
      <Link to="/halda"><button>Halda jooke</button></Link>

      <Routes>
        <Route path='/' element={<Avaleht />} />
        <Route path='/lisa' element={<LisaJook />} />
        <Route path='/halda' element={<HaldaJooke />} />
      </Routes>
    </div>
  );
}

export default App;
