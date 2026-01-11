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
    /* Updated to a richer "Lavender Mist" base with 
       stronger Purple and Pink mesh gradients.
    */
    <div className="min-h-screen bg-[#f3f0ff] bg-[radial-gradient(circle_at_20%_30%,_#e9d5ff_0%,_transparent_50%),_radial-gradient(circle_at_80%_70%,_#fbcfe8_0%,_transparent_50%),_radial-gradient(circle_at_50%_10%,_#ddd6fe_0%,_transparent_50%)] selection:bg-purple-300 selection:text-purple-900">
      
      <Navbar />
      
      {/* This main wrapper ensures all children inherit the glassy vibe.
         The 'relative' z-index helps with floating glass effects.
      */}
      <main className="relative z-10 overflow-hidden">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;