'use client'
import { ChevronDown, ArrowRight, Code, Smartphone, Globe, Zap, Star} from 'lucide-react';

const HeroSection = () => {
   return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-gray-200/30 to-gray-300/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-gray-100/40 to-gray-200/40 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-gray-50/20 to-gray-100/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        
        {/* Animated particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-gray-300 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-16 w-1.5 h-1.5 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-32 right-20 w-1 h-1 bg-gray-300 rounded-full animate-ping" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-20 right-40 w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      {/* Floating icons */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-16 opacity-20 animate-float" style={{ animationDelay: '0.5s' }}>
          <Code className="w-8 h-8 text-gray-600" />
        </div>
        <div className="absolute top-1/3 right-20 opacity-15 animate-float" style={{ animationDelay: '1.5s' }}>
          <Smartphone className="w-10 h-10 text-gray-500" />
        </div>
        <div className="absolute bottom-1/3 left-20 opacity-20 animate-float" style={{ animationDelay: '2.5s' }}>
          <Globe className="w-9 h-9 text-gray-600" />
        </div>
        <div className="absolute bottom-1/4 right-16 opacity-15 animate-float" style={{ animationDelay: '3.5s' }}>
          <Zap className="w-8 h-8 text-gray-500" />
        </div>
        <div className="absolute top-1/2 left-8 opacity-10 animate-float" style={{ animationDelay: '4.5s' }}>
          <Star className="w-6 h-6 text-gray-400" />
        </div>
        <div className="absolute top-3/4 right-8 opacity-15 animate-float" style={{ animationDelay: '2s' }}>
          <Code className="w-7 h-7 text-gray-500" />
        </div>
      </div>

      {/* Geometric shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-1/4 w-12 h-12 border border-gray-300/30 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-32 left-1/3 w-8 h-8 bg-gradient-to-br from-gray-200/40 to-gray-300/40 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 right-12 w-6 h-16 bg-gradient-to-b from-gray-200/30 to-transparent transform rotate-12 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-12 w-10 h-10 border-2 border-gray-300/40 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-7xl md:text-9xl font-black mb-8 text-transparent bg-gradient-to-b from-black via-gray-800 to-gray-600 bg-clip-text tracking-tight leading-none animate-float">
            IT
            <br />
            <span className="font-light bg-gradient-to-r from-gray-600 to-gray-400 bg-clip-text">Solutions</span>
          </h1>
          
          {/* Animated underline */}
          <div className="flex justify-center mb-8">
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent animate-pulse"></div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto font-light leading-relaxed animate-float" style={{ animationDelay: '200ms' }}>
            Разрабатываем современные веб-приложения, сайты и мобильные приложения с фокусом на качество и функциональность
          </p>
          
          {/* Stats or features with animations */}
          <div className="flex justify-center gap-8 mb-12 animate-float" style={{ animationDelay: '300ms' }}>
            <div className="text-center group cursor-pointer">
              <div className="text-3xl font-bold text-gray-800 group-hover:scale-110 transition-transform duration-300">50+</div>
              <div className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">Проектов</div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-3xl font-bold text-gray-800 group-hover:scale-110 transition-transform duration-300">3+</div>
              <div className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">Года опыта</div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-3xl font-bold text-gray-800 group-hover:scale-110 transition-transform duration-300">24/7</div>
              <div className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">Поддержка</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-float" style={{ animationDelay: '400ms' }}>
            <button className="group px-12 py-5 bg-gradient-to-r from-black to-gray-800 text-white font-semibold hover:from-gray-800 hover:to-black transition-all duration-500 transform hover:scale-105 hover:shadow-2xl min-w-[200px] rounded-lg relative overflow-hidden">
              <span className="relative z-10 flex items-center justify-center">
                Начать проект
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              {/* Button glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-300"></div>
            </button>
            <button className="px-12 py-5 border-2 border-black text-black font-semibold hover:bg-black hover:text-white transition-all duration-500 transform hover:scale-105 hover:shadow-2xl min-w-[200px] rounded-lg relative overflow-hidden group">
              Портфолио
              {/* Hover effect line */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-500"></div>
            </button>
          </div>

          {/* Tech stack indicators */}
          <div className="mt-16 flex justify-center gap-6 opacity-60 animate-float" style={{ animationDelay: '600ms' }}>
            <div className="text-xs text-gray-500 font-medium tracking-wide hover:text-gray-700 transition-colors duration-300 cursor-default">REACT</div>
            <div className="text-xs text-gray-400">•</div>
            <div className="text-xs text-gray-500 font-medium tracking-wide hover:text-gray-700 transition-colors duration-300 cursor-default">NODE.JS</div>
            <div className="text-xs text-gray-400">•</div>
            <div className="text-xs text-gray-500 font-medium tracking-wide hover:text-gray-700 transition-colors duration-300 cursor-default">MOBILE</div>
            <div className="text-xs text-gray-400">•</div>
            <div className="text-xs text-gray-500 font-medium tracking-wide hover:text-gray-700 transition-colors duration-300 cursor-default">CLOUD</div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-gray-400 w-6 h-6" />
      </div>

      {/* Custom CSS for additional animations */}
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
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
}

export default HeroSection