import Navbar from "../Component/Navbar";
import AnimatedBG from "../Component/AnimatedBG";
import Home from "./Home";
import Skills from "./Skills";
import Projects from "./Projects";
import About_me from "./About_me";
import Contact from "./Contact";
import Footer from "../Component/Footer";

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <AnimatedBG />
      <Home />
      <Skills />
      <Projects />
      <About_me />
      <Contact />
      <Footer />
    </>
  );
};

export default AppLayout;
