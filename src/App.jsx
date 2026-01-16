import { BrowserRouter,Routes, Route, Navigate } from "react-router-dom"
import { AuthProvider } from "./security/AuthContext"

import Header from "./components/header/Header"
import ScrollToSection from "./sharedComponents/ScrollToSection"
import Home from "./components/home/Home"
import Create from "./components/Editorial/create/Create"
import DashboardLayout from "./components/Editorial/DashboardLayout"
import AboutEditor from "./components/Editorial/AboutEditor"
import SkillsEditor from "./components/Editorial/SkillsEditor"
import ContactEditor from "./components/Editorial/ContactEditor"
import HeroEditor from "./components/Editorial/HeroEditor"
import EducationEditor from "./components/Editorial/EducationEditor"
import ProjectsEditor from "./components/Editorial/ProjectsEditor"
import RequireAuth from "./security/RequireAuth"
import RequireRole from "./security/RequireRole"
import Login from "./components/login/Login"
import Unauthorized from "./components/Unauthorized"
function App() {


  return (
 <AuthProvider>
 <BrowserRouter>
  <ScrollToSection />
  <Header />



  <Routes>
    <Route path="/" element={<Home/>}/>
  
    <Route path="/login" element={<Login/>}/>
    
    <Route path="/unauthorized" element={<Unauthorized/>}/>




    <Route path="/create" 
    element={
          <RequireAuth>
    <RequireRole allowedRoles={["admin","editor"]}>
    <DashboardLayout/>
     </RequireRole>
    </RequireAuth>
  }
    
    >
 



    <Route index element={<Navigate to="hero" replace/>}/>
    
    <Route path="about" element={<AboutEditor/>}/>
    <Route path="contact" element={<ContactEditor/>}/>
    <Route path="hero" element={<HeroEditor/>}/>
    <Route path="education" element={<EducationEditor/>}/>
    <Route path="projects" element={<ProjectsEditor/>}/>
    <Route path="skills" element={<SkillsEditor/>}/>
    </Route>
    {/* <Route path="/aboutEditor" element={<AboutEditor/>}/> */}
    

  </Routes>
  </BrowserRouter>
</AuthProvider>  
)
}

export default App
