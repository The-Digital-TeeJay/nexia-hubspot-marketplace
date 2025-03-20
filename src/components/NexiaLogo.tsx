
import React from 'react';

interface NexiaLogoProps {
  className?: string;
}

const NexiaLogo: React.FC<NexiaLogoProps> = ({ className = "h-10 w-auto" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/lovable-uploads/989a5d1f-6e54-47d3-a8eb-11a3a5b5933c.png" 
        alt="Nexia Logo" 
        className="h-full" 
      />
    </div>
  );
};

export default NexiaLogo;
