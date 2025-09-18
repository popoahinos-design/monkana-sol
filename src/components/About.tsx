import monkeyBanana from "@/assets/monkey-banana.jpg";

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
              🛡️ <strong>Monkana is embarking on a journey to restore order in the cryptocurrency world.</strong> 
              Monkana strives to create a safe and transparent environment for Solana meme investors. 
              With the support of the crypto community, Monkana promises a bright future and is determined 
              to make a lasting impact on the cryptocurrency market.
            </p>
            
            <p>
              🎯 <strong>$MONKANA</strong> is not just another meme coin - it's the future of decentralized fun! 
              Born from the depths of the internet, our mascot represents the power of community-driven 
              cryptocurrency.
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
        </div>
      </div>
    </section>;
};
export default About;