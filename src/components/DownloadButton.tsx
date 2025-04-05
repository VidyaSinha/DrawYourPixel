
import React from 'react';
import { cn } from '@/lib/utils';

interface DownloadButtonProps {
  href: string;
  className?: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ href, className }) => {
  return (
    <a 
      href={href}
      className={cn(
        "relative inline-flex items-center justify-center px-8 py-4 overflow-hidden",
        "font-bold text-white rounded-lg group",
        "bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink",
        "hover:bg-gradient-to-l transition-all duration-500",
        "animate-pulse-glow",
        className
      )}
      download
    >
      <span className="absolute flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-neon-purple group-hover:translate-x-0">
        Download Now
      </span>
      <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full">
        Get Started
      </span>
      <span className="relative invisible">Download Now</span>
    </a>
  );
};

export default DownloadButton;
