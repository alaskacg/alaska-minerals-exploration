import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <>
      <SEO 
        title="Professional Geological Exploration & Consulting Services"
        description="Alaska Minerals Exploration provides expert geological surveys, geophysical exploration, drilling services, and mining consulting across Alaska. 30+ years of experience in resource assessment."
        canonicalUrl="https://alaskamineralexploration.com/"
      />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 text-white">
        <div className="container-custom section-padding">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">Discover Alaska's Mineral Wealth</h1>
              <p className="text-xl mb-8 text-gray-100">
                Advanced geological exploration and consulting services backed by 30+ years of Alaskan field experience and cutting-edge technology.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary bg-white text-primary-800 hover:bg-gray-100">
                  Request a Quote
                </Link>
                <Link to="/services" className="btn-secondary border-2 border-white bg-transparent hover:bg-white hover:text-primary-800">
                  Our Services
                </Link>
              </div>
              
              <div className="grid grid-cols-3 gap-6 mt-12">
                <div>
                  <div className="text-3xl font-bold">250+</div>
                  <div className="text-sm text-gray-200">Projects Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">30+</div>
                  <div className="text-sm text-gray-200">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">15+</div>
                  <div className="text-sm text-gray-200">Major Discoveries</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-white">
                    <svg className="w-8 h-8 text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-lg">Licensed & Certified Geologists</span>
                  </div>
                  <div className="flex items-center space-x-3 text-white">
                    <svg className="w-8 h-8 text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-lg">State-of-the-Art Equipment</span>
                  </div>
                  <div className="flex items-center space-x-3 text-white">
                    <svg className="w-8 h-8 text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-lg">Comprehensive Data Analysis</span>
                  </div>
                  <div className="flex items-center space-x-3 text-white">
                    <svg className="w-8 h-8 text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-lg">Environmental Compliance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Overview */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Comprehensive Exploration Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial reconnaissance to resource development, we provide end-to-end geological expertise
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Geological Surveys',
                icon: '🗺️',
                description: 'Detailed mapping, sampling, and structural analysis of mineral deposits across Alaska\'s diverse terrains.',
              },
              {
                title: 'Geophysical Exploration',
                icon: '📡',
                description: 'Advanced magnetic, electromagnetic, and seismic surveys to identify subsurface mineralization.',
              },
              {
                title: 'Drilling Services',
                icon: '⚙️',
                description: 'Core and reverse circulation drilling programs with meticulous sample collection and logging.',
              },
              {
                title: 'Data Analysis',
                icon: '📊',
                description: 'Sophisticated geochemical analysis, 3D modeling, and resource estimation using industry-leading software.',
              },
              {
                title: 'Mining Consulting',
                icon: '💼',
                description: 'Strategic guidance on project feasibility, permitting, and development from exploration to production.',
              },
              {
                title: 'Remote Sensing',
                icon: '🛰️',
                description: 'Satellite imagery analysis and aerial surveying for large-scale regional assessments.',
              },
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link to="/services" className="text-primary-600 font-semibold hover:text-primary-700">
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Technology Showcase */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Cutting-Edge Technology</h2>
              <p className="text-lg text-gray-600 mb-6">
                We invest in the latest exploration technologies to deliver accurate, reliable results in Alaska's challenging environments.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🔬</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Advanced Laboratory Analysis</h4>
                    <p className="text-gray-600">ICP-MS, XRF, and fire assay capabilities for comprehensive geochemical analysis</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🚁</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Helicopter & Drone Surveys</h4>
                    <p className="text-gray-600">Access remote sites and conduct high-resolution aerial geophysical surveys</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">💻</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">3D Geological Modeling</h4>
                    <p className="text-gray-600">Leapfrog, Surpac, and custom software for resource visualization and estimation</p>
                  </div>
                </div>
              </div>
              
              <Link to="/technology" className="btn-primary mt-8 inline-block">
                Explore Our Technology
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <svg className="w-32 h-32 mx-auto mb-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
                <p className="text-gray-600 text-lg">Advanced Geophysical Equipment</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Client Testimonials */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12">Client Testimonials</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Alaska Minerals Exploration's geological expertise was instrumental in our project's success. Their detailed surveys and analysis exceeded our expectations.",
                author: "Sarah Johnson",
                position: "VP Exploration, Northern Mining Corp",
              },
              {
                quote: "Professional, thorough, and reliable. Their team's knowledge of Alaskan geology is unmatched. We've worked with them on multiple projects.",
                author: "Michael Chen",
                position: "Project Manager, Arctic Resources Ltd",
              },
              {
                quote: "The data quality and technical reports provided by AME gave us the confidence to move forward with development. Highly recommended.",
                author: "David Thompson",
                position: "CEO, Frontier Exploration Inc",
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-primary-600 text-4xl mb-4">"</div>
                <p className="text-gray-700 mb-6 italic">{testimonial.quote}</p>
                <div className="border-t pt-4">
                  <div className="font-bold">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.position}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Explore Your Next Discovery?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact our team today to discuss your exploration needs and receive a customized project proposal.
          </p>
          <Link to="/contact" className="btn-primary bg-white text-primary-800 hover:bg-gray-100 text-lg">
            Get Started Today
          </Link>
        </div>
      </section>
    </>
  );
};
