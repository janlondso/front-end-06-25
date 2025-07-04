import { Link } from "react-router-dom"
import { useTranslation } from 'react-i18next';


function Menu() {
  const { t, i18n } = useTranslation();
  // return <h1>{t('Welcome to React')}</h1>

  const changeLanguageEN = () => {
    i18n.changeLanguage("en");
    localStorage.setItem("keel","en")
  }

  const changeLanguageET = () => {
    i18n.changeLanguage("et");
    localStorage.setItem("keel","et")

  }

  return (
    <div>
      <button onClick={changeLanguageEN}>English</button>
      <button onClick={changeLanguageET}>Eesti</button>

        <Link to="/">
         <img
        className="pilt"
        src="https://images.unsplash.com/photo-1726137570036-cc7e8b1b58c1?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
        alt=""
      />
      </Link>
     
      <Link to="/ostukorv">
        <button>{t("menu.cart")}</button>
      </Link>

      <Link to="/lisa-toode">
        <button>{t("menu.add-product")}</button>
      </Link>
      
      <Link to="/osta-kinkekaart">
        <button>{t("menu.giftcards")}</button>
      </Link>
      <Link to="/seaded">
        <button>{t("menu.settings")}</button>
      </Link>
      <Link to="/kalkulaator">
        <button>Kalkulaator</button>
      </Link>

      <Link to="/arrays">
        <button>Array-d</button>
      </Link>
      <Link to="/halda">
        <button>Mine arraysid muutma</button>
      </Link>
      <Link to="/api-home">
        <button>API otspunktid</button>
      </Link>

    </div>
  )
}

export default Menu