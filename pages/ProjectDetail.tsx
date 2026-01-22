
import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { ShoppingCart, ArrowRight, Check, Rocket, ArrowLeft } from 'lucide-react';

export const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = PROJECTS.find(p => p.slug === slug);

  if (!project) return <Navigate to="/" />;

  const isTemplate = project.badge.includes('Template');

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Header Navigation */}
      <div className="pt-24 md:pt-32 pb-6 md:pb-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to={isTemplate ? '/templates' : '/portfolio'} className="inline-flex items-center text-[10px] mono font-bold uppercase tracking-widest text-gray-400 hover:text-indigo-600 transition-colors">
          <ArrowLeft size={14} className="mr-2" /> Back to {isTemplate ? 'Templates' : 'Portfolio'}
        </Link>
      </div>

      {/* Hero Section */}
      <section className="pb-16 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-10 md:gap-12">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 md:gap-6 mb-8 md:mb-10">
                <span className="mono text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-indigo-600">
                  {project.badge}
                </span>
                <span className="w-6 md:w-8 h-[1px] bg-gray-200"></span>
                <span className="mono text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-gray-400">
                  {project.category}
                </span>
              </div>
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-black mb-8 md:mb-12 tracking-tighter leading-[1.1] md:leading-none italic">
                {project.detail.heroHeadline}
              </h1>
              <p className="text-xl md:text-2xl text-gray-500 font-medium leading-relaxed max-w-2xl">
                {project.detail.heroSubhead}
              </p>
            </div>
            
            <div className="lg:w-80 w-full space-y-3 md:space-y-4 pt-4">
              {isTemplate ? (
                <>
                  <Link to="/contact" className="w-full py-4 md:py-5 bg-black text-white font-bold text-[11px] md:text-[12px] uppercase tracking-widest flex items-center justify-center hover:bg-indigo-600 transition-all shadow-xl shadow-black/10">
                    <ShoppingCart className="mr-3" size={16} /> Buy Template
                  </Link>
                  <a href="#" className="w-full py-4 md:py-5 border border-black/10 text-black font-bold text-[11px] md:text-[12px] uppercase tracking-widest flex items-center justify-center hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all">
                    View Live Demo
                  </a>
                </>
              ) : (
                <>
                  <Link to="/contact" className="w-full py-4 md:py-5 bg-black text-white font-bold text-[11px] md:text-[12px] uppercase tracking-widest flex items-center justify-center hover:bg-indigo-600 transition-all">
                    Hire Studio
                  </Link>
                  <Link to="/contact" className="w-full py-4 md:py-5 border border-black/10 text-black font-bold text-[11px] md:text-[12px] uppercase tracking-widest flex items-center justify-center hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all">
                    Request Build
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Visual Showcase */}
      <section className="bg-white border-y border-black/5 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="aspect-video sm:aspect-[21/9] bg-gray-50 border border-black/5 rounded-xl md:rounded-2xl flex items-center justify-center text-gray-300 font-bold italic tracking-tighter text-2xl md:text-3xl text-center px-6">
            {/* High-Res Device Mockup Space */}
            <span className="uppercase mono tracking-[0.2em] text-[10px] md:text-sm">Technical Implementation Visual</span>
          </div>
        </div>
      </section>

      {/* Details Grid */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-20">
            <div className="lg:col-span-8 space-y-16 md:space-y-24">
              {!isTemplate ? (
                <div className="space-y-16 md:space-y-24">
                  <div className="max-w-2xl">
                    <h2 className="mono text-[10px] font-bold uppercase tracking-[0.4em] text-indigo-600 mb-6 md:mb-8 italic">The Context</h2>
                    <h3 className="text-2xl md:text-3xl font-extrabold mb-4 md:mb-6 tracking-tight italic">The Problem</h3>
                    <p className="text-lg md:text-xl text-gray-500 font-medium leading-relaxed">{project.detail.sections.problem}</p>
                  </div>
                  <div className="max-w-2xl">
                    <h3 className="text-2xl md:text-3xl font-extrabold mb-4 md:mb-6 tracking-tight italic">The Engineering</h3>
                    <p className="text-lg md:text-xl text-gray-500 font-medium leading-relaxed">{project.detail.sections.solution}</p>
                  </div>
                  <div className="max-w-2xl">
                    <h3 className="text-2xl md:text-3xl font-extrabold mb-4 md:mb-6 tracking-tight italic">Impact & Results</h3>
                    <p className="text-lg md:text-xl text-gray-500 font-medium leading-relaxed">{project.detail.sections.outcomes}</p>
                  </div>
                </div>
              ) : (
                <div>
                  <h2 className="mono text-[10px] font-bold uppercase tracking-[0.4em] text-indigo-600 mb-10 md:mb-12 italic">Core Features</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 md:gap-y-10">
                    {project.bullets.concat(project.detail.sections.features || []).map((feature, idx) => (
                      <div key={idx} className="flex items-start pb-6 md:pb-8 border-b border-black/5 group">
                        <span className="mono text-indigo-600 font-bold mr-4 md:mr-6 text-xs group-hover:translate-x-1 transition-transform">{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}</span>
                        <span className="text-base md:text-lg font-bold text-gray-800 tracking-tight leading-snug group-hover:text-indigo-600 transition-colors">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="lg:col-span-4 w-full">
              <div className="lg:sticky lg:top-32 space-y-8 md:space-y-10">
                <div className="p-8 md:p-10 border border-black/5 bg-white rounded-xl md:rounded-none">
                  <h3 className="mono text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 mb-6 md:mb-8 italic">Technology</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.detail.sections.stack?.map(tech => (
                      <span key={tech} className="px-3 py-1.5 border border-black/10 text-[10px] md:text-[11px] mono font-bold uppercase text-black hover:text-indigo-600 hover:border-indigo-600 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-8 md:p-10 bg-black text-white relative overflow-hidden rounded-xl md:rounded-none">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/20 blur-2xl rounded-full -mr-16 -mt-16"></div>
                  <h3 className="mono text-[10px] font-bold uppercase tracking-[0.4em] text-gray-500 mb-6 md:mb-8 italic">Deployment Packages</h3>
                  <div className="space-y-6 md:space-y-8 relative z-10">
                    {project.detail.pricing?.map((block, idx) => (
                      <div key={idx} className="pb-6 md:pb-8 border-b border-white/10 last:border-0 last:pb-0">
                        <h4 className="font-bold text-white mb-3 md:mb-4 text-xs md:text-sm uppercase tracking-widest flex items-center">
                          <Rocket size={14} className="mr-3 text-indigo-600" /> {block.title}
                        </h4>
                        <ul className="space-y-2.5 md:space-y-3">
                          {block.items.map((item, i) => (
                            <li key={i} className="text-[11px] md:text-[12px] text-gray-400 font-medium flex items-center leading-relaxed">
                              <span className="w-1 h-1 rounded-full bg-indigo-600 mr-3 shrink-0"></span> {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <Link 
                    to={`/contact?reason=${isTemplate ? 'Buy+Template' : 'Custom+Build'}&template=${project.slug}`}
                    className="mt-10 md:mt-12 w-full block text-center py-4 md:py-5 bg-indigo-600 text-white font-bold text-[11px] md:text-[12px] uppercase tracking-widest hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-600/30"
                  >
                    Select Plan
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
