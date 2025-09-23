'use client'
import { Mail, Phone, MapPin, ArrowRight, ArrowUp, Heart, Zap, Star, Globe, Code, Smartphone, Award, CheckCircle, Coffee, Users, Clock, Shield, Sparkles, Target, Circle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-white to-gray-100 border-t border-gray-200 py-12 md:py-20 relative overflow-hidden">
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large floating shapes */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-br from-gray-100/60 to-gray-200/60 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-1/4 -right-16 w-32 h-32 bg-gradient-to-bl from-gray-50/80 to-gray-100/80 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-16 left-1/3 w-48 h-48 bg-gradient-to-tr from-gray-100/40 to-gray-50/40 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        
        {/* Geometric patterns */}
        <div className="absolute top-16 left-16 w-12 h-12 border border-gray-300/40 rotate-45 animate-spin-slow hidden md:block"></div>
        <div className="absolute top-1/2 right-20 w-8 h-16 bg-gradient-to-b from-gray-200/30 to-transparent transform -rotate-12 animate-float hidden md:block" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-20 w-16 h-16 border-2 border-gray-300/50 rounded-full animate-bounce hidden md:block" style={{ animationDelay: '3s' }}></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-gray-300 rounded-full animate-ping hidden sm:block" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-gray-400 rounded-full animate-pulse hidden sm:block" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-2.5 h-2.5 bg-gray-300 rounded-full animate-ping hidden sm:block" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-gray-400 rounded-full animate-pulse hidden sm:block" style={{ animationDelay: '0.5s' }}></div>
        
        {/* Footer themed icons */}
        <div className="absolute top-1/4 left-12 opacity-6 animate-float hidden md:block" style={{ animationDelay: '2s' }}>
          <Code className="w-8 h-8 text-gray-300" />
        </div>
        <div className="absolute bottom-1/4 right-16 opacity-8 animate-float hidden md:block" style={{ animationDelay: '4s' }}>
          <Globe className="w-10 h-10 text-gray-300" />
        </div>
        <div className="absolute top-1/2 right-12 opacity-4 animate-float hidden md:block" style={{ animationDelay: '6s' }}>
          <Smartphone className="w-6 h-6 text-gray-300" />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 animate-float">
            {/* Company info with enhanced styling */}
            <div className="relative group">
              <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-gray-100/0 via-gray-100/20 to-gray-100/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl"></div>
              
              <div className="relative text-2xl sm:text-3xl font-black text-transparent bg-gradient-to-r from-black to-gray-600 bg-clip-text mb-4 md:mb-6 group-hover:scale-105 transition-transform duration-300">
                <a href="#">
                  NEXTCODE
                </a>
                {/* Animated underline */}
                <div className="absolute -bottom-1 md:-bottom-2 left-0 w-0 h-0.5 md:h-1 bg-gradient-to-r from-black to-gray-600 group-hover:w-full transition-all duration-700"></div>
                
                {/* Sparkle effect */}
                <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-gray-400 animate-pulse" />
                </div>
              </div>
              
              <p className="text-gray-600 text-sm md:text-base font-light leading-relaxed group-hover:text-gray-700 transition-colors duration-300 mb-4 md:mb-6">
                Создаем цифровые решения высочайшего качества
              </p>
              
              {/* Company stats */}
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                <div className="flex gap-3 md:gap-4 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <Award className="w-3 h-3" />
                    <span>5 лет</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    <span>35+ проектов</span>
                  </div>
                </div>
              </div>
              
              {/* Corner decoration */}
              <div className="absolute top-0 right-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                <Star className="w-3 h-3 md:w-4 md:h-4 text-gray-400 animate-pulse" />
              </div>
            </div>
            
            {/* Services section with enhanced styling */}
            <div className="relative group">
              <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-gray-100/0 via-gray-100/30 to-gray-100/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl"></div>
              
              <h4 className="relative text-black font-black mb-4 md:mb-6 text-lg md:text-xl group-hover:text-gray-800 transition-colors duration-300">
                Услуги
                {/* Icon indicator */}
                <div className="absolute -right-6 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">
                  <Code className="w-4 h-4 text-gray-400" />
                </div>
                {/* Animated underline */}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-gray-600 to-gray-800 group-hover:w-full transition-all duration-700"></div>
              </h4>
              
              <ul className="space-y-2 md:space-y-4 text-gray-600 text-sm md:text-base font-light">
                {[
                  { name: "Веб-сайты", icon: Globe },
                  { name: "Веб-приложения", icon: Code },
                  { name: "Мобильные приложения", icon: Smartphone },
                ].map((service, index) => (
                  <li key={index} className="group/item relative">
                    <a href="#services" className="flex items-center hover:text-black transition-colors duration-300 hover:font-medium group-hover/item:translate-x-2 transition-transform duration-300">
                      <service.icon className="w-3 h-3 md:w-4 md:h-4 mr-2 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                      {service.name}
                      {/* Hover indicator */}
                      <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                        <div className="w-1 h-3 md:h-4 bg-gradient-to-b from-gray-600 to-gray-800 rounded-full"></div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
              
              {/* Service count indicator */}
              <div className="mt-4 md:mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="inline-flex items-center gap-1 md:gap-2 px-2 md:px-3 py-1 bg-gray-100 rounded-full border border-gray-200/50">
                  <CheckCircle className="w-3 h-3 text-gray-600" />
                  <span className="text-xs text-gray-700 font-medium">6 направлений</span>
                </div>
              </div>
            </div>
            
            {/* Company section with enhanced styling */}
            <div className="relative group">
              <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-gray-100/0 via-gray-100/30 to-gray-100/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl"></div>
              
              <h4 className="relative text-black font-black mb-4 md:mb-6 text-lg md:text-xl group-hover:text-gray-800 transition-colors duration-300">
                Компания
                {/* Icon indicator */}
                <div className="absolute -right-6 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">
                  <Users className="w-4 h-4 text-gray-400" />
                </div>
                {/* Animated underline */}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-gray-600 to-gray-800 group-hover:w-full transition-all duration-700"></div>
              </h4>
              
              <ul className="space-y-2 md:space-y-4 text-gray-600 text-sm md:text-base font-light">
                {[
                  { name: "О нас", icon: Heart },
                  { name: "Портфолио", icon: Award },
                  { name: "Контакты", icon: Coffee }
                ].map((item, index) => (
                  <li key={index} className="group/item relative">
                    <a href="#about" className="flex items-center hover:text-black transition-colors duration-300 hover:font-medium group-hover/item:translate-x-2 transition-transform duration-300">
                      <item.icon className="w-3 h-3 md:w-4 md:h-4 mr-2 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                      {item.name}
                      {/* Hover indicator */}
                      <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                        <div className="w-1 h-3 md:h-4 bg-gradient-to-b from-gray-600 to-gray-800 rounded-full"></div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
              
              {/* Trust indicator */}
              <div className="mt-4 md:mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="inline-flex items-center gap-1 md:gap-2 px-2 md:px-3 py-1 bg-gray-100 rounded-full border border-gray-200/50">
                  <Shield className="w-3 h-3 text-gray-600" />
                  <span className="text-xs text-gray-700 font-medium">Надежный партнер</span>
                </div>
              </div>
            </div>
            
            {/* Contacts section with enhanced styling */}
            <div className="relative group">
              <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-gray-100/0 via-gray-100/30 to-gray-100/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl"></div>
              
              <h4 className="relative text-black font-black mb-4 md:mb-6 text-lg md:text-xl group-hover:text-gray-800 transition-colors duration-300">
                Контакты
                {/* Icon indicator */}
                <div className="absolute -right-6 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">
                  <Phone className="w-4 h-4 text-gray-400" />
                </div>
                {/* Animated underline */}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-gray-600 to-gray-800 group-hover:w-full transition-all duration-700"></div>
              </h4>
              
              <ul className="space-y-2 md:space-y-4 text-gray-600 text-sm md:text-base font-light">
  {[
    { 
      icon: Mail, 
      text: "nextcodeuz@gmail.com", 
      href: "mailto:nextcodeuz@gmail.com"
    },
    { 
      icon: MapPin, 
      text: "Самарканд, Узбекистан", 
      href: "https://maps.google.com/?q=Самарканд, Узбекистан"
    }
  ].map((contact, index) => (
    <li key={index} className="group/item relative">
      <a 
        href={contact.href}
        target={contact.icon === Mail ? "_self" : "_blank"}
        rel={contact.icon === Mail ? "" : "noopener noreferrer"}
        className="flex items-center group-hover/item:translate-x-2 transition-transform duration-300 cursor-pointer"
      >
        <contact.icon className="w-3 h-3 md:w-4 md:h-4 mr-2 transition-colors duration-300 group-hover/item:text-gray-800" />
        <span className="group-hover/item:text-gray-800 transition-colors duration-300 text-xs md:text-sm">{contact.text}</span>
        
        {/* Status indicator */}
        <div className="ml-1 md:ml-2 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gray-600 rounded-full animate-pulse"></div>
        </div>
        
        {/* Hover indicator */}
        <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
          <div className="w-1 h-3 md:h-4 bg-gradient-to-b from-gray-600 to-gray-800 rounded-full"></div>
        </div>

        {/* External link icon */}
        <div className="ml-1 md:ml-2 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
          <ArrowRight className="w-3 h-3 md:w-3 md:h-3 text-gray-500" />
        </div>
      </a>
    </li>
  ))}
</ul>
              
              {/* Availability indicator */}
              <div className="mt-4 md:mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="inline-flex items-center gap-1 md:gap-2 px-2 md:px-3 py-1 bg-gray-100 rounded-full border border-gray-200/50">
                  <Clock className="w-3 h-3 text-gray-600" />
                  <span className="text-xs text-gray-700 font-medium">Онлайн сейчас</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced bottom section */}
          <div className="border-t border-gray-200 mt-12 md:mt-20 pt-8 md:pt-10 text-center relative">
            {/* Decorative line animation */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent animate-pulse transition-all duration-1000 hidden md:block" style={{ width: '200px' }}></div>
            
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 animate-float" style={{ animationDelay: '800ms' }}>
              <div className="flex items-center gap-2 md:gap-4 flex-wrap justify-center">
                <p className="text-gray-500 text-xs md:text-sm font-light">&copy; 2025 NEXTCODE. Все права защищены.</p>
                
                {/* Made with love indicator */}
                <div className="hidden md:flex items-center gap-1 px-2 md:px-3 py-1 bg-gray-100 rounded-full border border-gray-200/50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs text-gray-600">Сделано с</span>
                  <Heart className="w-3 h-3 text-gray-600 animate-pulse" />
                  <span className="text-xs text-gray-600">в Москве</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 md:space-x-8 flex-wrap justify-center">
                <a href="#" className="text-gray-500 text-xs md:text-sm hover:text-black transition-colors duration-300 font-light relative group">
                  Политика конфиденциальности
                  <div className="absolute -bottom-1 left-0 w-0 h-px bg-gray-400 group-hover:w-full transition-all duration-300"></div>
                </a>
                <a href="#" className="text-gray-500 text-xs md:text-sm hover:text-black transition-colors duration-300 font-light relative group">
                  Условия использования
                  <div className="absolute -bottom-1 left-0 w-0 h-px bg-gray-400 group-hover:w-full transition-all duration-300"></div>
                </a>
                
                {/* Back to top button */}
                <button className="group w-8 h-8 md:w-10 md:h-10 bg-gray-100 hover:bg-black rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg">
                  <ArrowUp className="w-3 h-3 md:w-4 md:h-4 text-gray-600 group-hover:text-white transition-colors duration-300 group-hover:-translate-y-1 transform" />
                </button>
              </div>
            </div>
            
            {/* Bottom decorative elements */}
            <div className="mt-6 md:mt-8 flex flex-wrap justify-center gap-4 md:gap-8 opacity-50 animate-float" style={{ animationDelay: '1000ms' }}>
              <div className="flex items-center gap-1 md:gap-2 text-xs text-gray-400">
                <Zap className="w-3 h-3" />
                <span className="text-xs">Высокая производительность</span>
              </div>
              <div className="flex items-center gap-1 md:gap-2 text-xs text-gray-400">
                <Shield className="w-3 h-3" />
                <span className="text-xs">100% безопасность</span>
              </div>
              <div className="flex items-center gap-1 md:gap-2 text-xs text-gray-400">
                <Award className="w-3 h-3" />
                <span className="text-xs">Премиум качество</span>
              </div>
            </div>
            
            {/* Final decorative elements */}
            <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 opacity-0 hover:opacity-20 transition-opacity duration-500 hidden md:block">
              <Target className="w-3 h-3 md:w-4 md:h-4 text-gray-400 animate-pulse" />
            </div>
            <div className="absolute bottom-2 md:bottom-4 right-2 md:right-4 opacity-0 hover:opacity-15 transition-opacity duration-500 hidden md:block" style={{ animationDelay: '0.3s' }}>
              <Circle className="w-2 h-2 md:w-3 md:h-3 text-gray-400 animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(1deg); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 25s linear infinite;
        }
      `}</style>
    </footer>
  );
}

export default Footer;