const Contact = () => {
    return  <section id="contact" className="bg-slate-100">
      <div className="mx-auto max-w-5xl px-6 py-20 ">
        <h2 className="text-3xl font-extrabold tracking-tight">
          Contact
        </h2>

        <div className="mt-10 rounded-xl border border-slate-200 p-8 shadow-xl bg-white  border-l-4 border-l-blue-500">
          <p className="max-w-2xl text-gray-600">
            I’m open to Cloud Engineer, Solutions Architect, and Full-Stack
            opportunities. Feel free to reach out to discuss roles, projects,
            or collaboration.
          </p>

          <div className="mt-8 space-y-4 text-sm text-gray-700">
            <div>
              <span className="font-medium">Email:</span>{" "}
              <a
                href="mailto:your.email@example.com"
                className="hover:underline"
              >
                your.email@example.com
              </a>
            </div>

            <div>
              <span className="font-medium">LinkedIn:</span>{" "}
              <a
                href="https://linkedin.com/in/your-handle"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                linkedin.com/in/your-handle
              </a>
            </div>

            <div>
              <span className="font-medium">GitHub:</span>{" "}
              <a
                href="https://github.com/your-handle"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                github.com/your-handle
              </a>
            </div>

            <div>
              <span className="font-medium">Location:</span>{" "}
              Open to remote and hybrid roles
            </div>

            <div>
              <span className="font-medium">Resume:</span>{" "}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                Download PDF →
              </a>
            </div>
          </div>

          <p className="mt-10 text-sm text-blue-500">
            Let’s build secure, scalable, and reliable systems.
          </p>
        </div>
      </div>
    </section>
}


export default Contact