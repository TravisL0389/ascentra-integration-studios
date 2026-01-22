
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Zap, ZapOff } from 'lucide-react';

interface NavbarProps {
  effectsEnabled?: boolean;
  setEffectsEnabled?: (val: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ effectsEnabled, setEffectsEnabled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  // Close menu on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen && 
        menuRef.current && 
        !menuRef.current.contains(event.target as Node) &&
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Templates', path: '/templates' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4 md:py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass rounded-full border border-black/5 px-4 md:px-6 h-14 md:h-16 flex justify-between items-center shadow-sm">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="text-xl md:text-2xl font-black tracking-tighter text-black group-hover:text-indigo-600 transition-colors">
                AIS<span className="text-indigo-600">.</span>
              </div>
              <div className="hidden sm:flex flex-col leading-[0.85] border-l border-black/10 pl-3">
                <span className="text-[10px] font-black uppercase tracking-tight text-gray-900 group-hover:text-indigo-600 transition-colors">Ascentra</span>
                <span className="text-[10px] font-bold uppercase tracking-tight text-indigo-600">Integration</span>
                <span className="text-[10px] font-black uppercase tracking-tight text-gray-900 group-hover:text-indigo-600 transition-colors">Studio</span>
              </div>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[12px] font-bold uppercase tracking-widest transition-all ${
                  location.pathname === link.path ? 'text-indigo-600' : 'text-gray-500 hover:text-black'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {setEffectsEnabled && (
              <button 
                onClick={() => setEffectsEnabled(!effectsEnabled)}
                className={`p-2 rounded-full transition-all border ${effectsEnabled ? 'text-indigo-600 border-indigo-600/20 bg-indigo-50/50' : 'text-gray-300 border-transparent hover:text-gray-500'}`}
                title={effectsEnabled ? "Disable Effects" : "Enable Effects"}
              >
                {effectsEnabled ? <Zap size={16} /> : <ZapOff size={16} />}
              </button>
            )}

            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-2 rounded-full bg-black text-white text-[12px] font-bold uppercase tracking-widest hover:bg-indigo-600 transition-all shadow-lg shadow-black/5"
            >
              Hire Us
            </Link>
          </div>

          <div className="md:hidden flex items-center space-x-2">
             {setEffectsEnabled && (
              <button 
                onClick={() => setEffectsEnabled(!effectsEnabled)}
                className={`p-1.5 rounded-full transition-all border ${effectsEnabled ? 'text-indigo-600 border-indigo-600/20' : 'text-gray-300 border-transparent'}`}
              >
                {effectsEnabled ? <Zap size={14} /> : <ZapOff size={14} />}
              </button>
            )}
            <button 
              ref={toggleButtonRef}
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-900 p-1.5"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div 
          ref={menuRef}
          className="mx-4 mt-2 md:hidden glass rounded-3xl border border-black/5 p-6 space-y-4 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200"
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block text-2xl font-bold text-gray-900"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center py-4 rounded-2xl bg-black text-white font-bold"
          >
            Hire Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-black/5 pt-20 md:pt-32 pb-12 md:pb-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-16 mb-16 md:mb-24">
          <div className="max-w-md w-full">
            <Link to="/" className="text-xl md:text-2xl font-extrabold tracking-tighter mb-6 md:mb-8 flex items-center uppercase hover:text-indigo-600 transition-colors">
              ASCENTRA <span className="mx-2 text-indigo-600">INTEGRATION</span> STUDIOS
            </Link>
            <p className="text-lg md:text-xl text-gray-500 font-medium leading-relaxed">
              We ship high-performance systems for companies that value speed, logic, and clean implementation.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:gap-20 w-full md:w-auto">
            <div>
              <h4 className="mono text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-6 md:mb-8">Studio</h4>
              <ul className="space-y-3 md:space-y-4 text-[14px] md:text-[15px] font-semibold">
                <li><Link to="/templates" className="hover:text-indigo-600 transition-colors">Templates</Link></li>
                <li><Link to="/portfolio" className="hover:text-indigo-600 transition-colors">Portfolio</Link></li>
                <li><Link to="/about" className="hover:text-indigo-600 transition-colors">Philosophy</Link></li>
                <li><Link to="/contact" className="hover:text-indigo-600 transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="mono text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-6 md:mb-8">Social</h4>
              <ul className="space-y-3 md:space-y-4 text-[14px] md:text-[15px] font-semibold">
                <li><Link to="/contact" className="hover:text-indigo-600 transition-colors">Hire Us</Link></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors flex items-center">LinkedIn <ArrowUpRight size={14} className="ml-1" /></a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors flex items-center">Twitter <ArrowUpRight size={14} className="ml-1" /></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 md:pt-12 border-t border-black/5 text-[10px] md:text-[12px] mono uppercase tracking-widest text-gray-400 font-medium text-center md:text-left">
          <p className="mb-6 md:mb-0">© {new Date().getFullYear()} Ascentra Integration Studios. Built to last.</p>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <Link to="/privacy" className="hover:text-black transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-black transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
