import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { MainLayout } from './layouts/MainLayout';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Technology } from './pages/Technology';
import { Projects } from './pages/Projects';
import { Resources } from './pages/Resources';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import './index.css';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="technology" element={<Technology />} />
            <Route path="projects" element={<Projects />} />
            <Route path="resources" element={<Resources />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
