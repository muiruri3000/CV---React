const top_skill = [
  {
    id:1,
    pillar:'Cloud & AWS',
    top_skills:[
     
        'EC2, Auto Scaling, ELB',
        'VPC, Subnets, Security Groups',
        'IAM, KMS, Secrets Manager',
         'S3, EBS, EFS',
        'RDS, DynamoDB'
    ]
  },
  {
    id:2,
    pillar:' Architecture & Reliability',
    top_skills:[
      'High Availability & Fault Tolerance',
      'Multi-AZ & Disaster Recovery',
      'Scalability & Performance Optimization',
      'Cost Optimization',
      'Secure System Design'
    ]
  },
  {
    id:3,
    pillar:'DevOps & Automation',
    top_skills:[
      'Infrastructure as Code (Terraform, CloudFormation)',
      'Git (Github)',
      'CI/CD Pipelines',
      'Docker',
      'Kubernetes (EKS)',
      'Monitoring & Observability'
    ]
  },
  {
    id:4,
    pillar:' Backend & APIs',
    top_skills:[
      'Node.js',
      'RESTful APIs',
      'Authentication & Authorization',
      'Microservices'

    ]
  },
  {
    id:5,
    pillar:'Practices',
    top_skills:[
          'System Design',
              'Documentation',
              'Security Best Practices'
              
    ]
  }
]
const Skills = () => {
  return (
  <section id="skills" className="bg-gray-50">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-extrabold tracking-tight">
          Skills
        </h2>

        <div className="mt-10 flex flex-wrap gap-12">
          
          
    

            {
              top_skill.map((skills, idx)=>(
          <div className="w-full sm:w-[45%] lg:w-[30%]" key={skills.id}>

              
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500" >
              {skills.pillar}
            </h3>
            <ul className="mt-4 space-y-2 text-gray-700">
              {
                skills.top_skills.map((top, idx)=>(

                
              <li key={idx}>{top}</li>
            
            
            ))
              }
              </ul>

          </div>
            ))
            }

   

  
        </div>
      </div>
    </section>
  );
}
export default Skills