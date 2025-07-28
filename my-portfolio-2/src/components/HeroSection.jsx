import { ArrowDown } from "lucide-react";
import "../css/herosection.css";
import { useTranslation } from "react-i18next";
import hero from '../assets/hero2.jpeg';

function HeroSection() {
  const { t } = useTranslation();

  return (
    <section id="hero">
      <img src={hero}
        alt="Tech Illustration"
        className="hero-bg-illustration" />

      <div className="hero-text-box">
        <h1 className="hero-text">
          <span>{t("hero.greeting")}</span>
          <span>{t("hero.firstName")}</span>
          <span>{t("hero.lastName")}</span>
        </h1>
        <p>{t("hero.description")}</p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-white">{t("hero.viewWork")}</a>
          <a href="#contact" className="btn btn-blue">{t("hero.contactMe")}</a>
        </div>

      </div>

      <div className="scroll-container">
        {/* <span>{t("hero.scroll")}</span> */}
        <ArrowDown size={30} />
      </div>
    </section>
  );
}

export default HeroSection;
