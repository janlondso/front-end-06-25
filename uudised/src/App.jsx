
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Avaleht from './pages/Avaleht'
import Uudised from './pages/Uudised'
import Kontakt from './pages/Kontakt'
import Meist from './pages/Meist'
import Months from './components/Months'
import Animals from './components/Animals'
import Words from './components/Words'
import Sisselogimine from './pages/Sisselogimine'
import LisaUudis from './pages/LisaUudis'
import HaldaUudiseid from './pages/HaldaUudiseid'
import YksUudis from './pages/YksUudis'
import MuudaUudis from './pages/MuudaUudis'


function App() {

  return (
    <>
      <Link to="/"><button>Avalehele</button> </Link>
      <Link to="/uudised"><button>Uudiste lehele</button></Link>
      <Link to="/kontakt"><button>Kontakt</button></Link>
      <Link to="/meist"><button>Personal</button></Link>
      <Link to="/sisselogimine"><button>Sisselogimine</button></Link>
      
      {/* <Link to="/months"><button>Months</button></Link> */}
      {/* <Link to="/animals"><button>Animals</button></Link> */}
      {/* <Link to="/words"><button>Words</button> </Link> */}
      <Link to="/lisa-uudis"><button>Lisa uudis</button> </Link>
      <Link to="/halda"><button>Halda uudiseid</button> </Link>

      <Routes>
        <Route path='/' element={ <Avaleht /> } />
        <Route path='/uudised' element={ <Uudised />} />
        <Route path='/kontakt' element={ <Kontakt />} />
        <Route path='/meist' element={ <Meist /> } />

        <Route path='/sisselogimine' element={ <Sisselogimine /> } />
        <Route path='/months' element={ <Months /> } />
        <Route path='/animals' element={ <Animals /> } />
        <Route path='/words' element={ <Words /> } />
        <Route path='/lisa-uudis' element={ <LisaUudis /> } />
        <Route path='/halda' element={ <HaldaUudiseid /> } />
        <Route path='/uudis/:index' element={ <YksUudis /> } />
        <Route path='/muuda/:index' element={ <MuudaUudis /> } />
      </Routes>
    </>
  )
}

export default App
