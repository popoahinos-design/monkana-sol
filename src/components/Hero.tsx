import monkanaMascot from "@/assets/monkana-mascot.png";
import { Button } from "@/components/ui/button";
const Hero = () => {
  return <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
      <div className="text-center max-w-6xl mx-auto">
        {/* Main Title */}
        <h1 className="hero-text sm:text-9xl md:text-[12rem] lg:text-[15rem] xl:text-[18rem] font-black leading-none mb-8 text-[#044c04] text-8xl">
          $MONKANA
        </h1>
        
        {/* Mascot */}
        <div className="flex justify-center mb-8">
          <img src={monkanaMascot} alt="MONKANA Mascot" className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 wiggle drop-shadow-2xl" />
        </div>
        
        {/* Subtitle */}
        <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-12 drop-shadow-lg">
          🚀 Monkana_Sol ($Monky), the memecoin that is establishing itself in the Solana ecosystem. 🚀
        </p>
        
        {/* Social Links */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a 
            href="https://t.me/Monkana_Sol"
            className="meme-button text-foreground hover:text-background transition-colors hover:text-blue-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text-2xl mr-2">📱</span>
            Telegram
          </a>
          <a 
            href="https://x.com/Monky693303?t=AMD_87E_aL0l5D2z_AmefQ&s=09"
            className="meme-button text-foreground hover:text-background transition-colors hover:text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text-2xl mr-2">🐦</span>
            Twitter
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-1 h-8 bg-black rounded-full"></div>
        </div>
      </div>
    </section>;
};
export default Hero;