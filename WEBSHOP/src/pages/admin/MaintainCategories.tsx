import { useEffect, useRef, useState } from "react"
import type { Category } from "../../models/Category";
import AdminHome from "./AdminHome";


function MaintainCategories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const categoriesURL = "https://webshop-3d994-default-rtdb.europe-west1.firebasedatabase.app/categories.json"
  const categoryRef = useRef<HTMLInputElement>(null);
  // uef enter
  useEffect(() => {
    fetch(categoriesURL)
    .then(res => res.json())
    .then(json => setCategories(json || []))
  }, []);

  const addCategory = () => {
    if(categoryRef.current === null){
      return;
    }
    categories.push({name: categoryRef.current.value});
    setCategories(categories.slice());
    fetch(categoriesURL, {method: "PUT", body: JSON.stringify(categories)});
  }

  const deleteCategory = (index: number) => {
    categories.splice(index,1);
    setCategories(categories.slice());
    // html-i uuendamine
    fetch(categoriesURL, {method: "PUT", body: JSON.stringify(categories)});
  }

  return (
    <div>
      <AdminHome />
      <label>Kategooria</label> <br />
      <input ref={categoryRef} type="text" /> <br />
      <button onClick={addCategory}>Lisa</button>
      {categories.map((category, index) => 
        <div key={category.name}>
          {category.name}
          <button onClick={() => deleteCategory(index)}>x</button>
        </div>
      )}
    </div>
  )
}

export default MaintainCategories