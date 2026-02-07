import AboutSkillsExpertise from "../components/AboutSkillsExpertise";
import "./About.css";
import PageTransition from "../components/PageTransition";
import AnimatedSection from "../components/AnimatedSection";

export default function About() {
  return (
    <PageTransition>
      <section className="about" id="about">
        <AnimatedSection className="container">
          <AboutSkillsExpertise/>
        </AnimatedSection>
      </section>
    </PageTransition>
  );
}
