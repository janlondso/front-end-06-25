import { Code, User, Briefcase } from "lucide-react";
import "../css/aboutsection.css";
import { useTranslation } from "react-i18next";


function AboutSection() {
    const { t } = useTranslation();
  
  return (
    <section id="about">
      <div className="about-main-heading">
        <h2 className="about-heading">
         {t("about.main-heading")} <span className="about-heading-span">
            {t("about.main-heading-span")}</span>
        </h2>
      </div>

      <div className="about-container">
        <div className="about-me-info">
          <h3 className="about-me-info-heading">{t("about.info-heading")}</h3>
          <p className="about-me-info-paragraph">
            {t("about.paragraph-1")}
          </p>
          <p className="about-me-info-paragraph">
           {t("about.paragraph-2")}
          </p>

          <div className="about-me-info-buttons">
            <a className="about-me-info-buttons" href="#contact">{t("about.get-in-touch")}</a>
            <a className="about-me-info-buttons" href="/files/Jan_CV.pdf" download>{t("about.download-cv")}</a>
          </div>
        </div>

        <div className="about-info-container">
          <div className="about-info-container-box">
            <div className="about-info-container-icon-box">
              <Code />
            </div>
            <div className="about-info-container-text">
              <h4>{t("about.cards.development.title")}</h4>
              <p>
                {t("about.cards.development.description")}
              </p>
            </div>
          </div>

          <div className="about-info-container-box">
            <div className="about-info-container-icon-box">
              <User />
            </div>
            <div className="about-info-container-text">
              <h4>{t("about.cards.design.title")}</h4>
              <p>
                {t("about.cards.design.description")}
              </p>
            </div>
          </div>

          <div className="about-info-container-box">
              <div className="about-info-container-icon-box">
                <Briefcase />
              </div>
              <div className="about-info-container-text">
                <h4>{t("about.cards.management.title")}</h4>
                <p>
                  {t("about.cards.management.description")}
                </p>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
