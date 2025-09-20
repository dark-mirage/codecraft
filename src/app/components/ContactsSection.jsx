'use client'
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, CheckCircle, Globe, Zap, Star, Users, ArrowRight, Sparkles, Target, Coffee } from 'lucide-react';

const ContactsSection = () => {
return (
    <section id="контакты" className="py-32 bg-gradient-to-b from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large floating shapes */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-gray-100/40 to-gray-200/40 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-1/3 -left-32 w-64 h-64 bg-gradient-to-tr from-gray-100/60 to-gray-200/60 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-gradient-to-tl from-gray-50/30 to-gray-100/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        
        {/* Communication themed patterns */}
        <div className="absolute top-20 left-20 w-16 h-16 border-2 border-gray-200/40 rounded-full animate-spin-slow"></div>
        <div className="absolute top-1/3 right-16 w-12 h-24 bg-gradient-to-b from-gray-200/30 to-transparent transform -rotate-12 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-16 w-20 h-20 border border-gray-300/50 rotate-45 animate-bounce" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-32 right-32 w-8 h-8 bg-gradient-to-br from-gray-300/40 to-gray-400/40 rounded-full animate-pulse" style={{ animationDelay: '2.5s' }}></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-gray-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-2.5 h-2.5 bg-gray-300 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-gray-400 rounded-full animate-ping" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-3/4 right-1/3 w-3.5 h-3.5 bg-gray-300 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        
        {/* Communication icons floating */}
        <div className="absolute top-1/4 left-12 opacity-8 animate-float" style={{ animationDelay: '2s' }}>
          <MessageCircle className="w-10 h-10 text-gray-200" />
        </div>
        <div className="absolute bottom-1/4 right-16 opacity-10 animate-float" style={{ animationDelay: '4s' }}>
          <Send className="w-8 h-8 text-gray-200" />
        </div>
        <div className="absolute top-1/2 right-12 opacity-6 animate-float" style={{ animationDelay: '6s' }}>
          <Globe className="w-12 h-12 text-gray-200" />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24 relative">
            {/* Contact stats floating around title */}
            <div className="absolute -top-16 left-1/4 opacity-20 animate-float" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-gray-200/50">
                <Clock className="w-4 h-4 text-gray-600" />
                <span className="text-sm font-semibold text-gray-700">24/7 онлайн</span>
              </div>
            </div>
            <div className="absolute -top-12 right-1/4 opacity-25 animate-float" style={{ animationDelay: '2s' }}>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-gray-200/50">
                <Users className="w-4 h-4 text-gray-600" />
                <span className="text-sm font-semibold text-gray-700">Быстрый ответ</span>
              </div>
            </div>
            
            <h2 className="text-6xl md:text-7xl font-black mb-8 text-transparent bg-gradient-to-b from-black to-gray-600 bg-clip-text animate-float relative">
              Контакты
              {/* Animated accent */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent animate-pulse"></div>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed animate-float" style={{ animationDelay: '200ms' }}>
              Готовы обсудить ваш проект
            </p>

            {/* Response time indicator */}
            <div className="mt-12 animate-float" style={{ animationDelay: '400ms' }}>
              <div className="inline-flex items-center gap-4 px-6 py-3 bg-gradient-to-r from-gray-50 via-white to-gray-50 rounded-2xl border border-gray-200/50 shadow-lg">
                <div className="w-3 h-3 bg-gray-600 rounded-full animate-pulse"></div>
                <span className="text-gray-600 font-medium">Отвечаем в течение 1 часа</span>
                <Zap className="w-4 h-4 text-gray-500" />
              </div>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-12 animate-float relative" style={{ animationDelay: '300ms' }}>
              {/* Connection lines between contact items */}
              <div className="absolute left-7 top-16 bottom-16 w-px bg-gradient-to-b from-transparent via-gray-200/50 to-transparent animate-pulse" style={{ animationDelay: '2s' }}></div>
              
              {[
                { 
                  icon: Mail, 
                  title: "Email", 
                  content: "codecraftitstudio@gmail.com",
                  color: "from-gray-600 to-gray-800",
                  bgGlow: "from-gray-200 to-gray-300",
                  actionText: "Написать письмо"
                },
                { 
                  icon: Phone, 
                  title: "Телефон", 
                  content: "+7 (999) 123-45-67",
                  color: "from-gray-600 to-gray-800",
                  bgGlow: "from-gray-200 to-gray-300",
                  actionText: "Позвонить"
                }
              ].map((contact, index) => (
                <div key={index} className="flex items-start space-x-6 group relative">
                  {/* Glow effect behind contact item */}
                  <div className={`absolute -inset-4 bg-gradient-to-r ${contact.bgGlow}/0 group-hover:${contact.bgGlow.replace('/0', '/20')} rounded-2xl transition-all duration-700 blur-xl`}></div>
                  
                  {/* Enhanced icon */}
                  <div className="relative w-14 h-14 bg-gradient-to-br from-black to-gray-700 text-white rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl group-hover:shadow-2xl overflow-hidden">
                    <contact.icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                    
                    {/* Rotating gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:rotate-180 transition-all duration-1000"></div>
                    
                    {/* Corner sparkles */}
                    <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="w-3 h-3 bg-gray-400 rounded-full animate-ping"></div>
                    </div>
                    <div className="absolute -bottom-1 -left-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ animationDelay: '0.2s' }}>
                      <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse"></div>
                    </div>
                    
                    {/* Status indicator */}
                    <div className="absolute -bottom-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="w-4 h-4 bg-gray-600 rounded-full border-2 border-white flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1 relative">
                    {/* Title with enhanced styling */}
                    <div className="text-black font-black text-xl mb-2 group-hover:text-gray-800 transition-colors duration-300 relative">
                      {contact.title}
                      {/* Animated underline */}
                      <div className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r ${contact.color} group-hover:w-full transition-all duration-700`}></div>
                      
                      {/* Hover icon */}
                      <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-2">
                        <ArrowRight className="w-5 h-5 text-gray-400" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="text-gray-600 text-lg group-hover:text-gray-800 transition-colors duration-300 mb-4">
                      {contact.content}
                    </div>
                    
                    {/* Action button */}
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                      <button className="text-sm px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-600 transition-colors duration-300 flex items-center gap-2 group/btn">
                        {contact.actionText}
                        <contact.icon className="w-3 h-3 group-hover/btn:scale-110 transition-transform duration-300" />
                      </button>
                    </div>
                    
                    {/* Available hours for phone */}
                    {contact.title === "Телефон" && (
                      <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <Clock className="w-3 h-3" />
                          <span>Пн-Пт: 9:00-18:00 МСК</span>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Decorative corner elements */}
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                    <Star className="w-4 h-4 text-gray-400 animate-pulse" />
                  </div>
                </div>
              ))}
              
              {/* Additional contact info */}
              <div className="mt-16 p-6 bg-gradient-to-r from-gray-50 to-white rounded-2xl border border-gray-200/50 shadow-lg opacity-0 animate-float" style={{ animationDelay: '800ms', animation: 'float 6s ease-in-out infinite, fadeIn 1s ease-out 0.8s both' }}>
                <div className="flex items-center gap-4 mb-4">
                  <Coffee className="w-6 h-6 text-gray-600" />
                  <span className="font-black text-gray-800">Давайте встретимся!</span>
                </div>
                <p className="text-gray-600 text-sm">
                  Приглашаем на кофе в нашем офисе в Москве для личного обсуждения проекта
                </p>
              </div>
            </div>
            
            {/* Enhanced form */}
            <form className="space-y-8 animate-float relative" style={{ animationDelay: '500ms' }}>
              {/* Form background pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50/30 to-transparent rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              
              <div className="relative group">
                <input 
                  type="text" 
                  placeholder="Ваше имя"
                  className="w-full px-0 py-6 bg-transparent border-0 border-b-2 border-gray-300 text-black placeholder-gray-400 focus:border-black focus:outline-none transition-all duration-300 font-light text-lg peer"
                />
                {/* Enhanced focus indicator */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gray-600 to-gray-800 peer-focus:w-full transition-all duration-500"></div>
                {/* Floating label effect */}
                <div className="absolute -top-2 left-0 opacity-0 peer-focus:opacity-100 transition-opacity duration-300">
                  <span className="text-xs text-gray-500 bg-white px-2">Имя *</span>
                </div>
                {/* Character indicator */}
                <div className="absolute top-2 right-0 opacity-0 peer-focus:opacity-100 transition-opacity duration-300">
                  <Users className="w-4 h-4 text-gray-400" />
                </div>
              </div>
              
              <div className="relative group">
                <input 
                  type="email" 
                  placeholder="Email"
                  className="w-full px-0 py-6 bg-transparent border-0 border-b-2 border-gray-300 text-black placeholder-gray-400 focus:border-black focus:outline-none transition-all duration-300 font-light text-lg peer"
                />
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gray-600 to-gray-800 peer-focus:w-full transition-all duration-500"></div>
                <div className="absolute -top-2 left-0 opacity-0 peer-focus:opacity-100 transition-opacity duration-300">
                  <span className="text-xs text-gray-500 bg-white px-2">Email *</span>
                </div>
                <div className="absolute top-2 right-0 opacity-0 peer-focus:opacity-100 transition-opacity duration-300">
                  <Mail className="w-4 h-4 text-gray-400" />
                </div>
              </div>
              
              <div className="relative group">
                <textarea 
                  rows="4"
                  placeholder="Расскажите о вашем проекте"
                  className="w-full px-0 py-6 bg-transparent border-0 border-b-2 border-gray-300 text-black placeholder-gray-400 focus:border-black focus:outline-none transition-all duration-300 resize-none font-light text-lg peer"
                ></textarea>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gray-600 to-gray-800 peer-focus:w-full transition-all duration-500"></div>
                <div className="absolute -top-2 left-0 opacity-0 peer-focus:opacity-100 transition-opacity duration-300">
                  <span className="text-xs text-gray-500 bg-white px-2">Сообщение</span>
                </div>
                <div className="absolute top-2 right-0 opacity-0 peer-focus:opacity-100 transition-opacity duration-300">
                  <MessageCircle className="w-4 h-4 text-gray-400" />
                </div>
              </div>
              
              {/* Enhanced submit button */}
              <button className="group/btn w-full py-6 bg-gradient-to-r from-black to-gray-800 text-white font-semibold hover:from-gray-800 hover:to-black transition-all duration-500 transform hover:scale-105 hover:shadow-2xl mt-8 rounded-xl relative overflow-hidden">
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Отправить сообщение
                  <Send className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                </span>
                
                {/* Button glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover/btn:opacity-100 group-hover/btn:animate-pulse transition-all duration-300"></div>
                
                {/* Success state */}
                <div className="absolute inset-0 bg-gray-600 opacity-0 flex items-center justify-center transition-opacity duration-300">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
              </button>
              
              {/* Form stats */}
              <div className="flex justify-center gap-8 pt-6 opacity-70">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800">1</div>
                  <div className="text-xs text-gray-600">час ответа</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800">100%</div>
                  <div className="text-xs text-gray-600">конфиденциальность</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800">24/7</div>
                  <div className="text-xs text-gray-600">доступность</div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 opacity-0 hover:opacity-20 transition-opacity duration-500">
                <Sparkles className="w-6 h-6 text-gray-400 animate-pulse" />
              </div>
              <div className="absolute bottom-20 left-4 opacity-0 hover:opacity-15 transition-opacity duration-500" style={{ animationDelay: '0.3s' }}>
                <Target className="w-5 h-5 text-gray-400 animate-pulse" />
              </div>
            </form>
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
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0px); }
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

export default ContactsSection;