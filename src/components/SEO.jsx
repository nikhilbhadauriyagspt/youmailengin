import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SEO = ({ title, description, canonical, ogType = 'website' }) => {
  const siteTitle = 'You Mail Engine - Educational Email Guides & Knowledge Base';
  const baseUrl = 'https://youmailengine.com'; // Change this to your production domain
  const location = useLocation();
  
  // Standardized Title
  const fullTitle = (title === 'Home' || !title) 
    ? siteTitle 
    : `${title} | ${siteTitle}`;
    
  const defaultDescription = 'You Mail Engine provides simple, jargon-free email guides to help you master your inbox, secure your privacy, and understand digital communication.';
  const defaultImage = `${baseUrl}/favicon.avif`;
  const currentUrl = `${baseUrl}${location.pathname}${location.search}`;
  const seoCanonical = canonical || currentUrl;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <link rel="canonical" href={seoCanonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:site_name" content="You Mail Engine" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={defaultImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:image" content={defaultImage} />
    </Helmet>
  );
};

export default SEO;
