'use client'
import { Monitor, Arrow, Smartphone, Globe, Code, Database, Palette, Play, Eye, ArrowRight, Star, Zap, Target, Award, Sparkles, TrendingUp, Users } from 'lucide-react';

const PortfolioSection = () => {
  const projects = [
    { 
      title: "E-commerce Platform", 
      category: "Веб-приложение", 
      image: "/portfolio-pics/ecommerce-project.jpg", // Добавьте свои пути к изображениям
      gradient: "from-black/80 via-black/50 to-black/30",
      icon: Monitor,
      tech: ["React", "Node.js", "PostgreSQL"],
      year: "2024"
    },
    { 
      title: "Educational App", 
      category: "Мобильное приложение", 
      image: "/portfolio-pics/mobile.jpg",
      gradient: "from-black/80 via-black/50 to-black/30",
      icon: Smartphone,
      tech: ["React Native", "TypeScript", "Firebase"],
      year: "2023"
    },
    { 
      title: "Corporate Website", 
      category: "Веб-сайт", 
      image: "/portfolio-pics/corporate.png",
      gradient: "from-black/80 via-black/50 to-black/30",
      icon: Globe,
      tech: ["Next.js", "Tailwind", "Vercel"],
      year: "2024"
    },
    { 
      title: "SaaS Dashboard", 
      category: "Веб-приложение", 
      image: "/portfolio-pics/Saas.png",
      gradient: "from-black/80 via-black/50 to-black/30",
      icon: Database,
      tech: ["Vue.js", "Express", "MongoDB"],
      year: "2023"
    },
    {
      title: "Learning Platform", 
      category: "Веб-приложение", 
      image: "/portfolio-pics/educational-platform.png",
      gradient: "from-black/80 via-black/50 to-black/30",
      icon: Code,
      tech: ["React", "NextJS", "Redux"],
      year: "2024"
    },
    { 
      title: "FoodPunk", 
      category: "Мобильное приложение", 
      image: "/portfolio-pics/fitness.png",
      gradient: "from-black/80 via-black/50 to-black/30",
      icon: Palette,
      tech: ["Swift", "SQLite"],
      year: "2023"
    }
  ];

  return (
    <section id="portfolio" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large floating shapes */}
        <div className="absolute -top-20 -left-20 sm:-top-32 sm:-left-32 md:-top-40 md:-left-40 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-gradient-to-br from-blue-100/20 to-purple-100/20 rounded-full blur-xl sm:blur-2xl md:blur-3xl animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-1/4 -right-16 sm:-right-24 md:-right-32 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-gradient-to-bl from-green-50/30 to-blue-50/30 rounded-full blur-lg sm:blur-xl md:blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-20 sm:-bottom-28 md:-bottom-32 left-1/4 sm:left-1/3 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-tr from-purple-50/15 to-pink-50/15 rounded-full blur-xl sm:blur-2xl md:blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        
        {/* Geometric patterns */}
        <div className="absolute top-10 sm:top-16 left-4 sm:left-8 md:left-12 lg:left-16 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 border border-gray-200/30 rotate-45 animate-spin-slow"></div>
        <div className="absolute top-1/3 right-4 sm:right-8 md:right-12 lg:right-20 w-6 h-12 sm:w-8 sm:h-16 md:w-10 md:h-20 lg:w-12 lg:h-24 bg-gradient-to-b from-gray-200/20 to-transparent transform -rotate-12 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-4 sm:left-8 md:left-12 lg:left-20 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 border border-gray-300/40 rounded-full animate-bounce" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-16 sm:bottom-24 md:bottom-32 right-6 sm:right-12 md:right-16 lg:right-24 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 bg-gradient-to-br from-gray-300/30 to-gray-400/30 rotate-45 animate-pulse" style={{ animationDelay: '2.5s' }}></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 bg-blue-300/50 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2.5 md:h-2.5 bg-purple-300/50 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-green-300/50 rounded-full animate-ping" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-3/4 right-1/3 w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 lg:w-3.5 lg:h-3.5 bg-pink-300/50 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        
        {/* Tech icons floating */}
        <div className="absolute top-1/4 left-4 sm:left-6 md:left-8 lg:left-12 opacity-5 sm:opacity-8 animate-float" style={{ animationDelay: '2s' }}>
          <Monitor className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:w-8 xl:w-10 xl:h-10 text-blue-200" />
        </div>
        <div className="absolute bottom-1/4 right-4 sm:right-8 md:right-12 lg:right-16 opacity-5 sm:opacity-10 animate-float" style={{ animationDelay: '4s' }}>
          <Smartphone className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-8 xl:h-8 text-green-200" />
        </div>
        <div className="absolute top-1/2 right-4 sm:right-6 md:right-8 lg:right-12 opacity-4 sm:opacity-6 animate-float" style={{ animationDelay: '6s' }}>
          <Code className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 text-purple-200" />
        </div>
      </div>

      <div className="container mx-auto px-3 sm:px-4 md:px-5 lg:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24 relative">
            {/* Portfolio stats floating around title */}
            <div className="absolute -top-8 sm:-top-12 md:-top-16 left-4 sm:left-8 md:left-1/4 opacity-15 sm:opacity-20 animate-float hidden xs:block" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 bg-white/50 backdrop-blur-sm rounded-full border border-gray-200/30 text-xs sm:text-sm">
                <Award className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 text-yellow-500" />
                <span className="font-semibold text-gray-700">35+</span>
              </div>
            </div>
            <div className="absolute -top-6 sm:-top-10 md:-top-12 right-4 sm:right-8 md:right-1/4 opacity-15 sm:opacity-25 animate-float hidden xs:block" style={{ animationDelay: '2s' }}>
              <div className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 bg-white/50 backdrop-blur-sm rounded-full border border-gray-200/30 text-xs sm:text-sm">
                <Users className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 text-blue-500" />
                <span className="font-semibold text-gray-700">5 лет</span>
              </div>
            </div>
            
            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 sm:mb-6 md:mb-8 text-transparent bg-gradient-to-b from-black to-gray-600 bg-clip-text animate-float relative">
              Портфолио
              {/* Animated accent */}
              <div className="absolute -bottom-2 sm:-bottom-3 md:-bottom-4 left-1/2 transform -translate-x-1/2 w-12 sm:w-16 md:w-20 lg:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent animate-pulse"></div>
            </h2>
            
            <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-600 max-w-xs xs:max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto font-light leading-relaxed animate-float" style={{ animationDelay: '200ms' }}>
              Избранные проекты, демонстрирующие наш подход к решению задач
            </p>

            {/* Project categories indicator */}
            <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 animate-float" style={{ animationDelay: '400ms' }}>
              <div className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 bg-blue-50 rounded-full border border-blue-200/30 text-xs sm:text-sm">
                <Monitor className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 text-blue-600" />
                <span className="font-medium text-blue-700">Веб</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 bg-green-50 rounded-full border border-green-200/30 text-xs sm:text-sm">
                <Smartphone className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 text-green-600" />
                <span className="font-medium text-green-700">Мобильные</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 bg-purple-50 rounded-full border border-purple-200/30 text-xs sm:text-sm">
                <Globe className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 text-purple-600" />
                <span className="font-medium text-purple-700">Сайты</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group cursor-pointer animate-float relative" style={{ animationDelay: `${index * 100}ms` }}>
                {/* Glow effect behind card */}
                <div className="absolute -inset-2 sm:-inset-3 md:-inset-4 bg-gradient-to-br from-gray-100/0 via-gray-100/10 to-gray-100/0 rounded-xl sm:rounded-2xl lg:rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-md sm:blur-lg md:blur-xl"></div>
                
                <div className="relative overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl border border-gray-200 group-hover:border-transparent group-hover:shadow-xl sm:group-hover:shadow-2xl md:group-hover:shadow-3xl transition-all duration-500 transform group-hover:scale-[1.02] sm:group-hover:scale-105">
                  {/* Image section with gradient overlay */}
                  <div 
                    className="h-40 sm:h-48 md:h-56 lg:h-64 relative transition-all duration-500 group-hover:scale-110 overflow-hidden bg-cover bg-center"
                    style={{ backgroundImage: `url(${project.image})` }}
                  >
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} transition-all duration-500 group-hover:opacity-90`}></div>
                    
                    {/* Floating project icon */}
                    <div className="absolute top-3 sm:top-4 md:top-5 lg:top-6 right-3 sm:right-4 md:right-5 lg:right-6 opacity-60 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-12 z-10">
                      <project.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 text-white drop-shadow-lg" />
                    </div>
                    
                    {/* Tech stack indicators */}
                    <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-2 sm:left-3 md:left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 sm:translate-y-3 md:translate-y-4 group-hover:translate-y-0 z-10">
                      <div className="flex gap-1 sm:gap-2">
                        {project.tech.slice(0, 2).map((tech, i) => (
                          <div key={i} className="px-1.5 sm:px-2 md:px-3 py-0.5 sm:py-1 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                            <span className="text-[10px] xs:text-xs text-white font-medium">{tech}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Year badge */}
                    <div className="absolute top-2 sm:top-3 md:top-4 left-2 sm:left-3 md:left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10">
                      <div className="px-1.5 sm:px-2 md:px-3 py-0.5 sm:py-1 bg-white/90 backdrop-blur-sm rounded-full border border-white/50">
                        <span className="text-[10px] xs:text-xs text-gray-800 font-bold">{project.year}</span>
                      </div>
                    </div>
                    
                    {/* Hover overlay with actions */}
                    {/* <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center z-20">
                      <div className="flex gap-2 sm:gap-3 md:gap-4 transform translate-y-4 sm:translate-y-6 md:translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                        <button className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 flex items-center justify-center hover:bg-white/30 transition-colors duration-300 group/btn">
                          <ArrowRight className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 text-white group-hover/btn:scale-110 transition-transform duration-300" />
                        </button>
                      </div>
                    </div> */}
                    
                    {/* Corner decorations */}
                    <div className="absolute top-0 right-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                      <div className="w-full h-full bg-gradient-to-bl from-white/20 to-transparent"></div>
                    </div>
                    
                    {/* Animated particles in image */}
                    <div className="absolute top-1/4 left-1/4 w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-white/40 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-500 z-10"></div>
                    <div className="absolute bottom-1/3 right-1/3 w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-white/30 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-500 z-10" style={{ animationDelay: '0.5s' }}></div>
                  </div>
                  
                  {/* Enhanced content section */}
                  <div className="p-4 sm:p-5 md:p-6 lg:p-8 bg-white group-hover:bg-gradient-to-br group-hover:from-gray-50 group-hover:to-white relative overflow-hidden">
                    {/* Background pattern */}
                    <div className="absolute top-0 right-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                      <div className="grid grid-cols-3 gap-0.5 sm:gap-1 h-full">
                        {Array.from({ length: 9 }).map((_, i) => (
                          <div key={i} className="bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: `${i * 50}ms` }}></div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Category with enhanced styling */}
                    <span className="text-gray-500 text-xs sm:text-sm font-semibold uppercase tracking-wider group-hover:text-gray-600 transition-colors duration-300 relative block mb-1">
                      {project.category}
                      {/* Category underline */}
                      <div className="absolute -bottom-0.5 left-0 w-0 h-px bg-gray-400 group-hover:w-full transition-all duration-700"></div>
                    </span>
                    
                    {/* Title with enhanced styling */}
                    <h3 className="text-black text-base sm:text-lg md:text-xl font-black group-hover:text-gray-800 transition-colors duration-300 relative pr-4">
                      {project.title}
                      {/* Hover arrow */}
                      {/* <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1">
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-gray-400" />
                      </div> */}
                    </h3>
                    
                    {/* Tech stack full list */}
                    <div className="mt-2 sm:mt-3 md:mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {project.tech.map((tech, i) => (
                          <span key={i} className="text-[10px] xs:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 bg-gray-100 text-gray-600 rounded-full animate-pulse" style={{ animationDelay: `${i * 100}ms` }}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Project stats */}
                    <div className="mt-3 sm:mt-4 md:mt-5 lg:mt-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-1 group-hover:translate-y-0">
                      <div className="flex items-center gap-2 sm:gap-3 md:gap-4 text-[10px] xs:text-xs text-gray-500">
                        <div className="flex items-center gap-0.5 sm:gap-1">
                          <Star className="w-2 h-2 sm:w-3 sm:h-3 text-yellow-400 fill-current" />
                          <span>Premium</span>
                        </div>
                        <div className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-gray-300 rounded-full"></div>
                        <div className="flex items-center gap-0.5 sm:gap-1">
                          <TrendingUp className="w-2 h-2 sm:w-3 sm:h-3" />
                          <span>Конверсия</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Corner decorations */}
                    <div className="absolute top-1 right-1 sm:top-2 sm:right-2 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                      <Sparkles className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 text-gray-400 animate-pulse" />
                    </div>
                    <div className="absolute bottom-1 left-1 sm:bottom-2 sm:left-2 opacity-0 group-hover:opacity-15 transition-opacity duration-500" style={{ animationDelay: '0.3s' }}>
                      <Target className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 text-gray-400 animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA section */}
         <div className="mt-12 sm:mt-14 md:mt-16 lg:mt-20 text-center animate-float" style={{ animationDelay: '1200ms' }}>
          <a href="#contacts" className="group inline-block">
            <div className="relative px-8 py-4 bg-white border-2 border-gray-200 rounded-xl md:rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:border-gray-300 overflow-hidden">
              
              {/* Ховер эффект */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Контент */}
              
              <a href='#contacts' className="relative z-10 flex items-center justify-center gap-3">
                <span className="text-gray-800 font-black text-lg md:text-xl tracking-wide group-hover:text-black transition-colors duration-300">
                  Заказать проект
                </span>
              </a>
            </div>
          </a>
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
          animation: spin-slow 25s linear infinite;
        }
        
        @media (min-width: 320px) {
          .xs\:block {
            display: block;
          }
          .xs\:flex-row {
            flex-direction: row;
          }
          .xs\:text-left {
            text-align: left;
          }
          .xs\:max-w-sm {
            max-width: 24rem;
          }
        }
      `}</style>
    </section>
  );
}

export default PortfolioSection;