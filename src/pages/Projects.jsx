import "../styles.css";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio",
      desc: "A high-performance portfolio with animated micro-interactions.",
      tech: ["React", "Vite", "AOS"],
      link: "https://github.com/MaulyaSoni/Portfolio"
    },
    {
      title: "Airbnb",
      desc: "Fast shopping experience with optimistic UI and PWA support.",
      tech: ["React", "Stripe", "PWA"],
      link: "#"
    },
    {
      title: "Blog",
      desc: "Markdown-based blog with SSR and syntax highlighting.",
      tech: ["MDX", "Vite", "Netlify"],
      link: "#"
    }
  ];

  return (
    <section  id="projects" className="projects">
       <div className="container mt-3">
      <h2 className="h2" data-aos="fade-up">My Projects</h2>
      <p className="lead" data-aos="fade-up" data-aos-delay="100">
        A small selection of work — focused on clarity, performance, and delightful UX.
      </p>

      <div className="projects-grid">
        {projects.map((project, i) => (
          <article
            className="card"
            key={i}
            data-aos="fade-up"
            data-aos-delay={i * 100 + 200}
          
          >
            <div className="meta"></div>
            <h3>{project.title}</h3>
            <p>{project.desc}</p>

            <div className="chips">
              {project.tech.map((tech, idx) => (
                <span className="chip" key={idx}>
                  {tech}
                </span>
              ))}
            </div>

            <div style={{ marginTop: 12 }}>
              <a className="btn" href={project.link} target="_blank" rel="noopener noreferrer">
                Open
              </a>
              <a className="btn" href={project.link} target="_blank" rel="noopener noreferrer">
                Get Code
              </a>
            </div>
          </article>
        ))}
      </div>
      </div>
      <br />
    </section>
  );
}
