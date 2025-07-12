import AdminHome from "./AdminHome";
import { useEffect, useRef, useState } from "react";
// import productsJSON from '../../data/products.json';
import { useNavigate, useParams } from "react-router-dom";
import type { Product } from "../../models/Product";
import { Spinner } from "react-bootstrap";


function EditProduct() {
      const { index } = useParams<{index: string}>();
      // const found = productsJSON.find(product => product.title === index);
      const navigate = useNavigate();
      const idNumberRef = useRef<HTMLInputElement>(null);
      const titleRef = useRef<HTMLInputElement>(null);
      const priceRef = useRef<HTMLInputElement>(null);
      const descriptionRef = useRef<HTMLInputElement>(null);
      const categoryRef = useRef<HTMLInputElement>(null);
      const imageRef = useRef<HTMLInputElement>(null);
      const ratingRateRef = useRef<HTMLInputElement>(null);
      const ratingCountRef = useRef<HTMLInputElement>(null);

      const [products, setProducts] = useState<Product[]>([]);
      const productsURL = "https://webshop-3d994-default-rtdb.europe-west1.firebasedatabase.app/products.json"
      const [loading, setLoading] = useState(true);
        
      const found = products[Number(index)];
      
        useEffect(() => {
                  fetch(productsURL)
                  .then(res => res.json())
                  .then(json => {
                    setProducts(json || [])
                  setLoading(false);
                  })
                }, []);

        if (index === undefined) {
          return <div>Index on puudu...</div>
      }

      const changeProduct = () => {
        if(idNumberRef.current === null || titleRef.current === null ||
          priceRef.current === null || descriptionRef.current === null ||
          categoryRef.current === null || imageRef.current === null ||
          ratingCountRef.current === null || ratingRateRef.current === null
        ) {
          return;
        }

        if(idNumberRef.current.value  === ""){
          alert("Sisesta ID number");
          return;
        }
      
        if(titleRef.current.value  === ""){
          alert("Sisesta toote nimetus");
          return;
        }
     
        if(priceRef.current.value  === ""){
          alert("Sisesta toote hind");
          return;
        }
        if(descriptionRef.current.value  === ""){
          alert("Sisesta toote kirjeldus");
          return;
        }
        if(categoryRef.current.value  === ""){
          alert("Sisesta toote kategooria");
          return;
        }
        if(imageRef.current.value  === ""){
          alert("Sisesta pildi URL");
          return;
        }
        if(ratingCountRef.current.value  === ""){
          alert("Sisesta hinnangute arv");
          return;
        }
        if(ratingRateRef.current.value  === ""){
          alert("Sisesta hinnangu tase ");
          return;
        }

        products[Number(index)] = {
          "id": Number(idNumberRef.current.value),
          "title": titleRef.current.value,
          "price": Number(priceRef.current.value),
          "description": descriptionRef.current.value,
          "category": categoryRef.current.value,
          "image": imageRef.current.value,
          "rating": {
            "rate": Number(ratingCountRef.current.value),
            "count": Number(ratingCountRef.current.value)
          }
        }

        fetch(productsURL, {method: "PUT", body: JSON.stringify(products)})
          .then(() => navigate("/admin/maintain-products/"));
        }

       if(loading) {
          return <Spinner /> // Loading ...
        }

        if (found === undefined) {
        return <div>Ei leitud</div>;
        }

  return (
      <div className="editProduct">
        <AdminHome />
        <label>Product ID</label><br />
        <input ref={idNumberRef} defaultValue={found?.id || ''} type="number" /><br />
        <label>Product title</label> <br />
        <input ref={titleRef} defaultValue={found?.title || ''} type="text"/> <br />
        <label>Price</label><br />
        <input ref={priceRef} defaultValue={found?.price || ''} type="number" /><br />
        <label>Description</label><br />
        <input ref={descriptionRef} defaultValue={found?.description ||''} type="text" /><br />
        <label>Category</label><br />
        <input ref={categoryRef} defaultValue={found?.category ||''} type="text" /><br />
        <label>Add Image url</label><br />
        <input ref={imageRef} defaultValue={found?.image ||''} type="text" /><br />
        <label>Rating count</label><br />
        <input ref={ratingCountRef} defaultValue={found?.rating.count || ''} type="number" /><br />
        <label>Rating rate</label><br />
        <input ref={ratingRateRef} defaultValue={found?.rating.rate ||''} type="number" /><br />
        <button onClick={changeProduct}>Muuda toode</button>
      </div>
    )
}

export default EditProduct

// API-s

// https://reqres.in/api/users?page=2