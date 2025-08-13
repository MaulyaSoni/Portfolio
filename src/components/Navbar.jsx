// // src/components/Navbar.jsx
// import React, { useEffect, useState } from "react";
 
// import { Link } from "react-router-dom";
// import "./Navbar.css";

// export default function Navbar() {
//   const [active, setActive] = useState("home");
//   const [scrolled, setScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;

//       setScrolled(scrollY > 60);

//       const sections = ["home", "about", "projects", "contact"];
//       for (const id of sections) {
//         const section = document.getElementById(id);
//         if (
//           section &&
//           scrollY >= section.offsetTop - 200 &&
//           scrollY < section.offsetTop + section.offsetHeight - 200
//         ) {
//           setActive(id);
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleNavClick = (id) => {
//     setMenuOpen(false);
//     document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
//       <div className="navbar-container">
//         {/* Logo */}
//         <div className="logo" onClick={() => handleNavClick("home")}>
//          <i className="fa-solid fa-user-tie"></i>
//         </div>

//         {/* Nav Links */}
//         <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
//           {["home", "about", "projects", "contact"].map((item) => (
//             <li
//               key={item}
//               className={active === item ? "active" : ""}
//               onClick={() => handleNavClick(item)}
//             >
//               {item.charAt(0).toUpperCase() + item.slice(1)}
//             </li>
//           ))}
//         </ul>

//         {/* Hamburger for mobile */}
//         <div
//           className={`hamburger ${menuOpen ? "open" : ""}`}
//           onClick={() => setMenuOpen((prev) => !prev)}
//         >
//           <span></span>
//           <span></span>
//           <span></span>
//         </div>
//       </div>
//     </nav>
//   );
// }
// import React, { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import "./Navbar.css";

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 60);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navItems = [
//     { name: "Home", path: "/" , icon: "fa-regular fa-house" },
//     { name: "About", path: "/about" },
//     { name: "Projects", path: "/projects" },
//     { name: "Contact", path: "/contact" },
//   ];

//   return (
//     <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
//       <div className="navbar-container">
//         {/* Logo */}
//         <div className="logo">
//           <Link to="/" onClick={() => setMenuOpen(false)}>
//             <i className="fa-solid fa-user-tie"></i>
//           </Link>
//         </div>

//         {/* Nav Links */}
//         <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
//           {navItems.map((item) => (
//             <li
//               key={item.path}
//               className={location.pathname === item.path ? "active" : ""}
//             >
//               <Link
//                 to={item.path}
//                 onClick={() => setMenuOpen(false)}
//               >
//                 {item.name}
//               </Link>
//             </li>
//           ))}
//         </ul>

//         {/* Hamburger for mobile */}
//         <div
//           className={`hamburger ${menuOpen ? "open" : ""}`}
//           onClick={() => setMenuOpen((prev) => !prev)}
//         >
//           <span></span>
//           <span></span>
//           <span></span>
//         </div>
//       </div>
//     </nav>
//   );
// }


// import React, { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import "./Navbar.css"; // Make sure this contains styles for .navbar, .nav-links, .hamburger, etc.

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 60);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navItems = [
//     { name: "Home", path: "/", icon: "fa-solid fa-house" },
//     { name: "About", path: "/about", icon: "fa-solid fa-user" },
//     { name: "Projects", path: "/projects", icon: "fa-solid fa-briefcase" },
//     { name: "Contact", path: "/contact", icon: "fa-solid fa-envelope" },
//   ];

//   return (
//     <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
//       <div className="navbar-container">
//         {/* Logo */}
//         <div className="logo">
//           <Link to="/" onClick={() => setMenuOpen(false)}>
//             <i className="fa-solid fa-user-tie"></i>
//           </Link>
//         </div>

//         {/* Nav Links */}
//         <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
//           {navItems.map((item) => (
//             <li
//               key={item.path}
//               className={location.pathname === item.path ? "active" : ""}
//             >
//               <Link to={item.path} onClick={() => setMenuOpen(false)}>
//                 <i className={item.icon}></i>
//                 <span>{item.name}</span>
//               </Link>
//             </li>
//           ))}
//         </ul>

//         {/* Hamburger for mobile */}
//         <div
//           className={`hamburger ${menuOpen ? "open" : ""}`}
//           onClick={() => setMenuOpen((prev) => !prev)}
//         >
//           <span></span>
//           <span></span>
//           <span></span>
//         </div>
//       </div>
//     </nav>
//   );
// }
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/", icon: "fa-house" },
    { name: "About", path: "/about", icon: "fa-user" },
    { name: "Projects", path: "/projects", icon: "fa-code" },
    { name: "Contact", path: "/contact", icon: "fa-envelope" },
  ];

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="gradient">
          <Link to="/" onClick={() => setMenuOpen(false)}>
          <h3>Maulya Soni </h3>
          </Link>
        </div>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <li
              key={item.path}
              className={location.pathname === item.path ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              <Link to={item.path}>
                <i className={`fa-solid ${item.icon}`}></i>
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="hamburger" onClick={toggleMenu}>
          <span />
          <span />
          <span />
        </div>
      </div>
    </nav>
  );
}
