import { Send, Twitter, BarChart3, Mail } from "lucide-react";

const Footer = () => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      // Optionally add toast notification here
    });
  };

  const socialLinks = [
    {
      name: "Telegram",
      url: "https://t.me/Monkana_Sol",
      icon: Send,
      color: "hover:text-blue-400",
      type: "link"
    },
    {
      name: "Twitter", 
      url: "https://x.com/Monky693303?t=AMD_87E_aL0l5D2z_AmefQ&s=09",
      icon: Twitter,
      color: "hover:text-blue-500",
      type: "link"
    },
    {
      name: "Email",
      url: "monky@monkana-sol.com",
      icon: Mail,
      color: "hover:text-orange-500",
      type: "email"
    },
    {
      name: "Dexscreener",
      url: "https://dexscreener.com/solana/7vjh6emhufofc8b2pwrx3qrgy92pfpajk3hiomupwtkp",
      icon: BarChart3, 
      color: "hover:text-green-500",
      type: "link"
    }
  ];

  return (
    <footer className="section-spacing bg-gradient-to-t from-primary/5 to-transparent">
      <div className="container-width">
        <div className="professional-card text-center">
          <h3 className="text-3xl sm:text-4xl md:text-5xl hero-text mb-8 font-bold">
            JOIN THE COMMUNITY
          </h3>
          
          <p className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Ready to be part of the next big thing? Connect with fellow holders and stay updated!
          </p>
          
          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {socialLinks.map((social) => {
              if (social.type === "email") {
                return (
                  <button
                    key={social.name}
                    onClick={() => copyToClipboard(social.url)}
                    className={`professional-button ${social.color} transition-all duration-300 flex items-center gap-3 cursor-pointer`}
                  >
                    <social.icon className="w-6 h-6" />
                    <span>{social.name}</span>
                  </button>
                );
              }
              
              return (
                <a 
                  key={social.name}
                  href={social.url}
                  className={`professional-button ${social.color} transition-all duration-300 flex items-center gap-3`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="w-6 h-6" />
                  <span>{social.name}</span>
                </a>
              );
            })}
          </div>
          
          {/* Disclaimer */}
          <div className="border-t border-border pt-8 mt-8">
            <p className="text-sm md:text-base font-medium text-foreground/70 leading-relaxed max-w-4xl mx-auto">
              <strong>DISCLAIMER:</strong> MONKANA is a meme token created for entertainment purposes. 
              Cryptocurrency investments carry risk. Only invest what you can afford to lose. 
              Do your own research before trading. Not financial advice.
            </p>
          </div>
          
          {/* Copyright */}
          <div className="mt-8 text-base md:text-lg font-semibold text-foreground/60">
            © 2025 MONKANA • Made with 💎 by the Community
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;