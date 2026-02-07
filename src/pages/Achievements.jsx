import React from "react";
import "./Achievements.css";
import PageTransition from "../components/PageTransition";
import AnimatedSection from "../components/AnimatedSection";
import { AnimatedContainer, AnimatedItem } from "../components/AnimatedSection";

export default function Achievements() {
  return (
    <PageTransition>
      <section className="achievements" id="achievements">
        <div className="achievements-container">
          <AnimatedSection>
            <h2 className="section-title">Achievements</h2>
          </AnimatedSection>

          <AnimatedContainer className="achievements-grid" staggerDelay={0.2}>
            <AnimatedItem className="achievement-card">
              <h3>Bagdes <i className="fa-regular fa-star"></i></h3>
              <p>Check my badges on Credly</p>
              <a
                href="https://www.credly.com/users/23dit072-maulya-soni"
                target="_blank"
                rel="noopener noreferrer"
                className="achievement-link"
              >
                View Credly Profile
              </a>
            </AnimatedItem>
            
            <AnimatedItem className="achievement-card">
              <h3>Certifications <i className="fa-solid fa-award"></i></h3>
              <p>Check my certifications on Coursera</p>
              <a
                href="https://www.coursera.org/user/20550ecaf86da97def5e5011aeb70997"
                target="_blank"
                rel="noopener noreferrer"
                className="achievement-link"
              >
                View Coursera Profile
              </a>
            </AnimatedItem>
          </AnimatedContainer>
        </div>
      </section>
    </PageTransition>
  );
}
