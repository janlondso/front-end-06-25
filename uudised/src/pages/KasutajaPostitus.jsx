import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function KasutajaPostitus() {
    const [postitused, uuenaPostitused] = useState([]);
    const { kasutajaId } = useParams();

    useEffect(() => {
          fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(data => {
                const result = data.filter(element => element.userId === Number(kasutajaId));
                uuenaPostitused(result);
            })
        }, [kasutajaId]);

    return (
        <div>
            {postitused.map(element =>
                <div key={element.id}>
                    <div><i>{element.userId}</i></div>
                    <div><u>{element.id}</u></div>
                    <div><b>{element.title}</b></div>
                    <div>{element.body}</div>
                    {/* <Link to={"/kasutaja-postitused/" + element.userId}>
                    <button>Kõik kasutaja postitused</button>
                    </Link> */}
                </div>
            )}
        </div>
  )
}

export default KasutajaPostitus