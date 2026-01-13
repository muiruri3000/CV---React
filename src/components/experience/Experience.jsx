const experience = [
  {
    title:'Technical Support Specialist',
    description:' Provided frontline technical support in a customer-facing environment, resolving issues efficiently while maintaining clear communication and service quality.', 
    duties:[
      "Provided frontline technical support in a customer-facing environment, resolving issues efficiently while maintaining clear communication and service quality.",
" Diagnosed and resolved technical issues under time pressure, balancing speed, accuracy, and customer impact.",
      " Documented issues, resolutions, and recurring patterns to improve operational efficiency. ",
      " Communicated complex technical problems and solutions clearly to non-technical users.",
      
    ],
    start_year:2019,
    end_year:2023

  },
    {
    title:'Property / Real Estate Management',
    description:'', 
    duties:[
      "Coordinated with multiple stakeholders, balancing competing priorities and expectations.",
      "Managed operational, administrative, and stakeholder-facing responsibilities within a real estate management environment.",
      "Made operational decisions under budget, time, and regulatory constraints.",
      "Took ownership of processes and outcomes, ensuring consistency and accountability."
      

    ],
    start_year:'2020',
    end_year:''
  },
]


const Experience = () =>{
    return   <section id="experience" className="bg-white">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-3xl font-extrabold tracking-tight">
          Professional Experience
        </h2>

        <div className="mt-12 space-y-10">
          {/* Role 1 */}



          {
            experience.map((xp, index)=>(

         
          <div key={index}>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <h3 className="text-lg font-semibold">
               {xp.title}
              </h3>
              <span className="mt-1 text-sm text-gray-500 sm:mt-0">
                {xp.start_year} - {xp.end_year?xp.end_year:' todate '}
              </span>
            </div>

            <p className="mt-3 max-w-3xl text-sm text-gray-600">
              {xp.description}
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-gray-600">
              {
                xp.duties.map((duty, index)=>(

              
              <li key={index}>
               {duty}
              </li>
             ))
              }
            </ul>
          </div>
   ))
          }
   
        </div>
      </div>
    </section>
}


export default Experience