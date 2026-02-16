import { SEO } from '../components/SEO';

const resources = [
  {
    category: 'White Papers',
    items: [
      { title: 'Porphyry Exploration in Alaska: Best Practices', date: '2024', type: 'PDF' },
      { title: 'Geophysical Methods for VMS Detection in Permafrost', date: '2023', type: 'PDF' },
      { title: 'Modern Drilling Techniques for Remote Arctic Environments', date: '2023', type: 'PDF' },
    ]
  },
  {
    category: 'Industry Insights',
    items: [
      { title: 'Alaska Mining Outlook 2024: Trends and Opportunities', date: '2024', type: 'Report' },
      { title: 'Regulatory Updates: Exploration Permitting in Alaska', date: '2024', type: 'Guide' },
      { title: 'Mineral Commodity Price Forecasts Q1 2024', date: '2024', type: 'Analysis' },
    ]
  },
  {
    category: 'Technical Guides',
    items: [
      { title: 'Introduction to NI 43-101 Compliance', date: '2023', type: 'Guide' },
      { title: 'Core Logging Standards and Procedures', date: '2023', type: 'Manual' },
      { title: 'Quality Control in Geochemical Sampling', date: '2023', type: 'Guide' },
    ]
  }
];

const blogPosts = [
  {
    title: 'The Future of Critical Minerals Exploration in Alaska',
    excerpt: 'Alaska holds significant potential for critical minerals essential to the energy transition. We explore the opportunities and challenges ahead.',
    date: 'March 15, 2024',
    author: 'Dr. Sarah Mitchell',
    readTime: '8 min read',
    category: 'Industry Trends'
  },
  {
    title: 'Advances in AI-Powered Target Generation',
    excerpt: 'Machine learning is revolutionizing how we identify exploration targets. Learn about our latest applications of AI in geochemical data analysis.',
    date: 'March 8, 2024',
    author: 'Michael Chen, MSc',
    readTime: '6 min read',
    category: 'Technology'
  },
  {
    title: 'Case Study: Successful Porphyry Discovery Using Integrated Geophysics',
    excerpt: 'A detailed look at how combining multiple geophysical methods led to our recent copper-gold porphyry discovery in Interior Alaska.',
    date: 'February 28, 2024',
    author: 'James Thompson, P.Geo',
    readTime: '10 min read',
    category: 'Case Studies'
  },
  {
    title: 'Environmental Best Practices in Modern Exploration',
    excerpt: 'Our commitment to responsible exploration includes minimizing environmental impact while maintaining technical excellence.',
    date: 'February 20, 2024',
    author: 'Dr. Emily Rodriguez',
    readTime: '7 min read',
    category: 'Sustainability'
  }
];

export const Resources = () => {
  return (
    <>
      <SEO 
        title="Resources - White Papers, Industry Insights & Exploration Blog"
        description="Access technical white papers, industry insights, and expert articles on mineral exploration in Alaska. Stay informed about exploration technology, best practices, and industry trends."
        keywords="mining white papers, exploration guides, Alaska mining insights, geological resources, exploration blog"
        canonicalUrl="https://alaskamineralexploration.com/resources"
      />
      
      {/* Hero */}
      <section className="bg-gradient-to-br from-secondary-800 to-primary-800 text-white section-padding">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold mb-6">Resources & Insights</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Technical publications, industry analysis, and expert perspectives on mineral exploration
          </p>
        </div>
      </section>
      
      {/* White Papers & Guides */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Technical Resources</h2>
            <p className="text-xl text-gray-600">Download our white papers and technical guides</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {resources.map((section, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-2xl font-bold mb-6 pb-4 border-b">{section.category}</h3>
                <ul className="space-y-4">
                  {section.items.map((item, i) => (
                    <li key={i} className="group cursor-pointer">
                      <div className="flex items-start space-x-3 hover:bg-gray-50 p-3 rounded-lg transition-colors">
                        <svg className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                        <div className="flex-1">
                          <h4 className="font-semibold group-hover:text-primary-600 transition-colors mb-1">
                            {item.title}
                          </h4>
                          <div className="flex items-center space-x-3 text-sm text-gray-500">
                            <span>{item.date}</span>
                            <span>•</span>
                            <span className="bg-gray-100 px-2 py-0.5 rounded">{item.type}</span>
                          </div>
                        </div>
                        <svg className="w-5 h-5 text-gray-400 group-hover:text-primary-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Blog */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Latest Articles</h2>
            <p className="text-xl text-gray-600">Expert insights and industry perspectives</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post, idx) => (
              <article key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group cursor-pointer">
                <div className="bg-gradient-to-br from-primary-600 to-secondary-600 h-48 flex items-center justify-center">
                  <span className="text-6xl">📝</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary-600 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="text-sm">
                      <div className="font-semibold">{post.author}</div>
                      <div className="text-gray-500">{post.date}</div>
                    </div>
                    <span className="text-primary-600 font-semibold group-hover:gap-2 flex items-center transition-all">
                      Read More
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      
      {/* Industry Links */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12">Industry Resources</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Alaska Miners Association', type: 'Industry Association' },
              { name: 'Alaska DNR Mining', type: 'Regulatory' },
              { name: 'USGS Alaska Science Center', type: 'Research' },
              { name: 'Society of Economic Geologists', type: 'Professional Society' },
              { name: 'Association of Professional Geoscientists', type: 'Professional Society' },
              { name: 'CIM - Canadian Institute of Mining', type: 'Industry Association' },
              { name: 'PDAC', type: 'Industry Association' },
              { name: 'EPA Alaska Operations', type: 'Regulatory' },
            ].map((link, idx) => (
              <a
                key={idx}
                href="#"
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow border-l-4 border-primary-600 group"
              >
                <h4 className="font-bold mb-2 group-hover:text-primary-600 transition-colors">{link.name}</h4>
                <p className="text-sm text-gray-600">{link.type}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter Signup */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="text-4xl font-bold mb-4">Stay Informed</h2>
          <p className="text-xl mb-8">
            Subscribe to our newsletter for the latest exploration insights, technical updates, and industry news.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button type="submit" className="btn-primary bg-white text-primary-800 hover:bg-gray-100">
              Subscribe
            </button>
          </form>
          
          <p className="text-sm mt-4 text-gray-100">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </>
  );
};
