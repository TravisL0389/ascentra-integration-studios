
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { ProjectCard } from '../components/ProjectCard';
import { MoveDown, ArrowRight, CheckCircle2 } from 'lucide-react';

const SCOPE_DATA = [
  { 
    title: 'SaaS Infrastructure', 
    desc: 'Secure, multi-tenant foundations for high-scale apps.',
    points: ['Multi-tenant data isolation', 'Custom RBAC systems', 'Enterprise SSO (SAML/OIDC)'],
    note: 'Built to scale horizontally. We prioritize zero-downtime migrations and secure subdomain-based routing.'
  },
  { 
    title: 'AI & Automation', 
    desc: 'LLM orchestration and intelligent workflow engines.',
    points: ['Agentic prompt chaining', 'Vector DB synchronization', 'Function calling & Tool use'],
    note: 'We build persistent memory systems and visual logic builders that allow agents to execute complex tasks.'
  },
  { 
    title: 'Global FinTech', 
    desc: 'Multi-currency ledgers and automated billing logic.',
    points: ['Real-time currency hedging', 'Automated tax nexus logic', 'Ledger-accurate reconciliation'],
    note: 'Engineered for financial integrity. Our systems handle complex subscription logic and cross-border orchestration.'
  },
  { 
    title: 'Real-time Analytics', 
    desc: 'High-throughput data viz and industrial monitoring.',
    points: ['WebSocket stream handling', 'Sub-100ms latency processing', 'Historical time-series storage'],
    note: 'Precision at scale. We use specialized D3.js layers to visualize tens of thousands of data points per second.'
  },
  { 
    title: 'POS & Kiosks', 
    desc: 'Hardware-integrated ordering systems for commerce.',
    points: ['Offline-first local sync', 'Hardware bridge (Printers/Scanners)', 'Omnichannel inventory sync'],
    note: 'Reliability where it counts. Our POS systems are built to withstand network outages while maintaining perfect sync.'
  },
  { 
    title: 'Your idea', 
    desc: 'Custom builds for unique operational requirements.',
    points: [
      'Rapid prototyping + MVP planning',
      'Automation + integrations (CRM, POS, inventory, dashboards)',
      'AI-ready workflows (chat, concierge, assistants)',
      'Mobile + web experiences',
      'Deploy + handoff support'
    ],
    note: 'We specialize in turning unique logic into high-performance reality. Whether it is a niche industrial tool or a novel consumer platform, we build it to scale.'
  }
];

export const Home: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [fade, setFade] = useState(true);

  // Select a diverse set of featured projects
  const featured = PROJECTS.filter(p => ['nexus-saas-core', 'agentflow-visual', 'dataorbit-dashboard'].includes(p.slug));

  const handleSelect = (idx: number) => {
    if (idx === selectedIdx) return;
    setFade(false);
    setTimeout(() => {
      setSelectedIdx(idx);
      setFade(true);
    }, 150);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col bg-[#fafafa]">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center pt-24 md:pt-32 pb-16 md:pb-20 px-4 relative bg-grid-pattern overflow-hidden">
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="mono text-[10px] md:text-[12px] font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] mb-6 md:mb-8 flex items-center reveal">
            <span className="w-8 md:w-12 h-[1px] bg-indigo-600 mr-3 md:mr-4"></span> 
            <span className="text-black">ASCENTRA</span> 
            <span className="text-indigo-600 mx-1.5 md:mx-2 text-[8px] md:text-inherit">INTEGRATION</span> 
            <span className="text-black">STUDIOS</span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-9xl font-[850] tracking-tighter mb-8 md:mb-12 text-black leading-[0.95] md:leading-[0.9] reveal italic" style={{ transitionDelay: '0.1s' }}>
            Building real <br />
            <span className="text-gray-400">systems</span> <br />
            that ship
          </h1>
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 md:gap-12 reveal" style={{ transitionDelay: '0.2s' }}>
            <p className="text-lg md:text-2xl text-gray-500 max-w-xl font-medium leading-relaxed">
              Productized templates when you want speed. Custom builds when you want something specific. Either way—clean UX, solid logic, and integrations that actually work.
            </p>
            <div className="flex flex-wrap gap-3 md:gap-4 w-full md:w-auto">
              <Link to="/templates" className="flex-grow md:flex-grow-0 px-8 md:px-10 py-4 md:py-5 bg-black text-white font-bold text-xs md:text-sm uppercase tracking-widest hover:bg-indigo-600 transition-all shadow-xl shadow-black/10 text-center">
                Templates
              </Link>
              <Link to="/portfolio" className="flex-grow md:flex-grow-0 px-8 md:px-10 py-4 md:py-5 bg-white border border-black/10 text-black font-bold text-xs md:text-sm uppercase tracking-widest hover:border-black transition-all text-center">
                Portfolio
              </Link>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 text-gray-300 flex flex-col items-center animate-bounce">
          <span className="mono text-[8px] md:text-[10px] font-bold uppercase tracking-widest mb-1.5 md:mb-2 text-indigo-600">Scroll</span>
          <MoveDown size={18} className="text-indigo-600" />
        </div>
      </section>

      {/* Credibility Section: Real Systems Shipped */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full reveal">
        <div className="accent-pulse-box bg-white p-8 sm:p-12 md:p-20 rounded-3xl md:rounded-[40px] shadow-sm flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 md:gap-16 reveal">
          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter mb-6 md:mb-8 leading-tight italic">
              <span className="accent-sweep">Real Systems.</span> <br />
              Shipped.
            </h2>
            <p className="text-lg md:text-xl text-gray-500 font-medium mb-8 md:mb-10 leading-relaxed">
              We don’t build mockups. We build production-ready systems—web + mobile—designed to launch, scale, and stay maintainable.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-8 w-full sm:w-auto">
              <Link 
                to="/contact?reason=Custom+Build" 
                className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-black text-white font-bold text-xs md:text-sm uppercase tracking-widest hover:bg-indigo-600 transition-all shadow-xl shadow-black/10 text-center"
              >
                Start a Build Inquiry
              </Link>
              <button 
                onClick={() => scrollToSection('featured-projects')}
                className="group flex items-center text-[10px] md:text-[11px] mono font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-gray-400 hover:text-black transition-all"
              >
                See What’s Shipping <ArrowRight size={14} className="ml-2 md:ml-3 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:gap-8 w-full lg:max-w-xs border-t lg:border-t-0 lg:border-l border-black/5 pt-10 lg:pt-0 lg:pl-16">
            {[
              { text: 'End-to-end builds (UI → backend → deploy)' },
              { text: 'Automations, integrations, and AI-ready workflows' },
              { text: 'Clean handoff so your team can own it' }
            ].map((bullet, idx) => (
              <div key={idx} className="flex items-start gap-3 md:gap-4 reveal" style={{ transitionDelay: `${0.1 * idx}s` }}>
                {/* Fixed: removed invalid md:size prop */}
                <CheckCircle2 className="text-indigo-600 shrink-0 mt-1" size={18} />
                <span className="text-base md:text-lg font-bold text-gray-900 tracking-tight leading-snug">{bullet.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Grid */}
      <section id="featured-projects" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full reveal">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-6 md:gap-8">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight text-black mb-3 md:mb-4 italic leading-none">Featured Engineering</h2>
            <p className="text-gray-500 font-medium">Core infrastructure and custom platforms built in-studio.</p>
          </div>
          <Link to="/portfolio" className="px-6 py-2.5 border border-black/5 rounded-full text-[10px] md:text-[12px] font-bold uppercase tracking-widest hover:border-indigo-600 hover:text-indigo-600 transition-all">
            Browse all builds
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {featured.map((project, idx) => (
            <div key={project.id} className="reveal h-full" style={{ transitionDelay: `${idx * 0.1}s` }}>
              <ProjectCard item={project} />
            </div>
          ))}
        </div>
      </section>

      {/* Capabilities Section - Integrated Interactive List */}
      <section className="py-20 md:py-32 bg-white border-y border-black/5 reveal overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-10 md:mb-16">Technical Scope</h2>
              <div className="space-y-8 md:space-y-10">
                {SCOPE_DATA.map((item, idx) => (
                  <button 
                    key={idx} 
                    onClick={() => handleSelect(idx)}
                    className="group flex items-start text-left w-full outline-none reveal"
                    style={{ transitionDelay: `${idx * 0.05}s` }}
                  >
                    <span className={`mono font-bold mr-4 md:mr-6 text-lg md:text-xl transition-colors ${selectedIdx === idx ? 'text-indigo-600' : 'text-gray-300 group-hover:text-indigo-600'}`}>
                      0{idx + 1}
                    </span>
                    <div>
                      <h3 className={`text-xl md:text-2xl font-bold mb-1.5 md:mb-2 transition-colors ${selectedIdx === idx ? 'text-indigo-600' : 'text-gray-900 group-hover:text-indigo-600'}`}>
                        {item.title}
                      </h3>
                      <p className="text-sm md:text-base text-gray-500 font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="h-full">
              <div className="bg-black text-white p-8 md:p-12 rounded-2xl md:rounded-3xl relative overflow-hidden min-h-[450px] md:min-h-[500px] flex flex-col reveal" style={{ transitionDelay: '0.3s' }}>
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                
                <div className={`transition-all duration-300 flex-grow ${fade ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  <div className="mono text-[10px] font-bold uppercase tracking-[0.4em] text-gray-500 mb-8 md:mb-12 italic">Engineering Highlight</div>
                  
                  <h4 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6 italic tracking-tight">{SCOPE_DATA[selectedIdx].title === 'Your idea' ? 'Your Idea (Custom Build)' : SCOPE_DATA[selectedIdx].title}</h4>
                  <p className="text-sm md:text-lg text-gray-400 font-medium leading-relaxed mb-8 md:mb-10">
                    {SCOPE_DATA[selectedIdx].note}
                  </p>
                  
                  <div className="space-y-4">
                    <h5 className="mono text-[10px] font-bold uppercase tracking-widest text-indigo-600 mb-3 md:mb-4">{SCOPE_DATA[selectedIdx].title === 'Your idea' ? 'Core Capabilities' : 'Integration Focus'}</h5>
                    <ul className="grid grid-cols-1 gap-3 md:gap-4">
                      {SCOPE_DATA[selectedIdx].points.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-center text-[12px] md:text-[13px] font-bold text-gray-300">
                          {/* Fixed: removed invalid md:size prop */}
                          <CheckCircle2 size={14} className="text-indigo-600 mr-2.5 md:mr-3 shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-10 md:mt-12 pt-6 md:pt-8 border-t border-white/10">
                  <Link 
                    to={`/contact?reason=Custom+Build&topic=${SCOPE_DATA[selectedIdx].title.replace(/\s/g, '+')}`} 
                    className="inline-flex items-center text-[10px] md:text-[11px] mono font-bold uppercase tracking-widest text-indigo-400 hover:text-indigo-300 transition-colors group"
                  >
                    Inquire about {SCOPE_DATA[selectedIdx].title === 'Your idea' ? 'your custom idea' : `${SCOPE_DATA[selectedIdx].title.split(' ')[0]} build`} 
                    <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 md:py-40 reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-24 reveal">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 md:mb-6">Built for speed.</h2>
            <p className="text-lg md:text-xl text-gray-500 font-medium max-w-2xl mx-auto leading-relaxed">Pick a battle-tested template or start custom. We bridge the gap between idea and deployment in record time.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 border border-black/5 bg-white shadow-sm reveal">
            {[
              { num: '01', title: 'Pick Direction', text: 'Select a template license or define a project scope for custom engineering.' },
              { num: '02', title: 'Configure', text: 'Brand and integrate with your existing tech stack and workflows in days.' },
              { num: '03', title: 'Deploy', text: 'Launch with enterprise-grade reliability and ongoing architectural support.' },
            ].map((step, idx) => (
              <div key={idx} className={`p-10 md:p-16 reveal ${idx !== 2 ? 'border-b md:border-b-0 md:border-r border-black/5' : ''}`} style={{ transitionDelay: `${idx * 0.15}s` }}>
                <div className="mono text-indigo-600 font-bold mb-6 md:mb-8 text-xs md:text-sm tracking-widest">STEP {step.num}</div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 italic">{step.title}</h3>
                <p className="text-sm md:text-base text-gray-500 leading-relaxed font-medium">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-black py-24 md:py-40 text-center relative overflow-hidden reveal">
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-grid-pattern brightness-150"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl sm:text-5xl md:text-8xl font-extrabold text-white mb-10 md:mb-16 tracking-tighter leading-[1.1] md:leading-none reveal italic">
            Want this done fast— <br />
            <span className="text-indigo-600">and done right?</span>
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 reveal" style={{ transitionDelay: '0.1s' }}>
            <Link to="/templates" className="w-full sm:w-auto px-10 md:px-12 py-5 md:py-6 bg-white text-black font-bold text-xs md:text-sm uppercase tracking-widest hover:bg-gray-200 transition-all text-center">
              Buy a Template
            </Link>
            <Link to="/contact?reason=Custom+Build" className="w-full sm:w-auto px-10 md:px-12 py-5 md:py-6 bg-indigo-600 text-white font-bold text-xs md:text-sm uppercase tracking-widest hover:bg-indigo-500 transition-all shadow-xl shadow-indigo-600/20 text-center">
              Request a Custom Build
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
