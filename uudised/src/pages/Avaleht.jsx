import { useState } from 'react';
import './Avaleht.css'
import { useEffect } from 'react';

function Avaleht() {
    const [postitused, uuenaPostitused] = useState([]);
    //uef - kutsub effecti
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => uuenaPostitused(json))

    }, []);
    return (  
        <div>
            <h2>See on avaleht, nähtav localhost: 3000 aadressil</h2>
            <img className="image-avaleht" src="https://images.unsplash.com/photo-1495020689067-958852a7765e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmV3c3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
            {postitused.map(element =>
              <div key={element.id}>
                <div><i>{element.userId}</i></div>
                <div><u>{element.id}</u></div>
                <div><b>{element.title}</b></div>
                <div>{element.body}</div>
              </div>
            )}
        </div>
    );
}

export default Avaleht;