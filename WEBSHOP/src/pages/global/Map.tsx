import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

function Map() {
  return (
   <div>
           <MapContainer style={{height: "300px"}} center={[58.373, 26.7188]} zoom={13} scrollWheelZoom={false}>
               <TileLayer
                   attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                   url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
               />
               <Marker position={[58.37364645449712, 26.7188503102111]}>
                   <Popup>
                   A pretty CSS3 popup. <br /> Easily customizable.
                   </Popup>
               </Marker>
               <Marker position={[58.377252406199744, 26.734662352697445]}>
                   <Popup>
                   A pretty CSS3 popup. <br /> Easily customizable.
                   </Popup>
               </Marker>
           </MapContainer>
       </div>
  )
}

export default Map