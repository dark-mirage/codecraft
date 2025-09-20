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
    <section id="преимущества" className="py-32 bg-white relative overflow-hidden">
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large geometric shapes */}
        <div className="absolute -top-20 -left-20 w-40 h-40 border-2 border-gray-100/60 rounded-full animate-spin-slow"></div>
        <div className="absolute -bottom-32 -right-32 w-60 h-60 bg-gradient-to-br from-gray-50/80 to-gray-100/80 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 -left-16 w-32 h-80 bg-gradient-to-r from-gray-50/40 to-transparent transform rotate-12 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 -right-20 w-24 h-64 bg-gradient-to-l from-gray-50/40 to-transparent transform -rotate-12 animate-float" style={{ animationDelay: '3s' }}></div>
        
        {/* Floating particles */}
        <div className="absolute top-20 left-1/4 w-3 h-3 bg-gray-200 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-gray-300 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 left-1/3 w-2.5 h-2.5 bg-gray-200 rounded-full animate-ping" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-3/4 right-1/3 w-1.5 h-1.5 bg-gray-300 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        
        {/* Floating tech icons */}
        <div className="absolute top-1/4 right-16 opacity-8 animate-float" style={{ animationDelay: '0.5s' }}>
          <Code className="w-12 h-12 text-gray-200" />
        </div>
        <div className="absolute bottom-1/3 left-20 opacity-10 animate-float" style={{ animationDelay: '2.5s' }}>
          <Zap className="w-10 h-10 text-gray-200" />
        </div>
        <div className="absolute top-1/2 left-16 opacity-6 animate-float" style={{ animationDelay: '4s' }}>
          <Sparkles className="w-8 h-8 text-gray-200" />
        </div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 gap-4 h-full">
            {Array.from({ length: 48 }).map((_, i) => (
              <div key={i} className="border-r border-gray-200 animate-pulse" style={{ animationDelay: `${i * 100}ms` }}></div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24 relative">
            {/* Decorative stars around title */}
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 flex gap-4 opacity-20">
              <Star className="w-5 h-5 text-gray-400 animate-pulse" />
              <Star className="w-4 h-4 text-gray-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
              <Star className="w-6 h-6 text-gray-400 animate-pulse" style={{ animationDelay: '1s' }} />
              <Star className="w-4 h-4 text-gray-400 animate-pulse" style={{ animationDelay: '1.5s' }} />
              <Star className="w-5 h-5 text-gray-400 animate-pulse" style={{ animationDelay: '2s' }} />
            </div>
            
            <h2 className="text-6xl md:text-7xl font-black mb-8 text-transparent bg-gradient-to-b from-black to-gray-600 bg-clip-text animate-float relative">
              Преимущества
              {/* Animated accent */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-black to-transparent animate-pulse"></div>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed animate-float relative" style={{ animationDelay: '200ms' }}>
              Почему клиенты выбирают работу с нами
            </p>

            {/* Progress indicator */}
            <div className="mt-12 flex justify-center gap-2 animate-float" style={{ animationDelay: '400ms' }}>
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="w-12 h-1 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full animate-pulse" style={{ animationDelay: `${i * 300}ms` }}></div>
              ))}
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 relative">
            {/* Connection lines */}
            <div className="hidden md:block absolute top-1/2 left-1/2 w-px h-24 bg-gradient-to-b from-gray-200/50 to-gray-300/50 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ animationDelay: '2s' }}></div>
            <div className="hidden md:block absolute top-1/4 left-1/2 w-24 h-px bg-gradient-to-r from-gray-200/50 to-gray-300/50 transform -translate-x-1/2 animate-pulse" style={{ animationDelay: '3s' }}></div>
            <div className="hidden md:block absolute bottom-1/4 left-1/2 w-24 h-px bg-gradient-to-r from-gray-200/50 to-gray-300/50 transform -translate-x-1/2 animate-pulse" style={{ animationDelay: '4s' }}></div>
            
            {advantages.map((advantage, index) => (
              <div key={index} className="flex items-start space-x-8 group animate-float relative" style={{ animationDelay: `${index * 200}ms` }}>
                {/* Background glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-gray-50/0 via-gray-50/30 to-gray-50/0 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl"></div>
                
                {/* Number badge with enhanced styling */}
                <div className="relative w-16 h-16 bg-gradient-to-br from-black to-gray-700 text-white rounded-2xl flex items-center justify-center flex-shrink-0 font-black text-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl group-hover:shadow-2xl">
                  {String(index + 1).padStart(2, '0')}
                  
                  {/* Rotating border */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:rotate-180 transition-all duration-1000"></div>
                  
                  {/* Corner sparkles */}
                  <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-2 h-2 bg-yellow-300 rounded-full animate-ping"></div>
                  </div>
                  <div className="absolute -bottom-1 -left-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ animationDelay: '0.2s' }}>
                    <div className="w-1.5 h-1.5 bg-blue-300 rounded-full animate-pulse"></div>
                  </div>
                  
                  {/* Floating icon */}
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-60 transition-all duration-500 group-hover:-translate-y-2">
                    <advantage.icon className="w-4 h-4 text-gray-600" />
                  </div>
                </div>
                
                <div className="flex-1 relative">
                  {/* Title with enhanced styling */}
                  <h3 className="text-3xl font-black text-black mb-4 group-hover:text-gray-800 transition-colors duration-300 relative">
                    {advantage.title}
                    
                    {/* Animated underline */}
                    <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-black to-gray-600 group-hover:w-full transition-all duration-700"></div>
                    
                    {/* Hover icon */}
                    <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-2">
                      <ArrowRight className="w-5 h-5 text-gray-400" />
                    </div>
                  </h3>
                  
                  {/* Description with enhanced styling */}
                  <p className="text-gray-600 font-light leading-relaxed text-lg group-hover:text-gray-700 transition-colors duration-300 relative">
                    {advantage.description}
                  </p>
                  
                  {/* Check mark indicator */}
                  <div className="absolute -left-12 top-16 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110" style={{ animationDelay: '0.3s' }}>
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  </div>
                  
                  {/* Progress dots */}
                  <div className="flex gap-1 mt-6 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <div key={i} className="w-2 h-2 bg-gray-300 rounded-full animate-pulse" style={{ animationDelay: `${i * 200}ms` }}></div>
                    ))}
                  </div>
                </div>
                
                {/* Side decorative elements */}
                <div className="absolute -right-4 top-8 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                  <div className="w-8 h-8 border border-gray-300 rounded-full animate-spin-slow"></div>
                </div>
                <div className="absolute -left-4 bottom-8 opacity-0 group-hover:opacity-15 transition-opacity duration-500" style={{ animationDelay: '0.5s' }}>
                  <div className="w-6 h-6 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full animate-bounce"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA section */}
          <div className="mt-24 text-center animate-float" style={{ animationDelay: '1000ms' }}>
            <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current animate-pulse" style={{ animationDelay: `${i * 100}ms` }} />
                ))}
              </div>
              <span className="text-gray-600 font-medium group-hover:text-gray-800 transition-colors duration-300">
                Более 95% клиентов рекомендуют нас
              </span>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
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
          animation: spin-slow 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default AdvantagesSection