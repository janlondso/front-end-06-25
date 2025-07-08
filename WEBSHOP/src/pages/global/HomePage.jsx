import { useRef, useState } from "react"
import productsFromFile from '../../data/products.json'
import {Link} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import Button from '@mui/material/Button';
import ButtonGroup from "@mui/material/ButtonGroup";


function HomePage() {
  const [products, setProducts] = useState(productsFromFile.slice());
  const searchRef = useRef();

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
     const search = () => {
        const answer = productsFromFile.filter(product => product.category.includes(searchRef.current.value));
        setProducts(answer);
        console.log(answer);
    }
 // Add to card
  const addToCard = (item) => {
    const localBasket = JSON.parse(localStorage.getItem("cart")) || [];
    localBasket.push(item);
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
        <label>Otsi toodet</label> <br />
        <input ref={searchRef} onChange={search} type="text" /><br /><br />
      <div>Tooteid kokku {products.length}</div>
      <div className="products">
        {products.map(product =>
          <div className="product" key={product.id}>
                <div className="image-container"><img className="product-image" src={product.image} alt="" /></div>
                <div className="title-container">{product.title}</div>
                <div className="title-container">{product.category}</div>
                <div>{product.price} €</div>
                <div><Button variant="contained" onClick={() => addToCard(product)}>Lisa toode ostukorvi</Button></div>
                <div><Link to={"/product/" + product.title}><Button variant="outlined">Vaata lähemalt</Button></Link></div>
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