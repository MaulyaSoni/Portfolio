import { useEffect } from "react";
import "../styles.css";
import Hero from "../components/Hero";
import React from "react";
import AboutSkillsExpertise from "../components/AboutSkillsExpertise";
import Projects from "./Projects";
import Contact from "./Contact";
import About from "./About";

export default function Home() {
  useEffect(() => {
    // Reveal animation on mount
    const els = document.querySelectorAll(".reveal");
    els.forEach((el, i) => {
      setTimeout(() => el.classList.add("in"), i * 120);
    });
  }, []);

  return (
    <>
      <section id="hero">
        <Hero />
      </section>

      {/* Replaced old About with AboutSkillsExpertise
      <section id="about">
        <About />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section> */}
    </>
  );
}
