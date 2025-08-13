// src/components/Hero.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import "./Hero.css";

const Hero = () => {
  const texts = [
    { text: "MERN Stack Developer 🎨", color: "#d8695fff" }, // coral
    { text: "AIML Enthusiast 💻", color: "#4cafef" }, // blue
    { text: "Critical thinker 💡", color: "#ffc107" }, // yellow
  ];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % texts.length);
        setFade(true);
      }, 500); // fade out time
    }, 4000); // change every 4s

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      className="hero"
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="container hero-content">
        <h1>
          Hey, I'm <span className="gradient-text"> </span>
          <span
            className={`slideshow-text ${fade ? "fade-in" : "fade-out"}`}
            style={{
              color: texts[index].color,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: "1000",
              fontSize: "3rem",
              marginBottom: "10px",
            }}
          >
            {texts[index].text}
          </span>
        </h1>

        <h1 className="h1 shine">Welcome to the world of creativity</h1>

        <p
          style={{
            color: "lightgreen",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "20px",
          }}
        >
          Let’s build something amazing together.
        </p>

        <Tilt
          glareEnable={true}
          glareMaxOpacity={0.1}
          glareColor="#ffffff"
          glarePosition="all"
          scale={1.05}
          transitionSpeed={1500}
        ></Tilt>
      </div>
      <div className="socials">
        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          className="social-btn github"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noreferrer"
          className="social-btn linkedin"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
        {/* <a
          href="https://twitter.com/"
          target="_blank"
          rel="noreferrer"
          className="social-btn twitter"
        >
          <i className="fab fa-twitter"></i>
        </a> */}
        <a href="mailto:you@example.com" className="social-btn email">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
    </motion.section>
  );
};

export default Hero;
