import CTA from "./body/CTA";
import Features from "./body/Features";
import Pricing from "./body/Pricing";
import Footer from "./bottom/Footer";
import Header from "./top/Header";
import Hero from "./top/Hero";

function LandingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <div className="top-0 z-10">
        <Hero />
        </div>
        <Features />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default LandingPage;
