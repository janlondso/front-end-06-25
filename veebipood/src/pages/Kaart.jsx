import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

function Kaart() {
  return (
    <div className='kaart'>
        <MapContainer style={{height: "300px"}} center={[59.43215729637602, 24.76057483657246]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[59.43215729637602, 24.76057483657246]}>
            <Popup>
            Kesklinn, Tallinn <br /> Easily customizable.
            </Popup>
            </Marker>
        </MapContainer>
    </div>
  )
}

export default Kaart
