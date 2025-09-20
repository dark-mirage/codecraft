'use client'
import React, { useState, useEffect } from 'react';
import { Menu, X, Star, Zap, Code, Globe, Sparkles, Circle, Triangle, ArrowRight, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Track active section
      const sections = ['о-нас', 'услуги', 'портфолио', 'преимущества', 'отзывы', 'контакты'];
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
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'О нас', href: '#о-нас', icon: Star },
    { name: 'Услуги', href: '#услуги', icon: Code },
    { name: 'Портфолио', href: '#портфолио', icon: Globe },
    { name: 'Преимущества', href: '#преимущества', icon: Zap },
    { name: 'Отзывы', href: '#отзывы', icon: Sparkles },
    { name: 'Контакты', href: '#контакты', icon: Circle }
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/10 backdrop-blur-xl border-b border-white/10 shadow-2xl' 
        : 'bg-transparent'
    } relative overflow-hidden`}>
      
      {/* Background animated elements - только когда скролл */}
      {scrolled && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Subtle floating particles */}
          <div className="absolute top-2 left-1/4 w-1 h-1 bg-white/30 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-4 right-1/3 w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-2 left-1/3 w-1 h-1 bg-white/25 rounded-full animate-ping" style={{ animationDelay: '3s' }}></div>
          
          {/* Very subtle floating icons */}
          <div className="absolute top-3 left-20 opacity-10 animate-float" style={{ animationDelay: '2s' }}>
            <Code className="w-4 h-4 text-white/20" />
          </div>
          <div className="absolute top-2 right-20 opacity-15 animate-float" style={{ animationDelay: '4s' }}>
            <Zap className="w-3 h-3 text-white/20" />
          </div>
        </div>
      )}

      <nav className="container mx-auto px-6 py-6 flex justify-between items-center relative z-10">
        {/* Enhanced logo with glass effect */}
        <div className="text-2xl font-black animate-float group cursor-pointer relative">
          <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent group-hover:from-gray-200 group-hover:to-white transition-all duration-300">
            CodeCraft
          </span>
          
          {/* Logo decorations */}
          <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <Sparkles className="w-4 h-4 text-white/40 animate-pulse" />
          </div>
          <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-white/50 to-gray-200/50 group-hover:w-full transition-all duration-700"></div>
          
          {/* Brand indicator */}
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="text-xs text-white/60 font-normal whitespace-nowrap">Digital Solutions</div>
          </div>
        </div>
        
        {/* Enhanced desktop menu with glass effect */}
        <div className="hidden md:flex space-x-12 relative">
          {/* Connection line between menu items */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
          
          {menuItems.map((item, index) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <div key={item.name} className="relative group">
                <a 
                  href={item.href}
                  className={`text-white/80 hover:text-white transition-all duration-300 font-semibold relative group/link animate-float flex items-center gap-2 ${
                    isActive ? 'text-white' : ''
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Menu item icon */}
                  <item.icon className="w-4 h-4 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300" />
                  
                  {item.name}
                  
                  {/* Active indicator */}
                  {isActive && (
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gradient-to-r from-white/60 to-white/80 rounded-full animate-pulse"></div>
                  )}
                  
                  {/* Hover arrow */}
                  <div className="opacity-0 group-hover/link:opacity-100 transition-all duration-300 transform translate-x-0 group-hover/link:translate-x-1">
                    <ArrowRight className="w-3 h-3 text-white/40" />
                  </div>
                  
                  {/* Enhanced underline */}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-white/60 to-white/40 transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover/link:w-full'
                  }`}></span>
                  
                  {/* Glass glow effect */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-white/0 via-white/10 to-white/0 rounded-lg opacity-0 group-hover/link:opacity-100 transition-opacity duration-500 blur-sm"></div>
                </a>
                
                {/* Hover decoration */}
                <div className="absolute -top-3 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Star className="w-3 h-3 text-white/30 animate-pulse" />
                </div>
              </div>
            );
          })}
          
          {/* Menu end decoration */}
          <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 opacity-30">
            <div className="w-16 h-px bg-gradient-to-r from-white/30 to-transparent"></div>
          </div>
        </div>

        {/* Enhanced mobile menu button with glass effect */}
        <button 
          className="md:hidden text-white/80 animate-float relative group p-2 rounded-lg hover:bg-white/10 transition-all duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="relative">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            
            {/* Button glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-white/0 via-white/10 to-white/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Menu status indicator */}
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-white/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
          </div>
        </button>
      </nav>

      {/* Enhanced mobile menu with glass effect */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/20 backdrop-blur-2xl border-t border-white/10 relative overflow-hidden">
          {/* Mobile menu background pattern */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-4 left-4 w-2 h-2 bg-white/30 rounded-full animate-ping opacity-20"></div>
            <div className="absolute bottom-4 right-4 w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse opacity-15"></div>
            <div className="absolute top-1/2 left-1/3 w-1 h-1 bg-white/25 rounded-full animate-ping opacity-25"></div>
          </div>
          
          <div className="px-6 py-4 space-y-4 relative z-10">
            {menuItems.map((item, index) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <div key={item.name} className="relative group">
                  <a 
                    href={item.href}
                    className={`block text-white/80 hover:text-white transition-colors font-semibold animate-float flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 ${
                      isActive ? 'text-white bg-white/10' : ''
                    }`}
                    style={{ animationDelay: `${index * 50}ms` }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {/* Mobile menu icon */}
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br from-white/10 to-white/20 flex items-center justify-center transition-all duration-300 ${
                      isActive ? 'from-white/20 to-white/30' : 'group-hover:from-white/15 group-hover:to-white/25'
                    }`}>
                      <item.icon className="w-4 h-4 text-white/60 group-hover:text-white/80" />
                    </div>
                    
                    <span className="flex-1">{item.name}</span>
                    
                    {/* Active indicator */}
                    {isActive && (
                      <div className="w-2 h-2 bg-gradient-to-r from-white/60 to-white/80 rounded-full animate-pulse"></div>
                    )}
                    
                    {/* Mobile arrow */}
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-1">
                      <ArrowRight className="w-4 h-4 text-white/40" />
                    </div>
                    
                    {/* Mobile item glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                  
                  {/* Mobile item decoration */}
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <Triangle className="w-2 h-2 text-white/30 animate-pulse" />
                  </div>
                </div>
              );
            })}
            
            {/* Mobile menu footer */}
            <div className="mt-6 pt-4 border-t border-white/20">
              <div className="flex items-center justify-center gap-4 text-xs text-white/60">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
                  <span>Онлайн</span>
                </div>
                <div className="w-1 h-1 bg-white/30 rounded-full"></div>
                <span>Быстрая связь</span>
                <div className="w-1 h-1 bg-white/30 rounded-full"></div>
                <div className="flex items-center gap-1">
                  <Zap className="w-3 h-3 text-white/50" />
                  <span>24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom CSS */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-5px) rotate(0.5deg); }
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </header>
  );
};

export default Header;