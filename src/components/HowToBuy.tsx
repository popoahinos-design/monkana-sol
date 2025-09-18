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
        <h2 className="text-6xl md:text-7xl lg:text-8xl hero-text text-center mb-16">
          HOW TO BUY
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="meme-card text-center group">
              <div className="text-6xl mb-4 group-hover:animate-bounce">
                {step.icon}
              </div>
              
              <div className="text-4xl font-black-ops text-black mb-4 text-shadow">
                {step.number}
              </div>
              
              <h3 className="text-2xl font-bold text-black mb-4">
                {step.title}
              </h3>
              
              <p className="text-lg font-medium text-black leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Trading Widget */}
        <div className="mt-16 text-center">
          <div className="meme-card max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-black mb-6">🚀 TRADE NOW</h3>
            <div style={{paddingTop: "55.49%", position: "relative"}}>
              <iframe 
                className="h2b__widget" 
                src="https://raydium.io/swap/?inputMint=sol&outputMint=4aW4s1hkZogELxU7mCYD82UzrwQ3h69AcmYoSsRQbonk" 
                style={{
                  opacity: 1, 
                  visibility: "visible", 
                  display: "block", 
                  width: "100%", 
                  height: "100%", 
                  left: "0px", 
                  top: "0px", 
                  position: "absolute"
                }} 
                data-level="83"
              />
            </div>
          </div>
        </div>

        {/* Contract Address */}
        <div className="mt-16 text-center">
          <div className="meme-card max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-black mb-4">📋 Contract Address</h3>
            <div 
              onClick={copyToClipboard}
              className="bg-black text-accent p-4 rounded-lg font-mono text-sm md:text-base break-all cursor-pointer hover:bg-gray-800 transition-colors duration-200 border-2 border-transparent hover:border-accent"
              title="Click to copy"
            >
              {copied ? "✅ Copied!" : contractAddress}
            </div>
            <p className="text-sm text-muted-foreground mt-2 font-semibold">
              ⚠️ Always verify the contract address before trading! Click to copy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToBuy;