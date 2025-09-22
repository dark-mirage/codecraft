'use client'
import { Users, Award, Clock, Code2, Palette, Zap, Star, Triangle, Circle} from 'lucide-react';

const AboutSection = () => {
 return (
    <section id="about" className="py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-16 h-16 border-2 border-gray-200/40 rotate-45 animate-spin-slow"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-gradient-to-br from-gray-100/60 to-gray-200/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-16 w-8 h-20 bg-gradient-to-t from-gray-200/30 to-transparent transform -rotate-12 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-32 w-14 h-14 border border-gray-300/50 rounded-full animate-bounce" style={{ animationDelay: '3s' }}></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-gray-300 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-gray-300 rounded-full animate-ping" style={{ animationDelay: '2.5s' }}></div>
        <div className="absolute top-3/4 right-1/3 w-2.5 h-2.5 bg-gray-300 rounded-full animate-pulse" style={{ animationDelay: '3.5s' }}></div>
        
        {/* Tech icons floating */}
        <div className="absolute top-1/3 left-20 opacity-10 animate-float" style={{ animationDelay: '1s' }}>
          <Code2 className="w-8 h-8 text-gray-500" />
        </div>
        <div className="absolute bottom-1/4 right-24 opacity-15 animate-float" style={{ animationDelay: '2s' }}>
          <Palette className="w-10 h-10 text-gray-400" />
        </div>
        <div className="absolute top-2/3 left-32 opacity-12 animate-float" style={{ animationDelay: '3s' }}>
          <Zap className="w-9 h-9 text-gray-500" />
        </div>
      </div>

      {/* Gradient overlays */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/80 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-50/80 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24 relative">
            {/* Decorative elements around title */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 flex gap-2 opacity-30">
              <Star className="w-4 h-4 text-gray-400 animate-pulse" />
              <Star className="w-3 h-3 text-gray-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
              <Star className="w-4 h-4 text-gray-400 animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
            
            <h2 className="text-6xl md:text-7xl font-black mb-8 text-transparent bg-gradient-to-b from-black to-gray-600 bg-clip-text animate-float relative">
              О нас
              {/* Animated underline */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent animate-pulse"></div>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed animate-float relative" style={{ animationDelay: '200ms' }}>
              Команда профессионалов, создающая цифровые продукты высочайшего качества. 
              Мы сосредоточены на деталях и стремимся к совершенству в каждом проекте.
            </p>
            
            {/* Floating quote marks */}
            <div className="absolute top-12 left-8 text-6xl text-gray-200 font-serif animate-float" style={{ animationDelay: '1s' }}>"</div>
            <div className="absolute top-20 right-8 text-6xl text-gray-200 font-serif rotate-180 animate-float" style={{ animationDelay: '2s' }}>"</div>
          </div>
          
          {/* Enhanced stats grid */}
          <div className="grid md:grid-cols-3 gap-16 relative">
            {/* Connection lines between stats */}
            <div className="hidden md:block absolute top-1/2 left-1/3 w-1/3 h-px bg-gradient-to-r from-gray-300/50 to-gray-300/50 transform -translate-y-1/2 animate-pulse" style={{ animationDelay: '2s' }}></div>
            <div className="hidden md:block absolute top-1/2 right-1/3 w-1/3 h-px bg-gradient-to-r from-gray-300/50 to-gray-300/50 transform -translate-y-1/2 animate-pulse" style={{ animationDelay: '3s' }}></div>
            
            {[
              { icon: Users, number: "35+", text: "Проектов реализовано", color: "from-blue-500 to-blue-700" },
              { icon: Award, number: "5", text: "Лет экспертизы", color: "from-purple-500 to-purple-700" },
              { icon: Clock, number: "24/7", text: "Техническая поддержка", color: "from-green-500 to-green-700" }
            ].map((item, index) => (
              <div key={index} className="text-center group animate-float relative" style={{ animationDelay: `${index * 200}ms` }}>
                {/* Glow effect behind icon */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-gradient-to-br from-gray-200/30 to-gray-300/30 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                
                {/* Icon container with enhanced animations */}
                <div className="relative w-24 h-24 bg-gradient-to-br from-black to-gray-700 text-white rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl group-hover:shadow-3xl">
                  <item.icon className="w-12 h-12 group-hover:scale-110 transition-transform duration-300" />
                  
                  {/* Rotating border */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:rotate-180 transition-all duration-700"></div>
                  
                  {/* Orbiting dots */}
                  <div className="absolute -inset-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-0 left-1/2 w-2 h-2 bg-gray-400 rounded-full transform -translate-x-1/2 animate-ping"></div>
                    <div className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-gray-300 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    <div className="absolute top-1/2 left-0 w-1 h-1 bg-gray-400 rounded-full transform -translate-y-1/2 animate-ping" style={{ animationDelay: '1s' }}></div>
                  </div>
                </div>
                
                {/* Number with enhanced styling */}
                <h3 className="text-4xl font-black text-black mb-4 bg-gradient-to-b from-black to-gray-600 bg-clip-text group-hover:scale-105 transition-transform duration-300 relative">
                  {item.number}
                  {/* Number glow effect */}
                  <div className="absolute inset-0 text-4xl font-black text-gray-300/30 group-hover:animate-pulse">{item.number}</div>
                </h3>
                
                {/* Text with hover effect */}
                <div className="text-gray-600 font-light group-hover:text-gray-800 transition-colors duration-300 relative">
                  {item.text}
                  {/* Animated progress bar */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-gray-400 to-gray-600 group-hover:w-full transition-all duration-500"></div>
                </div>
                
                {/* Corner decorations */}
                <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Triangle className="w-4 h-4 text-gray-300 animate-pulse" />
                </div>
                <div className="absolute -bottom-2 -left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ animationDelay: '0.2s' }}>
                  <Circle className="w-3 h-3 text-gray-300 animate-pulse" />
                </div>
              </div>
            ))}
          </div>

          {/* Additional animated elements */}
          <div className="mt-20 text-center animate-float" style={{ animationDelay: '800ms' }}>
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-600 font-medium group-hover:text-gray-800 transition-colors duration-300">Готовы к новым проектам</span>
              <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
        </div>
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
          animation: spin-slow 25s linear infinite;
        }
        
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </section>
  );
};

export default AboutSection