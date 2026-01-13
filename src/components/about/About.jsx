const core_strengths = [
  {
    pillar:' AWS Architecture',
    description:'Well-Architected Framework, high availability, fault tolerance, and cost optimization.'
  },
    {
    pillar:'Cloud Infrastructure',
    description:' Infrastructure as Code, networking, IAM, and security best practices.'
  },
    {
    pillar:'DevOps & Automation',
    description:'CI/CD pipelines, containerized workloads, monitoring, and observability.'
  },
    {
    pillar:'Full-Stack Delivery',
    description:' Building, deploying, and operating production-ready web applications.'
  }
]
const who_i_am = [
  " I am a Cloud Engineer and Solutions Architect with hands-on experience designing and implementing AWS solutions aligned with the AWS Well-Architected Framework. I architect secure, resilient, high-performing, and cost-optimized systems using core AWS services, applying best practices for identity and access management, networking, and data protection.",
  "   I design scalable and highly available architectures by selecting appropriate compute, storage, database, and networking services on AWS. I have experience implementing fault-tolerant solutions using multi-AZ designs, load balancing, auto scaling, and managed services, while leveraging infrastructure as code, CI/CD pipelines, and automation to deploy and operate workloads reliably.",
  "With a strong full-stack and DevOps background, I bridge architecture and execution by building, deploying, and operating applications in AWS. I design solutions that balance technical requirements, security, and cost, while continuously improving performance, observability, and operational excellence across the system lifecycle."
]

const About = () => {
  return (
    <section id="about" className="bg-dusk-accent/20">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl text-center font-extrabold tracking-tight">
          About Me
        </h2>

        <div className="mt-10 grid gap-12 md:grid-cols-2">
          {/* Left column: Narrative */}
          <div className="space-y-6 text-gray-600 leading-relaxed">
        
          {
            who_i_am.map((para, idx)=>(

              
              <p key={idx}>
              {para}
              
            </p>
            ))
          }
          </div>

          {/* Right column: Key strengths */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
              Core Strengths
            </h3>

            <ul className="mt-6 space-y-4 text-gray-600">
  
          {
            core_strengths.map((strength, idx)=>(

          
              <li key={idx}>
                <span className="font-medium text-gray-900">
                  {strength.pillar}
                </span>
                <p className="text-sm">
                  {strength.description}
                </p>
              </li>

                ))
          }
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About