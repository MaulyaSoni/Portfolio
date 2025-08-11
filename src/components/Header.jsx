import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles.css"; // import global CSS once in main.jsx ideally

export default function Header(){
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container nav">
        <div className="logo">
          <div className="mark" style={{width:36,height:36,borderRadius:10,background:"linear-gradient(135deg,#7c3aed,#f59e0b)"}}/>
          <span style={{marginLeft:8}}>Intruder</span>
        </div>

        <nav>
          <div className={`nav-links ${open ? "open" : ""}`}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <button className="hamburger" onClick={()=>setOpen(v=>!v)}>
            ☰
          </button>
        </nav>
      </div>
    </header>
  );
}
