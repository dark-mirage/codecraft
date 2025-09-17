'use client'
import React, { useState, useEffect } from 'react';
import { Menu, X, } from 'lucide-react';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-xl shadow-2xl border-b border-gray-100' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 py-6 flex justify-between items-center">
        <div className="text-2xl font-black text-black animate-float">
          <span className="bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">WebStudio</span>
        </div>
        
        <div className="hidden md:flex space-x-12">
          {['О нас', 'Услуги', 'Портфолио', 'Преимущества', 'Отзывы', 'Контакты'].map((item, index) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} 
               className="text-gray-700 hover:text-black transition-all duration-300 font-semibold relative group animate-float"
               style={{ animationDelay: `${index * 100}ms` }}>
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-black to-gray-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <button 
          className="md:hidden text-black animate-float"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100">
          <div className="px-6 py-4 space-y-4">
            {['О нас', 'Услуги', 'Портфолио', 'Преимущества', 'Отзывы', 'Контакты'].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} 
                 className="block text-gray-700 hover:text-black transition-colors font-semibold animate-float">
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header