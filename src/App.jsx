import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <>
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Education/>
    </div>
      <Skills/>
      <Projects/>
      <Contact/>
    <Footer/>
    </>
  );
}

export default App;
