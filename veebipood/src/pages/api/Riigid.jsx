import { useEffect, useState } from "react";


function Riigid() {
   const [countries, setCountries] = useState([]);
      // uef
      useEffect(() => {
          fetch("https://restcountries.com/v3.1/all?fields=name")
          .then(res => res.json())
          .then(json => setCountries(json))
      }, []);
    return (
      <div>
        <table>
        <thead>
            <tr>
            <th>Common Name</th>
            <th>Official Name</th>
            <th>Native Language</th>
            <th>Native Official Name</th>
            <th>Native Common Name</th>
            </tr>
        </thead>
        <tbody>
            {countries.map(country =>
            
            <tr key={country.name.common}>
              <td>{country.name.common}</td>
              <td>{country.name.official}</td>
              <td>{country.name.nativeName?.fra?.official}</td>
              <td>{country.name.nativeName?.fra?.common}</td>
            </tr>)}
        </tbody>
        </table>
        </div>
    )
}

export default Riigid