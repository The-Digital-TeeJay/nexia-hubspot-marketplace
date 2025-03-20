
import React from 'react';

interface NexiaLogoProps {
  className?: string;
}

const NexiaLogo: React.FC<NexiaLogoProps> = ({ className = "h-56 w-auto" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/lovable-uploads/9c5967f6-075c-4534-b1e3-fef5206a6ebf.png" 
        alt="Nexia Logo" 
        className="h-full" 
      />
    </div>
  );
};

export default NexiaLogo;
