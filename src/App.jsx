import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Achievements from "./pages/Achievements";
import AIAssistant from "./components/AIAssistant";
import AIBackground from "./components/AIBackground";

export default function App() {
  const location = useLocation();

  return (
    <>
      <AIAssistant />
      <AIBackground />
      <Navbar />
      <main style={{ paddingTop: "80px" }}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/achievements" element={<Achievements />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}
