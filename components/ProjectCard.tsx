
import React from 'react';
import { Link } from 'react-router-dom';
import { ProjectItem } from '../types';
import { ShoppingCart, Settings, Eye, ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  item: ProjectItem;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ item }) => {
  const isTemplate = item.badge.includes('Template');
  
  // Standardized on the brand purple (indigo-600) for a cohesive studio aesthetic.
  const getBadgeStyles = () => {
    switch(item.badge) {
      case 'Template For Sale': 
      case 'Portfolio Build': 
        return 'text-indigo-600';
      case 'Template-Style (for sale)': 
        return 'text-indigo-600/80'; // Consistent hue, slightly softer for differentiation
      default: 
        return 'text-gray-600';
    }
  };

  const detailUrl = isTemplate ? `/templates/${item.slug}` : `/portfolio/${item.slug}`;

  return (
    <div className="group bg-white flex flex-col h-full overflow-hidden border border-black/5 hover:border-indigo-600 transition-all duration-500">
      <div className="p-8 pb-4">
        <div className={`mono text-[10px] font-bold uppercase tracking-[0.2em] ${getBadgeStyles()} mb-4`}>
          {item.badge}
        </div>
        <h3 className="text-3xl font-extrabold text-gray-900 mb-4 tracking-tight group-hover:text-indigo-600 transition-colors">
          {item.name}
        </h3>
        <p className="text-gray-500 font-medium leading-relaxed mb-8">
          {item.oneLiner}
        </p>
      </div>

      <div className="px-8 mb-8 flex-grow">
        <div className="flex flex-wrap gap-1.5">
          {item.tags.map(tag => (
            <span key={tag} className="px-2 py-0.5 border border-black/5 text-[10px] mono uppercase text-gray-400 font-bold group-hover:text-indigo-600 group-hover:border-indigo-600/20 transition-all">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="p-8 pt-0 border-t border-black/5 mt-auto">
        <div className="grid grid-cols-1 gap-2">
          {isTemplate ? (
            <div className="grid grid-cols-2 gap-2">
              <Link 
                to={detailUrl} 
                className="flex items-center justify-center px-4 py-3 bg-black text-white text-[11px] font-bold uppercase tracking-widest hover:bg-indigo-600 transition-all"
              >
                View Demo
              </Link>
              <Link 
                to="/contact" 
                className="flex items-center justify-center px-4 py-3 bg-gray-100 text-black text-[11px] font-bold uppercase tracking-widest hover:bg-indigo-600 hover:text-white transition-all"
              >
                Buy
              </Link>
              <Link 
                to={`/contact?reason=Customize+Template&template=${item.slug}`} 
                className="col-span-2 flex items-center justify-center px-4 py-3 border border-black/10 text-black text-[11px] font-bold uppercase tracking-widest hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all"
              >
                Customize <Settings size={14} className="ml-2" />
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-2">
              <Link 
                to={detailUrl} 
                className="flex items-center justify-center px-4 py-3 bg-black text-white text-[11px] font-bold uppercase tracking-widest hover:bg-indigo-600 transition-all"
              >
                View Case Study <ArrowRight size={14} className="ml-2" />
              </Link>
              <Link 
                to="/contact" 
                className="flex items-center justify-center px-4 py-3 border border-black/10 text-black text-[11px] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all"
              >
                Hire Us
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
