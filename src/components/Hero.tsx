import monkanaMascot from "@/assets/monkana-mascot.png";
import { Button } from "@/components/ui/button";
import { Send, Twitter } from "lucide-react";
const Hero = () => {
  return <section className="section-spacing min-h-screen flex items-center justify-center relative">
      <div className="container-width text-center">
        {/* Main Title */}
        <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl mb-8 leading-tight font-extrabold font-black-ops relative inline-block whitespace-nowrap">
          <span className="text-[hsl(var(--gold))] drop-shadow-2xl" style={{
          textShadow: '3px 3px 0px rgba(0,0,0,0.3), 6px 6px 10px rgba(0,0,0,0.2)'
        }}>
            $M
            <span className="relative inline-block">
              O
              <img src={monkanaMascot} alt="" className="absolute inset-0 w-full h-full object-contain rounded-full opacity-90 animate-pulse" style={{
              transform: 'scale(0.8)'
            }} />
            </span>
            NKANA
          </span>
        </h1>
        
        {/* Mascot Image */}
        <div className="mb-12 flex justify-center">
          <img src={monkanaMascot} alt="Monkana Mascot" className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300" />
        </div>
        
        {/* Subtitle */}
        <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground/80 mb-16 max-w-4xl mx-auto leading-relaxed">Monkana_Sol ($Monky), the memecoin that is establishing itself in the Solana ecosystem. 🐒🍌</p>
        
        {/* Social Media Links */}
        <div className="flex flex-wrap gap-6 justify-center mb-20">
          <a href="https://t.me/Monkana_Sol" className="professional-button hover:scale-105 transition-all duration-300 flex items-center gap-3" target="_blank" rel="noopener noreferrer">
            <Send className="w-6 h-6" />
            <span>Join Telegram</span>
          </a>
          <a href="https://x.com/Monky693303?t=AMD_87E_aL0l5D2z_AmefQ&s=09" className="professional-button hover:scale-105 transition-all duration-300 flex items-center gap-3" target="_blank" rel="noopener noreferrer">
            <Twitter className="w-6 h-6" />
            <span>Follow Twitter</span>
          </a>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;