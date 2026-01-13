const Projects = () => {
  return     <section id="projects" className="bg-slate-100">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-3xl font-extrabold tracking-tight">
          Featured Project
        </h2>

        <div className="mt-10 rounded-xl border-2 border-dusk-accentHover bg-white p-8 shadow-xl">
          <h3 className="text-2xl font-semibold">
            Cloud-Native News Platform
          </h3>

          <p className="mt-3 max-w-3xl text-gray-600">
            End-to-end full-stack application built with React, Django, and AWS,
            delivering secure, personalized content at scale.
          </p>

          <ul className="mt-6 space-y-3 text-gray-600 list-disc list-inside">
            <li>
              Built a component-driven React frontend optimized for
              content-heavy user experiences.
            </li>
            <li>
              Designed and implemented REST APIs using Django to serve articles,
              user data, and personalization logic.
            </li>
            <li>
              Implemented OAuth 2.0 authentication with role-based access control
              for protected content.
            </li>
            <li>
              Developed content ranking and filtering logic based on recency and
              engagement signals.
            </li>
            <li>
              Deployed and operated the platform on AWS with automated CI/CD and
              edge caching for low-latency delivery.
            </li>
            <li>
              Improved application scalability and availability by designing for
              stateless services and horizontal scaling.
            </li>
            <li>
              Reduced operational overhead and deployment risk through
              automation and managed cloud services.
            </li>
          </ul>

          <div className="mt-6 flex gap-6 text-sm font-medium">
            <a href="/demo" className="hover:underline text-blue-500">
              Live demo →
            </a>
            <a href="/repo" className="hover:underline text-blue-500">
              Source →
            </a>
          </div>
        </div>
      </div>
    </section>
}


export default Projects