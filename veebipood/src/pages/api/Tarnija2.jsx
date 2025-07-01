import { useEffect, useState } from "react";


function Tarnija2() {
 const [tooted, setTooted] = useState([]);
     // uef
     useEffect(() => {
         fetch("https://api.escuelajs.co/api/v1/products")
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
           </tr>
         </thead>
         <tbody>
         {tooted.map(toode =>
           <tr key={toode.id}>
             <td>{toode.id}</td>
             <td>{toode.title}</td>
             <td>{toode.price}</td>
             <td>{toode.description}</td>
             <td>{toode.category.name}</td>
             <td><img style={{width:"50px", borderRadius: "10px"}} className="pilt" src={toode.images} alt="" /></td>
           </tr>)}
         </tbody>
       </table>
     </div>
   )
}

export default Tarnija2