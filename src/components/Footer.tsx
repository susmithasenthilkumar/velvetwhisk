import React, { useState } from 'react';
import { Sparkles, ArrowUp, Mail, Heart, Check, BookOpen, ExternalLink, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const [contactOpen, setContactOpen] = useState(false);
  const [inquirySent, setInquirySent] = useState(false);
  const [inquiryText, setInquiryText] = useState('');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSendInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryText.trim()) return;
    setInquirySent(true);
    setTimeout(() => {
      setInquirySent(false);
      setInquiryText('');
      setContactOpen(false);
    }, 2000);
  };

  return (
    <footer className="relative bg-[#0d0907] text-[#f7efe6] border-t border-white/10 pt-20 pb-12 overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#d97736]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand & Philosophy */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#d97736] to-[#78350f] p-[1px] flex items-center justify-center shadow-lg shadow-[#d97736]/20">
                <div className="w-full h-full rounded-full bg-[#1c1410] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-[#f5dfb3]" />
                </div>
              </div>
              <span className="font-serif text-xl font-bold uppercase tracking-wider text-[#fbf6ec]">
                The Art of Cake Making
              </span>
            </div>

            <p className="font-serif italic text-base text-[#d4b996] max-w-md">
              “Understanding the science, technique and creativity behind every cake.”
            </p>

            <p className="text-xs text-[#f7efe6]/65 max-w-md leading-relaxed font-light">
              An interactive educational exhibition documenting the biochemistry of batter emulsions, the thermodynamics of oven expansion, and the architectural principles of artisanal cake decoration. Strictly non-commercial and dedicated to food science literacy.
            </p>
          </div>

          {/* Documentary Chapters Navigation */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#d97736] block">
              Curated Chapters
            </span>
            <ul className="space-y-2 text-xs font-light text-[#f7efe6]/75">
              <li>
                <a href="#section-hero" className="hover:text-[#f5dfb3] transition-colors">
                  About the Exhibition
                </a>
              </li>
              <li>
                <a href="#section-ingredients" className="hover:text-[#f5dfb3] transition-colors">
                  Raw Ingredients Science
                </a>
              </li>
              <li>
                <a href="#section-mixing" className="hover:text-[#f5dfb3] transition-colors">
                  Aeration & Mixing Process
                </a>
              </li>
              <li>
                <a href="#section-baking" className="hover:text-[#f5dfb3] transition-colors">
                  Oven Thermodynamics
                </a>
              </li>
              <li>
                <a href="#section-cooling" className="hover:text-[#f5dfb3] transition-colors">
                  Cooling & Protein Lattice
                </a>
              </li>
              <li>
                <a href="#section-frosting" className="hover:text-[#f5dfb3] transition-colors">
                  The Art of Frosting
                </a>
              </li>
            </ul>
          </div>

          {/* Interactive Sections & Inquiry */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#d97736] block">
              Exploration & Notes
            </span>
            <ul className="space-y-2 text-xs font-light text-[#f7efe6]/75">
              <li>
                <a href="#section-lab" className="hover:text-[#f5dfb3] transition-colors">
                  Decoration Laboratory
                </a>
              </li>
              <li>
                <a href="#section-styles" className="hover:text-[#f5dfb3] transition-colors">
                  Global Cake Styles
                </a>
              </li>
              <li>
                <a href="#section-did-you-know" className="hover:text-[#f5dfb3] transition-colors">
                  Kitchen Science Mysteries
                </a>
              </li>
              <li>
                <a href="#section-timeline" className="hover:text-[#f5dfb3] transition-colors">
                  Complete Process Timeline
                </a>
              </li>
              <li>
                <button
                  onClick={() => setContactOpen(true)}
                  className="text-[#d97736] hover:text-[#f5dfb3] transition-colors font-medium cursor-pointer flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Curator Inquiry & Notes</span>
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#f7efe6]/50">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#d97736]" />
            <span>Information-Only Exhibition • Food Science & Pastry Artistry</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-[#d97736] hover:text-white transition-all border border-white/10 group cursor-pointer"
            title="Return to Hero"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>

      {/* Curator Inquiry Modal (Pure educational feedback / question submission) */}
      {contactOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-lg rounded-3xl glass-panel p-6 sm:p-8 border border-white/15 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#d97736]" />
                <h4 className="font-serif text-lg font-bold text-[#fbf6ec]">
                  Curator Science Inquiry
                </h4>
              </div>
              <button
                onClick={() => setContactOpen(false)}
                className="text-[#f7efe6]/50 hover:text-white p-1 rounded-lg text-sm"
              >
                ✕
              </button>
            </div>

            {inquirySent ? (
              <div className="py-8 text-center space-y-3">
                <Check className="w-10 h-10 text-emerald-400 mx-auto" />
                <p className="font-serif text-lg text-[#fbf6ec]">
                  Inquiry Received by Pastry Curators
                </p>
                <p className="text-xs text-[#f7efe6]/60">
                  Thank you for contributing to the culinary science dialogue.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSendInquiry} className="mt-4 space-y-4">
                <p className="text-xs text-[#f7efe6]/70 leading-relaxed font-light">
                  Have a question about emulsification kinetics, oven thermodynamics, or frosting chemistry? Leave a query for our pastry food scientists.
                </p>
                <div>
                  <label className="text-[11px] font-mono text-[#d97736] uppercase block mb-1">
                    Your Science Inquiry or Reflection
                  </label>
                  <textarea
                    rows={4}
                    value={inquiryText}
                    onChange={(e) => setInquiryText(e.target.value)}
                    required
                    placeholder="e.g., How does high-altitude atmospheric pressure affect cake starch gelatinization?"
                    className="w-full p-3 rounded-xl bg-black/40 border border-white/15 text-xs text-[#fbf6ec] placeholder:text-white/30 focus:outline-none focus:border-[#d97736]"
                  />
                </div>
                <div className="flex items-center justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setContactOpen(false)}
                    className="px-4 py-2 rounded-full text-xs font-mono text-[#f7efe6]/70 hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-full bg-[#d97736] hover:bg-[#b35e23] text-xs font-medium text-white shadow-lg shadow-[#d97736]/25"
                  >
                    Submit Question
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </footer>
  );
};
