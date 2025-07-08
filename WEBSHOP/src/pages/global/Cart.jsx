import Button from "@mui/material/Button";
import { useState } from "react"
import { useTranslation } from "react-i18next";
import trash from '../../assets/trash.png'


function Cart() {
  const [products, setProducts] = useState(JSON.parse(localStorage.getItem("cart")) || []);
  const { t } = useTranslation(); // votan LocalStotag-st seejarel jutumargid maha

  
  const deleteItem = (index) => {
    products.splice(index, 1); 
    setProducts(products.slice());
    localStorage.setItem("cart", JSON.stringify(products));
  }

  const totalSum = () => { 
    let sum = 0;
      products.forEach(product => sum =  sum + product.price);
      return sum; // returni jargne laheb HTML-i
  }

  return (
    <div className="cart">
      {products.length > 0 ?
        <>
          <Button onClick={() => setProducts([])}>{t("cart.empty-button")}</Button>
          <div>{t("cart.in-cart")} {products.length} {t("cart.item(s)")}</div>
        </> : 
        <div>{t("cart.empty-cart")}</div>
        }
      {/* {products.length > 0 ?
      <div>Ostukorvis on kokku: {products.length} toode(t)</div>
      : <div>Teie ostukorv on tühi</div>} 
      <br /> */}
      {products.map((product, index) =>
        <div key={product.title}>
          <div>{product.title} - {product.price} €</div>
          <img className='icon' src={trash} onClick={() => deleteItem(index) } alt="" />
        </div>)}
      <br /> <br />
      <div>Summa kokku {totalSum()}</div>
      <Button variant="contained">Alusta makset</Button>
      {/* <button onClick={reset}>Tühjenda</button> */}
    </div>
  );
}

export default Cart