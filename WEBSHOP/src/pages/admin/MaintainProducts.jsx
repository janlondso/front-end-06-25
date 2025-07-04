import { useRef, useState } from 'react'
import productsJSON from '../../data/products.json'
import AdminHome from './AdminHome'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';


function MaintainProducts() {
  const [products, setProducts] = useState(productsJSON);
  const searchRef = useRef();
      // Delete item
  const deleteItem = (index) => {
        productsJSON.splice(index,1);
        setProducts(productsJSON.slice());
        toast.success("Item deleted!")
      }
      // Search title
     const searchTitle = () => {
        const answer = productsJSON.filter(product => product.title.includes(searchRef.current.value));
        setProducts(answer);
    }
  return (
    <div className='maintainProducts'>
      <label>Otsi nimi</label>
      <input ref={searchRef} type="text" />
      <button onClick={searchTitle}>Search</button>
      <AdminHome />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Category</th>
            <th>Image</th>
            <th>Raiting count</th>
            <th>Raiting rate</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) =>
        <tr key={product.id}>
          <td>{product.id}</td>
          <td>{product.title}</td>
          <td>{product.price}</td>
          <td>{product.description}</td>
          <td>{product.category}</td>
          <td><img style={{width: "50px", borderRadius: "10px"}} src={product.image} alt="" /></td>
          <td>{product.rating.count}</td>
          <td>{product.rating.rate}</td>
          <td><button onClick={ () => deleteItem(index)}>x</button></td>
          <Link to={"/edit-product/" + index}>
            <button>Muuda toodet</button>
          </Link>
        </tr>
      )}
        </tbody>
      </table>
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        theme="dark"
      />
    </div>
  )
}

export default MaintainProducts