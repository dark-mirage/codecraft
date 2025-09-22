'use client'
import { Search, Calendar, Palette, Code2, TestTube, Rocket, ArrowRight, CheckCircle2, Clock, Target, Zap, Star, Circle, Triangle, Play } from 'lucide-react';

const WorkflowSection = () => {
   const steps = [
    { 
      title: "Анализ", 
      description: "Глубокое изучение задач и требований проекта",
      icon: Search,
      color: "from-gray-600 to-gray-800",
      bgColor: "from-gray-200 to-gray-300"
    },
    { 
      title: "Планирование", 
      description: "Создание детального плана и технического задания",
      icon: Calendar,
      color: "from-gray-600 to-gray-800",
      bgColor: "from-gray-200 to-gray-300"
    },
    { 
      title: "Дизайн", 
      description: "Разработка пользовательского интерфейса и UX",
      icon: Palette,
      color: "from-gray-600 to-gray-800",
      bgColor: "from-gray-200 to-gray-300"
    },
    { 
      title: "Разработка", 
      description: "Программирование с использованием лучших практик",
      icon: Code2,
      color: "from-gray-600 to-gray-800",
      bgColor: "from-gray-200 to-gray-300"
    },
    { 
      title: "Тестирование", 
      description: "Комплексная проверка функциональности",
      icon: TestTube,
      color: "from-gray-600 to-gray-800",
      bgColor: "from-gray-200 to-gray-300"
    },
    { 
      title: "Запуск", 
      description: "Развертывание и ввод в эксплуатацию",
      icon: Rocket,
      color: "from-gray-600 to-gray-800",
      bgColor: "from-gray-200 to-gray-300"
    }
  ];

  return (
    <section id="workflows" className="py-32 bg-gradient-to-b from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large geometric shapes */}
        <div className="absolute -top-32 left-1/4 w-64 h-64 bg-gradient-to-br from-gray-100/60 to-gray-200/60 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-1/3 -right-32 w-48 h-48 bg-gradient-to-bl from-gray-100/80 to-gray-50/80 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-gradient-to-tr from-gray-50/40 to-gray-100/40 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        
        {/* Workflow connection lines */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200/50 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 left-1/4 w-1/2 h-px bg-gradient-to-r from-gray-200/30 to-gray-200/30 transform rotate-12 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-1/2 h-px bg-gradient-to-l from-gray-200/30 to-gray-200/30 transform -rotate-12 animate-pulse" style={{ animationDelay: '3s' }}></div>
        
        {/* Floating particles */}
        <div className="absolute top-20 left-16 w-2 h-2 bg-gray-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/4 right-20 w-1.5 h-1.5 bg-gray-300 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-3 h-3 bg-gray-400 rounded-full animate-ping" style={{ animationDelay: '2.5s' }}></div>
        <div className="absolute bottom-1/4 right-1/3 w-2.5 h-2.5 bg-gray-300 rounded-full animate-pulse" style={{ animationDelay: '3.5s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-gray-400 rounded-full animate-ping" style={{ animationDelay: '4.5s' }}></div>
        
        {/* Floating icons */}
        <div className="absolute top-1/4 left-12 opacity-8 animate-float" style={{ animationDelay: '1s' }}>
          <Target className="w-10 h-10 text-gray-200" />
        </div>
        <div className="absolute bottom-1/3 right-16 opacity-10 animate-float" style={{ animationDelay: '3s' }}>
          <Zap className="w-8 h-8 text-gray-200" />
        </div>
        <div className="absolute top-1/2 right-12 opacity-6 animate-float" style={{ animationDelay: '5s' }}>
          <Clock className="w-12 h-12 text-gray-200" />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24 relative">
            {/* Progress indicator */}
            <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 flex gap-2 opacity-30">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="w-8 h-1 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full animate-pulse" style={{ animationDelay: `${i * 200}ms` }}></div>
              ))}
            </div>
            
            <h2 className="text-6xl md:text-7xl font-black mb-8 text-transparent bg-gradient-to-b from-black to-gray-600 bg-clip-text animate-float relative">
              Процесс работы
              {/* Animated accent */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent animate-pulse"></div>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed animate-float" style={{ animationDelay: '200ms' }}>
              Структурированный подход к реализации проектов
            </p>

            {/* Timeline indicator */}
            <div className="mt-12 flex justify-center items-center gap-4 animate-float" style={{ animationDelay: '400ms' }}>
              <Play className="w-5 h-5 text-gray-400" />
              <div className="text-sm text-gray-500 font-medium">6 этапов • 1-12 недель</div>
              <CheckCircle2 className="w-5 h-5 text-gray-600" />
            </div>
          </div>
          
          {/* Enhanced grid with connection animations */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 relative">
            {/* Connection arrows between steps */}
            <div className="hidden lg:block absolute top-20 left-1/3 transform -translate-x-1/2">
              <ArrowRight className="w-6 h-6 text-gray-300 animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
            <div className="hidden lg:block absolute top-20 right-1/3 transform translate-x-1/2">
              <ArrowRight className="w-6 h-6 text-gray-300 animate-pulse" style={{ animationDelay: '2s' }} />
            </div>
            <div className="hidden lg:block absolute bottom-20 left-1/3 transform -translate-x-1/2 rotate-180">
              <ArrowRight className="w-6 h-6 text-gray-300 animate-pulse" style={{ animationDelay: '3s' }} />
            </div>
            <div className="hidden lg:block absolute bottom-20 right-1/3 transform translate-x-1/2 rotate-180">
              <ArrowRight className="w-6 h-6 text-gray-300 animate-pulse" style={{ animationDelay: '4s' }} />
            </div>
            
            {steps.map((step, index) => (
              <div key={index} className="text-center group animate-float relative" style={{ animationDelay: `${index * 100}ms` }}>
                {/* Background glow effect */}
                <div className={`absolute -inset-6 bg-gradient-to-br ${step.bgColor}/0 group-hover:${step.bgColor.replace('/0', '/20')} rounded-3xl transition-all duration-700 blur-xl`}></div>
                
                {/* Step number with enhanced styling */}
                <div className="relative w-20 h-20 bg-gradient-to-br from-black to-gray-700 text-white rounded-2xl flex items-center justify-center text-xl font-black mb-8 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl group-hover:shadow-2xl overflow-hidden">
                  {String(index + 1).padStart(2, '0')}
                  
                  {/* Rotating gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:rotate-180 transition-all duration-1000"></div>
                  
                  {/* Pulsing border */}
                  <div className="absolute -inset-1 bg-gradient-to-br from-gray-300/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-500"></div>
                  
                  {/* Corner sparkles */}
                  <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-3 h-3 bg-gray-400 rounded-full animate-ping"></div>
                  </div>
                  <div className="absolute -bottom-2 -left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ animationDelay: '0.3s' }}>
                    <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse"></div>
                  </div>
                  
                  {/* Floating icon above */}
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-70 transition-all duration-500 group-hover:-translate-y-2">
                    <step.icon className="w-5 h-5 text-gray-600" />
                  </div>
                </div>
                
                {/* Progress indicator */}
                <div className="flex justify-center mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="flex gap-1">
                    {Array.from({ length: index + 1 }).map((_, i) => (
                      <div key={i} className="w-2 h-2 bg-gray-600 rounded-full animate-pulse" style={{ animationDelay: `${i * 100}ms` }}></div>
                    ))}
                    {Array.from({ length: 6 - index - 1 }).map((_, i) => (
                      <div key={i + index + 1} className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    ))}
                  </div>
                </div>
                
                {/* Title with enhanced styling */}
                <h3 className="text-2xl font-black text-black mb-4 group-hover:text-gray-800 transition-colors duration-300 relative">
                  {step.title}
                  {/* Animated underline */}
                  <div className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r ${step.color} group-hover:w-full transition-all duration-700`}></div>
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 font-light leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {step.description}
                </p>
                
                {/* Status indicator */}
                <div className="mt-6 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-sm">
                    <div className="w-2 h-2 bg-gray-600 rounded-full animate-pulse"></div>
                    <span className="text-xs text-gray-600 font-medium">Готов к работе</span>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                  <Star className="w-4 h-4 text-gray-400 animate-pulse" />
                </div>
                <div className="absolute -top-4 -right-4 opacity-0 group-hover:opacity-15 transition-opacity duration-500" style={{ animationDelay: '0.2s' }}>
                  <Circle className="w-3 h-3 text-gray-400 animate-pulse" />
                </div>
                <div className="absolute -bottom-4 -right-4 opacity-0 group-hover:opacity-20 transition-opacity duration-500" style={{ animationDelay: '0.4s' }}>
                  <Triangle className="w-4 h-4 text-gray-400 animate-pulse" />
                </div>
              </div>
            ))}
          </div>

          {/* Timeline visualization */}
          <div className="mt-20 relative animate-float" style={{ animationDelay: '1200ms' }}>
            <div className="flex justify-center">
              <div className="relative w-full max-w-4xl">
                <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent transform -translate-y-1/2"></div>
                <div className="flex justify-between relative z-10">
                  {steps.map((_, index) => (
                    <div key={index} className="flex flex-col items-center group cursor-pointer">
                      <div className="w-4 h-4 bg-gray-300 rounded-full group-hover:bg-gray-600 transition-colors duration-300 group-hover:scale-125 transform"></div>
                      <div className="mt-2 text-xs text-gray-500 group-hover:text-gray-700 transition-colors duration-300">
                        {index + 1}
                      </div>
                    </div>
                  ))}
                </div>
                {/* Animated progress indicator */}
                <div className="absolute top-1/2 left-0 h-px bg-gradient-to-r from-gray-600 to-gray-800 transform -translate-y-1/2 animate-pulse" style={{ width: '0%', animation: 'progress 8s infinite' }}></div>
              </div>
            </div>
          </div>

          {/* Call to action */}
          <div className="mt-16 text-center animate-float" style={{ animationDelay: '1400ms' }}>
            <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-gray-50 to-white rounded-2xl border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
              <div className="w-3 h-3 bg-gray-600 rounded-full animate-pulse"></div>
              <span className="text-gray-600 font-medium group-hover:text-gray-800 transition-colors duration-300">
                Средняя длительность проекта: 2-4 недель
              </span>
              <Clock className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors duration-300" />
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
        
        @keyframes progress {
          0% { width: 0%; }
          50% { width: 100%; }
          100% { width: 0%; }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default WorkflowSection;