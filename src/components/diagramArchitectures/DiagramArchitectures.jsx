const project_articles = [
  {
    title:'Scalable Web Application',
    image:'Architecture Diagram',
    description:' Highly available web application serving global users with low latency and automated scaling.',
    services:[
      'CloudFront · ALB · Auto Scaling · EC2 · RDS'
    ],
    links:[
            {
        label:'Case Study',
        href:'diagrams/serverless-api'
      },
      {
        label:'View Diagram',
        href:'diagrams/serverless-api'
      }
    ]
  },
    {
    title:' CI/CD & Infrastructure Platform',
    image:'Architecture Diagram',
    description:' Automated deployment pipeline and infrastructure platform for repeatable and reliable releases.',
    services:[
       'Git · Terraform · GitHub Actions · AWS'
    ],
    links:[
      {
        label:'Case Study',
        href:'diagrams/serverless-api'
      },
      {
        label:'View Diagram',
        href:'diagrams/serverless-api'
      }
    ]
  },
    {
    title:'Serverless API Platform',
    image:'Architecture Diagram',
    description:'     Event-driven, serverless backend designed for cost efficiency and operational simplicity.',
    services:[
      ' API Gateway · Lambda · DynamoDB · IAM'
    ],
    links:[
         {
        label:'Case Study',
        href:'diagrams/serverless-api'
      },
      {
        label:'View Diagram',
        href:'diagrams/serverless-api'
      }
    ]
  },
]

const DiagramArchitectures = () => {
  

    return   <section id="architecture" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-extrabold tracking-tight">
          Architecture Portfolio
        </h2>

        <p className="mt-4 max-w-2xl textpurple-400">
          A selection of cloud architectures I’ve designed and implemented,
          documented using diagrams-first system design.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-8">


     {
      project_articles.map((project, idx)=>(


          <div className="w-full sm:w-[48%] lg:w-[31%] rounded-xl  bg-white p-6 shadow-xl rounded-xl   border border-slate-200
  border-l-4 border-l-purple-400
  rounded-xl" key={idx}>
            <div className="h-40 rounded-lg bg-gray-100 flex items-center justify-center text-sm text-gray-500">
              {project.image}
            </div>

            <h3 className="mt-6 text-lg font-semibold">
              {project.title}
            </h3>

            <p className="mt-2 text-sm textpurple-400">
            {project.description}
            </p>

          
              <ul>

             {project.services.map((service, idx)=>(
              <li key={idx}>
                {service}

              </li> 
            ))}
            </ul>
           

            <div className="mt-6 flex gap-4 text-sm font-medium">
         
         <ul className="flex gap-6 ">

          {
            project.links.map((link, idx)=>(
              <li key={idx}>

              <a href={link.href} className="text-black hover:underline ">
              {link.label}
              </a>
          </li>
            
          ))
        }
         </ul>
                
         
            </div>
          </div>
                ))
     }
        </div>
      </div>
    </section>
}


export default DiagramArchitectures