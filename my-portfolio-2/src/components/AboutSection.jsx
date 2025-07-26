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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi nisi
            facere aspernatur cupiditate, maxime est nobis dolorum officia
            voluptates. Rerum?
          </p>
          <p className="about-me-info-paragraph">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi nisi
            facere aspernatur cupiditate, maxime est nobis dolorum officia
            voluptates. Rerum?
          </p>

          <div className="about-me-info-buttons">
            <a className="about-me-info-buttons" href="#contact">Get In Touch</a>
            <a className="about-me-info-buttons" href="/files/Jan_CV.pdf" download>Download CV</a>
          </div>
        </div>

        <div className="about-info-container">
          <div className="about-info-container-box">
            <div className="about-info-container-icon-box">
              <Code />
            </div>
            <div className="about-info-container-text">
              <h4>Web Development</h4>
              <p>
                Creating responsive websites and web applications with modern
                frameworks.
              </p>
            </div>
          </div>

          <div className="about-info-container-box">
            <div className="about-info-container-icon-box">
              <User />
            </div>
            <div className="about-info-container-text">
              <h4>UI/UX Design</h4>
              <p>
                Designing intuitive user interfaces and seamless user
                experiences.
              </p>
            </div>
          </div>

          <div className="about-info-container-box">
              <div className="about-info-container-icon-box">
                <Briefcase />
              </div>
              <div className="about-info-container-text">
                <h4>Project Management</h4>
                <p>
                  Leading projects from conception to completion with agile
                  methodologies.
                </p>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
