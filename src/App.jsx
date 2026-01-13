
import Header from "./components/header/Header.jsx"
import Hero from "./components/hero/Hero.jsx"
import About from "./components/about/About.jsx"
import Skills from "./components/skills/Skills.jsx"
import DiagramArchitectures from "./components/diagramArchitectures/DiagramArchitectures.jsx"
import Projects from "./components/projects/Projects.jsx"
import Education from "./components/education/Education.jsx"
import Articles from "./components/articles/Articles.jsx"
import Contact from "./components/contact/Contact.jsx"
import SoftSkills from "./components/softskills/Softskills.jsx"
import Experience from "./components/experience/Experience.jsx"
import { BrowserRouter } from "react-router-dom"
import ScrollToSection from "./sharedComponents/ScrollToSection.jsx"
function App() {


  return (
  <BrowserRouter>
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
  </BrowserRouter>
  )
}

export default App
