const Skills = () => {
  return (
  <section id="skills" className="bg-gray-50">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl text-center font-extrabold tracking-tight">
          Skills
        </h2>

        <div className="mt-10 flex flex-wrap gap-12">
          {/* Cloud & AWS */}
          <div className="w-full sm:w-[45%] lg:w-[30%]">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
              Cloud & AWS
            </h3>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>AWS Well-Architected Framework</li>
              <li>EC2, Auto Scaling, ELB</li>
              <li>VPC, Subnets, Security Groups</li>
              <li>IAM, KMS, Secrets Manager</li>
              <li>S3, EBS, EFS</li>
              <li>RDS, DynamoDB</li>
            </ul>
          </div>

          {/* Architecture & Reliability */}
          <div className="w-full sm:w-[45%] lg:w-[30%]">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
              Architecture & Reliability
            </h3>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>High Availability & Fault Tolerance</li>
              <li>Multi-AZ & Disaster Recovery</li>
              <li>Scalability & Performance Optimization</li>
              <li>Cost Optimization</li>
              <li>Secure System Design</li>
            </ul>
          </div>

          {/* DevOps & Automation */}
          <div className="w-full sm:w-[45%] lg:w-[30%]">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
              DevOps & Automation
            </h3>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>Infrastructure as Code (Terraform, CloudFormation)</li>
              <li>Git (Github)</li>
              <li>CI/CD Pipelines</li>
              <li>Docker</li>
              <li>Kubernetes (EKS)</li>
              <li>Monitoring & Observability</li>
            </ul>
          </div>

          {/* Backend & APIs */}
          <div className="w-full sm:w-[45%] lg:w-[30%]">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
              Backend & APIs
            </h3>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>Node.js</li>
              <li>RESTful APIs</li>
              <li>Authentication & Authorization</li>
              <li>Microservices</li>
            </ul>
          </div>

          {/* Frontend */}
          <div className="w-full sm:w-[45%] lg:w-[30%]">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
              Frontend
            </h3>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>React</li>
              <li>Bootstrap</li>
              <li>Tailwind CSS</li>
              <li>Responsive UI</li>
            </ul>
          </div>

          {/* Practices */}
          <div className="w-full sm:w-[45%] lg:w-[30%]">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
              Practices
            </h3>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>System Design</li>
              <li>Documentation</li>
              <li>Security Best Practices</li>
              <li>Agile / Scrum</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Skills