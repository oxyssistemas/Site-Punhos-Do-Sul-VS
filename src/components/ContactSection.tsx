import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import { SITE_INFO } from '../data/siteData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    telefone: '',
    mensagem: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nome.trim() || !formData.telefone.trim()) return;

    // Simulate sending message or redirecting to WhatsApp
    setSubmitted(true);
  };

  return (
    <section id="fale-conosco" className="py-20 sm:py-28 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 text-white relative overflow-hidden">
      {/* Top and Bottom Section Transition Masks */}
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-neutral-950 to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />

      {/* Ambient background glows */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-red-950/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3 mb-12 sm:mb-16"
        >
          <span className="inline-block text-xs sm:text-sm font-semibold tracking-[0.2em] text-red-500 uppercase px-3 py-1 rounded-full bg-red-950/40 border border-red-900/50">
            Entre em Contato
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-chinese uppercase tracking-wider text-3d-gold">
            FALE conosco
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-amber-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Location & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-8 bg-neutral-900/70 border border-red-900/40 p-6 sm:p-8 rounded-xl backdrop-blur-sm shadow-xl"
          >
            {/* Address */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-red-950/80 border border-red-800/60 flex items-center justify-center text-amber-400 shrink-0 shadow">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-200 uppercase tracking-wide font-chinese">Endereço</h3>
                  <p className="text-amber-400 font-medium text-lg mt-0.5">{SITE_INFO.address}</p>
                  <p className="text-gray-400 text-xs mt-1">Antares, Londrina - PR, 86036-030</p>
                </div>
              </div>

              {/* Phone / WhatsApp */}
              <div className="flex items-start gap-4 pt-2">
                <div className="w-12 h-12 rounded-lg bg-red-950/80 border border-red-800/60 flex items-center justify-center text-emerald-400 shrink-0 shadow">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-200 uppercase tracking-wide font-chinese">Telefone & WhatsApp</h3>
                  <a
                    href={SITE_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 font-bold text-lg mt-0.5 inline-block transition-colors"
                  >
                    {SITE_INFO.displayPhone}
                  </a>
                  <p className="text-gray-400 text-xs mt-1">Atendimento de Segunda a Sábado</p>
                </div>
              </div>
            </div>

            {/* Social Media Networks */}
            <div className="border-t border-red-900/30 pt-6 space-y-4">
              <h3 className="text-sm font-bold font-chinese uppercase tracking-widest text-amber-400">
                VISITE NOSSAS REDES SOCIAIS
              </h3>
              
              <div className="flex items-center gap-3">
                <a
                  id="contact-whatsapp"
                  href={SITE_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="w-11 h-11 rounded-lg bg-neutral-800 hover:bg-emerald-600 text-gray-200 hover:text-white flex items-center justify-center transition-all border border-neutral-700 hover:border-emerald-500 shadow hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>

                <a
                  id="contact-instagram"
                  href={SITE_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-11 h-11 rounded-lg bg-neutral-800 hover:bg-pink-600 text-gray-200 hover:text-white flex items-center justify-center transition-all border border-neutral-700 hover:border-pink-500 shadow hover:scale-105"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.13-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                <a
                  id="contact-facebook"
                  href={SITE_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-11 h-11 rounded-lg bg-neutral-800 hover:bg-blue-600 text-gray-200 hover:text-white flex items-center justify-center transition-all border border-neutral-700 hover:border-blue-500 shadow hover:scale-105"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.69 5H18V0h-3.808C10.597 0 9 1.582 9 4.615V8z"/>
                  </svg>
                </a>

                <a
                  id="contact-tiktok"
                  href={SITE_INFO.tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="w-11 h-11 rounded-lg bg-neutral-800 hover:bg-neutral-900 hover:text-cyan-400 text-gray-200 flex items-center justify-center transition-all border border-neutral-700 hover:border-cyan-400 shadow hover:scale-105"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.47c1.78-1.78 2.18-4.48 2.18-6.46V7.81a8.3 8.3 0 0 0 3.59.88V6.69z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Google Maps Embed Frame */}
            <div className="w-full h-52 rounded-lg overflow-hidden border border-red-900/40 shadow-inner">
              <iframe
                title="Localização da Academia Punhos Do Sul"
                src={SITE_INFO.mapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 bg-neutral-900/80 border border-red-900/40 p-6 sm:p-10 rounded-xl backdrop-blur-sm shadow-xl"
          >
            <h3 className="text-2xl font-bold font-chinese uppercase tracking-wider text-amber-400 mb-6">
              Contate-nos
            </h3>

            {submitted ? (
              <div className="bg-emerald-950/60 border border-emerald-600/60 p-8 rounded-lg text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h4 className="text-xl font-bold text-white uppercase font-chinese">Obrigado(a)</h4>
                <p className="text-emerald-200 text-sm">
                  Sua mensagem foi enviada com sucesso! Em breve entraremos em contato para agendar sua aula.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ nome: '', sobrenome: '', telefone: '', mensagem: '' });
                  }}
                  className="mt-4 px-6 py-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded text-xs uppercase font-semibold tracking-wider transition-colors cursor-pointer font-chinese"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="form-nome" className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5 font-chinese">
                      Nome *
                    </label>
                    <input
                      type="text"
                      id="form-nome"
                      name="nome"
                      required
                      value={formData.nome}
                      onChange={handleChange}
                      placeholder="Seu nome"
                      className="w-full bg-neutral-950 border border-neutral-700 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 rounded px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="form-sobrenome" className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5 font-chinese">
                      Sobrenome
                    </label>
                    <input
                      type="text"
                      id="form-sobrenome"
                      name="sobrenome"
                      value={formData.sobrenome}
                      onChange={handleChange}
                      placeholder="Seu sobrenome"
                      className="w-full bg-neutral-950 border border-neutral-700 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 rounded px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="form-telefone" className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5 font-chinese">
                    Telefone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="form-telefone"
                    name="telefone"
                    required
                    value={formData.telefone}
                    onChange={handleChange}
                    placeholder="(43) 99999-9999"
                    className="w-full bg-neutral-950 border border-neutral-700 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 rounded px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="form-mensagem" className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5 font-chinese">
                    Insira uma mensagem
                  </label>
                  <textarea
                    id="form-mensagem"
                    name="mensagem"
                    rows={4}
                    value={formData.mensagem}
                    onChange={handleChange}
                    placeholder="Olá, gostaria de saber mais sobre as aulas de Kung Fu..."
                    className="w-full bg-neutral-950 border border-neutral-700 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 rounded px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none transition-all resize-none"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    id="form-submit-button"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white font-bold text-sm uppercase tracking-widest px-8 py-3.5 rounded border border-amber-500/60 shadow-lg shadow-red-950 transition-all hover:shadow-red-800/40 cursor-pointer font-chinese"
                  >
                    <Send className="w-4 h-4 text-amber-300" />
                    <span>Enviar</span>
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

