import Button from "@mui/material/Button";
import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import trash from "../../assets/trash.png";
// import type { Product } from "../../models/Product";
import type { CartProduct } from "../../models/CartProduct";
import minus from '../../assets/minus.png'
import add from '../../assets/add.png'
import { CartSumContext } from "../../context/CartSumContext";

function Cart() {
  const [products, setProducts] = useState<CartProduct[]>(JSON.parse(localStorage.getItem("cart") || "[]"));
  
  const { t } = useTranslation(); // votan LocalStotag-st seejarel jutumargid maha
  const { setCartSum } = useContext(CartSumContext)


   const empty = () => {
    setCartSum(0);
    setProducts([]);
    localStorage.setItem("cart", JSON.stringify([]));
  };

  const  decreaseQuantity = (index: number) => {
      products[index].quantity--;
      setCartSum(totalSum());
      if (products[index].quantity === 0) {
      deleteItem(index);
      return;
      }
      setProducts(products.slice());
      localStorage.setItem("cart", JSON.stringify(products));
     }

  const  increaseQuantity = (index: number) => {
      products[index].quantity++;
      setCartSum(totalSum());
      setProducts(products.slice());
      localStorage.setItem("cart", JSON.stringify(products));
      }


  const deleteItem = (index: number) => {
      products.splice(index, 1);
      setCartSum(totalSum());
      setProducts(products.slice());
      localStorage.setItem("cart", JSON.stringify(products));
  };

  const totalSum = () => {
    let sum = 0;
    products.forEach(cp => sum = sum + cp.product.price * cp.quantity);
    return sum; // returni jargne laheb HTML-i
  };

 

  return (
    <div className="cart">
      {products.length > 0 ? (
        <>
          <Button onClick={empty}>{t("cart.empty-button")}</Button>
          <div>
            {t("cart.in-cart")} {products.length} {t("cart.item(s)")}
          </div>
        </>
      ) : (
        <div>{t("cart.empty-cart")}</div>
      )}
     
      {products.map((cp, index) => (
        <div key={cp.product.title}>
            <img style={{width: "40px"}}src={cp.product.image} alt="" />
            <span>{cp.product.title}</span>
            <div>{cp.product.price} €</div>
            <img className="icon" src={minus} onClick={() => decreaseQuantity(index)} alt=""/>
            <div>{cp.quantity} tk</div>
            <img className="icon" src={add} onClick={() => increaseQuantity(index)} alt=""/>
            <div>{(cp.product.price * cp.quantity).toFixed(2)}€</div>
            <img className="icon" src={trash} onClick={() => deleteItem(index)} alt=""/>
        </div>
      ))}
      <br /> <br />

      <div>{t("cart.total-sum")} - {totalSum().toFixed(2)}</div> <br />
      <Button variant="contained">{t("cart.pay-bill")}</Button>
    </div>
  );
}

export default Cart;
