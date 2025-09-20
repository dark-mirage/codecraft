'use client'
import { Code, Smartphone, Globe, Check, Star, Zap, Settings, ArrowRight, Sparkles, Target, Award, TrendingUp, Circle, Square, Triangle, Play } from 'lucide-react';

const ServicesSection = () => {
const services = [
  {
    icon: <Globe className="w-12 h-12" />,
    title: "Веб-сайты",
    description: "Современные адаптивные сайты с чистым кодом и высокой производительностью",
    features: ["Responsive дизайн", "SEO оптимизация", "Высокая скорость загрузки"],
    gradient: "from-black to-gray-800",       // тёмный градиент карточки
    accentColor: "from-gray-600 to-gray-400", // цвет линии акцента
    bgPattern: "from-gray-50 to-gray-100",   // фон-светлый, как HeroSection
    price: "от 50 000 ₽"
  },
  {
    icon: <Code className="w-12 h-12" />,
    title: "Веб-приложения",
    description: "Сложные интерактивные приложения на современных технологиях",
    features: ["React/Next.js", "Node.js Backend", "Масштабируемая архитектура"],
    gradient: "from-black to-gray-800",
    accentColor: "from-gray-600 to-gray-400",
    bgPattern: "from-gray-50 to-gray-100",
    price: "от 150 000 ₽"
  },
  {
    icon: <Smartphone className="w-12 h-12" />,
    title: "Мобильные приложения",
    description: "Нативные и кроссплатформенные решения для iOS и Android",
    features: ["Native разработка", "React Native", "Интуитивный UX"],
    gradient: "from-black to-gray-800",
    accentColor: "from-gray-600 to-gray-400",
    bgPattern: "from-gray-50 to-gray-100",
    price: "от 200 000 ₽"
  }
];


  return (
    <section id="услуги" className="py-32 bg-white relative overflow-hidden">
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large floating shapes */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-gray-100/40 to-gray-200/40 rounded-full blur-3xl animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-1/4 -right-32 w-64 h-64 bg-gradient-to-bl from-gray-50/60 to-gray-100/60 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-32 left-1/4 w-96 h-96 bg-gradient-to-tr from-gray-100/30 to-gray-50/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        
        {/* Geometric patterns */}
        <div className="absolute top-20 left-20 w-16 h-16 border-2 border-gray-200/40 rotate-45 animate-spin-slow"></div>
        <div className="absolute top-1/3 right-16 w-12 h-24 bg-gradient-to-b from-gray-200/30 to-transparent transform -rotate-12 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-16 w-20 h-20 border border-gray-300/50 rounded-full animate-bounce" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-32 right-32 w-8 h-8 bg-gradient-to-br from-gray-300/40 to-gray-400/40 rotate-45 animate-pulse" style={{ animationDelay: '2.5s' }}></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-blue-300 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-purple-300 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-green-300 rounded-full animate-ping" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-3/4 right-1/3 w-2.5 h-2.5 bg-orange-300 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        
        {/* Tech icons floating */}
        <div className="absolute top-1/4 left-12 opacity-8 animate-float" style={{ animationDelay: '2s' }}>
          <Settings className="w-8 h-8 text-gray-200" />
        </div>
        <div className="absolute bottom-1/4 right-20 opacity-10 animate-float" style={{ animationDelay: '4s' }}>
          <Zap className="w-10 h-10 text-gray-200" />
        </div>
        <div className="absolute top-1/2 right-8 opacity-6 animate-float" style={{ animationDelay: '6s' }}>
          <Target className="w-12 h-12 text-gray-200" />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24 relative">
            {/* Service icons floating around title */}
            <div className="absolute -top-12 left-1/4 opacity-15 animate-float" style={{ animationDelay: '1s' }}>
              <Globe className="w-8 h-8 text-blue-400" />
            </div>
            <div className="absolute -top-8 right-1/4 opacity-20 animate-float" style={{ animationDelay: '2s' }}>
              <Code className="w-10 h-10 text-purple-400" />
            </div>
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 opacity-15 animate-float" style={{ animationDelay: '3s' }}>
              <Smartphone className="w-9 h-9 text-green-400" />
            </div>
            
            <h2 className="text-6xl md:text-7xl font-black mb-8 text-transparent bg-gradient-to-b from-black to-gray-600 bg-clip-text animate-float relative">
              Услуги
              {/* Animated underline */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent animate-pulse"></div>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed animate-float" style={{ animationDelay: '200ms' }}>
              Полный цикл разработки от концепции до внедрения и поддержки
            </p>

            {/* Stats indicator */}
            <div className="mt-12 flex justify-center gap-8 animate-float" style={{ animationDelay: '400ms' }}>
              <div className="text-center">
                <div className="text-3xl font-black text-gray-800">3</div>
                <div className="text-sm text-gray-600">Направления</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-gray-800"></div>
                <div className="text-sm text-gray-600">Возможности</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-gray-800">24/7</div>
                <div className="text-sm text-gray-600">Поддержка</div>
              </div>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 relative">
            {/* Connection elements between cards */}
            <div className="hidden lg:block absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
              <ArrowRight className="w-6 h-6 text-gray-300 animate-pulse" style={{ animationDelay: '2s' }} />
            </div>
            <div className="hidden lg:block absolute top-1/2 right-1/3 transform translate-x-1/2 -translate-y-1/2">
              <ArrowRight className="w-6 h-6 text-gray-300 animate-pulse" style={{ animationDelay: '3s' }} />
            </div>
            
            {services.map((service, index) => (
              <div key={index} className="group animate-float relative" style={{ animationDelay: `${index * 200}ms` }}>
                {/* Glow effect behind card */}
                <div className={`absolute -inset-4 bg-gradient-to-br ${service.bgPattern}/0 group-hover:${service.bgPattern.replace('/0', '/20')} rounded-3xl transition-all duration-700 blur-xl`}></div>
                
                {/* Main card */}
                <div className="relative p-10 border border-gray-200 hover:border-transparent hover:shadow-3xl transition-all duration-500 h-full rounded-2xl bg-white group-hover:bg-gradient-to-br group-hover:from-gray-50 group-hover:to-white transform group-hover:scale-105 overflow-hidden">
                  
                  {/* Animated background pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                    <div className="grid grid-cols-4 gap-2 h-full">
                      {Array.from({ length: 16 }).map((_, i) => (
                        <div key={i} className="bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: `${i * 100}ms` }}></div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Service icon with enhanced effects */}
                  <div className={`relative text-white mb-8 w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl group-hover:shadow-2xl overflow-hidden`}>
                    {service.icon}
                    
                    {/* Rotating gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:rotate-180 transition-all duration-1000"></div>
                    
                    {/* Corner sparkles */}
                    <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="w-3 h-3 bg-yellow-300 rounded-full animate-ping"></div>
                    </div>
                    <div className="absolute -bottom-1 -left-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ animationDelay: '0.2s' }}>
                      <div className="w-2 h-2 bg-cyan-300 rounded-full animate-pulse"></div>
                    </div>
                    
                    {/* Orbiting elements */}
                    <div className="absolute -inset-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute top-0 left-1/2 w-1.5 h-1.5 bg-white/60 rounded-full transform -translate-x-1/2 animate-ping"></div>
                      <div className="absolute bottom-0 right-0 w-1 h-1 bg-white/40 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    </div>
                  </div>
                  
                  {/* Service title with enhanced styling */}
                  <h3 className="text-2xl font-black text-black mb-6 group-hover:text-gray-800 transition-colors duration-300 relative">
                    {service.title}
                    {/* Animated accent line */}
                    <div className={`absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r ${service.accentColor} group-hover:w-full transition-all duration-700`}></div>
                    
                    {/* Hover icon */}
                    <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-2">
                      <Sparkles className="w-5 h-5 text-gray-400" />
                    </div>
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 mb-8 font-light leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {service.description}
                  </p>
                  
                  {/* Features list with enhanced styling */}
                  <ul className="space-y-4 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
                        <div className="relative w-6 h-6 bg-gradient-to-br from-black to-gray-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <Check className="w-3 h-3 text-white" />
                          {/* Pulsing ring */}
                          <div className="absolute -inset-1 border border-gray-300/50 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-500"></div>
                        </div>
                        <span className="relative">
                          {feature}
                          {/* Feature highlight */}
                          <div className="absolute -bottom-1 left-0 w-0 h-px bg-gray-400 group-hover:w-full transition-all duration-700" style={{ animationDelay: `${idx * 100}ms` }}></div>
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Price tag */}
                  <div className="mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-50 rounded-full border border-gray-200/50">
                      <TrendingUp className="w-4 h-4 text-gray-600" />
                      <span className="text-sm font-semibold text-gray-700">{service.price}</span>
                    </div>
                  </div>
                  
                  {/* CTA Button */}
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-y-0 translate-y-4">
                    <button className="w-full px-6 py-3 bg-gradient-to-r from-black to-gray-800 text-white font-semibold rounded-lg hover:from-gray-800 hover:to-black transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                      Узнать больше
                      <Play className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                  
                  {/* Decorative corner elements */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                    <Star className="w-4 h-4 text-gray-400 animate-pulse" />
                  </div>
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-15 transition-opacity duration-500" style={{ animationDelay: '0.3s' }}>
                    <Circle className="w-3 h-3 text-gray-400 animate-pulse" />
                  </div>
                  <div className="absolute top-1/2 right-4 opacity-0 group-hover:opacity-10 transition-opacity duration-500" style={{ animationDelay: '0.6s' }}>
                    <Triangle className="w-4 h-4 text-gray-400 animate-pulse" />
                  </div>
                  
                  {/* Quality badge */}
                  <div className="absolute -top-3 -right-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110">
                    <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                      <Award className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom summary section */}
          <div className="mt-20 text-center animate-float" style={{ animationDelay: '1000ms' }}>
            <div className="inline-flex items-center gap-6 px-8 py-4 bg-gradient-to-r from-gray-50 via-white to-gray-50 rounded-2xl border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
              <div className="flex gap-2">
                <Globe className="w-6 h-6 text-blue-500" />
                <Code className="w-6 h-6 text-purple-500" />
                <Smartphone className="w-6 h-6 text-green-500" />
              </div>
              <span className="text-gray-600 font-medium group-hover:text-gray-800 transition-colors duration-300">
                Комплексные решения для вашего бизнеса
              </span>
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
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
          animation: spin-slow 20s linear infinite;
        }
        
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </section>
  );
}

export default ServicesSection