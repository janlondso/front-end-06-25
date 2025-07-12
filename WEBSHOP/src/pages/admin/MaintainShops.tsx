import { useRef } from "react"
import AdminHome from "./AdminHome"

function MaintainShops() {
  const latitudeRef = useRef<HTMLInputElement>(null);
  const longitudeRef = useRef<HTMLInputElement>(null);
  const openTime = useRef<HTMLInputElement>(null);

  // .push({
//  name: ref
//  latitude: ref
//  longitude: ref
//  openTime: ref
//})
  return (
    <div><AdminHome /></div>
  )
}

export default MaintainShops