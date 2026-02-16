import { SEO } from '../components/SEO';

export const Technology = () => {
  return (
    <>
      <SEO 
        title="Advanced Exploration Technology & Equipment"
        description="State-of-the-art geological exploration technology including geophysical instruments, drilling equipment, analytical tools, and 3D modeling software used in Alaska mineral exploration."
        keywords="exploration technology, geophysical equipment, 3D geological modeling, drilling technology, remote sensing Alaska"
        canonicalUrl="https://alaskamineralexploration.com/technology"
      />
      
      {/* Hero */}
      <section className="bg-gradient-to-br from-secondary-800 to-primary-800 text-white section-padding">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold mb-6">Technology & Innovation</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Leveraging cutting-edge technology to deliver superior exploration results in Alaska's challenging environments
          </p>
        </div>
      </section>
      
      {/* Equipment Overview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Equipment Fleet</h2>
            <p className="text-xl text-gray-600">Industry-leading instruments maintained to the highest standards</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: 'Geophysical Instruments',
                icon: '📡',
                items: [
                  'Geometrics G-858 Magnetometer',
                  'Geonics EM31 & EM34 Systems',
                  'Iris Syscal Pro Switch IP System',
                  'Scintrex CG-6 Autograv',
                  'MALÅ Ground Penetrating Radar',
                  'SmartMag Cesium Magnetometer'
                ]
              },
              {
                category: 'Drilling Equipment',
                icon: '⚙️',
                items: [
                  'Boart Longyear LF-90 Diamond Drill',
                  'Christensen CS14 Core Drill',
                  'Reverse Circulation Rigs',
                  'Wireline Systems',
                  'Core Orientation Tools',
                  'Downhole Survey Equipment'
                ]
              },
              {
                category: 'Field Equipment',
                icon: '🎒',
                items: [
                  'Trimble GPS (cm-level accuracy)',
                  'Portable XRF Analyzers',
                  'Brunton Compasses & Clinometers',
                  'Rock Hammers & Sampling Tools',
                  'Field Spectrometers',
                  'Satellite Communication Devices'
                ]
              },
              {
                category: 'Laboratory Equipment',
                icon: '🔬',
                items: [
                  'ICP-MS for Multi-Element Analysis',
                  'XRF Spectrometer',
                  'Petrographic Microscopes',
                  'Sample Preparation Equipment',
                  'Fire Assay Capabilities',
                  'Quality Control Standards'
                ]
              },
              {
                category: 'Remote Sensing',
                icon: '🛰️',
                items: [
                  'DJI Matrice 300 RTK Drone',
                  'Multispectral & Hyperspectral Cameras',
                  'LiDAR Systems',
                  'Satellite Imagery (WorldView, Sentinel)',
                  'Photogrammetry Software',
                  'Structure-from-Motion Processing'
                ]
              },
              {
                category: 'Software & Computing',
                icon: '💻',
                items: [
                  'Leapfrog Geo & Edge',
                  'Surpac & Micromine',
                  'Geosoft Oasis montaj',
                  'ArcGIS Pro',
                  'ioGAS Geochemical Analysis',
                  'High-Performance Workstations'
                ]
              },
            ].map((tech, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-5xl mb-4">{tech.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{tech.category}</h3>
                <ul className="space-y-2">
                  {tech.items.map((item, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <svg className="w-5 h-5 text-primary-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Methods */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12">Exploration Methods</h2>
          
          <div className="space-y-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4">Airborne Geophysics</h3>
                <p className="text-lg text-gray-600 mb-4">
                  Helicopter-borne and fixed-wing geophysical surveys covering thousands of square kilometers efficiently.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-secondary-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    <div>
                      <span className="font-semibold">Aeromagnetic Surveys:</span> High-resolution magnetic data for structural and lithological mapping
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-secondary-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    <div>
                      <span className="font-semibold">AEM Systems:</span> Time and frequency domain electromagnetic surveys for conductors
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-secondary-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    <div>
                      <span className="font-semibold">Radiometric Surveys:</span> Gamma-ray spectrometry for lithological discrimination
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-2xl p-8 h-80 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-8xl">🚁</span>
                  <p className="text-gray-700 mt-4 text-lg font-semibold">Airborne Survey Systems</p>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl p-8 h-80 flex items-center justify-center order-2 md:order-1">
                <div className="text-center">
                  <span className="text-8xl">🗺️</span>
                  <p className="text-gray-700 mt-4 text-lg font-semibold">3D Geological Models</p>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-3xl font-bold mb-4">3D Modeling & Visualization</h3>
                <p className="text-lg text-gray-600 mb-4">
                  Advanced geological modeling software for resource estimation and mine planning.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-primary-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                    <div>
                      <span className="font-semibold">Implicit Modeling:</span> Rapid geological interpretation using Leapfrog Geo
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-primary-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                    <div>
                      <span className="font-semibold">Geostatistics:</span> Kriging and variography for resource estimation
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-primary-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                    <div>
                      <span className="font-semibold">Block Modeling:</span> Grade interpolation and pit optimization
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Innovation */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12">Innovation & R&D</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-xl">
              <div className="text-5xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold mb-3">Machine Learning</h3>
              <p className="text-gray-700">
                Applying AI and machine learning algorithms to geochemical data interpretation and target generation for improved exploration efficiency.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 p-8 rounded-xl">
              <div className="text-5xl mb-4">🌐</div>
              <h3 className="text-2xl font-bold mb-3">Digital Twin Technology</h3>
              <p className="text-gray-700">
                Creating virtual replicas of exploration projects for real-time monitoring, scenario testing, and optimization throughout the project lifecycle.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-xl">
              <div className="text-5xl mb-4">🔋</div>
              <h3 className="text-2xl font-bold mb-3">Sustainable Practices</h3>
              <p className="text-gray-700">
                Implementing low-impact exploration methods, renewable energy solutions for field camps, and environmental monitoring technologies.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Technical Capabilities */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12">Technical Capabilities</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Data Processing & QA/QC</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-bold">Data Validation</h4>
                    <p className="text-sm text-gray-600">Rigorous quality control protocols ensuring data integrity</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-bold">Database Management</h4>
                    <p className="text-sm text-gray-600">Comprehensive SQL databases with full traceability</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-bold">Advanced Analytics</h4>
                    <p className="text-sm text-gray-600">Statistical analysis and multivariate geochemistry</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">4</div>
                  <div>
                    <h4 className="font-bold">Reporting</h4>
                    <p className="text-sm text-gray-600">NI 43-101 compliant technical reports and documentation</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Safety & Environmental</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-secondary-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-bold">Safety Systems</h4>
                    <p className="text-sm text-gray-600">Comprehensive health and safety management protocols</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-secondary-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-bold">Environmental Monitoring</h4>
                    <p className="text-sm text-gray-600">Real-time monitoring of water quality and air emissions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-secondary-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-bold">Reclamation Planning</h4>
                    <p className="text-sm text-gray-600">Progressive reclamation and site restoration</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-secondary-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">4</div>
                  <div>
                    <h4 className="font-bold">Compliance</h4>
                    <p className="text-sm text-gray-600">Full regulatory compliance and stakeholder engagement</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
