// import "./Projects.css";

// export default function Projects() {
//   const projects = [
//     {
//       title: "Portfolio",
//       desc: "A high-performance portfolio with animated micro-interactions.",
//       tech: ["React", "Vite", "AOS"],
//       link: ""
//     },
//     {
//       title: "Airbnb",
//       desc: "Fast shopping experience with optimistic UI and PWA support.",
//       tech: ["React", "Stripe", "PWA"],
//       link: "#"
//     },
//     {
//       title: "Blog",
//       desc: "Markdown-based blog with SSR and syntax highlighting.",
//       tech: ["MDX", "Vite", "Netlify"],
//       link: "#"
//     }
//   ];

//   return (
//     <section  id="projects" className="projects">
//        <div className="container mt-3">
//       <h2 className="h2" data-aos="fade-up">My Projects</h2>
//       <p className="lead" data-aos="fade-up" data-aos-delay="100">
//         A small selection of work — focused on clarity, performance, and delightful UX.
//       </p>

//       <div className="projects-grid">
//         {projects.map((project, i) => (
//           <article
//             className="card"
//             key={i}
//             data-aos="fade-up"
//             data-aos-delay={i * 100 + 200}
          
//           >
//             <div className="meta"></div>
//             <h3>{project.title}</h3>
//             <p>{project.desc}</p>

//             <div className="chips">
//               {project.tech.map((tech, idx) => (
//                 <span className="chip" key={idx}>
//                   {tech}
//                 </span>
//               ))}
//             </div>

//             <div style={{ marginTop: 12  }}>
//               <a className="btn " href={project.link} target="_blank" rel="noopener noreferrer">
//                 Open
//               </a>
//               <a className="btn" href={project.link} target="_blank" rel="noopener noreferrer">
//                 Get Code
//               </a>
//             </div>
//           </article>
//         ))}
//       </div>
//       </div>
//       <br />
//     </section>
//   );
// }

import { useState } from "react";
import "./Projects.css";
import PageTransition from "../components/PageTransition";
import AnimatedSection from "../components/AnimatedSection";
import { AnimatedContainer, AnimatedItem } from "../components/AnimatedSection";

export default function Projects() {
  const [expandedSections, setExpandedSections] = useState({});

  const projects = [
    {
      title: "Portfolio",
      desc: "A high-performance portfolio with animated micro-interactions.",
      tech: ["React", "Vite"],
      category: "Web Dev",
      link: "https://github.com/MaulyaSoni/Portfolio"
    },
    {
      title: "Airbnb",
      desc: "Fast booking experience for hotels and Paid guest with optimistic UI and trust.",
      tech: ["React", "Express", "Node", "Mongo-ATLAS"],
      category: "Web Dev",
      link: "https://github.com/MaulyaSoni/AIrbnb-clone"
    },
    {
      title: "Certificate Portfolio",
      desc: "A place where you can upload the certificates to show case your skills and make the HR hire you.",
      tech: ["Vite", "React"],
      category: "Web Dev",
      link: "https://github.com/MaulyaSoni/Certificate-Portfolio-uploader"
    },
    {
      title: "Credit-Card-Fraud-Detection",
      desc: "Machine learning model to detect the fraud which is done in the case of Credit Card ",
      tech: ["Python", "Random Forest", "Logistics", "Neural Networks"],
      category: "ML",
      link: "https://github.com/MaulyaSoni/Credit-Card-Fraud-Detection"
    },
    {
      title: "Phising-Email-Detection",
      desc: "Phising email detection using machine learning to prevent the data theft.  ",
      tech: ["Python", "Logistic Regression ", "Random Forest"], 
      category: "ML",
      link: "https://github.com/MaulyaSoni/Phising-Email-Detection"
    },
    // {
    //   title: "Sentiment Analysis",
    //   desc: "NLP model for analyzing sentiment in social media posts and reviews.",
    //   tech: ["Python", "NLTK", "TensorFlow", "Streamlit"],
    //   category: "ML",
    //   link: "#"
    // }
  ];

  const categories = [
    { name: "Web Dev", title: "Web Development Projects", icon: "🌐" },
    { name: "ML", title: "Machine Learning Projects", icon: "🤖" },
    { name: "Analytics", title: "Data Analytics Projects", icon: "📊" }
  ];

  const toggleSection = (categoryName) => {
    setExpandedSections(prev => ({
      ...prev,
      [categoryName]: !prev[categoryName]
    }));
  };

  const getProjectsByCategory = (categoryName) => {
    return projects.filter(project => project.category === categoryName);
  };

  return (
    <PageTransition>
      <section className="projects" id="projects">
        <div className="projects-container">
          <AnimatedSection>
            <h2 className="section-title">My Projects</h2>
          </AnimatedSection>

          <AnimatedContainer className="projects-grid" staggerDelay={0.15}>
          {categories.map((category, index) => {
            const isExpanded = expandedSections[category.name];
            const categoryProjects = getProjectsByCategory(category.name);
            
            return (
              <AnimatedItem key={category.name} className="category-section">
                {/* Category Card */}
                <div 
                  className="category-card"
                  onClick={() => toggleSection(category.name)}
                >
                  <h3>{category.title} <span className="category-icon">{category.icon}</span></h3>
                  <p>Check my {category.name.toLowerCase()} projects ({categoryProjects.length} projects)</p>
                  <div className="category-link">
                    {isExpanded ? 'Hide Projects' : 'View Projects'}
                    <i className={`fa-solid ${isExpanded ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                  </div>
                </div>

                {/* Expandable Projects */}
                <div className={`projects-content ${isExpanded ? 'expanded' : ''}`}>
                  <div className="projects-inner-grid">
                    {categoryProjects.map((project, i) => (
                      <article
                        className="project-card"
                        key={i}
                      >
                        <h4>{project.title}</h4>
                        <p>{project.desc}</p>

                        <div className="chips">
                          {project.tech.map((tech, idx) => (
                            <span className="chip" key={idx}>
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="btn-group">
                          <a
                            className="project-link"
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Open
                            <i className="fa-solid fa-external-link-alt"></i>
                          </a>
                          <a
                            className="project-link"
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Get Code
                            <i className="fa-solid fa-code"></i>
                          </a>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </AnimatedItem>
            );
          })}
          </AnimatedContainer>
        </div>
      </section>
    </PageTransition>
  );
}
