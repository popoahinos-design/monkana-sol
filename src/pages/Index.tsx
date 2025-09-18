import Hero from "@/components/Hero";
import About from "@/components/About";
import HowToBuy from "@/components/HowToBuy";
import Tokenomics from "@/components/Tokenomics";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <HowToBuy />
      <Tokenomics />
      <Footer />
    </div>
  );
};

export default Index;
