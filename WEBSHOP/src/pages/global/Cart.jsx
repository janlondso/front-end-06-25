import { useState } from "react"

function Cart() {
  const [products, setProducts] = useState(JSON.parse(localStorage.getItem("cart")) || []);
  
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
      {products.length > 0 ? <div>Ostukorvis on kokku: {products.length} toode(t)</div> : <div>Teie ostukorv on tühi</div>} <br />
      {products.map((product, index) =>
        <div key={product.title}>
          <div>{product.title} - {product.price} €</div>
          <button onClick={() => deleteItem(index)}>x</button>
        </div>)}
      <br /> <br />
      <div>Summa kokku {totalSum()}</div>
      <button>Alusta makset</button>
      {/* <button onClick={reset}>Tühjenda</button> */}
    </div>
  );
}

export default Cart