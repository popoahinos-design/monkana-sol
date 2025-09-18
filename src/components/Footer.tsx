const Footer = () => {
  const socialLinks = [
    {
      name: "Telegram",
      url: "https://t.me/Monkana_Sol",
      icon: "📱",
      color: "hover:text-blue-400"
    },
    {
      name: "Twitter", 
      url: "https://x.com/Monky693303?t=AMD_87E_aL0l5D2z_AmefQ&s=09",
      icon: "🐦",
      color: "hover:text-blue-500"
    },
    {
      name: "Dexscreener",
      url: "https://dexscreener.com/solana/7vjh6emhufofc8b2pwrx3qrgy92pfpajk3hiomupwtkp",
      icon: "📊", 
      color: "hover:text-green-500"
    }
  ];

  return (
    <footer className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="meme-card text-center">
          <h3 className="text-2xl sm:text-3xl md:text-5xl hero-text mb-6 sm:mb-8 break-words">
            JOIN THE COMMUNITY
          </h3>
          
          <p className="text-base sm:text-lg md:text-xl font-bold text-foreground mb-6 sm:mb-8 px-2 leading-relaxed">
            🚀 Ready to moon with us? Connect with fellow holders! 🚀
          </p>
          
          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-6 sm:mb-8">
            {socialLinks.map((social) => (
              <a 
                key={social.name}
                href={social.url}
                className={`meme-button text-black hover:text-white transition-colors ${social.color}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-2xl mr-2">{social.icon}</span>
                {social.name}
              </a>
            ))}
          </div>
          
          {/* Disclaimer */}
          <div className="border-t-2 sm:border-t-4 border-border pt-6 sm:pt-8 mt-6 sm:mt-8">
            <p className="text-xs sm:text-sm md:text-base font-semibold text-foreground opacity-80 leading-relaxed px-2">
              ⚠️ <strong>DISCLAIMER:</strong> $MONKANA is a meme token created for entertainment purposes. 
              Cryptocurrency investments carry risk. Only invest what you can afford to lose. 
              Do your own research before trading. Not financial advice.
            </p>
          </div>
          
          {/* Copyright */}
          <div className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg font-bold text-foreground break-words">
            © 2025 $MONKANA • Made with 💎 by the Community
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;