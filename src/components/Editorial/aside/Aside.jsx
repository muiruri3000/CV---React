import { NavLink } from "react-router-dom"
import { useAuth } from "../../../security/AuthContext"
const side_links = [
    {
     label:"Hero",
     path: "hero",
     roles:[ "editor","admin"]
    },
    {

        label: "About",
        path: "about",
        roles:["admin"]
    },
    {
        label: "Education",
        path: "education",
        roles:["editor","admin"]
    },
    {

        label: "Projects",
        path: "projects",
        roles:["admin", "editor"]
        
    },
    {
        label:"Skill",
        path:"skills",
        roles:["admin","admin"]
    },
    
]
const Aside = () => {
    const {user} = useAuth()
    console.log("ROLE CHECK USER:", user);
return <div className="bg-blue-50 w-48 shadow-lg pt-8 ">
 
  <ul className="flex flex-col gap-1">
    {side_links.filter(link=>link.roles.includes(user.role))
    .map((link) => (
      <li key={link.path}>
        <NavLink
          to={link.path}
          className={({ isActive }) =>
            `block px-3 py-2 rounded-md transition
             ${isActive
               ? "bg-blue-300 text-white py-4 font-medium"
               : "hover:bg-stone-300"}`
          }
        >
          {link.label}
        </NavLink>
      </li>
    ))}
  </ul>

</div>
}

export default Aside