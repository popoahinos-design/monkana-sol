const Footer = () => {
  const socialLinks = [
    {
      name: "Telegram",
      url: "#",
      icon: "📱",
      color: "hover:text-blue-400"
    },
    {
      name: "Twitter", 
      url: "#",
      icon: "🐦",
      color: "hover:text-blue-500"
    },
    {
      name: "Discord",
      url: "#", 
      icon: "💬",
      color: "hover:text-purple-500"
    },
    {
      name: "DexTools",
      url: "#",
      icon: "📊", 
      color: "hover:text-green-500"
    }
  ];

  return (
    <footer className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="meme-card text-center">
          <h3 className="text-5xl md:text-6xl hero-text mb-8">
            JOIN THE COMMUNITY
          </h3>
          
          <p className="text-xl md:text-2xl font-bold text-black mb-8">
            🚀 Ready to moon with us? Connect with fellow holders! 🚀
          </p>
          
          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
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
          <div className="border-t-4 border-black pt-8 mt-8">
            <p className="text-sm md:text-base font-semibold text-black opacity-80 leading-relaxed">
              ⚠️ <strong>DISCLAIMER:</strong> $MONKANA is a meme token created for entertainment purposes. 
              Cryptocurrency investments carry risk. Only invest what you can afford to lose. 
              Do your own research before trading. Not financial advice.
            </p>
          </div>
          
          {/* Copyright */}
          <div className="mt-6 text-lg font-bold text-black">
            © 2024 $MONKANA • Made with 💎 by the Community
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;