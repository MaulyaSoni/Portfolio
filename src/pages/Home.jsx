import "../styles.css";
import Hero from "../components/Hero";
import React from "react";
import PageTransition from "../components/PageTransition";

export default function Home() {
  return (
    <PageTransition>
      <section id="hero">
        <Hero />
      </section>
    </PageTransition>
  );
}
