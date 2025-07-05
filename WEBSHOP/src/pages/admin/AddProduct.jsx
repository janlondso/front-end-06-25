
import { useRef, useState } from "react";
import productsJSON from '../../data/products.json'
import { Link } from "react-router-dom";
import {Table} from 'react-bootstrap'


function AddProduct() {
      const [products, setProducts] = useState(productsJSON);
      const [unique, setUnique] = useState(true);
      
      const idRef = useRef()
      const titleRef = useRef();
      const priceRef = useRef()
      const descriptionRef = useRef();
      const categoryRef = useRef();
      // const aktiivneRef = useRef();
      const imageRef = useRef();
      const ratingRateRef = useRef();
      const ratingCountRef = useRef();

      const addProduct = () => {
        if(idRef.current.value  === ""){
          alert("Tuhja nimega ei saa sisestada!");
          return;
        }
      
        if(titleRef.current.value  === ""){
          alert("Error!");
          return;
        }
     
        if(priceRef.current.value  === ""){
          alert("Error!");
          return;
        }
        if(descriptionRef.current.value  === ""){
          alert("Error!");
          return;
        }
        if(categoryRef.current.value  === ""){
          alert("Error!");
          return;
        }
        if(imageRef.current.value  === ""){
          alert("Error!");
          return;
        }
        if(ratingCountRef.current.value  === ""){
          alert("Error!");
          return;
        }
        if(ratingRateRef.current.value  === ""){
          alert("Error!");
          return;
        }

        productsJSON.push({
        "id": idRef.current.value,
        "title": titleRef.current.value,
        "price": priceRef.current.value,
        "description": descriptionRef.current.value,
        "category": categoryRef.current.value,
        "image": imageRef.current.value,
        "rating": {
          "rate": ratingCountRef.current.value,
          "count": ratingCountRef.current.value
    }
  }
      );
        setProducts(productsJSON.slice());
        idRef.current.value = "";
        titleRef.current.value = "";
        priceRef.current.value = "";
        descriptionRef.current.value = "";
        categoryRef.current.value = "";
        imageRef.current.value = "";
        ratingRateRef.current.value = "";
        ratingCountRef.current.value = "";
      }

      // const kustutaEsimene = () => {
      //   andmed.splice(0, 1); // esimene nr mitmendat, teine mitu tk kustutada
      //   setAutod(andmed.slice()); 
      // }

      // const kustutaTeine = () => {
      //    andmed.splice(1, 1); // esimene nr mitmendat, teine mitu tk kustutada
      //   setAutod(andmed.slice()); 
      // }
      // const kustutaKolmas = () => {
      //    andmed.splice(2, 1); // esimene nr mitmendat, teine mitu tk kustutada
      //   setAutod(andmed.slice()); 
      // }
      // const kustutaNeljas = () => {
      //    andmed.splice(3, 1); // esimene nr mitmendat, teine mitu tk kustutada
      //   setAutod(andmed.slice()); 
      // }

      const deleteProduct = (index) => {
        productsJSON.splice(index,1);
        setProducts(productsJSON.slice());
      }

      const isUnique = () => { 
        //YksAuto failis vaatasime kas leiame auto.nimi URlist
        // siin vaatame kas leiame auto nime inputi vaartusest
        const answer = productsJSON.find(product => product.title === titleRef.current.value);
        if(answer === undefined){
          setUnique(true);
        } else {
          setUnique(false);
        }
      }
  return (
      <div>
        {/* <HaldaHome /> */}
        {/* <button onClick={kustutaEsimene}>Kustuta esimene</button>
        <button onClick={kustutaTeine}>Kustuta teine</button>
        <button onClick={kustutaKolmas}>Kustuta kolmas</button>
        <button onClick={kustutaNeljas}>Kustuta neljas</button>
        <br /><br /> */}

        {unique === false && <div className="red">Produkti nimi peab olema unikaalne</div>}
          {/* Siia lisa palju rehve et sisestada tooted... */}
        <label>Auto nimi</label> <br />
        <input onChange={isUnique} ref={titleRef} type="text"/> <br />
        {/* <label>Auto hind</label> <br />
        <input ref={hindRef} type="text"/> <br />
        <label>Auto pilt</label> <br />
        <input ref={piltRef} type="text"/> <br /> */}
       
        <button disabled={unique === false} onClick={addProduct}>Sisesta</button> <br />
        <div>Autosid: {products.length} tk</div>
        
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nimetus</th>
            <th>Hind</th>
            <th>Kirjeldus</th>
            <th>Kategooria</th>
            <th>Pilt</th>
            <th>Raiting</th>
            <th>Vajutused</th>
            <th>Kustuta</th>
            <th>Muuda</th>
          </tr>
        </thead>
        <tbody>
        {products.map((product, index) =>
          <tr key={product.title}>
            <td>{index}</td>
            <td>{product.title}</td>
            <td>{product.price}</td>
            <td><img style={{width:"50px", borderRadius: "10px"}} className="pilt" src={product.image} alt="" /></td>
            <td><button onClick={ () => deleteProduct(index)}>x</button></td>
            <Link to={"/muuda-auto/" + index}>
            <button>Muuda</button>
            </Link>
          </tr>)}
        </tbody>
      </Table>
      </div>
    )
}

export default AddProduct