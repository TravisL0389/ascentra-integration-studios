
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { ProjectCard } from '../components/ProjectCard';
import { ArrowRight, Bell, Lightbulb, Zap, Shield, Cpu, Layers } from 'lucide-react';

export const Templates: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = [
    'All', 
    'SaaS Infrastructure', 
    'AI/Automation', 
    'FinTech', 
    'Data Visualization',
    'Marketing Tech', 
    'Data/Analytics', 
    'POS/Commerce', 
    'CRM/Sales', 
    'Wellness', 
    'Operations'
  ];
  
  const templateProjects = PROJECTS.filter(p => p.badge.includes('Template'));
  
  const filteredProjects = activeFilter === 'All' 
    ? templateProjects 
    : templateProjects.filter(p => p.category === activeFilter);

  return (
    <div className="bg-gray-50/50 min-h-screen pb-24 md:pb-32">
      <div className="bg-white border-b border-black/5 pt-28 md:pt-32 pb-12 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mono text-[10px] md:text-[12px] font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] text-indigo-600 mb-4 md:mb-6">Productized Assets</div>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-black tracking-tighter mb-6 md:mb-8 italic leading-tight">Ship faster, <span className="text-gray-400">engineer less.</span></h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mb-8 md:mb-12 font-medium leading-relaxed">
            Battle-tested systems and infrastructure skeletons you can brand, deploy, and own in days. High-performance engineering, ready-to-go.
          </p>
          
          <div className="flex flex-wrap gap-2 md:gap-3">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-5 md:px-8 py-2 md:py-3 rounded-full text-[10px] md:text-[12px] font-bold uppercase tracking-widest transition-all border ${
                  activeFilter === f 
                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-xl shadow-indigo-600/20' 
                    : 'bg-white text-gray-400 border-black/5 hover:border-indigo-600 hover:text-indigo-600'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 md:mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} item={project} />
          ))}
          
          {/* Skeleton Placeholder for "Coming Soon" within the grid if filtered */}
          {activeFilter === 'All' && (
             <div className="border-2 border-dashed border-black/5 rounded-2xl md:rounded-3xl p-8 flex flex-col justify-center items-center text-center opacity-60 bg-white/30 min-h-[350px] md:min-h-[400px]">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                  {/* Fixed: removed invalid md:size prop */}
                  <ClockIcon size={18} className="text-gray-400" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-400 mb-2 italic">Next Drop Pending</h3>
                <p className="text-[10px] md:text-sm text-gray-400 font-medium mono uppercase tracking-widest">Available Q4 2025</p>
             </div>
          )}

          {filteredProjects.length === 0 && (
            <div className="col-span-full py-20 text-center border-2 border-dashed border-black/5 rounded-2xl md:rounded-3xl bg-white">
              <p className="text-gray-400 mono text-xs md:text-sm font-bold uppercase tracking-widest">More templates coming soon to this category.</p>
            </div>
          )}
        </div>

        {/* Coming Soon & Roadmap Section */}
        <section className="mt-24 md:mt-40 border-t border-black/5 pt-16 md:pt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-start">
            <div className="lg:col-span-7">
              <div className="mono text-[10px] font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] text-indigo-600 mb-4 md:mb-6 italic">Active Pipeline</div>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6 md:mb-8 leading-tight">This is just the start <br /><span className="text-gray-400">of our ecosystem.</span></h2>
              <p className="text-base md:text-lg text-gray-500 font-medium mb-8 md:mb-10 max-w-xl leading-relaxed">
                We're refactoring our most successful custom builds into productized AIS templates. Each drop is a core architecture you can own forever.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {[
                  { title: 'NeuralOps Dashboard', status: 'Alpha', icon: <Cpu size={18} />, desc: 'Real-time LLM cost monitoring & orchestration console.' },
                  { title: 'StreamEngine V3', status: 'Development', icon: <Zap size={18} />, desc: 'High-throughput webhook handler & event bridge.' },
                  { title: 'SecureVault Proxy', status: 'Testing', icon: <Shield size={18} />, desc: 'Enterprise KMS and sensitive data isolation layer.' },
                  { title: 'OrbitPay Core', status: 'Refactoring', icon: <Layers size={18} />, desc: 'Multi-tenant ledger and automated billing engine.' }
                ].map((item, idx) => (
                  <div key={idx} className="group p-6 md:p-8 bg-white border border-black/5 rounded-xl md:rounded-2xl hover:border-indigo-600 transition-all">
                    <div className="flex justify-between items-start mb-4 md:mb-6">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
                        {item.icon}
                      </div>
                      <span className={`text-[8px] md:text-[9px] mono font-bold px-2 py-0.5 rounded uppercase tracking-tighter ${
                        item.status === 'Alpha' ? 'bg-orange-50 text-orange-600' :
                        item.status === 'Development' ? 'bg-indigo-50 text-indigo-600' :
                        'bg-gray-100 text-gray-500'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                    <h4 className="font-bold text-lg md:text-xl mb-2 md:mb-3 leading-tight">{item.title}</h4>
                    <p className="text-gray-400 text-xs md:text-sm font-medium leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 w-full">
              <div className="bg-black text-white p-8 md:p-12 rounded-2xl md:rounded-3xl relative overflow-hidden shadow-2xl shadow-indigo-600/10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/20 blur-[100px] rounded-full -mr-32 -mt-32"></div>
                {/* Fixed: removed invalid md:size prop */}
                <Bell size={32} className="text-indigo-600 mb-6 md:mb-8 relative z-10" />
                <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 relative z-10 italic tracking-tight">Stay Informed.</h3>
                <p className="text-sm md:text-base text-gray-400 font-medium mb-8 md:mb-10 relative z-10 leading-relaxed">
                  Join the builders who get notified the moment a new AIS template or portfolio build drops.
                </p>
                <form className="space-y-4 relative z-10" onSubmit={(e) => { e.preventDefault(); alert('Subscribed to drop notifications.'); }}>
                  <input 
                    type="email" 
                    placeholder="name@company.com" 
                    className="w-full bg-white/5 border border-white/10 p-4 md:p-5 rounded-lg md:rounded-xl outline-none focus:border-indigo-600 transition-all font-bold text-xs md:text-sm text-white"
                  />
                  <button className="w-full bg-indigo-600 hover:bg-indigo-500 py-4 md:py-5 rounded-lg md:rounded-xl font-bold uppercase tracking-widest text-[10px] md:text-[11px] transition-all flex items-center justify-center">
                    Get Drop Alerts <ArrowRight size={14} className="ml-2" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Collaboration CTA */}
        <section className="mt-24 md:mt-32 bg-indigo-600 p-10 md:p-24 rounded-3xl md:rounded-[40px] text-center text-white relative overflow-hidden group">
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
          <Lightbulb size={40} className="mx-auto mb-8 md:mb-10 text-white/40 group-hover:scale-110 transition-transform duration-500" />
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter mb-6 md:mb-8 leading-[1] italic">
            Have an Idea for a build? <br />
            <span className="text-indigo-200">Let's collaborate.</span>
          </h2>
          <p className="text-base md:text-xl text-white/70 max-w-2xl mx-auto font-medium mb-10 md:mb-12 leading-relaxed">
            Don't see exactly what you need? We specialize in turning specific logic into productized reality. AIS partners with innovative founders to build high-performance custom systems.
          </p>
          <Link 
            to="/contact?reason=Custom+Build&ref=Template+Collaboration" 
            className="inline-flex items-center px-8 md:px-12 py-4 md:py-6 bg-white text-indigo-600 font-bold text-xs md:text-sm uppercase tracking-widest hover:bg-gray-100 transition-all shadow-xl shadow-black/10 w-full sm:w-auto justify-center"
          >
            Start Collaboration <ArrowRight size={16} className="ml-3" />
          </Link>
        </section>
      </div>
    </div>
  );
};

const ClockIcon = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);
