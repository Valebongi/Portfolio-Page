import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProjectsSection from '../components/ProjectsSection';
import TechMarquee from '../components/TechMarquee';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <ProjectsSection />
        <TechMarquee />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
