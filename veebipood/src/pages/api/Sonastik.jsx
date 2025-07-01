import { useEffect, useState } from "react";


function Sonastik() {
  const [words, setWords] = useState([]);
     // uef
     useEffect(() => {
         fetch(" https://marineregions.org/rest/getGazetteerTypes.json")
         .then(res => res.json())
         .then(json => setWords(json))
     }, []);
   return (
     <div>
          <table>
         <thead>
           <tr>
             <th>Type ID</th>
             <th>Type</th>
             <th>Description</th>
           </tr>
         </thead>
         <tbody>
         {words.map(word =>
           <tr key={word.typeID}>
             <td>{word.typeID}</td>
             <td>{word.type}</td>
             <td>{word.description}</td>
           </tr>)}
         </tbody>
       </table>
     </div>
   )
}

export default Sonastik