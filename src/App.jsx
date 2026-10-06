import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Booking from "./components/Booking";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./WhatsAppButton";
import InstallApp from "./components/InstallApp";

function App() {
  return (
    <div className="min-h-screen bg-background text-text">
      <Navbar />
      <Hero />

      <Services />

      <About />

      <Gallery />

      <Booking />

      <Contact />

      <Footer />

      <WhatsAppButton />

      <InstallApp />

      {/* More sections coming next */}
    </div>
  );
}

export default App;
