import { SEO } from '../components/SEO';

export const Services = () => {
  return (
    <>
      <SEO 
        title="Exploration Services - Geological Surveys, Drilling & Consulting"
        description="Comprehensive geological exploration services including surveys, geophysical exploration, drilling, data analysis, and mining consulting across Alaska."
        keywords="geological surveys Alaska, geophysical exploration, drilling services Alaska, resource assessment, mining consulting, geochemical analysis"
        canonicalUrl="https://alaskamineralexploration.com/services"
      />
      
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-800 to-secondary-800 text-white section-padding">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive geological exploration and consulting services tailored to Alaska's unique mineral potential
          </p>
        </div>
      </section>
      
      {/* Geological Surveys */}
      <section id="geological" className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Core Service
              </div>
              <h2 className="text-4xl font-bold mb-6">Geological Surveys</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our field geologists conduct detailed mapping and sampling programs across Alaska's diverse geological terrains, from the Brooks Range to the Aleutian Islands.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-primary-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-bold">Regional Reconnaissance</h4>
                    <p className="text-gray-600">Large-scale surveys to identify prospective areas</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-primary-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-bold">Detailed Geological Mapping</h4>
                    <p className="text-gray-600">1:5,000 to 1:1,000 scale mapping with structural analysis</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-primary-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-bold">Rock & Soil Sampling</h4>
                    <p className="text-gray-600">Systematic sampling programs with QA/QC protocols</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-primary-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-bold">Alteration Studies</h4>
                    <p className="text-gray-600">Petrographic and mineralogical analysis of alteration zones</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <span className="text-8xl">🗺️</span>
                <p className="text-gray-600 mt-4 text-lg">Geological Survey Mapping</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Geophysical Exploration */}
      <section id="geophysical" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-2xl p-8 h-96 flex items-center justify-center order-2 md:order-1">
              <div className="text-center">
                <span className="text-8xl">📡</span>
                <p className="text-gray-600 mt-4 text-lg">Geophysical Instruments</p>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <div className="inline-block bg-secondary-100 text-secondary-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Advanced Technology
              </div>
              <h2 className="text-4xl font-bold mb-6">Geophysical Exploration</h2>
              <p className="text-lg text-gray-600 mb-6">
                State-of-the-art geophysical methods to detect subsurface mineralization and structural features.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-bold mb-2">Magnetic Surveys</h4>
                  <p className="text-sm text-gray-600">Ground and airborne magnetometry</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-bold mb-2">EM Surveys</h4>
                  <p className="text-sm text-gray-600">TDEM and FDEM systems</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-bold mb-2">IP Surveys</h4>
                  <p className="text-sm text-gray-600">Induced polarization for sulfides</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-bold mb-2">Gravity Surveys</h4>
                  <p className="text-sm text-gray-600">Density contrast mapping</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-bold mb-2">Seismic Surveys</h4>
                  <p className="text-sm text-gray-600">Subsurface structure imaging</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-bold mb-2">Ground Penetrating Radar</h4>
                  <p className="text-sm text-gray-600">Shallow subsurface features</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Drilling Services */}
      <section id="drilling" className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Drilling Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional drilling programs with experienced crews and comprehensive core handling
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-5xl mb-4">⚙️</div>
              <h3 className="text-2xl font-bold mb-4">Core Drilling</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Diamond core (NQ, HQ, PQ sizes)</li>
                <li>• Wireline and conventional</li>
                <li>• Up to 1,500m depth capability</li>
                <li>• Oriented core available</li>
                <li>• Professional logging</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-5xl mb-4">🔨</div>
              <h3 className="text-2xl font-bold mb-4">RC Drilling</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Reverse circulation drilling</li>
                <li>• Cost-effective sampling</li>
                <li>• Large-diameter holes</li>
                <li>• Rapid advancement rates</li>
                <li>• Quality sample recovery</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-5xl mb-4">📋</div>
              <h3 className="text-2xl font-bold mb-4">Support Services</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Core photography</li>
                <li>• Geotechnical logging</li>
                <li>• Sample preparation</li>
                <li>• Chain of custody</li>
                <li>• Core storage facilities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Data Analysis */}
      <section id="analysis" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Data Analysis & Interpretation</h2>
              <p className="text-lg text-gray-600 mb-6">
                Transform raw data into actionable insights using advanced analytical techniques and modeling software.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-xl mb-2">Geochemical Analysis</h4>
                  <p className="text-gray-600">Multi-element analysis, statistical evaluation, and anomaly detection using industry-standard methods.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-xl mb-2">3D Geological Modeling</h4>
                  <p className="text-gray-600">Leapfrog Geo, Surpac, and Micromine for comprehensive resource modeling and visualization.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-xl mb-2">Resource Estimation</h4>
                  <p className="text-gray-600">NI 43-101 compliant resource estimates using geostatistical methods (kriging, inverse distance).</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-xl mb-2">Geophysical Processing</h4>
                  <p className="text-gray-600">Advanced processing and interpretation of magnetic, EM, IP, and gravity data.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-lg p-6">
                <div className="space-y-4">
                  <div className="h-4 bg-primary-600 rounded" style={{width: '85%'}}></div>
                  <div className="h-4 bg-secondary-600 rounded" style={{width: '70%'}}></div>
                  <div className="h-4 bg-primary-500 rounded" style={{width: '95%'}}></div>
                  <div className="h-4 bg-secondary-500 rounded" style={{width: '60%'}}></div>
                  <div className="h-4 bg-primary-400 rounded" style={{width: '80%'}}></div>
                </div>
                <p className="text-center text-gray-600 mt-6">Data Visualization & Analysis</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Consulting */}
      <section id="consulting" className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Mining Consulting Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic guidance from exploration through development
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '📊', title: 'Feasibility Studies', desc: 'Preliminary and detailed economic assessments' },
              { icon: '📝', title: 'Permitting Support', desc: 'Regulatory compliance and permit applications' },
              { icon: '🎯', title: 'Project Management', desc: 'Full-cycle exploration program management' },
              { icon: '💡', title: 'Technical Due Diligence', desc: 'Independent reviews and audits' },
              { icon: '🌍', title: 'Environmental Baseline', desc: 'Environmental and social impact assessments' },
              { icon: '⚖️', title: 'NI 43-101 Reports', desc: 'Qualified Person technical reports' },
              { icon: '📈', title: 'Resource Development', desc: 'Strategic planning for resource expansion' },
              { icon: '🤝', title: 'Partnership Advisory', desc: 'Joint venture structuring and negotiations' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h4 className="font-bold mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Discuss Your Project</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our team is ready to provide expert guidance and customized solutions for your exploration needs.
          </p>
          <a href="/contact" className="btn-primary bg-white text-primary-800 hover:bg-gray-100 text-lg">
            Request a Consultation
          </a>
        </div>
      </section>
    </>
  );
};
