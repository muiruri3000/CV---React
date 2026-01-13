
const certs = [
  {
    school:'Amazon Web Services',
    course:'AWS Certified Solutions Architect – Associate',
    year:'2025',
    qualifs:[
      "Validated expertise in designing secure, resilient, high-performing,and cost-optimized AWS architectures.",
    ]
  },
  {
    school:'Africa Nazarene University',
    course:' Bachelor’s Degree in Computer Science',
    year:'2018',
    qualifs:[
      "Studied software engineering fundamentals including data structures, algorithms, databases, and computer networks."
    ]
  },
  {
    school:'Kabaa High School',
    course:'Secondary Education',
    year:'2006',
    qualifs:[
      
    ]
  },
  // {
  //   school:'',
  //   course:'',
  //   year:'',
  //   qualifs:[

  //   ]
  // },
  // {
  //   school:'',
  //   course:'',
  //   year:'',
  //   qualifs:[

  //   ]
  // },
]



const Education = () => {

    return <section id="education" className="bg-slate-100">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-3xl font-extrabold tracking-tight">
          Education & Certifications
        </h2>

        <div className="mt-10 space-y-6">

          {/* Certifications */}
        
        {
          certs.map((cert, index)=>(
            
   
        
          <div className="mt-10 rounded-xl border border-slate-200 p-8 shadow-xl bg-white  border-l-4 border-l-green-400" key={index}>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
              <div>
                <h3 className="text-xl font-semibold">
                  {cert.course}
                </h3>
                <p className="mt-1 text-gray-600">
                  {cert.school}
                </p>
              </div>

              <p className="mt-4 sm:mt-0 text-sm text-gray-400">
                {cert.year}
              </p>
            </div>

            <ul className="mt-4 space-y-2 text-gray-600 list-disc list-inside">
              {
                cert.qualifs.map((item, index)=>(

              
              <li key={index}>
                {item}
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




export default Education