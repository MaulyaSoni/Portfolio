// src/components/Navbar.jsx
import React, { useEffect, useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      setScrolled(scrollY > 60);

      const sections = ["home", "about", "projects", "contact"];
      for (const id of sections) {
        const section = document.getElementById(id);
        if (
          section &&
          scrollY >= section.offsetTop - 200 &&
          scrollY < section.offsetTop + section.offsetHeight - 200
        ) {
          setActive(id);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo" onClick={() => handleNavClick("home")}>
          👾
        </div>

        {/* Nav Links */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          {["home", "about", "projects", "contact"].map((item) => (
            <li
              key={item}
              className={active === item ? "active" : ""}
              onClick={() => handleNavClick(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </li>
          ))}
        </ul>

        {/* Hamburger for mobile */}
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}
