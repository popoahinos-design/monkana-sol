import monkeyBanana from "@/assets/monkey-banana.jpg";
import monkBananaCar from "@/assets/monk-banana-car.png";

const About = () => {
  return <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="meme-card text-center">
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl hero-text mb-8 break-words">
            ABOUT
          </h2>
          
          {/* Hero Image */}
          <div className="flex justify-center mb-8">
            <img 
              src={monkeyBanana} 
              alt="Monkana Jungle Mascot" 
              className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-2xl object-cover shadow-glow border-2 border-border"
            />
          </div>
          
          <div className="space-y-4 sm:space-y-6 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-foreground leading-relaxed px-2">
            <p>
              🎯 <strong>$MONKANA</strong> is not just another meme coin - it's the future of decentralized fun! 
              Born from the depths of the internet, our mascot represents the power of community-driven 
              cryptocurrency.
            </p>
            
            <p>
              🛡️ <strong className="text-blue-600">Monkana is embarking on a journey to restore order in the cryptocurrency world.</strong> 
              <span className="text-blue-600">Monkana strives to create a safe and transparent environment for Solana meme investors. 
              With the support of the crypto community, Monkana promises a bright future and is determined 
              to make a lasting impact on the cryptocurrency market.</span>
            </p>
            
            <p>
              💎 With diamond hands and a vision for the moon, $MONKANA brings together meme culture 
              and serious gains. We're building more than just a token - we're creating a movement!
            </p>
            
            <p>
              🚀 Join thousands of holders who believe in the power of memes, the strength of community, 
              and the promise of financial freedom. Together, we're not just going to the moon - 
              we're building a space station!
            </p>
            
            <p className="text-xl sm:text-2xl md:text-3xl font-black text-blue-600 break-words">
              🌟 HODL STRONG, MEME HARDER! 🌟
            </p>
          </div>

          {/* Origin Story Section */}
          <div className="mt-16 meme-card">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl hero-text mb-8 break-words">
              THE ORIGIN STORY
            </h3>
            
            <div className="flex justify-center mb-8">
              <img 
                src={monkBananaCar} 
                alt="Monky in Banana Car" 
                className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-2xl object-contain shadow-glow border-2 border-border bg-gradient-to-br from-primary/10 to-accent/10 hover-scale animate-fade-in hover:animate-pulse transition-all duration-300 hover:shadow-2xl hover:rotate-2"
              />
            </div>
            
            <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-foreground leading-relaxed px-2">
              <p>
                <strong>Monky is the symbol of the Monkana_sol meme cryptocurrency.</strong> Its creation was inspired by 
                the monkey and its favorite food: the banana ,  an original creativity with the combination of the monkey 
                and its banana in the Solana meme family. It's truly a first in the crypto ecosystem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;