import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Sparkles, ZoomIn, X, BookOpen, Award, Image as ImageIcon, Scroll } from 'lucide-react';

/**
 * CAMINHO DA IMAGEM DO PERGAMINHO:
 * Adicione o caminho da sua imagem abaixo (ex: '/images/juramentos-kung-fu.jpg' ou '/meu-pergaminho.png').
 * Quando vazio (''), exibe o espaço reservado decorativo tradicional para você personalizar.
 */
export const PERGAMINHO_IMAGE_URL = '';

const JURAMENTOS_LIST = [
  { id: 1, text: 'Eu me Comprometo a Treinar Corpo e Espírito para a Paz' },
  { id: 2, text: 'Eu me Comprometo a Reverenciar Nossos Ancestrais, Respeitar Mestre, Professores e Colegas' },
  { id: 3, text: 'Eu me Comprometo a Não ser Falso e Seguir o Caminho da Verdade' },
  { id: 4, text: 'Eu me Comprometo a Persistir no Aperfeiçoamento Físico, Mental e Espiritual' },
  { id: 5, text: 'Eu me Comprometo a Ser Paciente e Humilde, Galgando um a um os Degraus do Conhecimento' },
  { id: 6, text: 'Eu me Comprometo a Contribuir para que Nosso Meio não Ofereça Abrigo a Mal Intencionados' },
  { id: 7, text: 'Eu me Comprometo a Respeitar as Demais Filosofias e Artes Marciais' },
  { id: 8, text: 'Eu me Comprometo a Zelar Pelo Respeito Devido ao Kung Fu' },
  { id: 9, text: 'Eu me Comprometo a Ser Exemplo Vivo da Filosofia e da Ética dos Mestres.' },
];

export const JuramentosSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="juramentos" className="py-24 sm:py-32 bg-gradient-to-b from-neutral-900 via-neutral-950 to-neutral-950 text-white relative overflow-hidden">
      {/* Top and Bottom Immersive Section Gradient Blends */}
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-neutral-900 to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-neutral-950 to-transparent pointer-events-none z-10" />

      {/* Decorative background martial glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-red-900/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-10 left-10 w-80 h-80 bg-red-950/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/80 border border-amber-500/40 text-amber-400 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-1 font-chinese">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Código de Honra e Ética Marcial</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-wide uppercase font-chinese-dragon text-3d-red">
            Juramentos do Kung Fu
          </h2>
          <p className="text-base sm:text-lg font-bold font-chinese-dragon tracking-wider max-w-2xl mx-auto text-3d-gold subtitle-shadow">
            Os 9 Princípios Sagrados da Academia Punhos Do Sul — Sifu Gomes
          </p>
          <div className="w-28 h-1 bg-gradient-to-r from-red-600 via-amber-500 to-red-600 mx-auto rounded-full mt-2" />
        </motion.div>

        {/* 2-Column Grid: Floating Parchment on Left / List of 9 Oaths on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Column 1: Parchment Image or Visual Slot for User Configuration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col items-center justify-center"
          >
            {PERGAMINHO_IMAGE_URL ? (
              /* If User provided an Image URL */
              <div className="relative group max-w-md w-full flex flex-col items-center">
                <div 
                  onClick={() => setIsModalOpen(true)}
                  className="relative cursor-pointer transition-all duration-500 transform group-hover:scale-[1.03] group-hover:-translate-y-1.5"
                >
                  <img
                    src={PERGAMINHO_IMAGE_URL}
                    alt="Juramentos do Kung Fu - Sifu Gomes"
                    referrerPolicy="no-referrer"
                    className="w-full h-auto object-contain rounded-xl drop-shadow-[0_20px_40px_rgba(0,0,0,0.95)]"
                  />

                  {/* Subtle Hover Glow & Zoom Indicator directly on the Pergaminho */}
                  <div className="absolute inset-0 rounded-xl bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center backdrop-blur-[1px]">
                    <div className="p-3 bg-red-900/90 rounded-full border-2 border-amber-400 text-amber-300 shadow-2xl transform scale-90 group-hover:scale-100 transition-transform duration-200">
                      <ZoomIn className="w-6 h-6" />
                    </div>
                    <span className="mt-2 text-xs font-bold uppercase tracking-widest text-amber-300 font-chinese text-3d-gold">
                      Clique para Ampliar
                    </span>
                  </div>
                </div>

                <button
                  id="btn-expand-juramentos"
                  onClick={() => setIsModalOpen(true)}
                  className="mt-3 inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 bg-black/50 hover:bg-black/80 px-4 py-1.5 rounded-full border border-amber-500/40 backdrop-blur-sm transition-all shadow-md font-chinese uppercase tracking-wider"
                >
                  <ZoomIn className="w-3.5 h-3.5 text-amber-400" />
                  <span>Ver Pergaminho em Detalhes</span>
                </button>
              </div>
            ) : (
              /* Elegant Martial Placeholder Frame when Image is pending insertion */
              <div className="w-full max-w-md rounded-2xl border-2 border-dashed border-amber-500/50 bg-gradient-to-b from-red-950/40 via-neutral-950/80 to-red-950/30 p-8 sm:p-10 text-center flex flex-col items-center justify-center shadow-2xl shadow-black/80 relative group backdrop-blur-sm">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-red-900/80 to-neutral-950 border border-amber-500/60 flex items-center justify-center text-amber-400 shadow-xl mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Scroll className="w-10 h-10 text-amber-400" />
                </div>

                <div className="space-y-2 mb-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-400 font-chinese">
                    Espaço do Pergaminho
                  </span>
                  <h4 className="text-xl font-bold font-chinese-dragon text-3d-red">
                    Juramentos do Kung Fu
                  </h4>
                  <p className="text-xs text-gray-300 leading-relaxed max-w-xs mx-auto">
                    Insira o caminho da sua imagem do pergaminho na variável{' '}
                    <code className="text-amber-300 bg-black/60 px-1.5 py-0.5 rounded border border-amber-500/30 font-mono text-[11px]">
                      PERGAMINHO_IMAGE_URL
                    </code>{' '}
                    no código para exibi-la aqui.
                  </p>
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-900/90 border border-red-900/60 text-[11px] text-gray-400 font-mono">
                  <ImageIcon className="w-3.5 h-3.5 text-amber-400" />
                  <span>src/components/JuramentosSection.tsx</span>
                </div>
              </div>
            )}
          </motion.div>

          {/* Column 2: The 9 Oaths in High-Legibility Styled Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-3"
          >
            <div className="mb-4">
              <h3 className="text-xl sm:text-2xl font-bold font-chinese tracking-wide flex items-center gap-2.5 text-3d-gold">
                <BookOpen className="w-5 h-5 text-red-500" />
                <span>Os Mandamentos Tradicionais</span>
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm mt-1 subtitle-shadow">
                Pilares éticos e espirituais passados de geração em geração pelo Mestre:
              </p>
            </div>

            <div className="grid grid-cols-1 gap-2.5">
              {JURAMENTOS_LIST.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                  className="flex items-start gap-3.5 p-3 sm:p-3.5 rounded-xl bg-neutral-950/70 border border-red-900/30 hover:border-amber-500/50 hover:bg-neutral-900/80 transition-all duration-200 group"
                >
                  {/* Number Badge */}
                  <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-gradient-to-br from-red-800 to-red-950 border border-amber-500/50 flex items-center justify-center text-amber-300 font-bold text-xs shadow-md font-chinese">
                    {item.id}
                  </div>

                  {/* Oath Text */}
                  <p className="text-xs sm:text-sm font-medium text-gray-200 group-hover:text-amber-100 transition-colors leading-relaxed">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Signature Card */}
            <div className="mt-6 pt-4 border-t border-red-900/40 flex items-center justify-between bg-gradient-to-r from-red-950/60 to-neutral-950 p-4 rounded-xl border border-red-900/30">
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-amber-400" />
                <div>
                  <div className="text-amber-400 font-extrabold font-chinese tracking-widest text-base sm:text-lg">
                    SIFU GOMES
                  </div>
                  <div className="text-xs text-gray-400">
                    Academia Punhos Do Sul Kung Fu Shaolin
                  </div>
                </div>
              </div>
              <div className="text-right font-chinese text-amber-500 text-2xl font-bold select-none pr-2">
                武德
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Lightbox / Modal for Full Size Inspection (if image provided) */}
      <AnimatePresence>
        {isModalOpen && PERGAMINHO_IMAGE_URL && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full bg-neutral-950 rounded-2xl overflow-hidden border-2 border-amber-500/70 shadow-2xl p-2"
            >
              {/* Close Button */}
              <button
                id="btn-close-juramentos-modal"
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-neutral-900/90 text-amber-400 hover:text-white hover:bg-red-800 border border-amber-500/40 transition-colors shadow-lg"
                aria-label="Fechar"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="max-h-[85vh] overflow-y-auto rounded-xl">
                <img
                  src={PERGAMINHO_IMAGE_URL}
                  alt="Juramentos do Kung Fu - Imagem Completa"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-contain rounded-xl"
                />
              </div>

              <div className="p-3 text-center bg-neutral-900/90 border-t border-red-900/40 mt-1 rounded-b-xl flex justify-between items-center px-4">
                <span className="text-xs text-amber-400 font-chinese font-bold uppercase tracking-wider">
                  Juramentos do Kung Fu — Sifu Gomes
                </span>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-xs bg-red-800 hover:bg-red-700 text-white font-semibold px-3 py-1.5 rounded transition-colors"
                >
                  Fechar
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
