import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import TrustBadges from "@/components/site/TrustBadges";
import Services from "@/components/site/Services";
import WhyUs from "@/components/site/WhyUs";
import Gallery from "@/components/site/Gallery";
import Reviews from "@/components/site/Reviews";
import FinalCTA from "@/components/site/FinalCTA";
import Footer from "@/components/site/Footer";

const Index = () => {
  return (
    <main id="top" className="min-h-screen bg-background">
      <Header />
      <Hero />
      <TrustBadges />
      <Services />
      <WhyUs />
      <Gallery />
      <Reviews />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;
