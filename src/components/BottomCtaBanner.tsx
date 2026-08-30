import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { SITE_INFO } from '../data/siteData';

interface BottomCtaBannerProps {
  title?: string;
  buttonText?: string;
  variant?: 'primary' | 'subtle';
}

export const BottomCtaBanner: React.FC<BottomCtaBannerProps> = ({
  title = 'Leve os ensinamentos do kung fu para sua vida',
  buttonText = 'Clique Aqui E Agende Sua Aula',
  variant = 'primary',
}) => {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 bg-gradient-to-r from-red-950 via-neutral-900 to-red-950 border-y border-red-800/40">
      {/* Edge gradient blend overlays */}
      <div className="absolute top-0 inset-x-0 h-12 bg-gradient-to-b from-neutral-950/80 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-neutral-950/80 to-transparent pointer-events-none" />

      {/* Decorative martial elements background */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#e53e3e_1px,transparent_1px)] [background-size:16px_16px]" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold font-chinese uppercase tracking-wider text-3d-white"
        >
          {title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-sm sm:text-base text-gray-200 max-w-2xl mx-auto subtitle-shadow font-chinese"
        >
          Venha fazer uma aula experimental gratuita na Academia Punhos Do Sul e descubra a força, foco e equilíbrio do Kung Fu Shaolin.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, type: 'spring', stiffness: 140 }}
          className="pt-2"
        >
          <a
            id="cta-banner-whatsapp-button"
            href={SITE_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-neutral-950 font-extrabold text-sm sm:text-base uppercase tracking-widest px-9 py-4 rounded-lg shadow-xl shadow-amber-950/40 hover:shadow-amber-500/30 border border-amber-300 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 font-chinese overflow-hidden"
          >
            <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000" />
            <MessageCircle className="w-5 h-5 text-emerald-950 fill-emerald-950 group-hover:scale-110 transition-transform" />
            <span>{buttonText}</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

