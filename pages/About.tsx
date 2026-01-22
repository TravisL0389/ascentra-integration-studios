
import React from 'react';
import { Target, Code2, Users, Zap, Layers, Cpu, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Header */}
      <section className="pt-32 pb-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="mono text-[10px] md:text-[12px] font-bold uppercase tracking-[0.4em] text-indigo-600 mb-6 italic">Studio Philosophy</div>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-gray-900 mb-8 tracking-tighter italic leading-[1.1]">Builder-professional <br /><span className="text-gray-400">with personality.</span></h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium">
              Ascentra Integration Studio (AIS) is a high-performance engineering lab specialized in operational logic. We don’t just build "apps"—we build the systems that help businesses run leaner, faster, and more intelligently.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          <div className="reveal">
            <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-6">
              <Code2 className="text-indigo-600" size={24} />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-4 italic">Engineering First</h3>
            <p className="text-gray-500 font-medium leading-relaxed">I prioritize stable logic and clean architecture over fancy animations that break. If it doesn't work under load, it doesn't ship.</p>
          </div>
          <div className="reveal" style={{ transitionDelay: '0.1s' }}>
            <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-6">
              <Target className="text-indigo-600" size={24} />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-4 italic">Product Obsessed</h3>
            <p className="text-gray-500 font-medium leading-relaxed">Every build is treated like a standalone product. I focus on UX that actually saves users time, not just looks pretty in a mockup.</p>
          </div>
          <div className="reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-6">
              <Users className="text-indigo-600" size={24} />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-4 italic">Partner, Not Vendor</h3>
            <p className="text-gray-500 font-medium leading-relaxed">I work with a handful of clients at a time to ensure high quality and deep understanding of their business goals.</p>
          </div>
        </div>
      </section>

      {/* Methodology Section: The AIS Approach */}
      <section className="py-24 md:py-40 bg-gray-50 border-y border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-start">
            <div className="lg:col-span-5 reveal">
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-8 italic">Our Two-Path <br /><span className="text-indigo-600">Methodology.</span></h2>
              <p className="text-lg text-gray-500 font-medium mb-10 leading-relaxed">
                We believe companies shouldn't waste engineering budget on "solved" problems. Our approach splits your requirements into two distinct paths: Efficiency vs. Innovation.
              </p>
              <div className="p-8 bg-white border border-black/5 rounded-2xl shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
                  <h4 className="mono text-[10px] font-bold uppercase tracking-widest text-black">The Core Belief</h4>
                </div>
                <p className="text-sm md:text-base font-bold text-gray-900 leading-relaxed italic">
                  "If a battle-tested template exists for 80% of your build, buy it. Spend your remaining 20% budget on the custom logic that makes you a unicorn."
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-10 border border-black/5 rounded-2xl md:rounded-3xl hover:border-indigo-600 transition-all group reveal" style={{ transitionDelay: '0.1s' }}>
                <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 mb-8 group-hover:scale-110 transition-transform">
                  <Zap size={24} />
                </div>
                <h3 className="text-xl md:text-2xl font-extrabold mb-4 italic">Productized Templates</h3>
                <p className="text-sm text-gray-500 font-medium leading-relaxed mb-8">
                  For common operational needs—billing, dashboards, marketing tracking—we offer "Productized Assets." These aren't just themes; they are full-stack infrastructure skeletons you own forever.
                </p>
                <ul className="space-y-3 mb-10">
                  <li className="flex items-center text-xs font-bold text-gray-900 uppercase tracking-tight">
                    <Layers size={14} className="mr-3 text-indigo-600" /> Ownership of source code
                  </li>
                  <li className="flex items-center text-xs font-bold text-gray-900 uppercase tracking-tight">
                    <Layers size={14} className="mr-3 text-indigo-600" /> Production-ready in days
                  </li>
                  <li className="flex items-center text-xs font-bold text-gray-900 uppercase tracking-tight">
                    <Layers size={14} className="mr-3 text-indigo-600" /> No recurring licensing fees
                  </li>
                </ul>
                <Link to="/templates" className="inline-flex items-center text-[10px] mono font-bold uppercase tracking-widest text-indigo-600 group-hover:gap-2 transition-all">
                  Browse Templates <ArrowRight size={14} className="ml-2" />
                </Link>
              </div>

              <div className="bg-black text-white p-10 rounded-2xl md:rounded-3xl hover:shadow-2xl hover:shadow-indigo-600/10 transition-all group reveal" style={{ transitionDelay: '0.2s' }}>
                <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform">
                  <Cpu size={24} />
                </div>
                <h3 className="text-xl md:text-2xl font-extrabold mb-4 italic">Custom Engineering</h3>
                <p className="text-sm text-gray-400 font-medium leading-relaxed mb-8">
                  When you are building proprietary logic, unique workflows, or complex integrations that don't exist in a box, we provide end-to-end custom engineering. 
                </p>
                <ul className="space-y-3 mb-10">
                  <li className="flex items-center text-xs font-bold text-gray-100 uppercase tracking-tight">
                    <Layers size={14} className="mr-3 text-indigo-600" /> Niche operational logic
                  </li>
                  <li className="flex items-center text-xs font-bold text-gray-100 uppercase tracking-tight">
                    <Layers size={14} className="mr-3 text-indigo-600" /> Industrial data viz
                  </li>
                  <li className="flex items-center text-xs font-bold text-gray-100 uppercase tracking-tight">
                    <Layers size={14} className="mr-3 text-indigo-600" /> Multi-tenant SaaS cores
                  </li>
                </ul>
                <Link to="/portfolio" className="inline-flex items-center text-[10px] mono font-bold uppercase tracking-widest text-indigo-400 group-hover:gap-2 transition-all">
                  View Case Studies <ArrowRight size={14} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team/Direct Contact CTA */}
      <section className="py-24 md:py-40">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-8 italic tracking-tighter">Ready to architect?</h2>
          <p className="text-lg text-gray-500 font-medium mb-12 leading-relaxed">
            Whether you're looking for a fast template deployment or a 6-month custom engineering partnership, our studio is built to deliver high-integrity results.
          </p>
          <Link to="/contact" className="inline-flex items-center px-10 py-5 bg-black text-white font-bold text-xs uppercase tracking-widest hover:bg-indigo-600 transition-all shadow-xl shadow-black/10">
            Start a Conversation <ArrowRight size={16} className="ml-3" />
          </Link>
        </div>
      </section>
    </div>
  );
};
