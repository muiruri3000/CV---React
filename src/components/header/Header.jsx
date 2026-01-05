import { useState, useEffect } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);


    useEffect(()=>{
        const handleResize = () => {
            if (window.innerWidth >= 768){
                setOpen(false)
            }
        };

        window.addEventListener("resize", handleResize)
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    },[])


  return (
    <header className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-center px-6 py-4">
   

        {/* Nav */}
        <nav
          className={`
            ${open ? "flex" : "hidden"}
            flex-col md:flex-row gap-6 text-sm font-medium text-gray-800
            md:flex
          `}
        >
          <a href="#" onClick={() => setOpen(false)} className="hover:underline">Hero</a>
          <a href="#" onClick={() => setOpen(false)} className="hover:underline">About</a>
          <a href="#" onClick={() => setOpen(false)} className="hover:underline">Skills</a>
          <a href="#" onClick={() => setOpen(false)} className="hover:underline">Experience / Projects</a>
          <a href="#" onClick={() => setOpen(false)} className="hover:underline">Education</a>
          <a href="#" onClick={() => setOpen(false)} className="hover:underline">Blog</a>
          <a href="#" onClick={() => setOpen(false)} className="hover:underline">Contact</a>
        </nav>

        {/* Toggle button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden cursor-pointer inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:bg-gray-100"
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>
    </header>
  );
};

export default Header;
