
import React from 'react';
import { cn } from '@/lib/utils';

interface InstructionCardProps {
  instruction: string;
  className?: string;
}

const InstructionCard: React.FC<InstructionCardProps> = ({ instruction, className }) => {
  return (
    <div 
      className={cn(
        "glass-card p-4 rounded-lg flex items-center transition-all duration-300",
        "hover:shadow-neon-blue hover:border-neon-blue/50 hover:scale-105",
        className
      )}
    >
      <p className="text-foreground">{instruction}</p>
    </div>
  );
};

export default InstructionCard;
