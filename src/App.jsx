// App.jsx
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "80px" }}>
        <Home />   
      </main>
      <Footer />
    </>
  );
}
