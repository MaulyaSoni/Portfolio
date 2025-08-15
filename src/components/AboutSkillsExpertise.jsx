import React from "react";
import "./AboutSkillsExpertise.css";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaCloud,
  FaDatabase,
  FaGlobe,
  FaCogs,
} from "react-icons/fa";

export default function AboutSkillsExpertise() {
  const DataAnalyticsIcon = (props) => (
    <svg
      width={props.size || "24"}
      height={props.size || "24"}
      viewBox="0 0 24 24"
      fill="none"
      stroke={props.color || "currentColor"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="3" y="12" width="4" height="8" />
      <rect x="9" y="8" width="4" height="12" />
      <rect x="15" y="4" width="4" height="16" />
      <polyline points="3 20 9 12 15 16 21 8" />
    </svg>
  );
  return (
    <section
      data-scroll-section
      className="about-skills-expertise fade-up"
      id="about"
    >
      {/* About Me */}
      <div className="about-container" data-scroll data-scroll-speed="1">
        <div
          className="about-text"
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="-1"
        >
          <h2>About Me</h2>
          <p>
            I’m a passionate developer with a love for crafting clean,
            high-performing applications. From building sleek UIs to designing
            scalable backend systems, I thrive on turning ideas into real,
            impactful products.
          </p>
        </div>
        {/* <div className="about-img" data-scroll data-scroll-speed="2">
          <img src="./src/assets/me.jpg" alt="profile" />
        </div> */}
      </div>

      {/* Skills */}
      {/* <div className="skills-container" data-scroll data-scroll-speed="1">
        <h2>Skills</h2>
        <div className="skill">
          <span>React</span>
          <div className="skill-bar">
            <div className="fill" style={{ width: "90%" }}></div>
          </div>
        </div>
        <div className="skill">
          <span>Node.js</span>
          <div className="skill-bar">
            <div className="fill" style={{ width: "85%" }}></div>
          </div>
        </div>
        <div className="skill">
          <span>Database Design</span>
          <div className="skill-bar">
            <div className="fill" style={{ width: "80%" }}></div>
          </div>
        </div>
      </div> */}

      {/* Expertise */}
      <div className="expertise-container" data-scroll data-scroll-speed="1">
        <h2>Expertise</h2>
        <div className="expertise-grid">
          <div className="expertise-card">
            <FaLaptopCode size={30} />
            <h3>Full Stack Development</h3>
          </div>
          
          {/* <div className="expertise-card">
            <FaMobileAlt size={30} />
            <h3>Mobile Development</h3>
          </div> */}
          {/* <div className="expertise-card">
            <FaCloud size={30} />
            <h3>Cloud Architecture</h3>
          </div> */}
          {/* <div className="expertise-card">
            <FaCogs size={30} />
            <h3>Data Analytics</h3>
          </div> */}
          <div className="expertise-card">
            <DataAnalyticsIcon size={30} />
            <h3>Data Analytics</h3>
          </div>
          <div className="expertise-card">
            <FaDatabase size={30} />
            <h3>Database Design</h3>
          </div>
          <div className="expertise-card">
            <FaGlobe size={30} />
            <h3>Web Technologies</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
