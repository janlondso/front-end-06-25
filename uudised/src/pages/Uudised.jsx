import { Link } from 'react-router-dom'

function Uudised() {
    const uudised = JSON.parse(localStorage.getItem("uudised")) || [];

    return ( 
    <>
        <div>
            <h2>See on uudiste leht, nähtav localhost: 3000/uudised aadressil</h2>
           { uudised.length === 0 && <div>Ühtegi uudist hetkel pole! Lisame õige pea.</div>}
        </div>

        <div>
            {uudised.map((uudis, index) =>
                <div key={index}>
                    <Link to={"/uudis/" + index}>
                        <div>{uudis}</div>
                    </Link>
                </div>
            )}
        </div>
    </>
    );
}

export default Uudised;