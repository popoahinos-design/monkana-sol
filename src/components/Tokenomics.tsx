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
      value: "800,000,000",
      percentage: "80%",
      color: "bg-accent",
      icon: "🌊"
    },
    {
      label: "Marketing",
      value: "100,000,000", 
      percentage: "10%",
      color: "bg-primary",
      icon: "📢"
    },
    {
      label: "Team",
      value: "50,000,000",
      percentage: "5%",
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
        <h2 className="text-6xl md:text-7xl lg:text-8xl hero-text text-center mb-16">
          TOKENOMICS
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {tokenomicsData.map((item, index) => (
            <div key={index} className="meme-card text-center">
              <div className="text-5xl mb-4">{item.icon}</div>
              
              <h3 className="text-2xl font-bold text-black mb-2">
                {item.label}
              </h3>
              
              <div className="text-4xl font-black-ops text-black mb-4">
                {item.percentage}
              </div>
              
              <p className="text-lg font-semibold text-muted-foreground">
                {item.value} $MONKANA
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
        
        {/* Key Features */}
        <div className="meme-card max-w-4xl mx-auto">
          <h3 className="text-4xl font-bold text-black text-center mb-8">
            🔥 KEY FEATURES 🔥
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg font-semibold">
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