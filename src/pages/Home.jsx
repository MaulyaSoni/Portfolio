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
  <section id="hero"><Hero /></section>
  <section id="about"><About /></section>
  <section id="projects"><Projects /></section>
  <section id="contact"><Contact /></section>
</>

   
);
}