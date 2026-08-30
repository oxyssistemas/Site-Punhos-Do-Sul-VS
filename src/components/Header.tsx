import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, X, MessageCircle } from 'lucide-react';
import { SITE_INFO, MODALITIES_NAV, PRIMARY_NAV_ITEMS, MASTERS_NAV_ITEMS } from '../data/siteData';

interface HeaderProps {
  currentPath: string;
  navigate: (path: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, navigate }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLinkClick = (href: string) => {
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
    if (href.startsWith('#')) {
      if (currentPath !== '/') {
        navigate('/');
        setTimeout(() => {
          const el = document.getElementById(href.substring(1));
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else {
        const el = document.getElementById(href.substring(1));
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(href);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const isModalitiesActive = MODALITIES_NAV.some((m) => m.href === currentPath);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-neutral-950/95 backdrop-blur-md shadow-xl border-b border-red-900/40' : 'bg-gradient-to-b from-neutral-950 via-neutral-950/90 to-transparent'}`}>
      {/* Top Banner with phone & martial quote */}
      <div className="bg-gradient-to-r from-red-950 via-red-900 to-red-950 text-white text-xs py-1.5 px-4 border-b border-red-800/40 font-chinese tracking-wider">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="hidden sm:inline text-red-200">Academia de Kung Fu Tradicional Shaolin • Londrina - PR</span>
            <span className="sm:hidden text-red-200">Kung Fu Shaolin • Londrina</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              id="header-top-whatsapp-link"
              href={SITE_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-amber-300 hover:text-white font-medium transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span className="font-sans text-xs font-semibold">{SITE_INFO.displayPhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24">
          {/* Logo Area */}
          <button
            id="brand-home-link"
            onClick={() => handleLinkClick('/')}
            className="flex items-center focus:outline-none group py-1 shrink-0"
            title="Início"
          >
            <div className="relative h-14 sm:h-16 md:h-20 w-auto min-w-[50px] max-w-[200px] flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
              <img
                src={SITE_INFO.logoPlaceholder}
                alt="Logo da Academia"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
                className="h-full w-auto max-h-16 sm:max-h-20 object-contain drop-shadow-lg"
              />
              
              {/* Visual Fallback */}
              <div
                style={{ display: 'none' }}
                className="h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-gradient-to-br from-red-600 via-red-900 to-neutral-950 border-2 border-amber-400/90 items-center justify-center p-2 shadow-xl shadow-red-950/80 group-hover:border-amber-300 transition-all flex"
              >
                <span className="text-amber-400 font-bold text-2xl sm:text-3xl font-chinese select-none">武</span>
              </div>
            </div>
          </button>

          {/* Desktop Navigation with Chinese Takeaway Font */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 font-chinese">
            <button
              id="nav-home-button"
              onClick={() => handleLinkClick('/')}
              className={`text-sm xl:text-base font-bold tracking-wider uppercase transition-all duration-200 whitespace-nowrap ${currentPath === '/' ? 'text-amber-400 border-b-2 border-amber-400 pb-0.5' : 'text-gray-300 hover:text-amber-300'}`}
            >
              Início
            </button>

            {/* Modalidades Dropdown */}
            <div
              className="relative py-2"
              ref={dropdownRef}
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button
                id="nav-modalidades-dropdown"
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsDropdownOpen((prev) => !prev);
                }}
                className={`flex items-center gap-1.5 text-sm xl:text-base font-bold tracking-wider uppercase transition-all duration-200 whitespace-nowrap cursor-pointer ${
                  isModalitiesActive
                    ? 'text-amber-400 border-b-2 border-amber-400 pb-0.5'
                    : isDropdownOpen
                    ? 'text-amber-300'
                    : 'text-gray-300 hover:text-amber-300'
                }`}
                aria-expanded={isDropdownOpen}
                aria-haspopup="true"
              >
                <span>Modalidades</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    isDropdownOpen ? 'rotate-180 text-amber-400' : ''
                  }`}
                />
              </button>

              {/* Dropdown Menu with bridge */}
              {isDropdownOpen && (
                <div
                  className="absolute top-full left-0 pt-2 w-64 z-[100] animate-in fade-in slide-in-from-top-2 duration-150"
                  role="menu"
                >
                  <div className="bg-neutral-950/98 backdrop-blur-md border border-red-900/70 rounded-xl shadow-2xl py-2 max-h-[75vh] overflow-y-auto ring-1 ring-amber-500/20">
                    <div className="px-4 py-2 text-xs font-bold tracking-widest text-amber-500 uppercase border-b border-red-900/40 mb-1 font-chinese flex items-center justify-between">
                      <span>Modalidades</span>
                      <span className="text-[10px] text-gray-400 font-sans">9 Estilos</span>
                    </div>
                    {MODALITIES_NAV.map((item) => (
                      <button
                        key={item.href}
                        id={`dropdown-item-${item.href.replace(/[^a-zA-Z0-9]/g, '-')}`}
                        type="button"
                        onClick={() => handleLinkClick(item.href)}
                        className={`w-full text-left px-4 py-2.5 text-sm font-medium tracking-wide transition-all flex items-center justify-between group font-chinese cursor-pointer ${
                          currentPath === item.href
                            ? 'bg-red-900/60 text-amber-400 font-bold border-l-2 border-amber-400 pl-3.5'
                            : 'text-gray-200 hover:bg-red-950/80 hover:text-amber-300 hover:pl-5'
                        }`}
                        role="menuitem"
                      >
                        <span>{item.name}</span>
                        <span className="text-amber-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                          ›
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Individual Navigation Items (Estilo Animal & Armas) */}
            {PRIMARY_NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                id={`nav-${item.name.toLowerCase().replace(/[^a-zA-Z0-9]/g, '-')}`}
                onClick={() => handleLinkClick(item.href)}
                className={`text-sm xl:text-base font-bold tracking-wider uppercase transition-all duration-200 whitespace-nowrap ${currentPath === item.href ? 'text-amber-400 border-b-2 border-amber-400 pb-0.5' : 'text-gray-300 hover:text-amber-300'}`}
              >
                {item.name}
              </button>
            ))}

            {/* Fale Conosco link */}
            <button
              id="nav-contact-button"
              onClick={() => handleLinkClick('#fale-conosco')}
              className="text-sm xl:text-base font-bold tracking-wider uppercase text-gray-300 hover:text-amber-300 transition-all duration-200 whitespace-nowrap"
            >
              Fale Conosco
            </button>

            {/* Social Icons in Header */}
            <div className="flex items-center gap-2 pl-2 border-l border-red-900/50">
              <a
                id="social-header-whatsapp"
                href={SITE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-7 h-7 xl:w-8 xl:h-8 rounded-full bg-neutral-800/80 hover:bg-emerald-600 text-gray-300 hover:text-white flex items-center justify-center transition-all border border-neutral-700 hover:border-emerald-500 shadow"
              >
                <MessageCircle className="w-3.5 h-3.5 xl:w-4 xl:h-4" />
              </a>
              <a
                id="social-header-instagram"
                href={SITE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-7 h-7 xl:w-8 xl:h-8 rounded-full bg-neutral-800/80 hover:bg-pink-600 text-gray-300 hover:text-white flex items-center justify-center transition-all border border-neutral-700 hover:border-pink-500 shadow"
              >
                <svg className="w-3.5 h-3.5 xl:w-4 xl:h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.13-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                id="social-header-facebook"
                href={SITE_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-7 h-7 xl:w-8 xl:h-8 rounded-full bg-neutral-800/80 hover:bg-blue-600 text-gray-300 hover:text-white flex items-center justify-center transition-all border border-neutral-700 hover:border-blue-500 shadow"
              >
                <svg className="w-3.5 h-3.5 xl:w-4 xl:h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.69 5H18V0h-3.808C10.597 0 9 1.582 9 4.615V8z"/>
                </svg>
              </a>
            </div>

            {/* CTA Button */}
            <a
              id="header-cta-button"
              href={SITE_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white text-xs xl:text-sm font-bold uppercase tracking-wider px-3.5 py-2 xl:px-4 xl:py-2.5 rounded border border-amber-500/60 shadow-md shadow-red-950 hover:shadow-red-900/50 hover:border-amber-400 transition-all active:scale-95 whitespace-nowrap font-chinese shrink-0"
            >
              Agende Sua Aula
            </a>
          </nav>

          {/* Medium Screen (md to lg) Navigation */}
          <nav className="hidden md:flex lg:hidden items-center gap-3 font-chinese">
            <button
              onClick={() => handleLinkClick('/')}
              className={`text-sm font-bold uppercase tracking-wider ${currentPath === '/' ? 'text-amber-400' : 'text-gray-300'}`}
            >
              Início
            </button>

            {/* Modalidades Dropdown */}
            <div
              className="relative py-1"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsDropdownOpen((prev) => !prev);
                }}
                className={`flex items-center gap-1 text-sm font-bold uppercase tracking-wider cursor-pointer ${
                  isModalitiesActive ? 'text-amber-400' : 'text-gray-300 hover:text-amber-300'
                }`}
              >
                <span>Modalidades</span>
                <ChevronDown className={`w-3 h-3 ${isDropdownOpen ? 'rotate-180 text-amber-400' : ''}`} />
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full left-0 pt-2 w-56 z-[100]">
                  <div className="bg-neutral-950/98 backdrop-blur-md border border-red-900/70 rounded-xl shadow-2xl py-2 max-h-[75vh] overflow-y-auto">
                    <div className="px-3 py-1 text-[11px] font-bold text-amber-500 uppercase border-b border-red-900/40 mb-1 font-chinese">
                      Modalidades
                    </div>
                    {MODALITIES_NAV.map((item) => (
                      <button
                        key={item.href}
                        type="button"
                        onClick={() => handleLinkClick(item.href)}
                        className={`w-full text-left px-3 py-2 text-sm font-chinese cursor-pointer transition-colors ${
                          currentPath === item.href
                            ? 'bg-red-900/60 text-amber-400 font-bold border-l-2 border-amber-400 pl-2.5'
                            : 'text-gray-200 hover:bg-red-950/80 hover:text-amber-300'
                        }`}
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Estilo Animal & Armas on medium screens */}
            {PRIMARY_NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                onClick={() => handleLinkClick(item.href)}
                className={`text-sm font-bold uppercase tracking-wider whitespace-nowrap ${currentPath === item.href ? 'text-amber-400' : 'text-gray-300 hover:text-amber-300'}`}
              >
                {item.name}
              </button>
            ))}

            <a
              href={SITE_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-red-700 to-red-600 text-white text-xs font-bold uppercase px-3 py-1.5 rounded border border-amber-500/60 shadow whitespace-nowrap"
            >
              Agendar
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2.5 rounded-lg bg-neutral-900 border border-red-900/50 text-amber-400 hover:text-white hover:bg-red-950 focus:outline-none"
            aria-label="Abrir Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Linha abaixo com Kwan Kung e Bodhidharma */}
      <div className="hidden md:block border-b border-red-900/60 bg-neutral-950/95 py-2.5 px-4 sm:px-6 lg:px-8 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-8 font-chinese">
          {MASTERS_NAV_ITEMS.map((item) => (
            <button
              key={item.href}
              id={`nav-sub-${item.name.toLowerCase().replace(/[^a-zA-Z0-9]/g, '-')}`}
              onClick={() => handleLinkClick(item.href)}
              className={`text-sm md:text-base font-bold tracking-wider uppercase transition-all duration-200 ${
                currentPath === item.href
                  ? 'text-amber-400 border-b-2 border-amber-400 pb-0.5'
                  : 'text-gray-300 hover:text-amber-300'
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-neutral-950/98 border-b border-red-900/40 px-4 pt-2 pb-6 max-h-[85vh] overflow-y-auto font-chinese">
          <div className="flex flex-col gap-2 pt-2">
            <button
              id="mobile-nav-home"
              onClick={() => handleLinkClick('/')}
              className={`text-left px-3 py-2 rounded text-lg font-bold uppercase tracking-wider ${currentPath === '/' ? 'bg-red-900/40 text-amber-400' : 'text-gray-200'}`}
            >
              Início
            </button>

            {/* Estilo Animal, Armas, Kwan Kung e Bodhidharma */}
            <div className="border-t border-red-900/30 my-1 pt-2 space-y-1">
              {PRIMARY_NAV_ITEMS.map((item) => (
                <button
                  key={item.href}
                  id={`mobile-primary-${item.name.toLowerCase().replace(/[^a-zA-Z0-9]/g, '-')}`}
                  onClick={() => handleLinkClick(item.href)}
                  className={`w-full text-left px-3 py-2 text-base rounded font-bold uppercase tracking-wider font-chinese ${currentPath === item.href ? 'bg-red-900/40 text-amber-300 font-bold' : 'text-gray-200 hover:bg-red-950/50'}`}
                >
                  {item.name}
                </button>
              ))}
              {MASTERS_NAV_ITEMS.map((item) => (
                <button
                  key={item.href}
                  id={`mobile-master-${item.name.toLowerCase().replace(/[^a-zA-Z0-9]/g, '-')}`}
                  onClick={() => handleLinkClick(item.href)}
                  className={`w-full text-left px-3 py-2 text-base rounded font-bold uppercase tracking-wider font-chinese ${currentPath === item.href ? 'bg-red-900/50 text-amber-300 font-bold' : 'text-gray-200 hover:bg-red-950/50'}`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Modalidades Group */}
            <div className="border-t border-red-900/30 my-1 pt-2">
              <div className="px-3 py-1 text-xs font-bold text-amber-500 uppercase tracking-widest font-chinese">
                Modalidades Praticadas
              </div>
              <div className="grid grid-cols-1 gap-1 pl-2 mt-1">
                {MODALITIES_NAV.map((item) => (
                  <button
                    key={item.href}
                    id={`mobile-item-${item.href.replace(/[^a-zA-Z0-9]/g, '-')}`}
                    onClick={() => handleLinkClick(item.href)}
                    className={`text-left px-3 py-1.5 text-base rounded font-chinese ${currentPath === item.href ? 'bg-red-900/40 text-amber-300 font-bold' : 'text-gray-300 hover:bg-red-950/50'}`}
                  >
                    • {item.name}
                  </button>
                ))}
              </div>
            </div>

            <button
              id="mobile-nav-contact"
              onClick={() => handleLinkClick('#fale-conosco')}
              className="text-left px-3 py-2 rounded text-lg font-bold uppercase tracking-wider text-gray-200 hover:bg-red-950/50 border-t border-red-900/30 pt-3"
            >
              Fale Conosco
            </button>

            {/* Mobile CTA */}
            <div className="mt-4 pt-4 border-t border-red-900/40 flex flex-col gap-3">
              <a
                id="mobile-whatsapp-cta"
                href={SITE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center bg-gradient-to-r from-red-700 to-red-600 text-white font-bold uppercase tracking-wider py-3.5 rounded border border-amber-500/60 shadow-lg text-sm flex items-center justify-center gap-2 font-chinese"
              >
                <MessageCircle className="w-4 h-4 text-emerald-300" />
                <span>Clique Aqui E Agende Sua Aula</span>
              </a>

              <div className="flex justify-center items-center gap-4 pt-2">
                <a href={SITE_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-emerald-400 p-2">
                  <MessageCircle className="w-5 h-5" />
                </a>
                <a href={SITE_INFO.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-400 p-2">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.13-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href={SITE_INFO.facebookUrl} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 p-2">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.69 5H18V0h-3.808C10.597 0 9 1.582 9 4.615V8z"/></svg>
                </a>
                <a href={SITE_INFO.tiktokUrl} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white p-2">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.47c1.78-1.78 2.18-4.48 2.18-6.46V7.81a8.3 8.3 0 0 0 3.59.88V6.69z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};


