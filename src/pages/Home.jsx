import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import GamesSection from '../components/GamesSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <GamesSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
