import "./Projects.css";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio showcasing my projects and skills.",
      link: "#",
    },
    {
      title: "E-commerce Store",
      description: "A full-stack shopping platform with cart and checkout.",
      link: "#",
    },
    {
      title: "Blog Platform",
      description: "A MERN blog with authentication and rich text editor.",
      link: "#",
    },
  ];

  return (
    <section className="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((proj, index) => (
          <div
            className="project-card"
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <a href={proj.link}>View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}
