import {Link} from 'react-router-dom'

function AdminHome() {
  return (
    <div>
      <Link to="/admin/maintain-products">
        <button>Halda toodet</button>
      </Link>
      <Link to="/admin/edit-product/:index">
        <button>Muuda toodet</button>
      </Link>
      <Link to="/admin/add-product">
        <button>Lisa toode</button>
      </Link>
      <Link to="/admin/maintain-shops">
        <button>Halda poode</button>
      </Link>
      <Link to="/admin/maintain-categories">
        <button>Halda kategooriad</button>
      </Link>
    </div>
  )
}

export default AdminHome