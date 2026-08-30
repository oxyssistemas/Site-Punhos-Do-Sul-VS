import React from 'react';
import { MessageCircle } from 'lucide-react';
import { SITE_INFO } from '../data/siteData';

export const WhatsAppButton: React.FC = () => {
  return (
    <a
      id="floating-whatsapp-button"
      href={SITE_INFO.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco no WhatsApp"
      className="fixed bottom-6 right-6 z-40 bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 sm:p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 flex items-center gap-2 group border-2 border-emerald-400/80"
    >
      <MessageCircle className="w-6 h-6 fill-white" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-xs font-bold uppercase tracking-wider">
        Agende sua Aula
      </span>
    </a>
  );
};
