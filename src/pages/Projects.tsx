import { SEO } from '../components/SEO';

const projects = [
  {
    title: 'Copper Ridge Porphyry Discovery',
    location: 'Interior Alaska',
    year: '2022-2023',
    type: 'Copper-Gold Porphyry',
    description: 'Comprehensive exploration program including airborne geophysics, geological mapping, and diamond drilling led to the discovery of a significant copper-gold porphyry system.',
    highlights: [
      'Identified 2.5km x 1.8km geochemical anomaly',
      'Drill intercepts up to 350m @ 0.45% Cu, 0.3 g/t Au',
      'Alteration zoning consistent with porphyry model',
      'Resource estimation ongoing'
    ],
    services: ['Geophysical Survey', 'Geological Mapping', 'Diamond Drilling', '3D Modeling']
  },
  {
    title: 'Arctic Gold Belt Regional Assessment',
    location: 'Brooks Range',
    year: '2021-2022',
    type: 'Orogenic Gold',
    description: 'Multi-season regional exploration program covering 450 km² identified multiple high-priority gold targets in underexplored structural corridors.',
    highlights: [
      'Helicopter-borne magnetic and EM surveys',
      'Systematic soil and rock sampling (3,500+ samples)',
      'Discovered 8 high-priority gold targets',
      'Follow-up drilling recommended'
    ],
    services: ['Airborne Geophysics', 'Geochemical Surveys', 'Structural Analysis', 'Target Generation']
  },
  {
    title: 'Zinc-Lead VMS Expansion',
    location: 'Southeast Alaska',
    year: '2020-2021',
    type: 'Volcanogenic Massive Sulfide',
    description: 'Drill program successfully extended known VMS deposit by 400m along strike, significantly increasing the resource potential of the property.',
    highlights: [
      'Completed 12,000m diamond drilling program',
      'Multiple high-grade intercepts (>10% Zn+Pb)',
      'Updated NI 43-101 resource estimate',
      'Advanced to pre-feasibility stage'
    ],
    services: ['Diamond Drilling', 'Downhole Geophysics', 'Resource Modeling', 'Technical Reporting']
  },
  {
    title: 'Platinum Group Element Exploration',
    location: 'Southwestern Alaska',
    year: '2019-2020',
    type: 'PGE-Ni-Cu',
    description: 'First-pass exploration of ultramafic intrusive complex identified encouraging PGE mineralization with follow-up potential.',
    highlights: [
      'Ground magnetic and EM surveys',
      'Petrographic and geochemical studies',
      'PGE values up to 1.2 g/t Pt+Pd+Au',
      'Chromite layers mapped over 5km strike length'
    ],
    services: ['Ground Geophysics', 'Petrography', 'Geochemical Analysis', 'Geological Mapping']
  },
];

export const Projects = () => {
  return (
    <>
      <SEO 
        title="Exploration Projects Portfolio - Case Studies & Success Stories"
        description="Explore our portfolio of successful mineral exploration projects across Alaska including copper-gold porphyry discoveries, VMS deposits, and orogenic gold systems."
        keywords="Alaska mineral exploration projects, mining case studies, copper discovery Alaska, gold exploration, VMS deposits"
        canonicalUrl="https://alaskamineralexploration.com/projects"
      />
      
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-800 to-secondary-800 text-white section-padding">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold mb-6">Our Projects</h1>
          <p className="text-xl max-w-3xl mx-auto">
            A proven track record of successful exploration programs across Alaska's diverse geological terrains
          </p>
        </div>
      </section>
      
      {/* Stats */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-primary-600 mb-2">250+</div>
              <div className="text-gray-700 font-semibold">Projects Completed</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-secondary-600 mb-2">15+</div>
              <div className="text-gray-700 font-semibold">Major Discoveries</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary-600 mb-2">500K+</div>
              <div className="text-gray-700 font-semibold">Meters Drilled</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-secondary-600 mb-2">100K+</div>
              <div className="text-gray-700 font-semibold">Samples Analyzed</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Projects */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured Case Studies</h2>
            <p className="text-xl text-gray-600">Recent successful exploration programs demonstrating our technical expertise</p>
          </div>
          
          <div className="space-y-12">
            {projects.map((project, idx) => (
              <div key={idx} className={`grid md:grid-cols-2 gap-8 items-start ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className={idx % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="inline-block bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-semibold mb-3">
                    {project.type}
                  </div>
                  <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
                  <div className="flex items-center space-x-4 text-gray-600 mb-4">
                    <span className="flex items-center space-x-1">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{project.location}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>{project.year}</span>
                    </span>
                  </div>
                  
                  <p className="text-gray-700 mb-6">{project.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-bold mb-3">Key Highlights:</h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-gray-700">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-bold mb-3">Services Provided:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.services.map((service, i) => (
                        <span key={i} className="bg-secondary-100 text-secondary-800 px-3 py-1 rounded-full text-sm">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className={`bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 h-96 flex items-center justify-center ${idx % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div className="text-center">
                    <div className="text-8xl mb-4">
                      {idx === 0 && '⛏️'}
                      {idx === 1 && '🏔️'}
                      {idx === 2 && '💎'}
                      {idx === 3 && '🗿'}
                    </div>
                    <p className="text-gray-600 text-lg font-semibold">{project.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Deposit Types */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12">Deposit Types Experience</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { type: 'Porphyry Cu-Au-Mo', count: '45+ projects' },
              { type: 'Orogenic Gold', count: '38+ projects' },
              { type: 'VMS (Zn-Pb-Cu-Ag-Au)', count: '28+ projects' },
              { type: 'Intrusion-Related Gold', count: '22+ projects' },
              { type: 'Epithermal Au-Ag', count: '18+ projects' },
              { type: 'PGE-Ni-Cu', count: '12+ projects' },
              { type: 'Skarn (Fe-Cu-Au)', count: '15+ projects' },
              { type: 'SEDEX (Zn-Pb-Ag)', count: '10+ projects' },
              { type: 'Placer Gold', count: '25+ projects' },
            ].map((deposit, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-bold text-lg mb-2">{deposit.type}</h4>
                <p className="text-primary-600 font-semibold">{deposit.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">Start Your Next Discovery</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let our experienced team guide your exploration program from concept to discovery.
          </p>
          <a href="/contact" className="btn-primary bg-white text-primary-800 hover:bg-gray-100 text-lg">
            Discuss Your Project
          </a>
        </div>
      </section>
    </>
  );
};
