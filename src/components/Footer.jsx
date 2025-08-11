import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="writing">
      <p>© {new Date().getFullYear()} Maulya Soni's Portfolio. All rights reserved.</p>
      </div>
      <div className="socials">
        <a href="https://github.com/MaulyaSoni" target="_blank" rel="noreferrer">
          <i className="fab fa-github"></i>  
        </a>
        <a href="https://www.linkedin.com/in/maulya-soni-6ba03734b/" target="_blank" rel="noreferrer">
          <i className="fab fa-linkedin"></i>  
        </a>
      </div>
    </footer>
  );
}
