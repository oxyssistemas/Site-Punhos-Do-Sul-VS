import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { ImagePlaceholder } from './ImagePlaceholder';

interface Slide {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  buttonText: string;
  target: string;
  imagePlaceholder: string;
  alt: string;
  nowrap?: boolean;
}

const SLIDES: Slide[] = [
  {
    id: 'slide-academia',
    tag: 'Tradição • Disciplina • Estilo de Vida',
    title: 'Academia Punhos Do Sul\nKung Fu Shaolin',
    subtitle: 'Mais que uma Arte Marcial, um Estilo de Vida e Tradição Shaolin',
    buttonText: 'Conheça a Academia',
    target: '#juramentos',
    imagePlaceholder: '/images/hero/hero-slide-1.jpg',
    alt: 'Academia Punhos Do Sul Kung Fu Shaolin',
  },
  {
    id: 'slide-estilos',
    tag: 'Sabedoria Ancestral • Natureza',
    title: 'Os Estilos Animais',
    subtitle: 'O poder, o espírito e a agilidade inspirados na observação da natureza',
    buttonText: 'Conheça os Estilos',
    target: '#estilos-animais',
    imagePlaceholder: '/images/estilos/banner-estilos-animais.jpg',
    alt: 'Os Estilos Animais do Kung Fu',
  },
  {
    id: 'slide-armas',
    tag: 'Arsenal Ancestral • Extensão do Corpo',
    title: 'Armas do Kung Fu',
    subtitle: 'Bastão, Espada, Sabre e o rico arsenal marcial tradicional chinês',
    buttonText: 'Conheça as Armas',
    target: '#armas',
    imagePlaceholder: '/images/armas/banner-armas-kungfu.jpg',
    alt: 'Armas Tradicionais do Kung Fu',
    nowrap: true,
  },
  {
    id: 'slide-modalidades',
    tag: 'Treinamento Completo • Mente e Corpo',
    title: 'Nossas Modalidades',
    subtitle: 'Kung Fu, Tai Chi Chuan, Chi Kung, Sanda, Defesa Pessoal e Dança do Leão',
    buttonText: 'Ver Modalidades',
    target: '#modalidades',
    imagePlaceholder: '/images/modalidades/kung-fu.jpg',
    alt: 'Modalidades Praticadas na Academia Punhos Do Sul',
  },
];

interface HeroSliderProps {
  navigate?: (path: string) => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({ navigate }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [keyCounter, setKeyCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
      setKeyCounter((k) => k + 1);
    }, 6500);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
    setKeyCounter((k) => k + 1);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    setKeyCounter((k) => k + 1);
  };

  const handleSlideButtonClick = (slide: Slide) => {
    if (slide.target.startsWith('#')) {
      const el = document.getElementById(slide.target.substring(1));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    if (navigate) {
      navigate(slide.target);
    }
  };

  const activeSlide = SLIDES[currentSlide];

  return (
    <div className="relative w-full h-[540px] sm:h-[620px] lg:h-[700px] overflow-hidden bg-neutral-950 select-none">
      {/* Background martial aura */}
      <div className="absolute inset-0 bg-radial-to-c from-red-950/30 via-transparent to-black pointer-events-none z-10" />

      {/* Active Slide via AnimatePresence */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSlide.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          {/* Background image placeholder with subtle Ken-Burns zoom */}
          <motion.div
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 7, ease: 'easeOut' }}
            className="absolute inset-0"
          >
            <ImagePlaceholder
              src={activeSlide.imagePlaceholder}
              alt={activeSlide.alt}
              className="w-full h-full object-cover"
              aspectRatio="h-full w-full"
            />
          </motion.div>

          {/* Deep dark martial gradient overlays for contrast & legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/65 to-neutral-950/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/85 via-neutral-950/30 to-neutral-950/85" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />

          {/* Slide Content with Staggered Entrance Animations */}
          <div className="relative z-20 h-full w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
            <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center text-center space-y-5 sm:space-y-6">
              
              {/* Badge Tag */}
              <motion.div
                initial={{ opacity: 0, y: -25, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.15, type: 'spring', stiffness: 120 }}
                className="inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold tracking-[0.25em] text-amber-400 uppercase py-1.5 px-4 rounded-full bg-red-950/80 border border-amber-500/50 shadow-lg backdrop-blur-sm mx-auto"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin shrink-0" style={{ animationDuration: '6s' }} />
                <span className="text-center">{activeSlide.tag}</span>
              </motion.div>

              {/* Main 3D Title */}
              <motion.h1
                initial={{ opacity: 0, y: 35, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className={`w-full text-center text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-wider font-chinese-dragon uppercase text-3d-red drop-shadow-2xl whitespace-pre-line leading-tight mx-auto ${
                  activeSlide.nowrap ? 'whitespace-nowrap' : ''
                }`}
              >
                {activeSlide.title}
              </motion.h1>

              {/* Gold Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
                className="text-base sm:text-xl lg:text-2xl font-bold tracking-wider max-w-3xl mx-auto font-chinese-dragon text-3d-gold subtitle-shadow leading-relaxed text-center"
              >
                {activeSlide.subtitle}
              </motion.p>

              {/* Action Button */}
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.55, type: 'spring', stiffness: 150 }}
                className="pt-2 sm:pt-4 flex justify-center w-full"
              >
                <button
                  id={`hero-slide-btn-${activeSlide.id}`}
                  onClick={() => handleSlideButtonClick(activeSlide)}
                  className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-red-800 via-red-700 to-red-800 hover:from-red-700 hover:to-red-600 text-white font-bold text-sm sm:text-base uppercase tracking-widest px-9 py-4 rounded-lg border-2 border-amber-400/90 shadow-2xl shadow-red-950/90 hover:shadow-red-800/60 hover:border-amber-300 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 font-chinese cursor-pointer overflow-hidden"
                >
                  {/* Subtle shine light bar sweep */}
                  <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000" />
                  
                  <span className="relative z-10">{activeSlide.buttonText}</span>
                  <motion.span
                    animate={{ y: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                    className="relative z-10 text-amber-300 text-lg font-bold"
                  >
                    ↓
                  </motion.span>
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        id="hero-slider-prev"
        onClick={prevSlide}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-neutral-950/75 hover:bg-red-900/90 border border-amber-500/40 text-amber-300 hover:text-white transition-all shadow-xl hover:scale-110 active:scale-95 backdrop-blur-sm cursor-pointer"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        id="hero-slider-next"
        onClick={nextSlide}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-neutral-950/75 hover:bg-red-900/90 border border-amber-500/40 text-amber-300 hover:text-white transition-all shadow-xl hover:scale-110 active:scale-95 backdrop-blur-sm cursor-pointer"
        aria-label="Próximo slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators & Auto-progress bar */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-3">
        {/* Dots */}
        <div className="flex items-center gap-3">
          {SLIDES.map((slide, idx) => {
            const isActive = idx === currentSlide;
            return (
              <button
                key={slide.id}
                id={`hero-dot-${idx}`}
                onClick={() => {
                  setCurrentSlide(idx);
                  setKeyCounter((k) => k + 1);
                }}
                aria-label={`Ir para ${slide.title}`}
                className="group relative py-2 px-1 cursor-pointer"
              >
                <div
                  className={`h-2.5 rounded-full transition-all duration-500 ${
                    isActive
                      ? 'w-10 bg-gradient-to-r from-amber-400 to-amber-500 shadow-[0_0_12px_rgba(245,158,11,0.8)] border border-amber-300'
                      : 'w-2.5 bg-neutral-700 hover:bg-neutral-500'
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

