import { useEffect } from "react";
import "../styles.css";
import Hero from "../components/Hero";
import React from "react";
import About from './About';         // Or '../pages/About'
import Projects from './Projects';   // Or '../pages/Projects'
import Contact from './Contact';     // Or '../pages/Contact'

import img_react from "../assets/react.svg";

export default function Home() {
  useEffect(() => {
    // simple reveal on mount for elements with class reveal
    const els = document.querySelectorAll(".reveal");
    els.forEach((el, i) => {
      setTimeout(() => el.classList.add("in"), i * 120);
    });
  }, []);
return (
  <>
    <section className="hero">
      <div className="container hero-inner">
        <Hero />
        <div className="hero-copy">
          <div className="kicker reveal">Hi, I'm Intruder</div>
          <h1 className="h1 reveal">Crafting beautiful digital experiences</h1>
          <p className="lead reveal">
            Design-led front-end development — performance focused, animation rich, and pixel-perfect.
          </p>
          <div className="hero-cta reveal">
            <a href="#projects" className="btn">See my work →</a>
          </div>
        </div>
      </div>
    </section>

    {/* 👇 New Sections */}
    <About />
    <Projects />
    <Contact />
  </>
);
}
/* <div className="hero-card floaty" data-aos="zoom-in">
          <div className="hero-card floaty" data-aos="zoom-in">
            <img
              src={img_react}
              alt="mockup"
              style={{ width: "100%", borderRadius: 10 }}
            />
            <div
              style={{
                width: "100%",
                marginTop: 8,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{ fontWeight: 700 }}>Featured</div>
              <div style={{ color: "var(--muted)", fontSize: 13 }}>
                UI / Frontend
              </div>
            </div>
          </div>{" "}
          <div
            style={{
              width: "100%",
              marginTop: 8,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ fontWeight: 700 }}>Featured</div>
            <div style={{ color: "var(--muted)", fontSize: 13 }}>
              UI / Frontend
            </div>
          </div>
        </div> */