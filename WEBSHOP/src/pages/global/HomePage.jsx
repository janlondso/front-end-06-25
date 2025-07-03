import { useState } from "react"
import productsFromFile from '../../data/products.json'

function HomePage() {
  const [products, setProducts] = useState(productsFromFile.slice());
  
  const addToCard = (item) => {
    const localBasket = JSON.parse(localStorage.getItem("cart")) || [];
    localBasket.push(item);
    localStorage.setItem("cart", JSON.stringify(localBasket));

  }

  return (
    <div className="homePage">
      <div>Tooteid kokku {products.length}</div>
      {products.map(product =>
        <div key={product.id}>
          <img style={{width:"100px"}} src={product.image} alt="" />
          <div>{product.title}</div>
          <div>{product.price} €</div>
          {/* <div>{product.id}</div> */}
          {/* <div>{product.description}</div> */}
          {/* <div>{product.category}</div> */}
          {/* <div>{product.rating.rate}</div> */}
          {/* <div>{product.rating.count}</div> */}
          <button>Vaata lähemalt</button><br />
          <button onClick={() => addToCard(product)}>Lisa toode ostukorvi</button>
          {/* <button onClick={() => setProducts()}>Toode on ostukorvis</button> */}
        </div>
      )}
    </div>
  )
}

export default HomePage