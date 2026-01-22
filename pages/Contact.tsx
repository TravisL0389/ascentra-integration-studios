
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Mail, Clock, Shield, ArrowRight, Send, CheckCircle, RotateCcw } from 'lucide-react';

export const Contact: React.FC = () => {
  const location = useLocation();
  const initialFormState = {
    name: '',
    email: '',
    phone: '',
    company: '',
    reason: 'Custom Build',
    topic: 'Other',
    message: ''
  };

  const [formData, setFormData] = useState(initialFormState);
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const reason = params.get('reason');
    const topic = params.get('topic');
    
    if (reason) {
      setFormData(prev => ({ ...prev, reason: reason.replace(/\+/g, ' ') }));
    }
    
    if (topic) {
      const decodedTopic = topic.replace(/\+/g, ' ');
      // List of supported topics for the dropdown
      const validTopics = ['SaaS Infrastructure', 'AI & Automation', 'Global FinTech', 'Real-time Analytics', 'POS & Kiosks', 'Your idea'];
      
      const matchedTopic = validTopics.includes(decodedTopic) ? decodedTopic : 'Other';
      const messageTemplate = decodedTopic === 'Your idea' 
        ? "I have a custom idea I’d like to discuss: " 
        : `I’m interested in a ${decodedTopic} build. Here’s what I’m looking for: `;
      
      setFormData(prev => ({ 
        ...prev, 
        topic: matchedTopic,
        message: messageTemplate 
      }));
    }
  }, [location]);

  const handleReset = () => {
    setFormData(initialFormState);
    setIsSuccess(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    // Simulate form processing
    setTimeout(() => {
      setIsSending(false);
      setIsSuccess(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1500);
  };

  const sendMailFallback = () => {
    const subject = `[ASCENTRA] ${formData.topic || formData.reason} inquiry from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCompany: ${formData.company}\n\nMessage:\n${formData.message}`;
    window.location.href = `mailto:studio@ascentra.io?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-[#fafafa] flex items-center justify-center py-24 md:py-48 px-4">
        <div className="max-w-md w-full bg-white p-8 md:p-12 text-center border border-black/5 shadow-2xl reveal revealed rounded-2xl">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8">
            {/* Fixed: removed invalid md:size prop */}
            <CheckCircle size={32} />
          </div>
          <h2 className="text-2xl md:text-3xl font-black mb-4 tracking-tighter italic">Inquiry Received.</h2>
          <p className="text-sm md:text-base text-gray-500 font-medium mb-8 md:mb-10 leading-relaxed">
            Thanks, {formData.name.split(' ')[0]} — we've received your details. Our engineering team will review your project and reply within 12 hours.
          </p>
          <button 
            onClick={handleReset}
            className="w-full py-4 md:py-5 bg-black text-white font-bold text-[11px] md:text-[12px] uppercase tracking-widest hover:bg-indigo-600 transition-all"
          >
            Send another inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fafafa] pt-32 md:pt-48 pb-20 md:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32">
          <div className="reveal">
            <div className="mono text-[10px] md:text-[12px] font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] text-indigo-600 mb-6 md:mb-8">Inquiry Channel</div>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-black mb-8 md:mb-12 tracking-tighter leading-[1.1] md:leading-none italic">
              Let's build <br /> something <span className="text-gray-400">real.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-500 font-medium mb-12 md:mb-20 leading-relaxed max-w-md">
              No long sales cycles. No fluff. Direct access to high-performance engineering for your next project.
            </p>

            <div className="space-y-8 md:space-y-12">
              <div className="flex items-start group reveal" style={{ transitionDelay: '0.1s' }}>
                <div className="w-10 h-10 md:w-12 md:h-12 border border-black/5 bg-white flex items-center justify-center mr-6 md:mr-8 shrink-0 group-hover:border-black transition-all">
                  {/* Fixed: removed invalid md:size prop */}
                  <Mail className="text-black" size={18} />
                </div>
                <div>
                  <h3 className="mono text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Direct Email</h3>
                  <p className="text-base md:text-lg font-bold">studio@ascentra.io</p>
                </div>
              </div>
              <div className="flex items-start group reveal" style={{ transitionDelay: '0.2s' }}>
                <div className="w-10 h-10 md:w-12 md:h-12 border border-black/5 bg-white flex items-center justify-center mr-6 md:mr-8 shrink-0 group-hover:border-black transition-all">
                  {/* Fixed: removed invalid md:size prop */}
                  <Clock className="text-black" size={18} />
                </div>
                <div>
                  <h3 className="mono text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Response SLA</h3>
                  <p className="text-base md:text-lg font-bold">Under 12 hours, guaranteed.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 md:mt-20 pt-8 md:pt-10 border-t border-black/5 reveal" style={{ transitionDelay: '0.3s' }}>
              <button 
                onClick={sendMailFallback}
                className="inline-flex items-center text-[10px] md:text-[11px] mono font-bold uppercase tracking-widest text-indigo-600 hover:text-indigo-800 transition-colors"
              >
                Prefer your own email client? Click here <ArrowRight size={14} className="ml-2" />
              </button>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 border border-black/5 shadow-2xl shadow-black/5 reveal rounded-xl md:rounded-none" style={{ transitionDelay: '0.3s' }}>
            <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div>
                  <label className="mono text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2 md:mb-3 block">Full Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-0 py-3 md:py-4 bg-transparent border-b border-gray-200 focus:border-black outline-none transition-all font-bold text-base md:text-lg"
                    placeholder="Enter name"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="mono text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2 md:mb-3 block">Work Email *</label>
                  <input
                    type="email"
                    required
                    className="w-full px-0 py-3 md:py-4 bg-transparent border-b border-gray-200 focus:border-black outline-none transition-all font-bold text-base md:text-lg"
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div>
                  <label className="mono text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2 md:mb-3 block">Phone (Optional)</label>
                  <input
                    type="tel"
                    className="w-full px-0 py-3 md:py-4 bg-transparent border-b border-gray-200 focus:border-black outline-none transition-all font-bold text-base md:text-lg"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div>
                  <label className="mono text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2 md:mb-3 block">Company / Community</label>
                  <input
                    type="text"
                    className="w-full px-0 py-3 md:py-4 bg-transparent border-b border-gray-200 focus:border-black outline-none transition-all font-bold text-base md:text-lg"
                    placeholder="Company name"
                    value={formData.company}
                    onChange={e => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label className="mono text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2 md:mb-3 block">Inquiry Topic *</label>
                <select
                  required
                  className="w-full px-0 py-3 md:py-4 bg-transparent border-b border-gray-200 focus:border-black outline-none transition-all font-bold text-base md:text-lg appearance-none cursor-pointer"
                  value={formData.topic}
                  onChange={e => setFormData({ ...formData, topic: e.target.value })}
                >
                  <option value="SaaS Infrastructure">SaaS Infrastructure</option>
                  <option value="AI & Automation">AI & Automation</option>
                  <option value="Global FinTech">Global FinTech</option>
                  <option value="Real-time Analytics">Real-time Analytics</option>
                  <option value="POS & Kiosks">POS & Kiosks</option>
                  <option value="Your idea">Custom Idea Build</option>
                  <option value="Other">Other / General Inquiry</option>
                </select>
              </div>

              <div>
                <label className="mono text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2 md:mb-3 block">Project Message *</label>
                <textarea
                  required
                  rows={4}
                  className="w-full px-0 py-3 md:py-4 bg-transparent border-b border-gray-200 focus:border-black outline-none transition-all font-bold text-base md:text-lg resize-none"
                  placeholder="Tell us about the mission..."
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  disabled={isSending}
                  className={`flex-grow py-5 md:py-6 text-white font-bold text-[10px] md:text-[12px] uppercase tracking-[0.2em] transition-all flex items-center justify-center group ${isSending ? 'bg-gray-400' : 'bg-black hover:bg-indigo-600'}`}
                >
                  {isSending ? 'Sending Mission...' : 'Submit Inquiry'} 
                  {isSending ? <Send size={16} className="ml-3 animate-pulse" /> : <ArrowRight size={16} className="ml-3 group-hover:translate-x-2 transition-transform" />}
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-8 py-5 md:py-6 border border-black/5 text-gray-400 hover:text-black hover:border-black transition-all flex items-center justify-center rounded-lg sm:rounded-none"
                  title="Reset form"
                >
                  <RotateCcw size={16} />
                </button>
              </div>
              <p className="text-[9px] md:text-[10px] mono text-gray-400 text-center uppercase tracking-widest">
                * Required for initial engineering review.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
