import { SEO } from '../components/SEO';

const team = [
  {
    name: 'Dr. Robert Anderson',
    position: 'President & Chief Geologist',
    credentials: 'PhD Geology, P.Geo',
    experience: '35 years experience in Alaska mineral exploration',
    specialties: 'Porphyry systems, structural geology, project management'
  },
  {
    name: 'Sarah Mitchell, MSc',
    position: 'VP Exploration',
    credentials: 'MSc Geophysics, P.Geo',
    experience: '22 years geophysical expertise',
    specialties: 'Airborne & ground geophysics, data interpretation, target generation'
  },
  {
    name: 'James Thompson',
    position: 'Senior Geologist',
    credentials: 'BSc Geology, P.Geo',
    experience: '18 years field geology in Alaska',
    specialties: 'VMS deposits, geological mapping, drill program design'
  },
  {
    name: 'Dr. Emily Rodriguez',
    position: 'Chief Geochemist',
    credentials: 'PhD Geochemistry',
    experience: '15 years analytical expertise',
    specialties: 'Multi-element analysis, quality control, data analytics'
  },
  {
    name: 'Michael Chen',
    position: 'Director of Technology',
    credentials: 'MSc Geological Engineering',
    experience: '20 years in resource modeling',
    specialties: '3D modeling, geostatistics, machine learning applications'
  },
  {
    name: 'David Martinez',
    position: 'Chief Driller',
    credentials: 'Certified Driller',
    experience: '28 years drilling experience',
    specialties: 'Diamond drilling, Arctic operations, crew management'
  }
];

const certifications = [
  { name: 'Professional Geoscientist Licenses', count: '12 licensed P.Geos on staff' },
  { name: 'ISO 9001:2015 Certified', desc: 'Quality Management System' },
  { name: 'Safety Certifications', desc: 'MSHA, First Aid, Wilderness Safety' },
  { name: 'Environmental Compliance', desc: 'EPA and Alaska DNR certified' },
];

export const About = () => {
  return (
    <>
      <SEO 
        title="About Us - Expert Geological Team & Company History"
        description="Alaska Minerals Exploration: 30+ years of geological expertise. Meet our team of licensed geologists, learn about our certifications, and discover our commitment to excellence."
        keywords="geological consulting team Alaska, professional geologists, mining expertise, exploration company Alaska"
        canonicalUrl="https://alaskamineralexploration.com/about"
      />
      
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-800 to-secondary-800 text-white section-padding">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold mb-6">About Alaska Minerals Exploration</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Three decades of geological excellence, driven by expertise, innovation, and integrity
          </p>
        </div>
      </section>
      
      {/* Company Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  Founded in 1995, Alaska Minerals Exploration has grown from a small geological consulting firm to one of Alaska's most respected exploration service providers.
                </p>
                <p>
                  Our journey began with a single field crew and a commitment to technical excellence. Today, we operate multiple field teams across Alaska, supported by state-of-the-art analytical facilities and a talented team of geoscientists.
                </p>
                <p>
                  Over 30 years, we've contributed to major discoveries, helped advance numerous projects from grassroots exploration to resource development, and built lasting relationships with clients ranging from junior explorers to major mining companies.
                </p>
                <p>
                  Our success stems from understanding Alaska's unique geological potential and the challenges of operating in remote Arctic environments. We combine decades of local knowledge with cutting-edge technology to deliver results that exceed expectations.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl p-8">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="text-4xl font-bold text-primary-600 mb-2">1995</div>
                  <p className="text-gray-700">Founded in Anchorage</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="text-4xl font-bold text-secondary-600 mb-2">250+</div>
                  <p className="text-gray-700">Projects Completed</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="text-4xl font-bold text-primary-600 mb-2">15+</div>
                  <p className="text-gray-700">Major Discoveries</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="text-4xl font-bold text-secondary-600 mb-2">45+</div>
                  <p className="text-gray-700">Team Members</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-xl text-gray-600">Experienced professionals dedicated to exploration excellence</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-br from-primary-600 to-secondary-600 h-48 flex items-center justify-center">
                  <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-20 h-20 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary-600 font-semibold mb-2">{member.position}</p>
                  <p className="text-sm text-gray-600 mb-3">{member.credentials}</p>
                  <p className="text-sm text-gray-700 mb-3">{member.experience}</p>
                  <div className="pt-3 border-t">
                    <p className="text-sm text-gray-600"><span className="font-semibold">Specialties:</span> {member.specialties}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Certifications */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Certifications & Accreditations</h2>
            <p className="text-xl text-gray-600">Committed to the highest professional standards</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-primary-600">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{cert.name}</h3>
                    <p className="text-gray-600">{cert.count || cert.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide our work</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Technical Excellence</h3>
              <p className="text-gray-600">
                We maintain the highest technical standards in all our work, from field mapping to resource estimation.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-secondary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🤝</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Client Partnership</h3>
              <p className="text-gray-600">
                Your success is our success. We work collaboratively to understand and achieve your exploration goals.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🌲</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Environmental Stewardship</h3>
              <p className="text-gray-600">
                Responsible exploration with minimal environmental impact and full regulatory compliance.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-secondary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🛡️</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Safety First</h3>
              <p className="text-gray-600">
                The safety of our team and partners is paramount in all field operations and project planning.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">💡</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-600">
                Continuous improvement through adoption of new technologies and analytical methods.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-secondary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">✨</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Integrity</h3>
              <p className="text-gray-600">
                Honest reporting, transparent communication, and ethical business practices in all relationships.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Partnerships */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Industry Partnerships</h2>
            <p className="text-xl text-gray-600">Collaborating with leading organizations</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              'Alaska Miners Association',
              'Society of Economic Geologists',
              'Canadian Institute of Mining',
              'PDAC',
              'Association of Professional Geoscientists',
              'Geological Society of America',
              'American Geosciences Institute',
              'Society of Mining Engineers'
            ].map((partner, idx) => (
              <div key={idx} className="bg-gray-100 p-6 rounded-lg text-center hover:bg-gray-200 transition-colors">
                <p className="font-semibold text-gray-800">{partner}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Team</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We're always looking for talented geoscientists and field professionals. Explore career opportunities with Alaska's premier exploration company.
          </p>
          <a href="/contact" className="btn-primary bg-white text-primary-800 hover:bg-gray-100 text-lg">
            View Career Opportunities
          </a>
        </div>
      </section>
    </>
  );
};
