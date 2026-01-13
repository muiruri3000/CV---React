
const articles = [
  {
   title: 'Designing a Highly Available News Platform on AWS',
    body: 'A practical walkthrough of architectural decisions behind a cloud-native, read-heavy application, including availability, caching strategies, and fault tolerance.',
    tags: 'Architecture · AWS',
    slug: '/blog/ha-news-platform',
  },
  {
    title: 'OAuth 2.0 in Practice for Full-Stack Applications',
    body: 'Implementing OAuth 2.0 in a React and Django application, focusing on secure token handling, stateless authentication, and scaling considerations.',
    tags: 'Security · Authentication',
    slug: '/blog/oauth-fullstack',
  },
  {
     title: 'Caching Strategies for Read-Heavy Systems',
    body: 'Exploring CDN, application, and database caching techniques to improve performance and reduce backend load in distributed systems.',
    tags: 'Performance · Distributed Systems',
    slug: '/blog/caching-strategies',
  },

  
]




const Articles = () => {
    return   <section id="articles" className="bg-white">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-3xl font-extrabold tracking-tight">
          Writing & Technical Notes
        </h2>

        <div className="mt-10 space-y-6">

          {/* Article */}
          {
            articles.map((article, index)=>(



        
          <article className="
              border border-slate-200
              border-l-4 border-l-purple-600
              shadow-xl
              rounded-xl
              p-6"
              key={index}
              >
                        <h3 className="text-xl font-semibold">
              {article.title}
            </h3>

            <p className="mt-3 max-w-3xl text-gray-600">
             {article.body}
            </p>

            <div className="mt-4 flex items-center gap-6 text-sm">
              <span className="text-gray-500">
               {article.tags}
              </span>
              <a href={article.slug} className="font-medium hover:underline text-blue-500">
                Read → 
              </a>
            </div>
          </article>
    ))
          }
        
        </div>
      </div>
    </section>
}

export default Articles