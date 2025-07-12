import { useRef } from "react"
import AdminHome from "./AdminHome"

function MaintainShops() {


  const nameRef = useRef<HTMLInputElement>(null);
  const latitudeRef = useRef<HTMLInputElement>(null);
  const longitudeRef = useRef<HTMLInputElement>(null);
  const openTimeRef = useRef<HTMLInputElement>(null);

  // .push()

  return (
    <div>
      <AdminHome />
      <label>Name</label>
      <input ref={nameRef} type="text" />
      <label>Latitude</label>
      <input ref={latitudeRef} type="text" />
      <label>Longitude</label>
      <input ref={longitudeRef} type="text" />
      <label>Open time</label>
      <input ref={openTimeRef} type="text" />
      <button>Button</button>
    </div>
  )
}

export default MaintainShops