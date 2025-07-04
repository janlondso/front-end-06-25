import { Link } from "react-router-dom"
import { useTranslation } from 'react-i18next';


function NavigationBar() {
    const { t, i18n } = useTranslation();

    const changeLanguageEN = () => {
    i18n.changeLanguage("en");
    localStorage.setItem("keel","en")
  }

  const changeLanguageET = () => {
    i18n.changeLanguage("et");
    localStorage.setItem("keel","et")

  }
  return (
    <div className="NavigationBar">
        <Link to="/"><button>{t("navigationbar.home")}</button></Link>
        <Link to="/admin"><button>{t("navigationbar.admin")}</button></Link>
        <Link to="/cart"><button>{t("navigationbar.card")}</button></Link>
        <button onClick={changeLanguageEN}>English</button>
        <button onClick={changeLanguageET}>Eesti</button>
        <Link to="/login">
          <button>{t("navigationbar.login")}</button>
        </Link>
        <Link to="/signup">
          <button>{t("navigationbar.signup")}</button>
        </Link>
    </div>
  )
}

export default NavigationBar