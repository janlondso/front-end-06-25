import AdminHome from "./AdminHome";
import { useEffect, useRef, useState } from "react";
// import productsJSON from '../../data/products.json';
import { useNavigate, useParams } from "react-router-dom";
import type { Product } from "../../models/Product";
import { Spinner } from "react-bootstrap";
import { useTranslation } from "react-i18next";


function EditProduct() {
      const { t } = useTranslation();
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
      const productsUrl = "https://webshop-3d994-default-rtdb.europe-west1.firebasedatabase.app/products.json"
      const [loading, setLoading] = useState(true);
        
      const found = products[Number(index)];
      
        useEffect(() => {
                  fetch(productsUrl)
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

        fetch(productsUrl, {method: "PUT", body: JSON.stringify(products)})
          .then(() => navigate("/admin/maintain-products/"));
        }

       if(loading) {
          return <Spinner /> // Loading ...
        }

        if (found === undefined) {
        return <div>{t("edit-products.not-found")}</div>;
        }

  return (
      <div className="editProduct">
        <AdminHome />
        <label>{t("edit-products.id")}</label><br />
        <input ref={idNumberRef} defaultValue={found?.id || ''} type="number" /><br />
        <label>{t("edit-products.title")}</label> <br />
        <input ref={titleRef} defaultValue={found?.title || ''} type="text"/> <br />
        <label>{t("edit-products.price")}</label><br />
        <input ref={priceRef} defaultValue={found?.price || ''} type="number" /><br />
        <label>{t("edit-products.description")}</label><br />
        <input ref={descriptionRef} defaultValue={found?.description ||''} type="text" /><br />
        <label>{t("edit-products.category")}</label><br />
        <input ref={categoryRef} defaultValue={found?.category ||''} type="text" /><br />
        <label>{t("edit-products.add-image")}</label><br />
        <input ref={imageRef} defaultValue={found?.image ||''} type="text" /><br />
        <label>{t("edit-products.rating-count")}</label><br />
        <input ref={ratingCountRef} defaultValue={found?.rating.count || ''} type="number" /><br />
        <label>{t("edit-products.rating-rate")}</label><br />
        <input ref={ratingRateRef} defaultValue={found?.rating.rate ||''} type="number" /><br />
        <button onClick={changeProduct}>{t("edit-products.btn-change")}</button>
      </div>
    )
}

export default EditProduct

// API-s

// https://reqres.in/api/users?page=2