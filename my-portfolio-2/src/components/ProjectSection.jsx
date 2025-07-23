import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
    {
      id: 1,
      title: "SaaS Landing Page",
      description: "A beatiful landing page app using React and Tailwind.",
      image: "/projects/epicapage1.png",
      tags: ["React", "TailwindCSS", "Supabase"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "SaaS Landing Page",
      description: "A beatiful landing page app using React and Tailwind.",
      image: "/projects/epicapage2.png",
      tags: ["React", "TailwindCSS", "Supabase"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "SaaS Landing Page",
      description: "A beatiful landing page app using React and Tailwind.",
      image: "/projects/epicapage3.png",
      tags: ["React", "TailwindCSS", "Supabase"],
      demoUrl: "#",
      githubUrl: "#",
    },
]

function ProjectSection() {
  return (
    <section id="projects">
      <div>
        <h2>
            {" "}
            Featured<span>Projects</span>
        </h2>
        <p >
          Here are some of my recent projects. Each project was carefully
          crafted with attencion to detail, perfomance and user expirience.
        </p>
        <div>
          {projects.map((project, key) => (
            <div
              key={key}>
              <div>
                <img
                  src={project.image}
                  alt={project.title}
                  />
              </div>
              <div>
                <div>
                    {project.tags.map((tag) => (
                      <span >
                        {tag}
                      </span>
                    ))}
                </div>
                <h3>{project.title}</h3>
                <p >
                  {project.description}
                </p>
                <div>
                  <div>
                    <a
                    href={project.demoUrl}
                    target="_blank">
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank">
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))} 
        </div>
          <div>
            <a target="_blank"
              href="#">
                Check My Github <ArrowRight size={16} /> 
            </a>
          </div>
      </div>
    </section>
  )
}

export default ProjectSection