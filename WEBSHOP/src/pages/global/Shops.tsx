import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { useEffect, useState } from 'react'
import type { Shop } from '../../models/Shop';



function Shops() {
  const [shops, setShops] = useState<Shop[]>([]);
  const shopsUrl = "https://webshop-3d994-default-rtdb.europe-west1.firebasedatabase.app/shops.json"

  useEffect(() => {
     fetch(shopsUrl)
     .then(res => res.json())
     .then(json => setShops(json || []))
   }, []);

  return (
    <div>
       <MapContainer style={{height: "300px"}} center={[58.373, 26.7188]} zoom={13} scrollWheelZoom={false}>
                     <TileLayer
                         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                     />
                   { shops.map(shop =>
                   <Marker position={[shop.latitude, shop.longitude]}>
                         <Popup>
                         {shop.name} <br /> {shop.openTime}.
                         </Popup>
                     </Marker>)}
                    </MapContainer>
    </div>
  )
}

export default Shops