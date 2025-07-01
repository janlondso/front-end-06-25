import { useEffect, useState } from "react"



function Tarnija1() {
    const [tooted, setTooted] = useState([]);
    // uef
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(json => setTooted(json))
    }, []);
  return (
    <div>
         <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Category</th>
            <th>Image</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
        {tooted.map(toode =>
          <tr key={toode.id}>
            <td>{toode.id}</td>
            <td>{toode.title}</td>
            <td>{(toode.price * 1.3).toFixed(2)}</td>
            <td>{toode.description}</td>
            <td>{toode.category}</td>
            <td><img style={{width:"50px", borderRadius: "10px"}} className="pilt" src={toode.image} alt="" /></td>
            <td>{toode.rating.rate} / {toode.rating.count}</td>
          </tr>)}
        </tbody>
      </table>
    </div>
  )
}

export default Tarnija1