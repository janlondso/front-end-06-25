import AdminHome from "./AdminHome";
import { useRef } from "react";
import productsJSON from '../../data/products.json';
import { useNavigate, useParams } from "react-router-dom";



function EditProduct() {
      const { index } = useParams<{index: string}>();
      if (index === undefined) {
        return <div>Index on puudu...</div>
      }
        // const found = productsJSON.find(product => product.title === index);
      const found = productsJSON[Number(index)];      
      const navigate = useNavigate();

      const idNumberRef = useRef<HTMLInputElement>(null);
      const titleRef = useRef<HTMLInputElement>(null);
      const priceRef = useRef<HTMLInputElement>(null);
      const descriptionRef = useRef<HTMLInputElement>(null);
      const categoryRef = useRef<HTMLInputElement>(null);
      const imageRef = useRef<HTMLInputElement>(null);
      const ratingRateRef = useRef<HTMLInputElement>(null);
      const ratingCountRef = useRef<HTMLInputElement>(null);

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

        productsJSON[Number(index)] = {
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
        navigate("/admin/maintain-products/");
      }

      if (found === undefined) {
        return  <div>Ei leitud</div>;
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