
import React, { useEffect, useState } from 'react';
import InstructionCard from '@/components/InstructionCard';
import DownloadButton from '@/components/DownloadButton';
import ParticleBackground from '@/components/ParticleBackground';
import { Card, CardContent } from '@/components/ui/card';

const instructions = [
  "Open all fingers to erase.",
  "Close all fingers to stop drawing.",
  "Extend only the index finger to draw.",
  "Press 'c' to change brush color.",
  "Press 's' to save the canvas.",
  "Press 'q' to quit.",
];

const Index = () => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    // Fade in all elements with delay
    const timer = setTimeout(() => {
      setVisible(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden p-6">
      <ParticleBackground />
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-background/90 z-[-5]" />
      
      <div 
        className={`max-w-4xl w-full transition-all duration-1000 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-shimmer animate-text-shimmer">
            Draw Your Pixel
          </h1>
          <p className="text-2xl md:text-3xl text-glow text-neon-blue mb-6 font-semibold">
            Air Canvas
          </p>
          
          {/* Welcome message and description */}
          <Card className="glass-card border-neon-blue/20 shadow-neon-blue/20 p-6 mb-10">
            <CardContent className="p-0">
              <h2 className="text-2xl font-bold mb-4 text-glow">Welcome to the Future of Drawing!</h2>
              <p className="text-muted-foreground mb-6">
                Draw Your Pixel is a gesture-based drawing application that lets you create art with just your fingers in the air. 
                No physical tools needed - just your hand movements captured by your webcam.
              </p>
              
              {/* Computer Vision Explanation */}
              <div className="mb-6 p-4 bg-muted/30 rounded-lg border border-neon-purple/20">
                <h3 className="text-xl font-semibold mb-2 text-glow-purple">How It Works: The Power of Computer Vision</h3>
                <p className="text-sm text-muted-foreground">
                  Draw Your Pixel uses advanced computer vision algorithms to track your hand movements in real-time. 
                  The application detects finger positions and gestures through your webcam, translating them into drawing actions on the canvas. 
                  This technology allows for intuitive, contactless interaction - making digital art creation more accessible and immersive than ever before.
                </p>
              </div>
              
              {/* Use Cases Paragraph */}
              <h3 className="text-xl font-semibold mb-2 text-glow-purple">Versatile Applications</h3>
              <p className="text-muted-foreground mb-6">
                Air Canvas revolutionizes how we interact with digital content. Use it for interactive presentations and lectures 
                to engage your audience. Create virtual art without physical tools, perfect for digital artists. 
                It's an excellent tool for educational demonstrations, allowing teachers to illustrate concepts dynamically.
                In health-conscious environments, enjoy contactless design to minimize shared surfaces. 
                For those with limited mobility, it serves as an accessibility tool for creative expression.
                And don't forget - it's simply fun entertainment for parties and gatherings!
              </p>
              
              {/* Centered Download Button */}
              <div className="flex justify-center my-8">
                <DownloadButton 
                  href="https://drive.google.com/uc?export=download&id=1ikxQeWIgV7SQ_fchxAG8TupRoLYvAegO"
                  className="scale-110 hover:scale-125 transition-transform"
                />
              </div>
              <p className="text-sm text-muted-foreground mt-2 text-center">
                Available for Windows. No additional installation required.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="glass-card rounded-2xl p-8 mb-12 shadow-neon-blue/20 border border-neon-blue/10 animate-float">
          <h2 className="text-2xl font-bold mb-6 text-glow">Instructions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {instructions.map((instruction, index) => (
              <InstructionCard 
                key={index} 
                instruction={instruction}
                className={`transition-all duration-700 delay-${(index + 1) * 100}`}
              />
            ))}
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-glow-pink">Enjoy drawing!</p>
          </div>
        </div>
        
        <footer className="text-center text-sm text-muted-foreground mt-8 pb-8">
          <p>&copy; {new Date().getFullYear()} Draw Your Pixel. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
