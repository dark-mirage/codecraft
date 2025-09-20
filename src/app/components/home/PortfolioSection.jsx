'use client'
import { Monitor, Smartphone, Globe, Code, Database, Palette, Play, Eye, ArrowRight, Star, Zap, Target, Award, Sparkles, TrendingUp, Users } from 'lucide-react';

const PortfolioSection = () => {
const projects = [
    { 
      title: "E-commerce Platform", 
      category: "Веб-приложение", 
      gradient: "from-gray-900 to-black",
      icon: Monitor,
      tech: ["React", "Node.js", "PostgreSQL"],
      year: "2024"
    },
    { 
      title: "Banking Mobile App", 
      category: "Мобильное приложение", 
      gradient: "from-gray-800 to-gray-900",
      icon: Smartphone,
      tech: ["React Native", "TypeScript", "Firebase"],
      year: "2023"
    },
    { 
      title: "Corporate Website", 
      category: "Веб-сайт", 
      gradient: "from-gray-700 to-gray-800",
      icon: Globe,
      tech: ["Next.js", "Tailwind", "Vercel"],
      year: "2024"
    },
    { 
      title: "SaaS Dashboard", 
      category: "Веб-приложение", 
      gradient: "from-gray-600 to-gray-700",
      icon: Database,
      tech: ["Vue.js", "Express", "MongoDB"],
      year: "2023"
    },
    { 
      title: "Learning Platform", 
      category: "Веб-приложение", 
      gradient: "from-gray-500 to-gray-600",
      icon: Code,
      tech: ["Angular", "NestJS", "Redis"],
      year: "2024"
    },
    { 
      title: "Fitness Tracker", 
      category: "Мобильное приложение", 
      gradient: "from-gray-400 to-gray-500",
      icon: Palette,
      tech: ["Flutter", "Dart", "SQLite"],
      year: "2023"
    }
  ];

  return (
    <section id="портфолио" className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large floating shapes */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-1/4 -right-32 w-64 h-64 bg-gradient-to-bl from-green-50/40 to-blue-50/40 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-gradient-to-tr from-purple-50/20 to-pink-50/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        
        {/* Geometric patterns */}
        <div className="absolute top-20 left-16 w-16 h-16 border-2 border-gray-200/40 rotate-45 animate-spin-slow"></div>
        <div className="absolute top-1/3 right-20 w-12 h-24 bg-gradient-to-b from-gray-200/30 to-transparent transform -rotate-12 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-20 w-20 h-20 border border-gray-300/50 rounded-full animate-bounce" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-32 right-24 w-8 h-8 bg-gradient-to-br from-gray-300/40 to-gray-400/40 rotate-45 animate-pulse" style={{ animationDelay: '2.5s' }}></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-blue-300 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-2.5 h-2.5 bg-purple-300 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-green-300 rounded-full animate-ping" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-3/4 right-1/3 w-3.5 h-3.5 bg-pink-300 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        
        {/* Tech icons floating */}
        <div className="absolute top-1/4 left-12 opacity-8 animate-float" style={{ animationDelay: '2s' }}>
          <Monitor className="w-10 h-10 text-blue-200" />
        </div>
        <div className="absolute bottom-1/4 right-16 opacity-10 animate-float" style={{ animationDelay: '4s' }}>
          <Smartphone className="w-8 h-8 text-green-200" />
        </div>
        <div className="absolute top-1/2 right-12 opacity-6 animate-float" style={{ animationDelay: '6s' }}>
          <Code className="w-12 h-12 text-purple-200" />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24 relative">
            {/* Portfolio stats floating around title */}
            <div className="absolute -top-16 left-1/4 opacity-20 animate-float" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-gray-200/50">
                <Award className="w-4 h-4 text-yellow-500" />
                <span className="text-sm font-semibold text-gray-700">50+ проектов</span>
              </div>
            </div>
            <div className="absolute -top-12 right-1/4 opacity-25 animate-float" style={{ animationDelay: '2s' }}>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-gray-200/50">
                <Users className="w-4 h-4 text-blue-500" />
                <span className="text-sm font-semibold text-gray-700">3 года опыта</span>
              </div>
            </div>
            
            <h2 className="text-6xl md:text-7xl font-black mb-8 text-transparent bg-gradient-to-b from-black to-gray-600 bg-clip-text animate-float relative">
              Портфолио
              {/* Animated accent */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent animate-pulse"></div>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed animate-float" style={{ animationDelay: '200ms' }}>
              Избранные проекты, демонстрирующие наш подход к решению задач
            </p>

            {/* Project categories indicator */}
            <div className="mt-12 flex justify-center gap-6 animate-float" style={{ animationDelay: '400ms' }}>
              <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-200/50">
                <Monitor className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-700">Веб-приложения</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full border border-green-200/50">
                <Smartphone className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium text-green-700">Мобильные</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full border border-purple-200/50">
                <Globe className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-medium text-purple-700">Веб-сайты</span>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group cursor-pointer animate-float relative" style={{ animationDelay: `${index * 100}ms` }}>
                {/* Glow effect behind card */}
                <div className="absolute -inset-4 bg-gradient-to-br from-gray-100/0 via-gray-100/20 to-gray-100/0 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl"></div>
                
                <div className="relative overflow-hidden rounded-2xl border border-gray-200 group-hover:border-transparent group-hover:shadow-3xl transition-all duration-500 transform group-hover:scale-105">
                  {/* Enhanced image/gradient section */}
                  <div className={`bg-gradient-to-br ${project.gradient} h-64 relative transition-all duration-500 group-hover:scale-110 overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500"></div>
                    
                    {/* Floating project icon */}
                    <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-30 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-12">
                      <project.icon className="w-12 h-12 text-white" />
                    </div>
                    
                    {/* Tech stack indicators */}
                    <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      <div className="flex gap-2">
                        {project.tech.slice(0, 2).map((tech, i) => (
                          <div key={i} className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                            <span className="text-xs text-white font-medium">{tech}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Year badge */}
                    <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full border border-white/50">
                        <span className="text-xs text-gray-800 font-bold">{project.year}</span>
                      </div>
                    </div>
                    
                    {/* Hover overlay with actions */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                      <div className="flex gap-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                        <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 flex items-center justify-center hover:bg-white/30 transition-colors duration-300 group/btn">
                          <Eye className="w-5 h-5 text-white group-hover/btn:scale-110 transition-transform duration-300" />
                        </button>
                        <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 flex items-center justify-center hover:bg-white/30 transition-colors duration-300 group/btn">
                          <Play className="w-5 h-5 text-white group-hover/btn:scale-110 transition-transform duration-300" />
                        </button>
                      </div>
                    </div>
                    
                    {/* Corner decorations */}
                    <div className="absolute top-0 right-0 w-16 h-16 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                      <div className="w-full h-full bg-gradient-to-bl from-white/30 to-transparent"></div>
                    </div>
                    
                    {/* Animated particles in image */}
                    <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/40 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-500"></div>
                    <div className="absolute bottom-1/3 right-1/3 w-1.5 h-1.5 bg-white/30 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-500" style={{ animationDelay: '0.5s' }}></div>
                  </div>
                  
                  {/* Enhanced content section */}
                  <div className="p-8 bg-white group-hover:bg-gradient-to-br group-hover:from-gray-50 group-hover:to-white relative overflow-hidden">
                    {/* Background pattern */}
                    <div className="absolute top-0 right-0 w-20 h-20 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                      <div className="grid grid-cols-4 gap-1 h-full">
                        {Array.from({ length: 16 }).map((_, i) => (
                          <div key={i} className="bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: `${i * 50}ms` }}></div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Category with enhanced styling */}
                    <span className="text-gray-500 text-sm font-semibold uppercase tracking-wider group-hover:text-gray-600 transition-colors duration-300 relative">
                      {project.category}
                      {/* Category underline */}
                      <div className="absolute -bottom-1 left-0 w-0 h-px bg-gray-400 group-hover:w-full transition-all duration-700"></div>
                    </span>
                    
                    {/* Title with enhanced styling */}
                    <h3 className="text-black text-xl font-black mt-2 group-hover:text-gray-800 transition-colors duration-300 relative">
                      {project.title}
                      {/* Hover arrow */}
                      <div className="absolute -right-6 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-2">
                        <ArrowRight className="w-5 h-5 text-gray-400" />
                      </div>
                    </h3>
                    
                    {/* Tech stack full list */}
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <span key={i} className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full animate-pulse" style={{ animationDelay: `${i * 100}ms` }}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Project stats */}
                    <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 text-yellow-400 fill-current" />
                          <span>Premium</span>
                        </div>
                        <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                        <div className="flex items-center gap-1">
                          <TrendingUp className="w-3 h-3" />
                          <span>Высокая конверсия</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Corner decorations */}
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                      <Sparkles className="w-4 h-4 text-gray-400 animate-pulse" />
                    </div>
                    <div className="absolute bottom-2 left-2 opacity-0 group-hover:opacity-15 transition-opacity duration-500" style={{ animationDelay: '0.3s' }}>
                      <Target className="w-3 h-3 text-gray-400 animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA section */}
          <div className="mt-20 text-center animate-float" style={{ animationDelay: '1200ms' }}>
            <div className="inline-flex items-center gap-6 px-10 py-6 bg-gradient-to-r from-gray-50 via-white to-gray-50 rounded-2xl border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
              <div className="flex gap-2">
                <Monitor className="w-6 h-6 text-blue-500" />
                <Smartphone className="w-6 h-6 text-green-500" />
                <Globe className="w-6 h-6 text-purple-500" />
              </div>
              <div className="text-left">
                <div className="text-lg font-bold text-gray-800">6 проектов</div>
                <div className="text-sm text-gray-600">в нашем портфолио</div>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-yellow-500" />
                <span className="text-sm text-gray-600">Посмотреть все</span>
              </div>
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
        
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </section>
  );
}

export default PortfolioSection