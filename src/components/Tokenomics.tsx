const Tokenomics = () => {
  const tokenomicsData = [
    {
      label: "Total Supply",
      value: "1,000,000,000",
      percentage: "100%",
      color: "bg-secondary",
      icon: "💎"
    },
    {
      label: "Liquidity Pool",
      value: "400,000,000",
      percentage: "40%",
      color: "bg-accent",
      icon: "🌊"
    },
    {
      label: "Marketing",
      value: "50,000,000", 
      percentage: "5%",
      color: "bg-primary",
      icon: "📢"
    },
    {
      label: "Team",
      value: "40,000,000",
      percentage: "4%",
      color: "bg-destructive",
      icon: "👥"
    },
    {
      label: "Development", 
      value: "50,000,000",
      percentage: "5%",
      color: "bg-muted",
      icon: "🛠️"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl hero-text text-center mb-8 sm:mb-16 break-words">
          TOKENOMICS
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mb-8 sm:mb-16">
          {tokenomicsData.map((item, index) => (
            <div key={index} className="meme-card text-center">
              <div className="text-5xl mb-4">{item.icon}</div>
              
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-2 break-words">
                {item.label}
              </h3>
              
              <div className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground mb-4">
                {item.percentage}
              </div>
              
              <p className="text-sm sm:text-base md:text-lg font-semibold text-muted-foreground break-all">
                {item.value} $MONKY
              </p>
              
              {/* Visual bar */}
              <div className="w-full bg-black/20 rounded-full h-4 mt-4">
                <div 
                  className={`h-4 rounded-full ${item.color} transition-all duration-1000`}
                  style={{ width: item.percentage }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* No Tax Message */}
        <div className="meme-card max-w-4xl mx-auto mb-8 sm:mb-16">
          <div className="text-center">
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-4">
              No taxes, no bullshit. It's as simple as that.
            </p>
            <p className="text-base sm:text-lg md:text-xl font-semibold text-muted-foreground">
              LP tokens are burned and contract ownership is renounced.
            </p>
          </div>
        </div>
        
        {/* Key Features */}
        <div className="meme-card max-w-4xl mx-auto">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-center mb-6 sm:mb-8 break-words">
            🔥 KEY FEATURES 🔥
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 text-base sm:text-lg font-semibold">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">✅</span>
              <span>0% Tax on Buy/Sell</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-2xl">🔒</span>
              <span>Liquidity Locked</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-2xl">👑</span>
              <span>Community Owned</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-2xl">🚀</span>
              <span>Fair Launch</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;