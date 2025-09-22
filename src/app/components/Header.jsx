'use client'
import React, { useState, useEffect } from 'react';
import { Menu, X, Star, Zap, Code, Globe, Sparkles, Circle, ArrowRight } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Fixed: Use more specific section IDs that match actual page structure
      const sections = ['about', 'services', 'portfolio', 'advantages', 'reviews', 'contacts'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(current || '');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen]);

  const menuItems = [
    { name: 'О нас', href: '#about', icon: Star },
    { name: 'Услуги', href: '#services', icon: Code },
    { name: 'Портфолио', href: '#portfolio', icon: Globe },
    { name: 'Преимущества', href: '#advantages', icon: Zap },
    { name: 'Отзывы', href: '#reviews', icon: Sparkles },
    { name: 'Контакты', href: '#contacts', icon: Circle },
  ];

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-black/90 backdrop-blur-xl border-b border-white/10 shadow-2xl' 
          : 'bg-black'
      }`}>
        
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex justify-between items-center relative z-10">
          {/* Logo */}
          <div className="text-xl sm:text-2xl lg:text-3xl font-black cursor-pointer relative flex-shrink-0">
            <a href='#' className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              <span className="hidden xs:inline">NEXTCODE</span>
              <span className="inline xs:hidden">NEXTCODE</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-1 justify-end items-center">
            <div className="flex items-center gap-2 lg:gap-4 xl:gap-6">
              {menuItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`group flex items-center gap-1 lg:gap-2 transition-all duration-300 font-semibold px-2 lg:px-3 py-2 rounded-lg hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-white/20 ${
                      isActive 
                        ? 'text-white bg-white/10' 
                        : 'text-white/80 hover:text-white'
                    }`}
                  >
                    <item.icon className="w-3 h-3 lg:w-4 lg:h-4 transition-transform group-hover:scale-110 flex-shrink-0" />
                    <span className="text-xs lg:text-sm xl:text-base whitespace-nowrap">{item.name}</span>
                    {isActive && (
                      <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-white/80 rounded-full animate-pulse ml-1 flex-shrink-0"></div>
                    )}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white/80 p-2 sm:p-3 rounded-lg hover:bg-white/10 transition-all duration-300 hover:text-white active:scale-95 flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-white/20"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={isMenuOpen}
          >
            <div className="relative w-5 h-5 sm:w-6 sm:h-6">
              <Menu 
                className={`absolute inset-0 w-full h-full transition-all duration-300 ${
                  isMenuOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
                }`} 
              />
              <X 
                className={`absolute inset-0 w-full h-full transition-all duration-300 ${
                  isMenuOpen ? 'rotate-0 opacity-100' : 'rotate-90 opacity-0'
                }`} 
              />
            </div>
          </button>
        </nav>

        {/* Mobile Menu */}
        <div className={`md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 transition-all duration-300 overflow-hidden ${
          isMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0'
        }`}>
          <div className="px-4 sm:px-6 py-4 sm:py-6 space-y-2">
            {menuItems.map((item, index) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={handleMenuItemClick}
                  className={`flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl transition-all duration-300 font-semibold focus:outline-none focus:ring-2 focus:ring-white/20 ${
                    isActive
                      ? 'bg-gradient-to-r from-white/20 to-white/10 text-white shadow-lg'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                  style={{
                    animationDelay: `${index * 50}ms`,
                  }}
                >
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-xl transition-all duration-300 flex-shrink-0 ${
                    isActive ? 'bg-white/30 shadow-md' : 'bg-white/10'
                  }`}>
                    <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white/80" />
                  </div>
                  <span className="flex-1 text-sm sm:text-base font-medium min-w-0">{item.name}</span>
                  {isActive ? (
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-white/80 rounded-full animate-pulse flex-shrink-0"></div>
                  ) : (
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white/40 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                  )}
                </a>
              );
            })}
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 top-0"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Header;