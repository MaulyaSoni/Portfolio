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
import AnimatedSection from "./AnimatedSection";
import { AnimatedContainer, AnimatedItem } from "./AnimatedSection";

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
      <AnimatedSection className="about-container" delay={0.1}>
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I'm a passionate developer with a love for crafting clean,
            high-performing applications. From building sleek UIs to designing
            scalable backend systems, I thrive on turning ideas into real,
            impactful products.
          </p>
        </div>
      </AnimatedSection>

      {/* Expertise */}
      <div className="expertise-container">
        <AnimatedSection delay={0.2}>
          <h2>Expertise</h2>
        </AnimatedSection>
        <AnimatedContainer className="expertise-grid" staggerDelay={0.1}>
          <AnimatedItem className="expertise-card">
            <FaLaptopCode size={30} />
            <h3>Data Science</h3>
          </AnimatedItem>
          
          <AnimatedItem className="expertise-card">
            <FaCloud size={30} />
            <h3>Cloud Architecture</h3>
          </AnimatedItem>
          
          <AnimatedItem className="expertise-card">
            <DataAnalyticsIcon size={30} />
            <h3>Data Analytics</h3>
          </AnimatedItem>
          
          <AnimatedItem className="expertise-card">
            <FaDatabase size={30} />
            <h3>Database Design</h3>
          </AnimatedItem>
          
          <AnimatedItem className="expertise-card">
            <FaGlobe size={30} />
            <h3>Web Technologies</h3>
          </AnimatedItem>
        </AnimatedContainer>
      </div>
    </section>
  );
}
