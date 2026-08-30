import React, { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';

interface ImagePlaceholderProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
  caption?: string;
  priority?: boolean;
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  src,
  alt,
  className = '',
  aspectRatio = 'aspect-video',
  caption,
}) => {
  const [hasError, setHasError] = useState(false);

  // If image fails to load or hasn't been uploaded yet, show an elegant martial arts placeholder container with the path specified
  return (
    <div className={`relative overflow-hidden group bg-gradient-to-br from-neutral-900 via-neutral-800 to-red-950/40 rounded-lg ${aspectRatio} ${className}`}>
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          onError={() => setHasError(true)}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center select-none bg-neutral-950/80">
          <div className="w-12 h-12 rounded-full bg-red-900/30 border border-red-700/50 flex items-center justify-center text-red-400 mb-2 shadow-inner">
            <ImageIcon className="w-6 h-6" />
          </div>
          <span className="text-sm font-semibold text-gray-200 uppercase tracking-wider">{alt || 'Imagem'}</span>
          <span className="text-xs font-mono text-red-400/80 mt-1 px-2 py-0.5 bg-black/60 rounded max-w-full truncate">
            {src}
          </span>
          {caption && <span className="text-xs text-gray-400 mt-1">{caption}</span>}
        </div>
      )}

      {/* Code Path Tag Badge in corner for easy dev identification if desired */}
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] font-mono text-gray-300 pointer-events-none z-10">
        path: {src}
      </div>
    </div>
  );
};
