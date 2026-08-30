import React from 'react';
import { motion } from 'motion/react';
import { SUBPAGES_DATA, SITE_INFO } from '../data/siteData';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import { BottomCtaBanner } from '../components/BottomCtaBanner';
import { ChevronRight, ArrowLeft, MessageCircle } from 'lucide-react';

interface GenericSubpageProps {
  pageId: string;
  navigate: (path: string) => void;
}

export const GenericSubpage: React.FC<GenericSubpageProps> = ({ pageId, navigate }) => {
  const pageData = SUBPAGES_DATA[pageId] || SUBPAGES_DATA['kung-fu-1'];

  return (
    <div className="bg-neutral-950 text-white min-h-screen">
      {/* Hero Header for Subpage */}
      <div className="relative py-16 sm:py-24 bg-gradient-to-b from-red-950/70 via-neutral-950 to-neutral-950 border-b border-red-900/20 overflow-hidden">
        {/* Background Subtle Placeholder */}
        <div className="absolute inset-0 opacity-20">
          <ImagePlaceholder
            src={pageData.heroImagePlaceholder}
            alt={pageData.title}
            className="w-full h-full object-cover"
            aspectRatio="h-full w-full"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4"
          >
            <button onClick={() => navigate('/')} className="hover:text-amber-400 transition-colors">
              Início
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-red-500" />
            <span className="text-gray-300">Modalidades</span>
            <ChevronRight className="w-3.5 h-3.5 text-red-500" />
            <span className="text-amber-400">{pageData.title}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-3xl space-y-4"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-shojumaru uppercase tracking-wider text-3d-gold">
              {pageData.title}
            </h1>
            <div className="w-24 h-1.5 bg-gradient-to-r from-red-600 to-amber-500 rounded-full" />
            {pageData.metaDescription && (
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-light subtitle-shadow">
                {pageData.metaDescription}
              </p>
            )}
          </motion.div>
        </div>
      </div>

      {/* Main Content Sections directly on background */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-20">
        {pageData.sections.map((section, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.6,
              delay: idx === 0 ? 0 : 0.1,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="space-y-6"
          >
            {section.title && (
              <div className="space-y-2 border-b border-red-900/30 pb-3">
                <h2 className="text-2xl sm:text-4xl font-bold font-chinese uppercase tracking-wider text-3d-gold">
                  {section.title}
                </h2>
              </div>
            )}

            {section.imagePlaceholder && (
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.01 }}
                className="overflow-hidden rounded-xl my-6 shadow-2xl shadow-black/80"
              >
                <ImagePlaceholder
                  src={section.imagePlaceholder}
                  alt={section.title || pageData.title}
                  aspectRatio="aspect-[21/9]"
                />
              </motion.div>
            )}

            <div className="space-y-4 text-gray-200 text-base sm:text-lg leading-relaxed font-normal">
              {section.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className={pIdx === 0 ? "border-l-2 border-red-500 pl-4 text-gray-100 font-medium text-3d-white" : ""}>
                  {p}
                </p>
              ))}
            </div>

            {section.list && section.list.length > 0 && (
              <div className="pt-2">
                <ul className="space-y-3 pl-2">
                  {section.list.map((item, lIdx) => (
                    <li key={lIdx} className="flex items-start gap-3 text-base text-gray-200">
                      <span className="w-2 h-2 rounded-full bg-amber-400 mt-2 shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        ))}

        {/* Back and Booking Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-red-900/30"
        >
          <button
            onClick={() => {
              navigate('/');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-gray-300 hover:text-amber-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar para o Início</span>
          </button>

          <a
            href={SITE_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white font-bold text-xs sm:text-sm uppercase tracking-widest px-6 py-3.5 rounded border border-amber-500/60 shadow-lg shadow-red-950 transition-all active:scale-98"
          >
            <MessageCircle className="w-4 h-4 text-emerald-300" />
            <span>Agendar Aula de {pageData.title}</span>
          </a>
        </motion.div>
      </div>

      {/* Bottom CTA Banner */}
      <BottomCtaBanner
        title="VENHA HOJE PARA PUNHOS DO SUL"
        buttonText="Clique Aqui E Agende Sua Aula"
      />
    </div>
  );
};
