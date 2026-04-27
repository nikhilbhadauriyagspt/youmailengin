import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import HowItWorks from '../components/HowItWorks';
import FAQSection from '../components/FAQSection';
import CompactCTA from '../components/CompactCTA';

const Home = () => {
  return (
    <>
      <div id="home"><Hero /></div>
      <div id="about"><AboutSection /></div>
      <div id="services"><ServicesSection /></div>
      <div id="how-it-works"><HowItWorks /></div>
      <div id="faq"><FAQSection /></div>
      <CompactCTA />
    </>
  );
};

export default Home;
