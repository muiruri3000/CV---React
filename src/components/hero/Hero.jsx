import { useEffect, useState } from "react";
const Hero = () => {

  const [content, setContent] = useState(null); 

  useEffect(()=>{
    const saved = localStorage.getItem("hero");
    if (saved){
      setContent(JSON.parse(saved));

    };
  },[])
  if (!content) return null

  return (
    <section className="bg-dusk-sectionLighter text-white from-gray-50 to-white" id="hero">
  <div className="mx-auto max-w-3xl px-6 py-28 text-center">
    <h1 className="text-5xl font-extrabold tracking-tight">
      Joseph Muiruri
    </h1>

     <h2 className="mt-4 text-xl font-semibold text-white">
          {/* Designing, Building, and Operating Cloud-native Solutions */}
        
        {content.heading}
        </h2>

        <p className="mt-2 text-sm font-medium text-white">
          {/* Full-stack Web Developer · DevOps · End-to-End System Design */}
       
       {content.subheading}
        </p>

        <p className="mt-6 max-w-3xl text-white leading-relaxed">
          {/* Cloud-focused engineer with a strong full-stack background, designing
          and delivering scalable, secure, and cost-efficient solutions.
          Experienced in architecting cloud infrastructure, building production
          web applications, and implementing CI/CD pipelines to take systems
          from idea to deployment. */}
          {
            content.ctaText
          }
        </p>

  </div>
</section>

  );
}

export default Hero