import { useState } from "react";


const skills = [
    // Frontend
    { name: "HTML/CSS", level: 95, category: "frontend"},
    { name: "JavaScript", level: 90, category: "frontend"},
    { name: "React", level: 90, category: "frontend"},
    { name: "TypeScript", level: 85, category: "frontend"},
    { name: "Next.js", level: 80, category: "frontend"},
    // Backend
    { name: "Node.js", level: 80, category: "backend"},
    { name: "Express", level: 75, category: "backend"},
    { name: "MongoDB", level: 70, category: "backend"},
    { name: "PostgreSQL", level: 65, category: "backend"},
    { name: "GraphQL", level: 60, category: "backend"},
    // Tools
    { name: "Git/GitHub", level: 90, category: "tools"},
    { name: "Docker", level: 70, category: "tools"},
    { name: "Figma", level: 85, category: "tools"},
    { name: "VS Code", level: 95, category: "tools"},
];

const categories = ["all", "frontend", "backend", "tools"];

function SkillsSection() {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter(
        (skill) => activeCategory === "all" || skill.category === activeCategory
    );
  return (
    <section id="skills">
      <div>
        <h2>
            My <span>Skills</span>
        </h2>

        <div >
            {categories.map((category, key) => (
              <button
              key={key}
              onClick={() => setActiveCategory(category)}
              {...activeCategory === category
                ? "bg-primary text-primary-foreground"
                : "bg-secondary/70 text-foreground hover:bg-secondary"}
              >
                {category}
              </button>
            ))}
        </div>

        <div>
            {filteredSkills.map((skill, key) => (
              <div
              key={key}
              >
                <div>
                  <h3 >{skill.name}</h3>
                </div>
                <div>
                  <div
                    style={{ width: skill.level + "%"}}
                  />
                </div>
                <div >
                    <span >
                        {skill.level}%
                    </span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
)
}

export default SkillsSection