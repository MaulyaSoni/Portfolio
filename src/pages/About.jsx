import "./About.css";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
      <h2>About Me</h2>
      <p>
        I’m a passionate developer with experience in building interactive and responsive websites.
        My goal is to create digital experiences that are fast, beautiful, and accessible.
      </p>
      <h3>Skills</h3>
      <ul className="skills">
        <li>HTML / CSS / JavaScript</li>
        <li>React / Node.js</li>
        <li>MongoDB / MySQL</li>
        <li>Git / GitHub</li>
      </ul>
      </div>
    </section>
  );
}
