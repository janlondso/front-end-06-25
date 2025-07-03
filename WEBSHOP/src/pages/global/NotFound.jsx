import { Link} from 'react-router-dom'
function NotFound() {
  return (
    <div className='notFound'>
       <h3>404</h3>
        <p>Page not found</p>
        <Link to="/">
            <button>Tagasi avalehele</button>
        </Link>
    </div>
  )
}

export default NotFound