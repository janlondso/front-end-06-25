import { useEffect, useRef, useState } from 'react'
// import productsJSON from '../../data/products.json'
import AdminHome from './AdminHome'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import {Button, Table} from 'react-bootstrap'
import type { Product } from '../../models/Product';
import { useTranslation } from 'react-i18next';


function MaintainProducts() {
  const { t } = useTranslation();
  const searchRef = useRef<HTMLInputElement>(null);
  const productsURL = "https://webshop-3d994-default-rtdb.europe-west1.firebasedatabase.app/products.json"
  
  const [products, setProducts] = useState<Product[]>([]);
  const [doProducts, setDoProducts] = useState<Product[]>([])
   useEffect(() => {
            fetch(productsURL)
            .then(res => res.json())
            .then(json =>{
              setProducts(json || [])
               setDoProducts(json || []);  // originaal andmetooted
               // millest saan filtreerida (neid ei tohiks muuta)
              })
          }, []);

      // Delete item
  const deleteItem = (index: number) => {
        products.splice(index,1);
        setProducts(products.slice());
        toast.success("Item deleted!")
        fetch(productsURL, {method: "PUT", body: JSON.stringify(products)});
      }
      // Search title
     const searchTitle = () => {
      // Typescript
      const inputValue = searchRef.current;
      if(inputValue === null){
        return;
      };

        const answer = doProducts.filter(product =>
          product.title.toLowerCase().includes(inputValue.value.toLowerCase()));
        setProducts(answer);
    };
    
  return (
    <div className='maintainProducts'>
      <AdminHome />

      {/*~~~~~~~~~~~ Tee tolked jarmistele tekstidele ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
      <label>{t("maintainproducts.find-name")}Otsi nimi</label>
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