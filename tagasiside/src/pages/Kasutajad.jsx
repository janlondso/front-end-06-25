import { useState } from 'react'
import kasutajadFailist from '../kasutajad.json'

function Kasutajad() {
    const [kasutajad, uuendaKasutajad] = useState(kasutajadFailist);

    const taasta = () => {
        uuendaKasutajad(kasutajadFailist);
    }

    const findIndexAndDelete = (element) => {
        const index = kasutajad.indexOf(element);
        kasutajad.splice(index,1);
        uuendaKasutajad(kasutajad.slice());
    }

    const kuvaNimedRohkemKui10 = () => {
        const vastus = kasutajad.filter(element => element.username.length >= 10);
        uuendaKasutajad(vastus); 
    }

    const kuvaIndexKasutajalt = () => {
        const vastus = kasutajad.findIndex(element =>
            element.email === "Lucio_Hettinger@annie.ca");
            console.log(vastus); 
    } 

    const kuvaIndexKasutajaltAlgabC = () => {
        const vastus = kasutajad.find(element =>
            element.name.substring(0,1) === "C");
        console.log(vastus); 
    }

    const sortByLatitude = () => {
        kasutajad.sort((a,b) => a.address.geo.lat.localeCompare(b.address.geo.lat));
        uuendaKasutajad(kasutajad.slice());
    }
    const filterByLongtitude = () => {
        const result= kasutajad.filter(element => element.address.geo.lng > 0);
        uuendaKasutajad(result);
    }

  return (
    <div>
        <div>Kokku on: {kasutajad.length} kasutajat</div>
        <button onClick={() => taasta()}>Taasta</button>
        <button onClick={() => kuvaNimedRohkemKui10()}>Kasutaja nimi on 10 tähte või rohkem</button>
        <button onClick={() => kuvaIndexKasutajalt()}>Kuva esimeselt kasutajalt, kelle e-mail on..annie.ca</button>
        <button onClick={() => kuvaIndexKasutajaltAlgabC()}>Kuva esimeselt kasutajalt, kelle nime esimene taht on C</button>
        <button onClick={() => sortByLatitude()}>Aadress-i lat sorteerimine</button>
        <button onClick={() => filterByLongtitude()}>Ing mis on posiyiivne, ehk rohkem kui 0</button>
            <div>
                {kasutajad.map( element =>
                <div key={element}>
                    <div>
                        <div>{element.id}</div>
                        <div>{element.name}</div>
                        <div>{element.username}</div>
                        <div>{element.email}</div>
                        <div>{element.address.street}</div>
                        <div>{element.address.suite}</div>
                        <div>{element.address.city}</div>
                        <div>{element.address.zipcode}</div>
                        <div>{element.address.geo.lat}</div>
                        <div>{element.address.geo.lng}</div>
                        <div>{element.phone}</div>
                        <div>{element.website}</div>
                        <div>{element.company.name}</div>
                        <div>{element.company.catchPhrase}</div>
                        <div>{element.company.bs}</div>
                        <button onClick={() => findIndexAndDelete(element)}>x</button>
                        <br /><br />
                    </div>
                </div>
            )}
            </div>
    </div>
  )
}

export default Kasutajad