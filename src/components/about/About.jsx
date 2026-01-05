const About = () => {
  return (
    <section id="about" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl text-center font-extrabold tracking-tight">
          About Me
        </h2>

        <div className="mt-10 grid gap-12 md:grid-cols-2">
          {/* Left column: Narrative */}
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              I am a Cloud Engineer and Solutions Architect with hands-on
              experience designing and implementing AWS solutions aligned with
              the AWS Well-Architected Framework. I architect secure, resilient,
              high-performing, and cost-optimized systems using core AWS
              services, applying best practices for identity and access
              management, networking, and data protection.
            </p>

            <p>
              I design scalable and highly available architectures by selecting
              appropriate compute, storage, database, and networking services on
              AWS. I have experience implementing fault-tolerant solutions using
              multi-AZ designs, load balancing, auto scaling, and managed
              services, while leveraging infrastructure as code, CI/CD
              pipelines, and automation to deploy and operate workloads
              reliably.
            </p>

            <p>
              With a strong full-stack and DevOps background, I bridge
              architecture and execution by building, deploying, and operating
              applications in AWS. I design solutions that balance technical
              requirements, security, and cost, while continuously improving
              performance, observability, and operational excellence across the
              system lifecycle.
            </p>
          </div>

          {/* Right column: Key strengths */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
              Core Strengths
            </h3>

            <ul className="mt-6 space-y-4 text-gray-600">
              <li>
                <span className="font-medium text-gray-900">
                  AWS Architecture
                </span>
                <p className="text-sm">
                  Well-Architected Framework, high availability, fault tolerance,
                  and cost optimization.
                </p>
              </li>

              <li>
                <span className="font-medium text-gray-900">
                  Cloud Infrastructure
                </span>
                <p className="text-sm">
                  Infrastructure as Code, networking, IAM, and security best
                  practices.
                </p>
              </li>

              <li>
                <span className="font-medium text-gray-900">
                  DevOps & Automation
                </span>
                <p className="text-sm">
                  CI/CD pipelines, containerized workloads, monitoring, and
                  observability.
                </p>
              </li>

              <li>
                <span className="font-medium text-gray-900">
                  Full-Stack Delivery
                </span>
                <p className="text-sm">
                  Building, deploying, and operating production-ready web
                  applications.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About