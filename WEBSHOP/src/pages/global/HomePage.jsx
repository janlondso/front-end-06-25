import { useRef, useState } from "react"
import productsFromFile from '../../data/products.json'
import {Link} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';


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
       <button onClick={sortAtoZ}>Sortreeri A-Z</button>
        <button onClick={sortZtoA}>Sortreeri Z-A</button>
        <button onClick={sortPriceUp}>Hinnad suurenevalt</button>
        <button onClick={sortPriceDown}>Hinnad kahanevalt</button>
        <button onClick={topRate}>Rating kahanevalt</button>
        <button onClick={lowestRate}>Rating tõusvalt</button> <br />
        <label>Otsi toodet</label> <br />
        <input ref={searchRef} type="text" /><br />
        <button onClick={search}>Search</button>
      <div>Tooteid kokku {products.length}</div>
      {products.map(product =>
        <div key={product.id}>
          <div>
            <img style={{width:"100px"}} src={product.image} alt="" />
          </div>
          <div>{product.title}</div>
          <div>{product.price} €</div>
          <button onClick={() => addToCard(product)}>Lisa toode ostukorvi</button>
          <Link to={"/product/" + product.title}>
            <button>Vaata lähemalt</button>
          </Link>
        </div>
      )}
       <ToastContainer
        position="bottom-right"
        autoClose={4000}
        theme="dark"
       />
    </div>
  )
}

export default HomePage