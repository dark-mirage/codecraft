'use client'
import { useEffect, useRef } from "react";
import { ChevronDown, ArrowRight, Code, Smartphone, Globe, Zap, Star} from 'lucide-react';

const HeroSection = () => {
   const carouselRef = useRef(null);

  useEffect(() => {
    const scroll = () => {
      if (carouselRef.current) {
        carouselRef.current.scrollLeft += 1;
        if (
          carouselRef.current.scrollLeft >=
          carouselRef.current.scrollWidth - carouselRef.current.clientWidth
        ) {
         if (carouselRef.current.scrollLeft >= carouselRef.current.scrollWidth / 2) {
            carouselRef.current.scrollLeft = 0;
          }
        }
      }
    };
    const interval = setInterval(scroll, 30); // скорость
    return () => clearInterval(interval);
  }, []);

  const techs = [
    "REACT",
    "NODE.JS",
    "VUE.JS",
    "NEXT.JS",
    "NUXT",
    "TYPESCRIPT",
    "TAILWINDCSS",
    "DJANGO",
    "FASTAPI",
    "NEST",
    "GRAPHQL",
    "POSTGRESQL",
    "MONGODB",
    "DOCKER",
    "REDIS",
  ];
  
   return (
    <section id='hero' className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden py-8 md:py-0 md:pt-8 pt-8">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-48 md:w-64 lg:w-96 h-48 md:h-64 lg:h-96 bg-gradient-to-r from-gray-200/30 to-gray-300/30 rounded-full blur-xl md:blur-2xl lg:blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 md:w-64 lg:w-96 h-48 md:h-64 lg:h-96 bg-gradient-to-r from-gray-100/40 to-gray-200/40 rounded-full blur-xl md:blur-2xl lg:blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[400px] lg:w-[600px] h-[300px] md:h-[400px] lg:h-[600px] bg-gradient-to-r from-gray-50/20 to-gray-100/20 rounded-full blur-xl md:blur-2xl lg:blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        
        {/* Animated particles */}
        <div className="absolute top-10 md:top-20 left-5 md:left-20 w-1.5 md:w-2 h-1.5 md:h-2 bg-gray-400 rounded-full animate-pulse"></div>
        <div className="absolute top-20 md:top-40 right-8 md:right-32 w-1 h-1 bg-gray-300 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-16 md:bottom-32 left-4 md:left-16 w-1 md:w-1.5 h-1 md:h-1.5 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-16 md:top-32 right-5 md:right-20 w-1 h-1 bg-gray-300 rounded-full animate-ping" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-10 md:bottom-20 right-10 md:right-40 w-1.5 md:w-2 h-1.5 md:h-2 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      {/* Floating icons */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-4 md:left-8 lg:left-16 opacity-20 animate-float" style={{ animationDelay: '0.5s' }}>
          <Code className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-gray-600" />
        </div>
        <div className="absolute top-1/3 right-5 md:right-10 lg:right-20 opacity-15 animate-float" style={{ animationDelay: '1.5s' }}>
          <Smartphone className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-gray-500" />
        </div>
        <div className="absolute bottom-1/3 left-5 md:left-10 lg:left-20 opacity-20 animate-float" style={{ animationDelay: '2.5s' }}>
          <Globe className="w-5 h-5 md:w-7 md:h-7 lg:w-9 lg:h-9 text-gray-600" />
        </div>
        <div className="absolute bottom-1/4 right-4 md:right-8 lg:right-16 opacity-15 animate-float" style={{ animationDelay: '3.5s' }}>
          <Zap className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-gray-500" />
        </div>
        <div className="absolute top-1/2 left-2 md:left-4 lg:left-8 opacity-10 animate-float" style={{ animationDelay: '4.5s' }}>
          <Star className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-gray-400" />
        </div>
        <div className="absolute top-3/4 right-2 md:right-4 lg:right-8 opacity-15 animate-float" style={{ animationDelay: '2s' }}>
          <Code className="w-4 h-4 md:w-5 md:h-5 lg:w-7 lg:h-7 text-gray-500" />
        </div>
      </div>

      {/* Geometric shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 md:top-20 right-1/4 w-8 md:w-10 lg:w-12 h-8 md:h-10 lg:h-12 border border-gray-300/30 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-16 md:bottom-32 left-1/4 md:left-1/3 w-6 md:w-7 lg:w-8 h-6 md:h-7 lg:h-8 bg-gradient-to-br from-gray-200/40 to-gray-300/40 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 right-4 md:right-8 lg:right-12 w-4 md:w-5 lg:w-6 h-10 md:h-12 lg:h-16 bg-gradient-to-b from-gray-200/30 to-transparent transform rotate-12 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-4 md:left-8 lg:left-12 w-6 md:w-8 lg:w-10 h-6 md:h-8 lg:h-10 border-2 border-gray-300/40 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-6 md:mb-8 text-transparent bg-gradient-to-b from-black via-gray-800 to-gray-600 bg-clip-text tracking-tight leading-none animate-float">
            IT
            <br />
            <span className="font-light bg-gradient-to-r from-gray-600 to-gray-400 bg-clip-text">Решения</span>
          </h1>

          {/* Animated underline */}
          <div className="flex justify-center mb-6 md:mb-8">
            <div className="w-24 md:w-28 lg:w-32 h-0.5 md:h-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent animate-pulse"></div>
          </div>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 md:mb-10 lg:mb-12 max-w-2xl md:max-w-3xl mx-auto font-light leading-relaxed animate-float" style={{ animationDelay: '200ms' }}>
            Разрабатываем современные веб-приложения, сайты и мобильные приложения с фокусом на качество и функциональность
          </p>

          {/* Stats or features with animations */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mb-8 md:mb-10 lg:mb-12 animate-float" style={{ animationDelay: '300ms' }}>
            <div className="text-center group cursor-pointer min-w-[80px] sm:min-w-[100px]">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 group-hover:scale-110 transition-transform duration-300">70% повторных заказов</div>
              <div className="text-xs sm:text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">Клиенты возвращаются снова</div>
            </div>
            {/* <div className="text-center group cursor-pointer min-w-[80px] sm:min-w-[100px]">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 group-hover:scale-110 transition-transform duration-300">3+</div>
              <div className="text-xs sm:text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">Года опыта</div>
            </div>
            <div className="text-center group cursor-pointer min-w-[80px] sm:min-w-[100px]">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 group-hover:scale-110 transition-transform duration-300">24/7</div>
              <div className="text-xs sm:text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">Поддержка</div>
            </div> */}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-6 md:gap-6 justify-center items-center animate-float" style={{ animationDelay: '400ms' }}>
             <a
                href="#contacts"
                className="group relative px-8 md:px-10 lg:px-12 py-3 md:py-4 lg:py-5 bg-gradient-to-r from-black to-gray-800 text-white font-semibold hover:from-gray-800 hover:to-black transition-all duration-500 transform hover:scale-105 hover:shadow-xl md:hover:shadow-2xl min-w-[160px] md:min-w-[180px] lg:min-w-[200px] rounded-lg md:rounded-xl overflow-hidden text-sm md:text-base flex items-center justify-center"
              >
                <span className="relative z-10 flex items-center">
                  Начать проект
                  <ArrowRight className="ml-2 w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-300"></div>
              </a>
              <a href="#portfolio" className="px-8 md:px-10 lg:px-12 py-3 md:py-4 lg:py-5 border-2 border-black text-black font-semibold hover:bg-black hover:text-white transition-all duration-500 transform hover:scale-105 hover:shadow-xl md:hover:shadow-2xl min-w-[160px] md:min-w-[180px] lg:min-w-[200px] rounded-lg md:rounded-xl relative overflow-hidden group text-sm md:text-base">
                <button className="block w-full h-full ">
                    Портфолио
                  {/* Hover effect line */}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-500"></div>
                </button>
              </a>
          </div>

          {/* Tech stack indicators */}
         <div
            ref={carouselRef}
            className="flex gap-6 whitespace-nowrap overflow-x-hidden"
          >
            {[...techs, ...techs].map((tech, index) => (
              <div
                key={index}
                className="text-xs md:text-sm text-gray-500 font-medium tracking-wide hover:text-gray-700 transition-colors duration-300 cursor-default"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-4 md:bottom-4 lg:bottom-5 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-gray-400 w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
      </div>

      {/* Custom CSS for additional animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(1deg); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
}

export default HeroSection;