import React, { useState } from 'react';
import { Utensils, Star } from 'lucide-react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src?: string;
  alt?: string;
  className?: string;
  fallbackSrc?: string;
  placeholderText?: string;
  referrerPolicy?: any;
}

export default function ImageWithFallback({
  src,
  fallbackSrc,
  alt,
  className,
  placeholderText = "L'Étoile Fine Cuisine",
  ...props
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState<string | undefined>(src);
  const [hasError, setHasError] = useState(false);
  const [usingFallback, setUsingFallback] = useState(false);

  const handleError = () => {
    if (!usingFallback && fallbackSrc) {
      setImgSrc(fallbackSrc);
      setUsingFallback(true);
    } else {
      setHasError(true);
    }
  };

  if (hasError || !imgSrc) {
    return (
      <div 
        id="image-fallback-placeholder"
        className={`w-full h-full min-h-[150px] bg-gradient-to-br from-[#1F150C] to-[#0A0704] border border-[#412D15]/60 flex flex-col items-center justify-center p-6 text-center text-gold-cream/70 relative ${className || ''}`}
      >
        {/* Subtle Luxury Pattern Background */}
        <div className="absolute inset-1 border border-gold-cream/10 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full border border-gold-cream/5 pointer-events-none" />
        
        <div className="mb-3 relative">
          <Utensils className="h-6 w-6 text-gold-cream/30" />
          <Star className="h-2 w-2 text-gold-cream/40 absolute -top-1 -right-1 animate-pulse" />
        </div>
        <p className="font-serif italic text-xs uppercase tracking-widest text-gold-cream/95 mb-1 max-w-[90%] break-words">
          {alt || "Gourmet Preparation"}
        </p>
        <span className="font-mono text-[9px] text-[#E1DCC9]/40 uppercase tracking-[0.2em]">
          {placeholderText}
        </span>
      </div>
    );
  }

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={handleError}
      {...props}
    />
  );
}
