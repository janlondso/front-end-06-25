import { useContext, useEffect, useState } from "react"
// import productsFromFile from '../../data/products.json'
import {Link} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import Button from '@mui/material/Button';
import ButtonGroup from "@mui/material/ButtonGroup";
import type { Product } from "../../models/Product";
import type { CartProduct } from "../../models/CartProduct";
import { CartSumContext } from "../../context/CartSumContext";


function HomePage() {

  const productsURL = "https://webshop-3d994-default-rtdb.europe-west1.firebasedatabase.app/products.json"
  const [products, setProducts] = useState<Product[]>([]);
  const [doProducts, setDoProducts] = useState<Product[]>([]);
  const {cartSum, setCartSum} = useContext(CartSumContext);

   useEffect(() => {
            fetch(productsURL)
            .then(res => res.json())
            .then(json =>{
              setProducts(json || [])
               setDoProducts(json || []);  // originaal andmetooted
               // millest saan filtreerida (neid ei tohiks muuta)
              })
          }, []);

// A to Z
   const sortAtoZ = () => {
      products.sort((a,b) => a.title.localeCompare(b.title)); // tahestiku jargi
      setProducts(products.slice());
    }
// Z to A
    const sortZtoA = () => {
      products.sort((a,b) => b.title.localeCompare(a.title)); // tahestiku jargi tagurpidi
      setProducts(products.slice());
    }
// Price up
    const sortPriceUp = () => {
      products.sort((a,b) => a.price - b.price);
      setProducts(products.slice());
    }
// Price down
    const sortPriceDown = () => {
      products.sort((a,b) => b.price - a.price);
      setProducts(products.slice());
    }
// Top rating
    const topRate = () => {
      products.sort((a,b) => b.rating.rate - a.rating.rate);
      setProducts(products.slice());
    }
// Lowest rating
    const lowestRate = () => {
      products.sort((a,b) => a.rating.rate - b.rating.rate);
      setProducts(products.slice());
    }

// Search product category
     const filterByCategory = (categoryClicked: string) => {
      const answer = doProducts.filter(product => product.category === categoryClicked);
      setProducts(answer);
    }
 // Add to card
  const addToCart = (item: Product) => {
      const localBasket: CartProduct[] = JSON.parse(localStorage.getItem("cart") || "[]");
    const found = localBasket.find(cp => cp.product.id === item.id);
    if(found !== undefined){
      found.quantity = found.quantity + 1;
    } else {
      localBasket.push({product: item, quantity: 1});
    }
    setCartSum(cartSum + item.price);
    localStorage.setItem("cart", JSON.stringify(localBasket));
    toast.success("Item added to your card!");
  }

  return (
    <div className="homePage">
        <ButtonGroup color="primary" variant="text" aria-label="Basic button group">
          <Button onClick={sortAtoZ}>Sortreeri A-Z</Button>
          <Button onClick={sortZtoA}>Sortreeri Z-A</Button>
          <Button onClick={sortPriceUp}>Hinnad suurenevalt</Button>
          <Button onClick={sortPriceDown}>Hinnad kahanevalt</Button>
          <Button onClick={topRate}>Rating kahanevalt</Button>
          <Button onClick={lowestRate}>Rating tõusvalt</Button>
        </ButtonGroup>
        <br /><br />
        <ButtonGroup>
          <Button onClick={() => filterByCategory("men's clothing")}>Meeste rõivad</Button>
          <Button onClick={() => filterByCategory("jewelery")}>Juveelid</Button>
          <Button onClick={() => filterByCategory("electronics")}>Elektroonika</Button>
          <Button onClick={() => filterByCategory("women's clothing")}>Naiste rõivad</Button>
        </ButtonGroup>
      <div>Tooteid kokku {products.length}</div>
      <br />
      <div className="products">
        {products.map(product =>
          <div className="product" key={product.id}>
                <div className="image-container"><img className="product-image" src={product.image} alt="" /></div>
                <div className="title-container">{product.title}</div>
                <div className="title-container">{product.category}</div>
                <div>{product.price} €</div>
                <div><Button variant="contained" onClick={() => addToCart(product)}>Lisa toode ostukorvi</Button></div>
                <div><Link to={"/product/" + product.id}><Button variant="outlined">Vaata lähemalt</Button></Link></div>
          </div>
        )}
      </div>
       <ToastContainer
        position="bottom-right"
        autoClose={4000}
        theme="dark"
       />
    </div>
  )
}

export default HomePage

// https://mt-react-fake-store-web-app.netlify.app/