
import Header from "../header/Header.jsx"
import Hero from "../hero/Hero.jsx"
import About from "../about/About.jsx"
import Skills from "../skills/Skills.jsx"
import DiagramArchitectures from "../diagramArchitectures/DiagramArchitectures.jsx"
import Projects from "../projects/Projects.jsx"
import Education from "../education/Education.jsx"
import Articles from "../articles/Articles.jsx"
import Contact from "../contact/Contact.jsx"
import SoftSkills from "../softskills/Softskills.jsx"
import Experience from "../experience/Experience.jsx"
import ScrollToSection from "../../sharedComponents/ScrollToSection.jsx"
const Home = () => {
  return   <>
    <ScrollToSection />
    <Header />
    <Hero />
    <About />
    <Skills />
    <SoftSkills />
    <DiagramArchitectures />
    <Projects />
    <Experience />
    <Education />
    <Articles />
    <Contact />
  </>
  
};

export default Home;