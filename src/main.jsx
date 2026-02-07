import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "aos/dist/aos.css";
import "./styles.css"; // your styles
import "./animations.css"; // animation utilities
import AOS from "aos";
import { BrowserRouter } from "react-router-dom";
AOS.init({ duration: 900, once: true, offset: 80 });
ReactDOM.createRoot(document.getElementById('root')).render(
  
    <BrowserRouter basename="/Portfolio">
      <App />
    </BrowserRouter>
   
);
