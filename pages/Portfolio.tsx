
import React from 'react';
import { PROJECTS } from '../constants';
import { ProjectCard } from '../components/ProjectCard';

export const Portfolio: React.FC = () => {
  const portfolioProjects = PROJECTS.filter(p => p.badge === 'Portfolio Build');

  return (
    <div className="bg-gray-50/50 min-h-screen pb-32">
      <div className="bg-black text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-grid-pattern brightness-150"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mono text-[10px] font-bold uppercase tracking-[0.4em] text-indigo-600 mb-6">Case Studies</div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 italic">Custom <span className="text-gray-500">Engineering.</span></h1>
          <p className="text-xl text-gray-400 max-w-2xl font-medium leading-relaxed">
            From the ground up. Custom solutions built for specific operational needs and complex business logic.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {portfolioProjects.map(project => (
            <ProjectCard key={project.id} item={project} />
          ))}
        </div>
      </div>
    </div>
  );
};
