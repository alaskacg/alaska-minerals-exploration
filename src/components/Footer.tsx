import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Alaska Minerals Exploration</h3>
            <p className="text-sm mb-4">
              Professional geological exploration and consulting services in Alaska since 1995.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" className="hover:text-primary-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services#geological" className="hover:text-primary-400 transition-colors">Geological Surveys</Link></li>
              <li><Link to="/services#geophysical" className="hover:text-primary-400 transition-colors">Geophysical Exploration</Link></li>
              <li><Link to="/services#drilling" className="hover:text-primary-400 transition-colors">Drilling Services</Link></li>
              <li><Link to="/services#analysis" className="hover:text-primary-400 transition-colors">Data Analysis</Link></li>
              <li><Link to="/services#consulting" className="hover:text-primary-400 transition-colors">Mining Consulting</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-primary-400 transition-colors">About Us</Link></li>
              <li><Link to="/projects" className="hover:text-primary-400 transition-colors">Projects</Link></li>
              <li><Link to="/technology" className="hover:text-primary-400 transition-colors">Technology</Link></li>
              <li><Link to="/resources" className="hover:text-primary-400 transition-colors">Resources</Link></li>
              <li><Link to="/contact" className="hover:text-primary-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-sm">
              <li>Anchorage, Alaska</li>
              <li>Phone: (907) 555-0123</li>
              <li>Email: info@alaskamineralexploration.com</li>
              <li className="pt-2">
                <Link to="/contact" className="text-primary-400 hover:text-primary-300 font-medium">
                  Request a Quote →
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Alaska Minerals Exploration. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
