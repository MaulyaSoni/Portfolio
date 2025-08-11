import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="writing">
      <p>© {new Date().getFullYear()} MyPortfolio. All rights reserved.</p>
      </div>
      <div className="socials">
        <a href="https://github.com/" target="_blank" rel="noreferrer">
          <i className="fab fa-github"></i>  
        </a>
        <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
          <i className="fab fa-linkedin"></i>  
        </a>
      </div>
    </footer>
  );
}
