import { useRef, useState } from "react";
import { Button, Table } from "react-bootstrap";

function Products() {
  const nameRef = useRef();
  const priceRef = useRef();
  const quantityRef = useRef();
  const storeRef = useRef();
  const [products, setProducts] = useState(
    [
    { name: 'Cupcake', price: 1.99, quantity: 7, store: 'Downtown store' },
    { name: 'Cheesecake', price: 2, quantity: 2, store: 'Ülemiste store' },
    { name: 'Bread', price: 3, quantity: 5, store: 'Lasnamäe store' },
    { name: 'Apple pie', price: 4, quantity: 2, store: 'Nõmme store' },
    { name: 'Éclair', price: 3.25, quantity: 1, store: 'Mustamäe store' },
    { name: 'Croissant', price: 1.99, quantity: 4, store: 'Downtown store' },
    { name: 'Cupcake', price: 2, quantity: 6, store: 'Ülemiste store' },
    { name: 'Bread', price: 5, quantity: 10, store: 'Lasnamäe store' },
    { name: 'Croissant', price: 1.8, quantity: 1, store: 'Lasnamäe store' },
    { name: 'Chocolate chip cookie', price: 3.25, quantity: 3, store: 'Mustamäe store' }
  ]
);

  const addProduct = () => {
    const newProduct = {
      name: nameRef.current.value,
      price: priceRef.current.value,
      quantity: quantityRef.current.value,
      store: storeRef.current.value,
    }
    products.push(newProduct);
    setProducts(products.slice());
  }

  const sortLowestToHigh = () => {
    products.sort((a,b) => a.price - b.price);
    setProducts(products.slice());
  }

  return (<div>
    <div className="container">
      <h2 className="mb-4">Products</h2>
      <button onClick={sortLowestToHigh}>Sort lowest to highest</button>
      <Table className="table table-hover table-bordered">
        <thead>
        <tr>
          <th scope="col">Product</th>
          <th scope="col">Price (€)</th>
          <th scope="col">Quantity (pcs)</th>
          <th scope="col">Store</th>
        </tr>
        </thead>
        <tbody>
        {/* TODO: Order the products by price */}
        {products.map(product => 
            <tr key={product.name + product.price}>
              <td><b>{product.name}</b></td>
              <td>{product.price}</td>
              {/*  TODO: Display the quantity in red if it is lower than 3 */}
              {product.quantity >= 3 ? <td>{product.quantity}</td> : <td className="red">{product.quantity}</td>}
              <td>{product.store}</td>
            </tr>
          )}
        <tr className="input-row">
          <td><input type="text" ref={nameRef} placeholder="Product" className="form-control" /></td>
          <td><input type="text" ref={priceRef} placeholder="Price" className="form-control" /></td>
          <td><input type="text" ref={quantityRef} placeholder="Quantity" className="form-control" /></td>
          <td><input type="text" ref={storeRef} placeholder="Store" className="form-control" /></td>
          <td><Button variant="success" type="submit" onClick={() => addProduct()} >Add</Button></td>
        </tr>
        </tbody>
      </Table>
    </div>
  </div>)
}

export default Products;