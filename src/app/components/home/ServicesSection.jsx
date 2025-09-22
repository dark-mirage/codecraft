'use client'
import { Code, Smartphone, Globe, Check, Star, Zap, Settings, ArrowRight, Sparkles, Target, Award, TrendingUp, Circle, Square, Triangle, Play, Palette, Database, MessageCircle, Cpu, Shield, Cloud, BarChart, Users, ShoppingCart, BookOpen, Heart } from 'lucide-react';

const ServicesSection = () => {
const services = [
  {
    icon: <Globe className="w-12 h-12" />,
    title: "Веб-разработка",
    description: "Создаем современные веб-решения для бизнеса любого масштаба",
    features: [
      "Корпоративные сайты и порталы",
      "Интернет-магазины (E-commerce)",
      "Лендинги и промо-страницы",
      "Веб-платформы и SaaS решения",
      "Техническая поддержка и обновления"
    ],
    gradient: "from-black to-gray-800",
    accentColor: "from-gray-600 to-gray-400",
    bgPattern: "from-gray-50 to-gray-100",
    price: "от 20 000 ₽",
    technologies: ["React/Next.js", "Vue/Nuxt", "TypeScript", "JavaScript", "Tailwind CSS", "SCSS/SASS"]
  },
  {
    icon: <Code className="w-12 h-12" />,
    title: "Веб-приложения",
    description: "Сложные интерактивные приложения с современной архитектурой",
    features: [
      "SPA и PWA приложения",
      "CRM и ERP системы",
      "Дашборды и аналитические панели",
      "Микросервисная архитектура",
      "API интеграции и разработка"
    ],
    gradient: "from-black to-gray-800",
    accentColor: "from-gray-600 to-gray-400",
    bgPattern: "from-gray-50 to-gray-100",
    price: "от 50 000 ₽",
    technologies: ["Python/Django/FastAPI", "Node.js/Express","GraphQL/REST API", "PostgreSQL", "Docker" ]
  },
  {
    icon: <Smartphone className="w-12 h-12" />,
    title: "Мобильные приложения",
    description: "Нативные и кроссплатформенные решения для iOS и Android",
    features: [
      "Нативные приложения (Swift/Kotlin)",
      "Кроссплатформенные (React Native/Flutter)",
      "UI/UX дизайн мобильных интерфейсов",
      "Интеграция с сервисами и API",
      "Публикация в App Store и Google Play"
    ],
    gradient: "from-black to-gray-800",
    accentColor: "from-gray-600 to-gray-400",
    bgPattern: "from-gray-50 to-gray-100",
    price: "от 75 000 ₽",
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"]
  },
  {
    icon: <Database className="w-12 h-12" />,
    title: "Backend разработка",
    description: "Мощные серверные решения и архитектура для ваших проектов",
    features: [
      "Разработка RESTful API",
      "GraphQL серверы",
      "Базы данных и оптимизация",
      "Микросервисы и облачная архитектура",
      "DevOps и CI/CD настройка"
    ],
    gradient: "from-black to-gray-800",
    accentColor: "from-gray-600 to-gray-400",
    bgPattern: "from-gray-50 to-gray-100",
    price: "от 20 000 ₽",
    technologies: ["Node.js/Express", "Python/Django/FastAPI", "PostgreSQL", "GraphQL", "Docker", "CI/CD"]
  },
  {
    icon: <MessageCircle className="w-12 h-12" />,
    title: "Чат-боты и AI",
    description: "Интеллектуальные боты для автоматизации бизнес-процессов",
    features: [
      "Telegram/WhatsApp/VK боты",
      "AI-ассистенты и голосовые боты",
      "Интеграция с CRM и мессенджерами",
      "Машинное обучение и NLP",
      "Аналитика и мониторинг эффективности"
    ],
    gradient: "from-black to-gray-800",
    accentColor: "from-gray-600 to-gray-400",
    bgPattern: "from-gray-50 to-gray-100",
    price: "от 15 000 ₽",
    technologies: ["Python", "OpenAI API", "Aiogram", "WhatsApp API", "Redis",]
  },
  {
    icon: <Palette className="w-12 h-12" />,
    title: "UI/UX дизайн",
    description: "Создаем интуитивные и красивые интерфейсы для ваших продуктов",
    features: [
      "UX исследование и аналитика",
      "Прототипирование и вайрфрейминг",
      "UI дизайн и айдентика",
      "Дизайн-системы и гайдлайны",
      "Usability тестирование и оптимизация"
    ],
    gradient: "from-black to-gray-800",
    accentColor: "from-gray-600 to-gray-400",
    bgPattern: "from-gray-50 to-gray-100",
    price: "от 20 000 ₽",
    technologies: ["Figma", "Adobe XD", "Sketch", "Illustrator", "After Effects"]
  }
];


  return (
    <section id="services" className="py-32 bg-gradient-to-b from-gray-50 via-white to-gray-100 relative overflow-hidden">
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
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-gray-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-gray-300 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-gray-400 rounded-full animate-ping" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-3/4 right-1/3 w-2.5 h-2.5 bg-gray-300 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        
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
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24 relative">
            {/* Service icons floating around title */}
            <div className="absolute -top-12 left-1/4 opacity-15 animate-float" style={{ animationDelay: '1s' }}>
              <Globe className="w-8 h-8 text-gray-400" />
            </div>
            <div className="absolute -top-8 right-1/4 opacity-20 animate-float" style={{ animationDelay: '2s' }}>
              <Code className="w-10 h-10 text-gray-400" />
            </div>
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 opacity-15 animate-float" style={{ animationDelay: '3s' }}>
              <Smartphone className="w-9 h-9 text-gray-400" />
            </div>
            
            <h2 className="text-6xl md:text-7xl font-black mb-8 text-transparent bg-gradient-to-b from-black to-gray-600 bg-clip-text animate-float relative">
              Услуги
              {/* Animated underline */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent animate-pulse"></div>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed animate-float" style={{ animationDelay: '200ms' }}>
              Полный цикл разработки цифровых продуктов для вашего бизнеса
            </p>

            {/* Stats indicator */}
            <div className="mt-12 flex justify-center gap-8 animate-float" style={{ animationDelay: '400ms' }}>
              <div className="text-center">
                <div className="text-3xl font-black text-gray-800">6+</div>
                <div className="text-sm text-gray-600">Направлений</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-gray-800">35+</div>
                <div className="text-sm text-gray-600">Проектов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-gray-800">24/7</div>
                <div className="text-sm text-gray-600">Поддержка</div>
              </div>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 relative">
            {services.map((service, index) => (
              <div key={index} className="group animate-float relative" style={{ animationDelay: `${index * 100}ms` }}>
                {/* Glow effect behind card */}
                <div className={`absolute -inset-4 bg-gradient-to-br ${service.bgPattern}/0 group-hover:${service.bgPattern.replace('/0', '/20')} rounded-3xl transition-all duration-700 blur-xl`}></div>
                
                {/* Main card */}
                <div className="relative p-8 border border-gray-200 hover:border-transparent hover:shadow-3xl transition-all duration-500 h-full rounded-2xl bg-white group-hover:bg-gradient-to-br group-hover:from-gray-50 group-hover:to-white transform group-hover:scale-105 overflow-hidden">
                  
                  {/* Service icon with enhanced effects */}
                  <div className={`relative text-white mb-6 w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl group-hover:shadow-2xl overflow-hidden`}>
                    {service.icon}
                    
                    {/* Rotating gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:rotate-180 transition-all duration-1000"></div>
                    
                    {/* Corner sparkles */}
                    <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-ping"></div>
                    </div>
                  </div>
                  
                  {/* Service title with enhanced styling */}
                  <h3 className="text-xl font-black text-black mb-4 group-hover:text-gray-800 transition-colors duration-300 relative">
                    {service.title}
                    {/* Animated accent line */}
                    <div className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r ${service.accentColor} group-hover:w-full transition-all duration-700`}></div>
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 mb-6 text-sm font-light leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {service.description}
                  </p>
                  
                  {/* Features list */}
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-700 group-hover:text-gray-800 transition-colors duration-300 text-sm">
                        <div className="relative w-5 h-5 bg-gradient-to-br from-black to-gray-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Technologies tags */}
                  <div className="mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full border border-gray-200">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Price and CTA */}
                  <div className="flex items-center justify-between mt-6">
                    <div className="text-lg font-semibold text-gray-800">{service.price}</div>
                    {/* <button className="px-4 py-2 bg-gradient-to-r from-black to-gray-800 text-white text-sm font-semibold rounded-lg hover:from-gray-800 hover:to-black transition-all duration-300 flex items-center gap-1 group/btn">
                      Подробнее
                      <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button> */}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional services section */}
          <div className="mt-20 grid md:grid-cols-2 gap-8 animate-float" style={{ animationDelay: '800ms' }}>
            <div className="p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-black to-gray-700 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-black text-gray-800">Техническая поддержка</h3>
              </div>
              <p className="text-gray-600 mb-4">Постоянное обслуживание и развитие ваших проектов</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Мониторинг и исправление ошибок</li>
                <li>• Обновления и новые функции</li>
                <li>• Консультации и техподдержка</li>
              </ul>
            </div>

            <div className="p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-black to-gray-700 rounded-xl flex items-center justify-center">
                  <BarChart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-black text-gray-800">Аналитика и SEO</h3>
              </div>
              <p className="text-gray-600 mb-4">Повышение видимости и эффективности вашего сайта</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• SEO оптимизация и аудит</li>
                <li>• Внедрение аналитических систем</li>
                <li>• A/B тестирование и оптимизация</li>
              </ul>
            </div>
          </div>

          {/* Bottom CTA section */}
         <div className="mt-8 md:mt-16 text-center animate-float" style={{ animationDelay: '1000ms' }}>
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 bg-gradient-to-r from-gray-50 via-white to-gray-50 rounded-xl md:rounded-2xl border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer w-full max-w-[90vw] sm:max-w-md md:max-w-lg lg:max-w-xl">
              <div className="flex gap-2 sm:gap-3">
                <Code className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-gray-600" />
                <Palette className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-gray-600" />
                <Cloud className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-gray-600" />
              </div>
              <div className="text-center sm:text-left flex-1">
                <div className="text-base sm:text-lg font-bold text-gray-800">
                  Нужен индивидуальный подход?
                </div>
                <div className="text-xs sm:text-sm text-gray-600 mt-1">
                  Обсудим ваш проект и предложим лучшее решение
                </div>
              </div>
              <div className="w-3 h-3 bg-gray-600 rounded-full animate-pulse hidden sm:block"></div>
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
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </section>
  );
}

export default ServicesSection;