import { useEffect, useRef, useState } from "react"
import AdminHome from "./AdminHome"
import { Button } from "react-bootstrap";
import type { Shop } from "../../models/Shop";
// import { buttonBaseClasses } from "@mui/material";

function MaintainShops() {
  const shopsUrl = "https://webshop-3d994-default-rtdb.europe-west1.firebasedatabase.app/shops.json"
  const [shops, setShops] = useState<Shop[]>([]);
  const nameRef = useRef<HTMLInputElement>(null);
  const latitudeRef = useRef<HTMLInputElement>(null);
  const longitudeRef = useRef<HTMLInputElement>(null);
  const openTimeRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetch(shopsUrl)
    .then(res => res.json())
    .then(json => setShops(json || []))
  }, []);

  
    const addShop = () => {
    if(nameRef.current === null || latitudeRef.current === null
      || longitudeRef.current === null || openTimeRef.current === null
    ) {
      return;
          }
    
    shops.push({
    name: nameRef.current.value,
    latitude: Number(latitudeRef.current.value),
    longitude: Number(longitudeRef.current.value),
    openTime: openTimeRef.current.value
    });

    setShops(shops.slice());
    fetch(shopsUrl, { method: "PUT", body: JSON.stringify(shops) });
  };

  const deleteShop = (index: number) => {
    shops.splice(index, 1);
    setShops(shops.slice());
    fetch(shopsUrl, { method: "PUT", body: JSON.stringify(shops) });
  };

  return (
    <div>
      <AdminHome />
      <label>Name</label><br />
      <input ref={nameRef} type="text" /><br />
      <label>Latitude</label><br />
      <input ref={latitudeRef} type="text" /><br />
      <label>Longitude</label><br />
      <input ref={longitudeRef} type="text" /><br />
      <label>Open time</label><br />
      <input ref={openTimeRef} type="text" /><br /><br />
      <Button onClick={addShop} >Button</Button>
        {shops.map((shop, index) =>
        <div key={shop.name}>
          {shop.name}
          <button onClick={() => deleteShop(index)}>x</button>
        </div>
      )}
    </div>
  )
}

export default MaintainShops