'use client'
import { Settings, User, Clock, HeartHandshake, Star, Zap, Code, Sparkles, ArrowRight, CheckCircle } from 'lucide-react';

const AdvantagesSection = () => {
    const advantages = [
    {
      title: "Современные технологии",
      description: "Используем проверенные технологии и лучшие практики разработки для создания надежных решений",
      icon: Settings,
      color: "from-blue-500 to-blue-700"
    },
    {
      title: "Индивидуальный подход",
      description: "Каждый проект уникален — разрабатываем решения под конкретные потребности бизнеса",
      icon: User,
      color: "from-purple-500 to-purple-700"
    },
    {
      title: "Точность в сроках",
      description: "Четко планируем этапы работы и всегда информируем о ходе выполнения проекта",
      icon: Clock,
      color: "from-green-500 to-green-700"
    },
    {
      title: "Долгосрочная поддержка",
      description: "Обеспечиваем техническое сопровождение и развитие проекта после запуска",
      icon: HeartHandshake,
      color: "from-orange-500 to-orange-700"
    }
  ];

  return (
    <section id="advantages" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large geometric shapes */}
        <div className="absolute -top-10 -left-10 sm:-top-16 sm:-left-16 md:-top-20 md:-left-20 w-20 h-20 sm:w-30 sm:h-30 md:w-40 md:h-40 border border-gray-100/50 rounded-full animate-spin-slow"></div>
        <div className="absolute -bottom-16 -right-16 sm:-bottom-24 sm:-right-24 md:-bottom-32 md:-right-32 w-30 h-30 sm:w-40 sm:h-40 md:w-50 md:h-50 lg:w-60 lg:h-60 bg-gradient-to-br from-gray-50/60 to-gray-100/60 rounded-full blur-xl sm:blur-2xl md:blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 -left-8 sm:-left-12 md:-left-16 w-16 h-40 sm:w-20 sm:h-50 md:w-24 md:h-60 lg:w-32 lg:h-80 bg-gradient-to-r from-gray-50/30 to-transparent transform rotate-12 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 -right-10 sm:-right-16 md:-right-20 w-12 h-32 sm:w-16 sm:h-40 md:w-20 md:h-50 lg:w-24 lg:h-64 bg-gradient-to-l from-gray-50/30 to-transparent transform -rotate-12 animate-float" style={{ animationDelay: '3s' }}></div>
        
        {/* Floating particles */}
        <div className="absolute top-10 sm:top-16 md:top-20 left-1/4 w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 bg-gray-200/80 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-gray-300/80 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-16 sm:bottom-24 md:bottom-32 left-1/3 w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 bg-gray-200/80 rounded-full animate-ping" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-gray-300/80 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        
        {/* Floating tech icons */}
        <div className="absolute top-1/4 right-8 sm:right-12 md:right-16 opacity-5 sm:opacity-8 animate-float" style={{ animationDelay: '0.5s' }}>
          <Code className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-gray-200" />
        </div>
        <div className="absolute bottom-1/3 left-10 sm:left-16 md:left-20 opacity-6 sm:opacity-10 animate-float" style={{ animationDelay: '2.5s' }}>
          <Zap className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-gray-200" />
        </div>
        <div className="absolute top-1/2 left-8 sm:left-12 md:left-16 opacity-4 sm:opacity-6 animate-float" style={{ animationDelay: '4s' }}>
          <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-gray-200" />
        </div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-3 sm:opacity-5">
          <div className="grid grid-cols-8 sm:grid-cols-10 md:grid-cols-12 gap-2 sm:gap-3 md:gap-4 h-full">
            {Array.from({ length: 24 }).map((_, i) => (
              <div key={i} className="border-r border-gray-200 animate-pulse" style={{ animationDelay: `${i * 100}ms` }}></div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-3 sm:px-4 md:px-5 lg:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24 relative">
            {/* Decorative stars around title */}
            <div className="absolute -top-6 sm:-top-8 md:-top-10 lg:-top-12 left-1/2 transform -translate-x-1/2 flex gap-2 sm:gap-3 md:gap-4 opacity-15 sm:opacity-20">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-gray-400 animate-pulse" />
              <Star className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 text-gray-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
              <Star className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-gray-400 animate-pulse" style={{ animationDelay: '1s' }} />
              <Star className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 text-gray-400 animate-pulse" style={{ animationDelay: '1.5s' }} />
              <Star className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-gray-400 animate-pulse" style={{ animationDelay: '2s' }} />
            </div>
            
            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 sm:mb-6 md:mb-8 text-transparent bg-gradient-to-b from-black to-gray-600 bg-clip-text animate-float relative">
              Преимущества
              {/* Animated accent */}
              <div className="absolute -bottom-2 sm:-bottom-3 md:-bottom-4 lg:-bottom-6 left-1/2 transform -translate-x-1/2 w-16 sm:w-20 md:w-24 lg:w-32 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-black to-transparent animate-pulse"></div>
            </h2>
            
            <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-600 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto font-light leading-relaxed animate-float relative" style={{ animationDelay: '200ms' }}>
              Почему клиенты выбирают работу с нами
            </p>

            {/* Progress indicator */}
            <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 flex justify-center gap-1 sm:gap-2 animate-float" style={{ animationDelay: '400ms' }}>
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="w-6 sm:w-8 md:w-10 lg:w-12 h-0.5 sm:h-1 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full animate-pulse" style={{ animationDelay: `${i * 300}ms` }}></div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-16 relative">
            {/* Connection lines */}
            <div className="hidden md:block absolute top-1/2 left-1/2 w-px h-12 sm:h-16 md:h-20 lg:h-24 bg-gradient-to-b from-gray-200/30 to-gray-300/30 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ animationDelay: '2s' }}></div>
            <div className="hidden md:block absolute top-1/4 left-1/2 w-12 sm:w-16 md:w-20 lg:w-24 h-px bg-gradient-to-r from-gray-200/30 to-gray-300/30 transform -translate-x-1/2 animate-pulse" style={{ animationDelay: '3s' }}></div>
            <div className="hidden md:block absolute bottom-1/4 left-1/2 w-12 sm:w-16 md:w-20 lg:w-24 h-px bg-gradient-to-r from-gray-200/30 to-gray-300/30 transform -translate-x-1/2 animate-pulse" style={{ animationDelay: '4s' }}></div>
            
            {advantages.map((advantage, index) => (
              <div key={index} className="flex items-start space-x-4 sm:space-x-6 md:space-x-8 group animate-float relative" style={{ animationDelay: `${index * 200}ms` }}>
                {/* Background glow effect */}
                <div className="absolute -inset-2 sm:-inset-3 md:-inset-4 bg-gradient-to-r from-gray-50/0 via-gray-50/20 to-gray-50/0 rounded-xl sm:rounded-2xl lg:rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-md sm:blur-lg md:blur-xl"></div>
                
                {/* Number badge with enhanced styling */}
                <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-black to-gray-700 text-white rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0 font-black text-sm sm:text-base md:text-lg lg:text-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg sm:shadow-xl group-hover:shadow-2xl">
                  {String(index + 1).padStart(2, '0')}
                  
                  {/* Rotating border */}
                  <div className="absolute inset-0 rounded-lg sm:rounded-xl md:rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:rotate-180 transition-all duration-1000"></div>
                  
                  {/* Corner sparkles */}
                  <div className="absolute -top-0.5 -right-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-yellow-300 rounded-full animate-ping"></div>
                  </div>
                  <div className="absolute -bottom-0.5 -left-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ animationDelay: '0.2s' }}>
                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-300 rounded-full animate-pulse"></div>
                  </div>
                  
                  {/* Floating icon */}
                  <div className="absolute -top-3 sm:-top-4 md:-top-5 lg:-top-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-60 transition-all duration-500 group-hover:-translate-y-1 sm:group-hover:-translate-y-2">
                    <advantage.icon className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 text-gray-600" />
                  </div>
                </div>
                
                <div className="flex-1 relative">
                  {/* Title with enhanced styling */}
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-black mb-2 sm:mb-3 md:mb-4 group-hover:text-gray-800 transition-colors duration-300 relative">
                    {advantage.title}
                    
                    {/* Animated underline */}
                    <div className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-black to-gray-600 group-hover:w-full transition-all duration-700"></div>
                    
                    {/* Hover icon */}
                    <div className="absolute -right-4 sm:-right-6 md:-right-8 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 sm:group-hover:translate-x-2">
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-gray-400" />
                    </div>
                  </h3>
                  
                  {/* Description with enhanced styling */}
                  <p className="text-gray-600 font-light leading-relaxed text-xs sm:text-sm md:text-base lg:text-lg group-hover:text-gray-700 transition-colors duration-300 relative">
                    {advantage.description}
                  </p>
                  
                  {/* Check mark indicator */}
                  <div className="absolute -left-6 sm:-left-8 md:-left-10 lg:-left-12 top-8 sm:top-10 md:top-12 lg:top-16 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110" style={{ animationDelay: '0.3s' }}>
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-green-500" />
                  </div>
                  
                  {/* Progress dots */}
                  <div className="flex gap-0.5 sm:gap-1 mt-3 sm:mt-4 md:mt-5 lg:mt-6 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <div key={i} className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-gray-300 rounded-full animate-pulse" style={{ animationDelay: `${i * 200}ms` }}></div>
                    ))}
                  </div>
                </div>
                
                {/* Side decorative elements */}
                <div className="absolute -right-2 sm:-right-3 md:-right-4 top-4 sm:top-6 md:top-8 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 border border-gray-300 rounded-full animate-spin-slow"></div>
                </div>
                <div className="absolute -left-2 sm:-left-3 md:-left-4 bottom-4 sm:bottom-6 md:bottom-8 opacity-0 group-hover:opacity-15 transition-opacity duration-500" style={{ animationDelay: '0.5s' }}>
                  <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:w-5 lg:w-6 lg:h-6 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full animate-bounce"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA section */}
          <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-24 text-center animate-float" style={{ animationDelay: '1000ms' }}>
            <div className="inline-flex flex-col xs:flex-row items-center gap-2 sm:gap-3 md:gap-4 px-4 sm:px-5 md:px-6 lg:px-8 py-3 sm:py-4 md:py-4 lg:py-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg sm:rounded-xl md:rounded-2xl border border-gray-200/50 shadow-md sm:shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto">
              <div className="flex gap-0.5 sm:gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current animate-pulse" style={{ animationDelay: `${i * 100}ms` }} />
                ))}
              </div>
              <span className="text-xs sm:text-sm md:text-base text-gray-600 font-medium group-hover:text-gray-800 transition-colors duration-300 text-center xs:text-left">
                Более 95% клиентов рекомендуют нас
              </span>
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-ping"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-5px) rotate(0.5deg); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 30s linear infinite;
        }
        
        @media (min-width: 320px) {
          .xs\:flex-row {
            flex-direction: row;
          }
          .xs\:text-left {
            text-align: left;
          }
        }
      `}</style>
    </section>
  );
};

export default AdvantagesSection;