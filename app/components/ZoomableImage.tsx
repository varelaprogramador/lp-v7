'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface ZoomableImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ZoomableImage({ src, alt, className = '' }: ZoomableImageProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleZoomIn = () => {
    setScale(prev => Math.min(prev + 0.5, 5));
  };

  const handleZoomOut = () => {
    setScale(prev => {
      const newScale = Math.max(prev - 0.5, 1);
      if (newScale === 1) {
        setPosition({ x: 0, y: 0 });
      }
      return newScale;
    });
  };

  const handleClose = () => {
    setIsOpen(false);
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale > 1) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y
      });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && scale > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();

    if (e.deltaY < 0) {
      // Scroll up - zoom in
      handleZoomIn();
    } else {
      // Scroll down - zoom out
      handleZoomOut();
    }
  };

  const handleImageClick = (e: React.MouseEvent) => {
    e.stopPropagation();

    if (scale < 5 && !isDragging) {
      // Pega a posição do clique relativa ao container
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        const clickX = e.clientX - rect.left - rect.width / 2;
        const clickY = e.clientY - rect.top - rect.height / 2;

        // Ajusta a posição para centralizar no ponto clicado
        setPosition({
          x: -clickX * 0.5,
          y: -clickY * 0.5
        });
      }

      handleZoomIn();
    }
  };

  useEffect(() => {
    const handleMouseUpGlobal = () => setIsDragging(false);
    window.addEventListener('mouseup', handleMouseUpGlobal);
    return () => window.removeEventListener('mouseup', handleMouseUpGlobal);
  }, []);

  return (
    <>
      {/* Thumbnail clicável */}
      <div
        className={`relative w-full h-96 cursor-pointer transition-transform hover:scale-[1.02] ${className}`}
        onClick={() => setIsOpen(true)}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain"
        />
        {/* Indicador de zoom */}
        <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1.5 rounded-full text-sm flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
          </svg>
          Clique para ampliar
        </div>
      </div>

      {/* Modal de zoom */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={handleClose}
        >
          {/* Controles */}
          <div className="absolute top-4 right-4 flex gap-2 z-10">
            {/* Zoom In */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleZoomIn();
              }}
              className="bg-white/90 hover:bg-white text-gray-800 w-12 h-12 rounded-full flex items-center justify-center transition-all shadow-lg"
              aria-label="Aumentar zoom"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
              </svg>
            </button>

            {/* Zoom Out */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleZoomOut();
              }}
              className="bg-white/90 hover:bg-white text-gray-800 w-12 h-12 rounded-full flex items-center justify-center transition-all shadow-lg"
              aria-label="Diminuir zoom"
              disabled={scale <= 1}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7" />
              </svg>
            </button>

            {/* Fechar */}
            <button
              onClick={handleClose}
              className="bg-white/90 hover:bg-white text-gray-800 w-12 h-12 rounded-full flex items-center justify-center transition-all shadow-lg"
              aria-label="Fechar"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Indicador de zoom */}
          <div className="absolute top-4 left-4 bg-white/90 text-gray-800 px-4 py-2 rounded-full text-sm font-medium shadow-lg">
            Zoom: {Math.round(scale * 100)}%
          </div>

          {/* Imagem com zoom e drag */}
          <div
            ref={containerRef}
            className="relative w-full h-full flex items-center justify-center overflow-hidden"
            onClick={handleImageClick}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onWheel={handleWheel}
            style={{
              cursor: scale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'zoom-in'
            }}
          >
            <div
              style={{
                transform: `scale(${scale}) translate(${position.x / scale}px, ${position.y / scale}px)`,
                transition: isDragging ? 'none' : 'transform 0.3s ease-out',
                userSelect: 'none'
              }}
            >
              <Image
                src={src}
                alt={alt}
                width={1920}
                height={1080}
                className="object-contain max-w-none"
                style={{ width: 'auto', height: 'auto', maxHeight: '90vh', pointerEvents: 'none' }}
                draggable={false}
              />
            </div>
          </div>

          {/* Instruções */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 text-gray-800 px-6 py-3 rounded-full text-sm shadow-lg">
            {scale > 1
              ? 'Arraste para mover • Scroll para zoom • Clique fora para fechar'
              : 'Clique na imagem ou use scroll para zoom • Botões também disponíveis'
            }
          </div>
        </div>
      )}
    </>
  );
}
