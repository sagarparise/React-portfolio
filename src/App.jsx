import Home from "./Pages/Home";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import About_me from "./Pages/About_me";
import Contact from "./Pages/Contact";
import Navbar from "./Component/Navbar";
import AnimatedBG from "./Component/AnimatedBG";
import Footer from "./Component/Footer";
import Experience from "./Pages/Experience";

function App() {
  return (
    <>
      <Navbar />
      <AnimatedBG />
      <Home />
      <Skills />
      <About_me />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
