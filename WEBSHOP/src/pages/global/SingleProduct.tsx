import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import type { Product } from '../../models/Product';
import { Spinner } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
// import productsFromFile from '../../data/products.json'


function SingleProduct() {
  const { t } = useTranslation();
  const { id } = useParams();
  const [products, setProducts] = useState<Product[]>([]);
  const productsURL = "https://webshop-3d994-default-rtdb.europe-west1.firebasedatabase.app/products.json"
  const [loading, setLoading] = useState(true);
  
  const found = products.find(product => product.id === Number(id));

  useEffect(() => {
            fetch(productsURL)
            .then(res => res.json())
            .then(json => {
              setProducts(json || [])
              setLoading(false);
            })
          }, []);
          
  if(loading) {
    return <Spinner /> // Loading ...
  }

  if(!found) {
    return <div>No products found</div>
  }
  
  return (
    <div className='singleProduct'>
      <div>Nr. {found.id}</div>
      <div>{found.title}</div>
      <div>Hind: {found.price} €</div>
      <div>{found.description}</div>
      <div>{found.category}</div>
      <div><img className="image-single-product" src={found.image} alt="" /></div>
      <div>Rating count: {found.rating.count}</div>
      <div>Rating rate: {found.rating.rate}</div>
    </div>
  )
}

export default SingleProduct