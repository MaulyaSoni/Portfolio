import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} MyPortfolio. All rights reserved.</p>
      <div className="socials">
        <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </footer>
  );
}
