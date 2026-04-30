import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, canonical, ogType = 'website' }) => {
  const siteName = 'YouMailEngine';
  const tagLine = 'Educational Email Guides & Knowledge Base';
  
  // Logic for full title: 
  // If Home: "YouMailEngine - Educational Email Guides & Knowledge Base"
  // If Other: "Page Title | YouMailEngine - Educational Email Guides & Knowledge Base"
  const fullTitle = (title === 'Home' || !title) 
    ? `${siteName} - ${tagLine}` 
    : `${title} | ${siteName} - ${tagLine}`;
    
  const defaultDescription = 'YouMailEngine provides simple, jargon-free email guides to help you master your inbox, secure your privacy, and understand digital communication.';
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
    </Helmet>
  );
};

export default SEO;
