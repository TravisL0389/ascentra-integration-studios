
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar, Footer } from './components/Layout';
import { Home } from './pages/Home';
import { Templates } from './pages/Templates';
import { Portfolio } from './pages/Portfolio';
import { ProjectDetail } from './pages/ProjectDetail';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { ParticleField } from './components/effects/ParticleField';
import { useEffectsEnabled } from './hooks/useEffectsEnabled';
import { usePrefersReducedMotion } from './hooks/usePrefersReducedMotion';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Fixed Reveal Controller that re-scans on route change
const RevealOnScroll = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, { threshold: 0.1 });

    // Give the DOM a moment to render before scanning
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('.reveal');
      elements.forEach(el => {
        // Remove revealed class if we want things to re-animate on return, 
        // or just observe if not already revealed.
        observer.observe(el);
      });
    }, 100);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [pathname]); // Re-run whenever the route changes
  
  return null;
};

const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="pt-40 pb-40 max-w-3xl mx-auto px-4 text-center">
    <div className="mono text-[10px] font-bold uppercase tracking-[0.4em] text-indigo-600 mb-6 italic">Legal Documentation</div>
    <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 tracking-tighter italic leading-tight">{title}</h1>
    <div className="p-12 border border-black/5 bg-white rounded-3xl">
      <p className="text-xl text-gray-400 font-medium italic">Content is currently being finalized. <br/>Check back shortly.</p>
      <div className="mt-10 h-[1px] w-12 bg-indigo-600 mx-auto"></div>
    </div>
  </div>
);

const App: React.FC = () => {
  const [effectsEnabled, setEffectsEnabled] = useEffectsEnabled();
  const prefersReducedMotion = usePrefersReducedMotion();
  
  // Auto-disable animations if user prefers reduced motion
  const activeEffects = effectsEnabled && !prefersReducedMotion;

  return (
    <Router>
      <ScrollToTop />
      <RevealOnScroll />
      <div className={`flex flex-col min-h-screen relative ${activeEffects ? 'has-effects' : ''}`}>
        <style>{`
          :root {
            --accent-purple: #8B5CF6;
            --accent-glow: #6D28D9;
          }
          .reveal {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          }
          .reveal.revealed {
            opacity: 1;
            transform: translateY(0);
          }
          .has-effects .card-hover:hover {
            border-color: #4f46e5;
            box-shadow: 0 20px 40px -15px rgba(79, 70, 229, 0.15);
          }

          /* Flash Purple Accent Styles */
          .accent-sweep {
            position: relative;
            display: inline-block;
          }
          .accent-sweep::after {
            content: '';
            position: absolute;
            bottom: -4px;
            left: 0;
            width: 100%;
            height: 2px;
            background: var(--accent-purple);
          }
          
          .has-effects .accent-sweep::after {
            background: linear-gradient(90deg, transparent, var(--accent-purple), var(--accent-glow), var(--accent-purple), transparent);
            background-size: 200% 100%;
            animation: sweep 4s infinite linear;
          }

          .accent-pulse-box {
            border: 1px solid rgba(139, 92, 246, 0.1);
            transition: border-color 0.3s ease;
          }
          
          .has-effects .accent-pulse-box.revealed {
            animation: border-pulse 2s ease-out forwards;
          }

          @keyframes sweep {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
          }

          @keyframes border-pulse {
            0% { border-color: rgba(139, 92, 246, 0.1); box-shadow: 0 0 0 0 rgba(139, 92, 246, 0); }
            50% { border-color: rgba(139, 92, 246, 0.4); box-shadow: 0 0 20px 0 rgba(139, 92, 246, 0.1); }
            100% { border-color: rgba(139, 92, 246, 0.1); box-shadow: 0 0 0 0 rgba(139, 92, 246, 0); }
          }

          /* Custom scrollbar for tech look */
          ::-webkit-scrollbar {
            width: 8px;
          }
          ::-webkit-scrollbar-track {
            background: #fafafa;
          }
          ::-webkit-scrollbar-thumb {
            background: #e5e7eb;
            border-radius: 10px;
          }
          ::-webkit-scrollbar-thumb:hover {
            background: #4f46e5;
          }
        `}</style>
        
        <ParticleField enabled={activeEffects} />
        
        <Navbar effectsEnabled={effectsEnabled} setEffectsEnabled={setEffectsEnabled} />
        
        <main className="flex-grow relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/templates" element={<Templates />} />
            <Route path="/templates/:slug" element={<ProjectDetail />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:slug" element={<ProjectDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PlaceholderPage title="Privacy Policy" />} />
            <Route path="/terms" element={<PlaceholderPage title="Terms of Service" />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;
