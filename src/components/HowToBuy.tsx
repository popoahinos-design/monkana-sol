import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const HowToBuy = () => {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  const contractAddress = "4aW4s1hkZogELxU7mCYD82UzrwQ3h69AcmYoSsRQbonk";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress);
      setCopied(true);
      toast({
        title: "✅ Copied!",
        description: "Contract address copied to clipboard",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "❌ Failed to copy",
        description: "Please copy manually",
        variant: "destructive",
      });
    }
  };

  const steps = [
    {
      number: "1",
      title: "Create a Wallet",
      description: "Download MetaMask, Phantom, or your preferred wallet from the app store. Desktop users can get the browser extension.",
      icon: "👛"
    },
    {
      number: "2", 
      title: "Get Some ETH/SOL",
      description: "You need ETH or SOL to swap for $MONKANA. Buy directly in your wallet or transfer from an exchange.",
      icon: "💰"
    },
    {
      number: "3",
      title: "Go to DEX",
      description: "Visit Uniswap, PancakeSwap, or Raydium. Connect your wallet and paste the $MONKANA contract address.",
      icon: "🔄"
    },
    {
      number: "4",
      title: "Swap for $MONKANA",
      description: "Exchange your ETH/SOL for $MONKANA. Set slippage to 5-10% and confirm the transaction. Welcome to the club!",
      icon: "🎉"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl hero-text text-center mb-8 sm:mb-16 break-words">
          HOW TO BUY
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {steps.map((step) => (
            <div key={step.number} className="meme-card text-center group">
              <div className="text-6xl mb-4 group-hover:animate-bounce">
                {step.icon}
              </div>
              
              <div className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground mb-4">
                {step.number}
              </div>
              
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-4 break-words">
                {step.title}
              </h3>
              
              <p className="text-sm sm:text-base md:text-lg font-medium text-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Trading Widget */}
        <div className="mt-8 sm:mt-16 text-center">
          <div className="meme-card max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4 sm:mb-6 break-words">🚀 TRADE NOW</h3>
            <div className="w-full" style={{paddingTop: "65%", position: "relative"}}>
              <iframe 
                className="h2b__widget rounded-lg" 
                src="https://raydium.io/swap/?inputMint=sol&outputMint=4aW4s1hkZogELxU7mCYD82UzrwQ3h69AcmYoSsRQbonk" 
                style={{
                  opacity: 1, 
                  visibility: "visible", 
                  display: "block", 
                  width: "100%", 
                  height: "100%", 
                  left: "0px", 
                  top: "0px", 
                  position: "absolute",
                  border: "none"
                }} 
                data-level="83"
              />
            </div>
          </div>
        </div>

        {/* Token Supply */}
        <div className="mt-8 sm:mt-16 text-center">
          <div className="meme-card max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl hero-text text-center mb-4 break-words">
              Token Supply
            </h3>
            <div className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-foreground break-words">
              1,000,000,000 $MONKANA
            </div>
          </div>
        </div>

        {/* Contract Address */}
        <div className="mt-8 sm:mt-16 text-center">
          <div className="meme-card max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4 break-words">📋 Contract Address</h3>
            <div 
              onClick={copyToClipboard}
              className="bg-card text-accent p-3 sm:p-4 rounded-lg font-mono text-xs sm:text-sm md:text-base break-all cursor-pointer hover:bg-accent/10 transition-colors duration-200 border-2 border-border hover:border-accent"
              title="Click to copy"
            >
              {copied ? "✅ Copied!" : contractAddress}
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground mt-2 font-semibold px-2">
              ⚠️ Always verify the contract address before trading! Click to copy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToBuy;