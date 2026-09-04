import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { HomePage } from './pages/HomePage';
import { GenericSubpage } from './pages/GenericSubpage';
import { KungFuPage } from './pages/KungFuPage';
import { TaiChiPage } from './pages/TaiChiPage';
import { ChiKungPage } from './pages/ChiKungPage';
import { DefesaPessoalPage } from './pages/DefesaPessoalPage';
import { SandaPage } from './pages/SandaPage';
import { WushuPage } from './pages/WushuPage';
import { DancaDoLeaoPage } from './pages/DancaDoLeaoPage';
import { MeditacaoPage } from './pages/MeditacaoPage';
import { FilosofiaPage } from './pages/FilosofiaPage';
import { EstiloAnimalPage } from './pages/EstiloAnimalPage';
import { ArmasPage } from './pages/ArmasPage';
import { KwanKungPage } from './pages/KwanKungPage';
import { BodhidharmaPage } from './pages/BodhidharmaPage';

export function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    if (path.startsWith('#')) {
      const el = document.getElementById(path.substring(1));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Route normalizer
  const normalizedPath = decodeURIComponent(currentPath)
    .replace(/^\/+|\/+$/g, '')
    .toLowerCase();

  const renderContent = () => {
    switch (normalizedPath) {
      case '':
      case 'home':
        return <HomePage navigate={navigate} />;
      case 'estilo-animal':
        return <EstiloAnimalPage navigate={navigate} />;
      case 'armas-do-kung-fu':
        return <ArmasPage navigate={navigate} />;
      case 'kung-fu-1':
      case 'kung-fu':
        return <KungFuPage navigate={navigate} />;
      case 'tai-chi-chuan':
      case 'tai-chi':
        return <TaiChiPage navigate={navigate} />;
      case 'chi-kung':
      case 'chikung':
      case 'qi-gong':
      case 'qigong':
        return <ChiKungPage navigate={navigate} />;
      case 'defesa-pessoal':
      case 'defesa':
        return <DefesaPessoalPage navigate={navigate} />;
      case 'sanda':
      case 'sanshou':
        return <SandaPage navigate={navigate} />;
      case 'boxe-chines':
        return <HomePage navigate={navigate} initialBoxeChinesModal={true} />;
      case 'wushu':
        return <WushuPage navigate={navigate} />;
      case 'dança-do-leão':
      case 'danca-do-leao':
      case 'danca-leao':
      case 'dancadoleao':
        return <DancaDoLeaoPage navigate={navigate} />;
      case 'medtação':
      case 'medtacao':
      case 'meditacao':
      case 'meditação':
        return <MeditacaoPage navigate={navigate} />;
      case 'filosofia':
      case 'filosofia-marcial':
        return <FilosofiaPage navigate={navigate} />;
      case 'kwan-kung':
      case 'kwankung':
      case 'kwan-kun':
      case 'guan-yu':
      case 'guan-gong':
        return <KwanKungPage navigate={navigate} />;
      case 'bodhidharma':
      case 'bodidarma':
      case 'bodhiarma':
      case 'damo':
      case 'damo-zushi':
        return <BodhidharmaPage navigate={navigate} />;
      default:
        // Default to home or subpage
        return <HomePage navigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-neutral-950 text-gray-100 selection:bg-red-600 selection:text-white">
      {/* Navigation Header */}
      <Header currentPath={currentPath} navigate={navigate} />

      {/* Main Page View with Animated Transition */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={normalizedPath || 'home'}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer navigate={navigate} />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppButton />
    </div>
  );
}

export default App;

