import { useEffect, useState } from "react";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import "../css/projects.css"

function ProjectSection() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/data/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Failed to load projects:", err));
  }, []);

  return (
    <section id="projects">
      <div className="projects-container">
        <h2 className="projects-main-heading">
          Featured <span className="projects-main-heading-span">Projects</span>
        </h2>
        <p className="projects-main-paragraph">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance and user experience.
        </p>

        <div className="projects-cards">
          {projects.map((project) => (
            <div className="projects-card" key={project.id}>
              <div className="projects-card-image-box">
                <img
                  className="projects-card-image"
                  src={project.image}
                  alt={project.title}
                />
              </div>
              <div className="projects-card-tag">
                {project.tags.map((tag, index) => (
                  <span key={index}>{tag}</span>
                ))}
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="projects-card-links">
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={20} />
                </a>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div>
          <a target="_blank" href="#">
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;
