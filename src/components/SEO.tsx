import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogType?: string;
}

export const SEO = ({ 
  title, 
  description, 
  keywords = "mineral exploration Alaska, geological surveys Alaska, geophysical exploration, resource assessment Alaska, mining consulting",
  canonicalUrl = "https://alaskamineralexploration.com",
  ogType = "website"
}: SEOProps) => {
  const fullTitle = `${title} | Alaska Minerals Exploration`;
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Alaska Minerals Exploration" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "Alaska Minerals Exploration",
          "description": "Professional geological exploration and consulting services in Alaska",
          "url": "https://alaskamineralexploration.com",
          "address": {
            "@type": "PostalAddress",
            "addressRegion": "AK",
            "addressCountry": "US"
          },
          "areaServed": {
            "@type": "State",
            "name": "Alaska"
          },
          "serviceType": [
            "Geological Survey",
            "Geophysical Exploration",
            "Drilling Services",
            "Resource Assessment",
            "Mining Consulting"
          ]
        })}
      </script>
    </Helmet>
  );
};
