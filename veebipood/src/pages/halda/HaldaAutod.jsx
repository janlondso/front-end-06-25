import { useRef, useState } from "react";
import HaldaHome from "./HaldaHome"
import andmed from '../../data/autod.json'
import { Link } from "react-router-dom";
import {Table} from 'react-bootstrap'


function HaldaAutod() {
      const [autod, setAutod] = useState(andmed);
      const [unikaalne, setUnikaalne] = useState(true);
      const nimiRef = useRef();
      const hindRef = useRef()
      const aktiivneRef = useRef();
      const piltRef = useRef();

      const lisa = () => {
        if(nimiRef.current.value  === ""){
          alert("Tuhja nimega ei saa sisestada!");
          return;
        }
      
        if(hindRef.current.value  === ""){
          alert("Tuhja hind ei saa sisestada!");
          return;
        }
     
        if(piltRef.current.value  === ""){
          alert("Tuhja pildita ei saa sisestada!");
          return;
        }

        andmed.push({
          "nimi": nimiRef.current.value,
          "hind": hindRef.current.value,
          "aktiivne": aktiivneRef.current.checked, // true voi false
          "pilt": piltRef.current.value
        }
      );
        setAutod(andmed.slice());
        nimiRef.current.value = "";
        hindRef.current.value = "";
        aktiivneRef.current.value = false;
        piltRef.current.value = "";
      }

      const kustutaEsimene = () => {
        andmed.splice(0, 1); // esimene nr mitmendat, teine mitu tk kustutada
        setAutod(andmed.slice()); 
      }

      const kustutaTeine = () => {
         andmed.splice(1, 1); // esimene nr mitmendat, teine mitu tk kustutada
        setAutod(andmed.slice()); 
      }
      const kustutaKolmas = () => {
         andmed.splice(2, 1); // esimene nr mitmendat, teine mitu tk kustutada
        setAutod(andmed.slice()); 
      }
      const kustutaNeljas = () => {
         andmed.splice(3, 1); // esimene nr mitmendat, teine mitu tk kustutada
        setAutod(andmed.slice()); 
      }

      const kustuta = (index) => {
        andmed.splice(index,1);
        setAutod(andmed.slice());
      }

      const kasUnikaalne = () => { 
        //YksAuto failis vaatasime kas leiame auto.nimi URlist
        // siin vaatame kas leiame auto nime inputi vaartusest
        const vastus = andmed.find(auto => auto.nimi === nimiRef.current.value);
        if(vastus === undefined){
          setUnikaalne(true);
          // korras
        } else {
          //veateade
          setUnikaalne(false);
        }
      }

    return (
      <div>
        <HaldaHome />
        <button onClick={kustutaEsimene}>Kustuta esimene</button>
        <button onClick={kustutaTeine}>Kustuta teine</button>
        <button onClick={kustutaKolmas}>Kustuta kolmas</button>
        <button onClick={kustutaNeljas}>Kustuta neljas</button>
        <br /><br />

        {unikaalne === false && <div className="red">Auto nimi peab olema unikaalne</div>}

        <label>Auto nimi</label> <br />
        <input onChange={kasUnikaalne} ref={nimiRef} type="text"/> <br />
        <label>Auto hind</label> <br />
        <input ref={hindRef} type="text"/> <br />
        <label>Auto pilt</label> <br />
        <input ref={piltRef} type="text"/> <br />
        <label>Auto aktiivne</label> <br />
        <input ref={aktiivneRef} type="checkbox"/> <br />
        <button disabled={unikaalne === false} onClick={lisa}>Sisesta</button> <br />
        <div>Autosid: {autod.length} tk</div>
        
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Index</th>
            <th>Auto nimi</th>
            <th>Auto hind</th>
            <th>Auto aktiivne</th>
            <th>Auto pilt</th>
            <th>Kustuta</th>
            <th>Muuda</th>
          </tr>
        </thead>
        <tbody>
        {autod.map((auto, index) =>
          <tr key={auto.nimi}>
            <td>{index}</td>
            <td>{auto.nimi}</td>
            <td>{auto.hind}</td>
            <td>{auto.aktiivne + 0}</td>
            <td><img style={{width:"50px", borderRadius: "10px"}} className="pilt" src={auto.pilt} alt="" /></td>
            <td><button onClick={ () => kustuta(index)}>x</button></td>
            <Link to={"/muuda-auto/" + index}>
            <button>Muuda</button>
            </Link>
          </tr>)}
        </tbody>
      </Table>
      </div>
    )
  }

export default HaldaAutod