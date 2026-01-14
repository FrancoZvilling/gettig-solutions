import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import WhoWeAre from './components/about/WhoWeAre';
import OurSolution from './components/solutions/OurSolution';
import Services from './components/services/Services';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import FloatingContact from './components/ui/FloatingContact';
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <main>
        <Hero />
        <WhoWeAre />
        <OurSolution />
        <Services />
        <Contact />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  )
}

export default App
