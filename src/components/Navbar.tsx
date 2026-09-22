import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, Sparkles, BookOpen } from 'lucide-react';
import { toggleBakeryAmbiance, isAmbiancePlaying } from '../utils/audioSynth';

export const Navbar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isAudioOn, setIsAudioOn] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleAudio = () => {
    const active = toggleBakeryAmbiance();
    setIsAudioOn(active);
  };

  const navLinks = [
    { label: 'Ingredients', href: '#section-ingredients', num: '02' },
    { label: 'Mixing', href: '#section-mixing', num: '03' },
    { label: 'Oven Science', href: '#section-baking', num: '04' },
    { label: 'Transformation', href: '#section-transformation', num: '05' },
    { label: 'Cooling', href: '#section-cooling', num: '06' },
    { label: 'Frosting', href: '#section-frosting', num: '07' },
    { label: 'Lab', href: '#section-lab', num: '08' },
    { label: 'Styles', href: '#section-styles', num: '09' },
    { label: 'Science Q&A', href: '#section-did-you-know', num: '11' },
    { label: 'Timeline', href: '#section-timeline', num: '12' },
  ];

  return (
    <>
      {/* Top thin documentary progress bar */}
      <div className="fixed top-0 left-0 w-full h-[3px] bg-black/40 z-50">
        <div
          className="h-full bg-gradient-to-r from-[#d97736] via-[#f5dfb3] to-[#d97736] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header className="fixed top-0 left-0 w-full z-40 bg-[#120e0b]/85 backdrop-blur-md border-b border-[#f7efe6]/10 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          {/* Brand / Logo */}
          <a
            href="#section-hero"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#d97736] to-[#78350f] p-[1px] flex items-center justify-center shadow-lg shadow-[#d97736]/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full rounded-full bg-[#1c1410] flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-[#f5dfb3]" />
              </div>
            </div>
            <div>
              <span className="font-serif text-base sm:text-lg font-bold tracking-wider text-[#f7efe6] uppercase block leading-tight">
                The Art of Cake Making
              </span>
              <span className="text-[10px] tracking-widest text-[#d97736] uppercase font-mono block">
                Food Science Documentary
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden xl:flex items-center gap-5 text-xs tracking-wider uppercase">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#f7efe6]/70 hover:text-[#f5dfb3] transition-colors py-1 relative group"
              >
                <span className="text-[10px] text-[#d97736] mr-1 font-mono opacity-80">{link.num}</span>
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#d97736] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Controls: Audio & Mobile Toggle */}
          <div className="flex items-center gap-3">
            {/* Ambient Audio Synthesizer Toggle */}
            <button
              id="audio-ambiance-toggle"
              onClick={handleToggleAudio}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                isAudioOn
                  ? 'bg-[#d97736]/20 border-[#d97736] text-[#f5dfb3] shadow-md shadow-[#d97736]/20'
                  : 'bg-white/5 border-white/10 text-[#f7efe6]/70 hover:text-white hover:bg-white/10'
              }`}
              title={isAudioOn ? 'Mute ambient soundscape' : 'Listen to documentary bakery ambiance'}
            >
              {isAudioOn ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-[#d97736] animate-pulse" />
                  <span className="hidden sm:inline text-[11px]">Ambiance On</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-[#f7efe6]/50" />
                  <span className="hidden sm:inline text-[11px]">Soundscape</span>
                </>
              )}
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-[#f7efe6] hover:bg-white/10 transition-colors"
              aria-label="Toggle navigation chapters"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Chapter Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#18110c]/98 border-b border-[#f7efe6]/10 px-6 py-6 transition-all">
            <div className="flex items-center gap-2 text-xs text-[#d97736] uppercase tracking-widest font-mono mb-4">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Documentary Chapters</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2.5 rounded-lg bg-white/5 border border-white/5 text-xs text-[#f7efe6]/90 hover:bg-[#d97736]/15 hover:border-[#d97736]/30 transition-all flex items-center gap-2"
                >
                  <span className="text-[10px] text-[#d97736] font-mono">{link.num}</span>
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
};
