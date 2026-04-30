import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import HowItWorks from '../components/HowItWorks';
import FAQSection from '../components/FAQSection';
import SEO from '../components/SEO';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      <SEO 
        title="Home" 
        description="YouMailEngine provides simple, jargon-free email guides to help you master your inbox, secure your privacy, and understand digital communication."
      />
      <div id="home"><Hero /></div>
      <div id="about"><AboutSection /></div>
      <div id="services"><ServicesSection /></div>
      <div id="how-it-works"><HowItWorks /></div>
      <div id="faq"><FAQSection /></div>
    </>
  );
};

export default Home;
