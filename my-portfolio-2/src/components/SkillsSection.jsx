import { useState } from "react";
import "../css/skillssection.css"; // Make sure this file exists

const skills = [
  { name: "HTML/CSS", level: 80, category: "frontend" },
  { name: "JavaScript", level: 60, category: "frontend" },
  { name: "React", level: 70, category: "frontend" },
  { name: "TypeScript", level: 45, category: "frontend" },
  { name: "Next.js", level: 30, category: "frontend" },
  { name: "Node.js", level: 25, category: "backend" },
  { name: "Express", level: 30, category: "backend" },
  { name: "MongoDB", level: 10, category: "backend" },
  { name: "PostgreSQL", level: 10, category: "backend" },
  { name: "GraphQL", level: 10, category: "backend" },
  { name: "Git/GitHub", level: 60, category: "tools" },
  { name: "Docker", level: 10, category: "tools" },
  { name: "Figma", level: 80, category: "tools" },
  { name: "VS Code", level: 60, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2>
          My <span>Skills</span>
        </h2>

        <div className="category-buttons">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={`category-button ${
                activeCategory === category ? "active" : ""
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="skills-list">
          {filteredSkills.map((skill, key) => (
            <div key={key}
            className="skill-item"
            style={{ "--delay": `${key * 0.1}s` }}
            >
              <h3>{skill.name}</h3>
              <div className="progress-bar-container">
                <div
                  className="progress-bar"
                  style={{ "--skill-level": `${skill.level}%`, width: `${skill.level}%` }}
                  data-label={`${skill.level}%`}
                />

              </div>
              {/* <span className="skill-level">{skill.level}%</span> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
