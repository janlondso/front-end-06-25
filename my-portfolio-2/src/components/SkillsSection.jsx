import { useEffect, useState } from "react";
import "../css/skillssection.css";
import { useTranslation } from "react-i18next";

function SkillsSection() {
  const { t } = useTranslation();

  const [skills, setSkills] = useState([]);
  const categories = ["all", "frontend", "backend", "tools"];
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    fetch("/data/skills.json")
      .then((res) => res.json())
      .then((data) => setSkills(data))
      .catch((err) => console.error("Failed to load skills:", err));
  }, []);

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2>
          {t("skills.sectionTitle")} <span>{t("skills.sectionTitleSpan")}</span>
        </h2>

        <div className="category-buttons">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={`category-button ${activeCategory === category ? "active" : ""}`}
            >
              {t(`skills.categories.${category}`)}
            </button>
          ))}
        </div>

        <div className="skills-list">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="skill-item"
              style={{ "--delay": `${key * 0.1}s` }}
            >
              <h3>{skill.name}</h3>
              <div className="progress-bar-container">
                <div
                  className="progress-bar"
                  style={{
                    "--skill-level": `${skill.level}%`,
                    width: `${skill.level}%`,
                  }}
                  data-label={`${skill.level}%`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
