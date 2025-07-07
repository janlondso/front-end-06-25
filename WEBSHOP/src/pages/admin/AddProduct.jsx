
import { useRef, useState } from "react";
import productsJSON from '../../data/products.json';
import { Link } from "react-router-dom";
import {Table} from 'react-bootstrap'
import AdminHome from "./AdminHome";
import { ToastContainer, toast } from 'react-toastify';



function AddProduct() {
      const [products, setProducts] = useState(productsJSON);
      const [unique, setUnique] = useState(true);
      const idRef = useRef();
      const titleRef = useRef();
      const priceRef = useRef();
      const descriptionRef = useRef();
      const categoryRef = useRef();
      const imageRef = useRef();
      const ratingRateRef = useRef();
      const ratingCountRef = useRef();

      const addProduct = () => {
        if(idRef.current.value  === ""){
          toast.error("Sisesta ID number");
          return;
        }
      
        if(titleRef.current.value  === ""){
          toast.error("Sisesta toote nimetus");
          return;
        }
     
        if(priceRef.current.value  === ""){
         toast.error("Sisesta toote hind");
          return;
        }
        if(descriptionRef.current.value  === ""){
          toast.error("Sisesta toote kirjeldus");
          return;
        }
        if(categoryRef.current.value  === ""){
          toast.error("Sisesta toote kategooria");
          return;
        }
        if(imageRef.current.value  === ""){
          toast.error("Sisesta pildi URL");
          return;
        }
        if(ratingCountRef.current.value  === ""){
          toast.error("Sisesta hinnangute arv");
          return;
        }
        if(ratingRateRef.current.value  === ""){
          toast.error("Sisesta hinnangu tase ");
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
      }}
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

      const deleteProduct = (index) => {
        productsJSON.splice(index,1);
        setProducts(productsJSON.slice());
      }

      const isUnique = () => { 
        const answer = productsJSON.find(product => product.title === titleRef.current.value);
        if(answer === undefined){
          setUnique(true);
        } else {
          setUnique(false);
        }
      }

  return (
      <div className="addProduct">
        <AdminHome />
        {unique === false && <div className="red">Produkti nimi peab olema unikaalne</div>}
        <label>Product ID</label><br />
        <input ref={idRef} type="number" /><br />
        <label>Product title</label> <br />
        <input onChange={isUnique} ref={titleRef} type="text"/> <br />
        <label>Price</label><br />
        <input ref={priceRef} type="number" /><br />
        <label>Description</label><br />
        <input ref={descriptionRef} type="text" /><br />
        <label>Category</label><br />
        <input ref={categoryRef} type="text" /><br />
        <label>Add Image url</label><br />
        <input ref={imageRef} type="text" /><br />
        <label>Rating count</label><br />
        <input ref={ratingCountRef} type="number" /><br />
        <label>Rating rate</label><br />
        <input ref={ratingRateRef} type="number" /><br />
        <button disabled={unique === false} onClick={addProduct}>Add product</button> <br /> <br />
        
        <div>Products total: {products.length} pcs</div>
        
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
            <td>{product.id}</td>
            <td>{product.title}</td>
            <td>{product.price}</td>
            <td>{product.description}</td>
            <td>{product.category}</td>
            <td><img style={{width:"50px", borderRadius: "10px"}} className="pilt" src={product.image} alt="" /></td>
            <td>{product.rating.count}</td>
            <td>{product.rating.rate}</td>
            <td><button onClick={ () => deleteProduct(index)}>x</button></td>
            <td><Link to={"/muuda-auto/" + index}>
              <button>Muuda</button>
            </Link>
            </td>
          </tr>)}
        </tbody>
      </Table>
      
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        theme="dark"
      />
      </div>
    )
}

export default AddProduct