// src/components/Hero.jsx
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import "./Hero.css";

const Hero = () => {
  return (
    <motion.section
      className="hero"
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className=" container hero-content">
        <h1>
          Hey, I'm <span className="gradient-text">name</span>
        </h1>

        <h1 className="h1 shine">Crafting beautiful digital experiences</h1>

        <TypeAnimation
          sequence={[
            "MERN Stack Developer 🎨",
            2000,
            "AI/ML Enthusiast 💻",
            2000,
            "Critical thinker 💡",
            2000,
          ]}
          wrapper="span"
          speed={50}
          className="typewriter"
          repeat={Infinity}
        />

        <p style={{color:"lightgreen", fontFamily:"sans-serif"}}>Let’s build something amazing together.</p>

        <Tilt
          glareEnable={true}
          glareMaxOpacity={0.1}
          glareColor="#ffffff"
          glarePosition="all"
          scale={1.05}
          transitionSpeed={1500}
        >
          {/* `<div className="hero-card">
            <img
              src="/assets/phone-mockup.png"
              alt="mockup"
              className="hero-mockup"
            />
          </div>` */}
        </Tilt>
      </div>
    </motion.section>
  );
};

export default Hero;
