import { useState } from 'react'
import { Link } from 'react-router-dom'


function Courses() {
  const [kursus, uuendaKursus] = useState("Valimata");

  return (
    <>
        <Link to="/">
            <button>Tagasi</button>
        </Link>
        <button className={kursus === "udemy" ? "aktiivne" : undefined} onClick={() => uuendaKursus("udemy")}>Udemy</button>
        <button className={kursus === "coursera" ? "aktiivne" : undefined} onClick={() => uuendaKursus("coursera")}>Coursera</button>
        <button className={kursus === "codecademy" ? "aktiivne" : undefined} onClick={() => uuendaKursus("codecademy")}>Codecademy</button>
        <button className={kursus === "udacity" ? "aktiivne" : undefined} onClick={() => uuendaKursus("udacity")}>Udacity</button>
        {kursus === "udemy" && <div>Siin on kirjeldus (loend) Udemy.com läbitud kursustest</div>}
        {kursus === "coursera" && <div>Siin on kirjeldus (loend) Coursera.com läbitud kursustest</div>}
        {kursus === "codecademy" && <div>Siin on kirjeldus (loend) Codecademy.com läbitud kursustest</div>}
        {kursus === "udacity" && <div>Siin on kirjeldus (loend) Udacity.com läbitud kursustest</div>}
    </>
  );
}

export default Courses