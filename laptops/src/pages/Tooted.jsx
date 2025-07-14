
import { useEffect } from 'react';
import { useState } from 'react';

function Tooted() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://dummyjson.com/products")
        .then(response => response.json())
        .then(json => setProducts(json.products))
    }, []);
  return (
    // Kuva kõik tooted HTMLs .map() abil ning näita nime,hinda,pilti võtmete “title”, “price” ja  “thumbnail” abil. Vaata URL-st andmetest, miks sellised võtmed.
    <div>
        {products.map(product =>
        <div key={product.id}>
            <div>{product.title}</div>
            <div>{product.price}</div>
            <img src={product.thumbnail} alt="" />
        </div>
        )}
    </div>
  )
}

export default Tooted