import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/landing/Header";
import HeroSection from "./components/landing/HeroSection";
import IdentitySection from "./components/landing/IdentitySection";
import GallerySection from "./components/landing/GallerySection";
import CulinarySection from "./components/landing/CulinarySection";
import SignatureSection from "./components/landing/SignatureSection";
import TestimonialsSection from "./components/landing/TestimonialsSection";
import EventsSection from "./components/landing/EventsSection";
import AccessibilitySection from "./components/landing/AccessibilitySection";
import SocialProofSection from "./components/landing/SocialProofSection";
import LocationSection from "./components/landing/LocationSection";
import CTASection from "./components/landing/CTASection";
import Footer from "./components/landing/Footer";

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <IdentitySection />
        <GallerySection />
        <CulinarySection />
        <SignatureSection />
        <TestimonialsSection />
        <EventsSection />
        <AccessibilitySection />
        <SocialProofSection />
        <LocationSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
