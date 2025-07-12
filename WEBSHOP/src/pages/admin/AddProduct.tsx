import { useEffect, useRef, useState } from "react";
import AdminHome from "./AdminHome.tsx";
import { ToastContainer, toast } from 'react-toastify';
import type { Product } from "../../models/Product.ts";
import { useTranslation } from "react-i18next";
// import productsJSON from '../../data/products.json';



function AddProduct() {
      const { t } = useTranslation();
      const [products, setProducts] = useState<Product[]>([]);
      const [unique, setUnique] = useState(true);

      const idRef = useRef<HTMLInputElement>(null);
      const titleRef = useRef<HTMLInputElement>(null);
      const priceRef = useRef<HTMLInputElement>(null);
      const descriptionRef = useRef<HTMLInputElement>(null);
      const categoryRef = useRef<HTMLInputElement>(null);
      const imageRef = useRef<HTMLInputElement>(null);
      const ratingRateRef = useRef<HTMLInputElement>(null);
      const ratingCountRef = useRef<HTMLInputElement>(null);

      const productsUrl = "https://webshop-3d994-default-rtdb.europe-west1.firebasedatabase.app/products.json"

      useEffect(() => {
          fetch(productsUrl)
          .then(res => res.json())
          .then(json => setProducts(json || []))
        }, []);

      const addProduct = () => {
        if(idRef.current === null || titleRef.current === null ||
          priceRef.current === null || descriptionRef.current === null ||
          categoryRef.current === null || imageRef.current === null ||
          ratingCountRef.current === null || ratingRateRef.current === null
        ) {
          return;
        }

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

        products.push({
          "id": Number(idRef.current.value),
          "title": titleRef.current.value,
          "price": Number(priceRef.current.value),
          "description": descriptionRef.current.value,
          "category": categoryRef.current.value,
          "image": imageRef.current.value,
          "rating": {
            "rate": Number(ratingCountRef.current.value),
            "count": Number(ratingCountRef.current.value)
      }}
    );
        setProducts(products.slice());
        // saadame andmebaasi
          fetch(productsUrl, {method: "PUT", body: JSON.stringify(products)});

          idRef.current.value = "";
          titleRef.current.value = "";
          priceRef.current.value = "";
          descriptionRef.current.value = "";
          categoryRef.current.value = "";
          imageRef.current.value = "";
          ratingRateRef.current.value = "";
          ratingCountRef.current.value = "";
      }

      const isUnique = () => { 
        const idValue = idRef.current;
        if (idValue === null) {
          return;
        }

        const answer = products.find(product => product.id === Number(idValue.value));

        if(answer === undefined){
          setUnique(true);
        } else {
          setUnique(false);
        }
      }

  return (
      <div className="addProduct">
        <AdminHome />
        {unique === false && <div className="red">{t("addproduct.unique-product")}</div>}
        <label>{t("addproduct.id")}</label><br />
        <input onChange={isUnique} ref={idRef} type="number" /><br />
        <label>{t("addproduct.title")}</label> <br />
        <input ref={titleRef} type="text"/> <br />
        <label>{t("addproduct.price")}</label><br />
        <input ref={priceRef} type="number" /><br />
        <label>{t("addproduct.description")}</label><br />
        <input ref={descriptionRef} type="text" /><br />
        <label>{t("addproduct.category")}</label><br />
        <input ref={categoryRef} type="text" /><br />
        <label>{t("addproduct.add-image")}</label><br />
        <input ref={imageRef} type="text" /><br />
        <label>{t("addproduct.rating-count")}</label><br />
        <input ref={ratingCountRef} type="number" /><br />
        <label>{t("addproduct.rating-rate")}</label><br />
        <input ref={ratingRateRef} type="number" /><br />
        <button disabled={unique === false} onClick={addProduct}>{t("addproduct.add")}</button>
         <br />
        <div>{t("addproduct.products-total")} {products.length} {t("addproduct.product-pcs")}</div>
      {/* <Table striped bordered hover>
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
            <td><Link to={"/muuda-auto/" + index}>
              <button>Muuda</button>
            </Link>
            </td>
          </tr>)}
        </tbody>
      </Table>  */}
        <ToastContainer
        position="bottom-right"
        autoClose={4000}
        theme="dark"
      />
      </div>
    )
}

export default AddProduct