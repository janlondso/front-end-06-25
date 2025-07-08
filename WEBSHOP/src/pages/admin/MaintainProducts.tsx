import { useRef, useState } from 'react'
import productsJSON from '../../data/products.json'
import AdminHome from './AdminHome'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import {Button, Table} from 'react-bootstrap'


function MaintainProducts() {
  const [products, setProducts] = useState(productsJSON);
  const searchRef = useRef<HTMLInputElement>(null);
      // Delete item
  const deleteItem = (index: number) => {
        productsJSON.splice(index,1);
        setProducts(productsJSON.slice());
        toast.success("Item deleted!")
      }
      // Search title
     const searchTitle = () => {
      // Typescript
      const inputValue = searchRef.current;
      if(inputValue === null){
        return;
      }

        const answer = productsJSON.filter(product =>
          product.title.includes(inputValue.value.toLowerCase()));
        setProducts(answer);
    }
  return (
    <div className='maintainProducts'>
      <AdminHome />
      <label>Otsi nimi</label>
      <input ref={searchRef} type="text" />
      <Button onClick={searchTitle}>Search</Button>
      <Table striped bordered hover>
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
          {/* <td>{product.rating.count}</td>
          <td>{product.rating.rate}</td> */}
          <td><Button className='btn-secondary' onClick={ () => deleteItem(index)}>x</Button></td>
          <td> 
            <Link to={"/admin/edit-product/" + index}>
              <Button>Muuda toodet</Button>
            </Link>
          </td>
        </tr>
      )}
        </tbody>
      </Table>
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        theme="dark"
      />
    </div>
  )
}

export default MaintainProducts