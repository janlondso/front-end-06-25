import { useRef } from "react"
import AdminHome from "./AdminHome"
import { Button } from "react-bootstrap";

function MaintainShops() {
  const nameRef = useRef<HTMLInputElement>(null);
  const latitudeRef = useRef<HTMLInputElement>(null);
  const longitudeRef = useRef<HTMLInputElement>(null);
  const openTimeRef = useRef<HTMLInputElement>(null);

  // .push()

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
      <Button>Button</Button>
    </div>
  )
}

export default MaintainShops