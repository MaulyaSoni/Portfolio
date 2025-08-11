// src/components/Hero.jsx
import React from "react";
import { TypeAnimation } from 'react-type-animation';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Hey, I'm <span className="gradient-text">YourName</span></h1>
        <TypeAnimation
          sequence={[
            'Web Developer 💻',
            2000,
            'UI/UX Designer 🎨',
            2000,
            'Creative Coder 💡',
            2000
          ]}
          wrapper="span"
          speed={50}
          className="typewriter"
          repeat={Infinity}
        />
        <p>Let’s build something amazing together.</p>
      </div>
    </section>
  );
};

export default Hero;
