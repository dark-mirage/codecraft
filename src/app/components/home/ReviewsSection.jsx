'use client'
import { Star, Quote, Award, Heart, ThumbsUp, CheckCircle, TrendingUp, Users, MessageCircle, Sparkles, Crown, Shield } from 'lucide-react';

const ReviewsSection = () => {
  const reviews = [
    {
      name: "Александр Петров",
      company: "Tech Startup",
      rating: 5,
      text: "Профессиональная команда с высоким уровнем экспертизы. Проект был выполнен качественно и в срок.",
      avatar: "АП",
      color: "from-gray-700 to-gray-900",
      bgGlow: "from-gray-200 to-gray-300",
      date: "2 месяца назад",
      verified: true
    },
    {
      name: "Марина Сидорова",
      company: "E-commerce Business",
      rating: 4,
      text: "Отличный результат! Конверсия нашего сайта увеличилась в несколько раз после редизайна.",
      avatar: "МС",
      color: "from-gray-600 to-gray-800",
      bgGlow: "from-gray-200 to-gray-300",
      date: "3 месяца назад",
      verified: true
    },
    {
      name: "Дмитрий Козлов",
      company: "Digital Agency",
      rating: 5,
      text: "Рекомендую для серьезных проектов. Внимание к деталям и качество исполнения на высшем уровне.",
      avatar: "ДК",
      color: "from-gray-700 to-gray-900",
      bgGlow: "from-gray-200 to-gray-300",
      date: "1 месяц назад",
      verified: true
    }
  ];

  return (
    <section id="reviews" className="py-16 md:py-32 bg-gradient-to-b from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background animated elements - уменьшены для мобильных */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large floating shapes */}
        <div className="absolute -top-16 -right-16 md:-top-32 md:-right-32 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-br from-gray-200/40 to-gray-300/40 rounded-full blur-xl md:blur-3xl animate-pulse" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-1/3 -left-20 md:-left-40 w-40 h-40 md:w-80 md:h-80 bg-gradient-to-tr from-gray-100/60 to-gray-200/60 rounded-full blur-xl md:blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-12 md:-bottom-24 right-1/4 w-36 h-36 md:w-72 md:h-72 bg-gradient-to-tl from-gray-100/50 to-gray-200/50 rounded-full blur-xl md:blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        
        {/* Quote marks floating - скрыты на мобильных */}
        <div className="hidden md:block absolute top-20 left-16 text-8xl text-gray-100 font-serif animate-float" style={{ animationDelay: '1s' }}>"</div>
        <div className="hidden md:block absolute bottom-20 right-20 text-8xl text-gray-100 font-serif rotate-180 animate-float" style={{ animationDelay: '3s' }}>"</div>
        <div className="hidden md:block absolute top-1/2 left-8 text-6xl text-gray-100 font-serif animate-float" style={{ animationDelay: '5s' }}>"</div>
        
        {/* Floating particles - уменьшены для мобильных */}
        <div className="absolute top-1/4 right-1/4 w-2 h-2 md:w-3 md:h-3 bg-gray-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 md:w-2 md:h-2 bg-gray-300 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-2/3 right-1/3 w-2 h-2 md:w-2.5 md:h-2.5 bg-gray-400 rounded-full animate-ping" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-1 h-1 md:w-1.5 md:h-1.5 bg-gray-300 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        
        {/* Floating icons - скрыты на мобильных */}
        <div className="hidden md:block absolute top-1/4 left-20 opacity-8 animate-float" style={{ animationDelay: '2s' }}>
          <Heart className="w-6 h-6 md:w-8 md:h-8 text-gray-300" />
        </div>
        <div className="hidden md:block absolute bottom-1/4 right-16 opacity-10 animate-float" style={{ animationDelay: '4s' }}>
          <ThumbsUp className="w-8 h-8 md:w-10 md:h-10 text-gray-400" />
        </div>
        <div className="hidden md:block absolute top-1/2 right-12 opacity-6 animate-float" style={{ animationDelay: '6s' }}>
          <Award className="w-10 h-10 md:w-12 md:h-12 text-gray-400" />
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-24 relative">
            {/* Review stats floating around title - скрыты на мобильных */}
            <div className="hidden md:block absolute -top-16 left-1/4 opacity-20 animate-float" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-gray-200/50">
                <Star className="w-4 h-4 text-gray-600 fill-current" />
                <span className="text-sm font-semibold text-gray-700">4.9</span>
              </div>
            </div>
            <div className="hidden md:block absolute -top-12 right-1/4 opacity-25 animate-float" style={{ animationDelay: '2s' }}>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-gray-200/50">
                <Users className="w-4 h-4 text-gray-600" />
                <span className="text-sm font-semibold text-gray-700">35+ клиентов</span>
              </div>
            </div>
            
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 md:mb-8 text-transparent bg-gradient-to-b from-black to-gray-600 bg-clip-text animate-float relative">
              Отзывы
              {/* Animated accent */}
              <div className="absolute -bottom-2 md:-bottom-4 left-1/2 transform -translate-x-1/2 w-12 md:w-16 h-0.5 md:h-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent animate-pulse"></div>
            </h2>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed animate-float" style={{ animationDelay: '200ms' }}>
              Мнения клиентов о нашей работе
            </p>

            {/* Overall rating */}
            <div className="mt-8 md:mt-12 animate-float" style={{ animationDelay: '400ms' }}>
              <div className="inline-flex flex-col md:flex-row items-center gap-2 md:gap-4 px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-gray-50 via-white to-gray-50 rounded-xl md:rounded-2xl border border-gray-200/50 shadow-lg">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 md:w-6 md:h-6 text-gray-600 fill-current animate-pulse" style={{ animationDelay: `${i * 100}ms` }} />
                  ))}
                </div>
                <div className="text-xl md:text-2xl font-black text-gray-800">4.9</div>
                <div className="text-sm md:text-base text-gray-600">на основе 19+ отзывов</div>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative">
            {/* Connection elements - скрыты на мобильных */}
            <div className="hidden lg:block absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 opacity-30">
              <MessageCircle className="w-6 h-6 text-gray-300 animate-pulse" style={{ animationDelay: '2s' }} />
            </div>
            <div className="hidden lg:block absolute top-1/2 right-1/3 transform translate-x-1/2 -translate-y-1/2 opacity-30">
              <MessageCircle className="w-6 h-6 text-gray-300 animate-pulse" style={{ animationDelay: '3s' }} />
            </div>
            
            {reviews.map((review, index) => (
              <div key={index} className="relative group animate-float" style={{ animationDelay: `${index * 200}ms` }}>
                {/* Glow effect behind card - уменьшен для мобильных */}
                <div className={`absolute -inset-3 md:-inset-6 bg-gradient-to-br ${review.bgGlow}/0 group-hover:${review.bgGlow.replace('/0', '/30')} rounded-2xl md:rounded-3xl transition-all duration-700 blur-lg md:blur-xl`}></div>
                
                {/* Main review card */}
                <div className="relative p-6 md:p-10 border border-gray-200 hover:border-transparent hover:shadow-2xl md:hover:shadow-3xl transition-all duration-500 group rounded-xl md:rounded-2xl bg-white group-hover:bg-gradient-to-br group-hover:from-gray-50 group-hover:to-white transform group-hover:scale-[1.02] md:group-hover:scale-105 overflow-hidden">
                  
                  {/* Quote decoration - уменьшен для мобильных */}
                  <div className="absolute top-4 md:top-6 right-4 md:right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                    <Quote className="w-8 h-8 md:w-12 md:h-12 text-gray-400" />
                  </div>
                  
                  {/* Verified badge - уменьшен для мобильных */}
                  {review.verified && (
                    <div className="absolute -top-2 -right-2 md:-top-3 md:-right-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110">
                      <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center shadow-lg">
                        <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-white" />
                      </div>
                    </div>
                  )}
                  
                  {/* Premium badge for first review - уменьшен для мобильных */}
                  {index === 0 && (
                    <div className="absolute -top-1 left-4 md:-top-2 md:left-6 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="flex items-center gap-1 px-2 py-0.5 md:px-3 md:py-1 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full shadow-lg">
                        <Crown className="w-2.5 h-2.5 md:w-3 md:h-3 text-white" />
                        <span className="text-xs font-bold text-white">TOP</span>
                      </div>
                    </div>
                  )}
                  
                  {/* Star rating with enhanced effects */}
                  <div className="flex mb-4 md:mb-6 relative">
                    {[...Array(review.rating)].map((_, i) => (
                      <div key={i} className="relative group/star">
                        <Star className="w-4 h-4 md:w-5 md:h-5 text-gray-600 fill-current group-hover:scale-110 transition-transform duration-300" style={{ animationDelay: `${i * 50}ms` }} />
                        {/* Sparkle effect - скрыт на мобильных */}
                        <div className="hidden md:block absolute -inset-1 opacity-0 group-hover/star:opacity-100 transition-opacity duration-500">
                          <Sparkles className="w-7 h-7 text-gray-500 animate-pulse" />
                        </div>
                      </div>
                    ))}
                    {/* Rating number */}
                    <div className="ml-2 md:ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span className="text-xs md:text-sm font-bold text-gray-700">{review.rating}.0</span>
                    </div>
                  </div>
                  
                  {/* Review text with enhanced styling */}
                  <p className="text-gray-700 mb-6 md:mb-8 font-light leading-relaxed text-base md:text-lg italic group-hover:text-gray-800 transition-colors duration-300 relative">
                    <span className="absolute -left-3 -top-1 text-2xl md:text-4xl text-gray-200 font-serif">"</span>
                    {review.text}
                    <span className="absolute -right-1 -bottom-2 md:-bottom-4 text-2xl md:text-4xl text-gray-200 font-serif">"</span>
                  </p>
                  
                  {/* Date and metrics - скрыты на мобильных */}
                  <div className="mb-4 md:mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden md:block">
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        <span>Рост конверсии</span>
                      </div>
                      <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                      <span>{review.date}</span>
                    </div>
                  </div>
                  
                  {/* Author section with enhanced styling */}
                  <div className="border-t border-gray-200 pt-4 md:pt-6 flex items-center relative">
                    {/* Enhanced avatar */}
                    <div className={`relative w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br ${review.color} text-white rounded-lg md:rounded-xl flex items-center justify-center font-bold text-xs md:text-sm mr-3 md:mr-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg overflow-hidden`}>
                      {review.avatar}
                      
                      {/* Avatar glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Avatar border animation - скрыт на мобильных */}
                      <div className="absolute -inset-1 border-2 border-gray-300/30 rounded-xl opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-500 hidden md:block"></div>
                      
                      {/* Status indicator - скрыт на мобильных */}
                      <div className="absolute -bottom-1 -right-1 w-3 h-3 md:w-4 md:h-4 bg-gray-600 rounded-full border-2 border-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden md:flex">
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full animate-pulse"></div>
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="font-black text-black text-base md:text-lg group-hover:text-gray-800 transition-colors duration-300 relative">
                        {review.name}
                        {/* Name underline - скрыт на мобильных */}
                        <div className="absolute -bottom-1 left-0 w-0 h-px bg-gray-400 group-hover:w-full transition-all duration-700 hidden md:block"></div>
                      </div>
                      <div className="text-gray-500 text-xs md:text-sm uppercase tracking-wider mt-0.5 md:mt-1 group-hover:text-gray-600 transition-colors duration-300">
                        {review.company}
                      </div>
                    </div>
                    
                    {/* Trust badge - скрыт на мобильных */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden md:block">
                      <Shield className="w-4 h-4 md:w-5 md:h-5 text-gray-400" />
                    </div>
                  </div>
                  
                  {/* Hover action buttons - скрыты на мобильных */}
                  {/* <div className="mt-4 md:mt-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 hidden md:block">
                    <div className="flex gap-2">
                      <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-600 transition-colors duration-300 group/btn">
                        <ThumbsUp className="w-3 h-3 group-hover/btn:scale-110 transition-transform duration-300" />
                        Полезно
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-600 transition-colors duration-300 group/btn">
                        <MessageCircle className="w-3 h-3 group-hover/btn:scale-110 transition-transform duration-300" />
                        Ответить
                      </button>
                    </div>
                  </div> */}
                  
                  {/* Decorative corner elements - скрыты на мобильных */}
                  <div className="absolute top-2 left-2 md:top-4 md:left-4 opacity-0 group-hover:opacity-20 transition-opacity duration-500 hidden md:block">
                    <Star className="w-3 h-3 md:w-4 md:h-4 text-gray-400 animate-pulse" />
                  </div>
                  <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 opacity-0 group-hover:opacity-15 transition-opacity duration-500 hidden md:block" style={{ animationDelay: '0.3s' }}>
                    <Heart className="w-3 h-3 md:w-4 md:h-4 text-gray-400 animate-pulse" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA section */}
          <div className="mt-12 md:mt-20 text-center animate-float" style={{ animationDelay: '1000ms' }}>
            <div className="inline-flex flex-col md:flex-row items-center gap-4 md:gap-6 px-6 py-4 md:px-10 md:py-6 bg-gradient-to-r from-gray-50 via-white to-gray-50 rounded-xl md:rounded-2xl border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
              <div className="flex items-center gap-2">
                <Star className="w-6 h-6 md:w-8 md:h-8 text-gray-600 fill-current animate-pulse" />
                <div className="text-2xl md:text-3xl font-black text-gray-800">4.9</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-base md:text-lg font-bold text-gray-800">Средний рейтинг</div>
                <div className="text-xs md:text-sm text-gray-600">на основе 35+ проектов</div>
              </div>
              <div className="w-2 h-2 md:w-3 md:h-3 bg-gray-600 rounded-full animate-ping"></div>
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
        
        @media (max-width: 768px) {
          .animate-float {
            animation: float 8s ease-in-out infinite;
          }
        }
      `}</style>
    </section>
  );
};

export default ReviewsSection;