'use client'
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, CheckCircle, Globe, Zap, Star, Users, ArrowRight, Sparkles, Target, Coffee, AlertCircle, Loader } from 'lucide-react';

const ContactsSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    telegram: '', // Обязательное поле для Telegram
    whatsapp: '',  // Опциональное поле для WhatsApp
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(''); // 'success' or 'error'

  const validateForm = () => {
    const newErrors = {};

    // Валидация имени
    if (!formData.name.trim()) {
      newErrors.name = 'Имя обязательно для заполнения';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Имя должно содержать минимум 2 символа';
    }

    // Валидация Telegram (обязательное поле)
    if (!formData.telegram.trim()) {
      newErrors.telegram = 'Telegram обязателен для заполнения';
    } else if (!/^@?[a-zA-Z0-9_]{5,32}$/.test(formData.telegram.trim())) {
      newErrors.telegram = 'Введите корректный Telegram @user (например: @username или username)';
    }

    // Валидация WhatsApp (опционально, но если заполнено - проверяем формат)
    const whatsappRegex = /^(\+?\d{1,3}[- ]?)?\d{10}$/;
    if (formData.whatsapp.trim() && !whatsappRegex.test(formData.whatsapp.trim().replace(/[- ]/g, ''))) {
      newErrors.whatsapp = 'Введите корректный номер WhatsApp';
    }

    // Валидация сообщения
    if (!formData.message.trim()) {
      newErrors.message = 'Сообщение обязательно для заполнения';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Сообщение должно содержать минимум 10 символов';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Очищаем ошибку при вводе
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const response = await fetch('/api/sendMessage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message');
      }
      
      // Успешная отправка
      setSubmitStatus('success');
      setFormData({ 
        name: '', 
        telegram: '', 
        whatsapp: '', 
        message: '' 
      });
      
      setTimeout(() => {
        setSubmitStatus('');
      }, 5000);
      
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
      
      setTimeout(() => {
        setSubmitStatus('');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacts" className="py-16 md:py-32 bg-gradient-to-b from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large floating shapes */}
        <div className="absolute -top-20 -right-20 md:-top-40 md:-right-40 w-40 h-40 md:w-80 md:h-80 bg-gradient-to-br from-gray-100/40 to-gray-200/40 rounded-full blur-2xl md:blur-3xl animate-pulse" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-1/3 -left-16 md:-left-32 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-tr from-gray-100/60 to-gray-200/60 rounded-full blur-xl md:blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-16 md:-bottom-32 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-tl from-gray-50/30 to-gray-100/30 rounded-full blur-2xl md:blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        
        {/* Communication themed patterns */}
        <div className="absolute top-10 left-10 md:top-20 md:left-20 w-10 h-10 md:w-16 md:h-16 border-2 border-gray-200/40 rounded-full animate-spin-slow"></div>
        <div className="absolute top-1/3 right-8 md:right-16 w-8 h-16 md:w-12 md:h-24 bg-gradient-to-b from-gray-200/30 to-transparent transform -rotate-12 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-8 md:left-16 w-12 h-12 md:w-20 md:h-20 border border-gray-300/50 rotate-45 animate-bounce" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-16 md:bottom-32 right-16 md:right-32 w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-gray-300/40 to-gray-400/40 rounded-full animate-pulse" style={{ animationDelay: '2.5s' }}></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/3 w-2 h-2 md:w-3 md:h-3 bg-gray-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-2 h-2 md:w-2.5 md:h-2.5 bg-gray-300 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 md:w-2 md:h-2 bg-gray-400 rounded-full animate-ping" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-3/4 right-1/3 w-2.5 h-2.5 md:w-3.5 md:h-3.5 bg-gray-300 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        
        {/* Communication icons floating */}
        <div className="absolute top-1/4 left-6 md:left-12 opacity-8 animate-float" style={{ animationDelay: '2s' }}>
          <MessageCircle className="w-6 h-6 md:w-10 md:h-10 text-gray-200" />
        </div>
        <div className="absolute bottom-1/4 right-10 md:right-16 opacity-10 animate-float" style={{ animationDelay: '4s' }}>
          <Send className="w-5 h-5 md:w-8 md:h-8 text-gray-200" />
        </div>
        <div className="absolute top-1/2 right-6 md:right-12 opacity-6 animate-float" style={{ animationDelay: '6s' }}>
          <Globe className="w-8 h-8 md:w-12 md:h-12 text-gray-200" />
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 md:mb-24 relative">
            {/* Contact stats floating around title */}
            <div className="absolute -top-10 -left-4 md:-top-16 md:left-1/4 opacity-20 animate-float" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-1 md:gap-2 px-2 md:px-4 py-1 md:py-2 bg-white/60 backdrop-blur-sm rounded-full border border-gray-200/50">
                <Clock className="w-3 h-3 md:w-4 md:h-4 text-gray-600" />
                <span className="text-xs md:text-sm font-semibold text-gray-700">24/7 онлайн</span>
              </div>
            </div>
            <div className="absolute -top-8 -right-4 md:-top-12 md:right-1/4 opacity-25 animate-float" style={{ animationDelay: '2s' }}>
              <div className="flex items-center gap-1 md:gap-2 px-2 md:px-4 py-1 md:py-2 bg-white/60 backdrop-blur-sm rounded-full border border-gray-200/50">
                <Users className="w-3 h-3 md:w-4 md:h-4 text-gray-600" />
                <span className="text-xs md:text-sm font-semibold text-gray-700">Быстрый ответ</span>
              </div>
            </div>
            
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 md:mb-8 text-transparent bg-gradient-to-b from-black to-gray-600 bg-clip-text animate-float relative">
              Контакты
              {/* Animated accent */}
              <div className="absolute -bottom-2 md:-bottom-4 left-1/2 transform -translate-x-1/2 w-12 md:w-20 h-0.5 md:h-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent animate-pulse"></div>
            </h2>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed animate-float" style={{ animationDelay: '200ms' }}>
              Готовы обсудить ваш проект
            </p>

            {/* Response time indicator */}
            <div className="mt-8 md:mt-12 animate-float" style={{ animationDelay: '400ms' }}>
              <div className="inline-flex items-center gap-2 md:gap-4 px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-gray-50 via-white to-gray-50 rounded-xl md:rounded-2xl border border-gray-200/50 shadow-lg">
                <div className="w-2 h-2 md:w-3 md:h-3 bg-gray-600 rounded-full animate-pulse"></div>
                <span className="text-sm md:text-base text-gray-600 font-medium">Отвечаем в течение 1 часа</span>
                <Zap className="w-3 h-3 md:w-4 md:h-4 text-gray-500" />
              </div>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16">
            <div className="space-y-8 md:space-y-12 animate-float relative" style={{ animationDelay: '300ms' }}>
  {/* Connection lines between contact items */}
  <div className="absolute left-5 md:left-7 top-12 bottom-12 md:top-16 md:bottom-16 w-px bg-gradient-to-b from-transparent via-gray-200/50 to-transparent animate-pulse" style={{ animationDelay: '2s' }}></div>
  
  {[
    { 
      icon: Mail, 
      title: "Email", 
      content: "nextcodeuz@gmail.com",
      color: "from-gray-600 to-gray-800",
      bgGlow: "from-gray-200 to-gray-300",
      actionText: "Отправить почту",
      href: "mailto:nextcodeuz@gmail.com"
    },
    { 
      icon: MessageCircle, 
      title: "Telegram", 
      content: "@nextcodelead", 
      color: "from-gray-600 to-gray-800",
      bgGlow: "from-gray-200 to-gray-300",
      actionText: "Написать в Telegram",
      href: "https://t.me/nextcodelead"
    },
    // { 
    //   icon: Phone, 
    //   title: "WhatsApp", 
    //   content: "+998 90 123 45 67", 
    //   color: "from-gray-600 to-gray-800",
    //   bgGlow: "from-gray-200 to-gray-300",
    //   actionText: "Написать в WhatsApp",
    //   href: "https://wa.me/998901234567"
    // }
  ].map((contact, index) => (
    <div key={index} className="flex items-start space-x-4 md:space-x-6 group relative">
      {/* Glow effect behind contact item */}
      <div className={`absolute -inset-2 md:-inset-4 bg-gradient-to-r ${contact.bgGlow}/0 group-hover:${contact.bgGlow.replace('/0', '/20')} rounded-xl md:rounded-2xl transition-all duration-700 blur-xl`}></div>
      
      {/* Enhanced icon */}
      <div className="relative w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-black to-gray-700 text-white rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl group-hover:shadow-2xl overflow-hidden">
        <contact.icon className="w-4 h-4 md:w-6 md:h-6 group-hover:scale-110 transition-transform duration-300" />
        
        {/* Rotating gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:rotate-180 transition-all duration-1000"></div>
        
        {/* Corner sparkles */}
        <div className="absolute -top-0.5 -right-0.5 md:-top-1 md:-right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="w-2 h-2 md:w-3 md:h-3 bg-gray-400 rounded-full animate-ping"></div>
        </div>
        <div className="absolute -bottom-0.5 -left-0.5 md:-bottom-1 md:-left-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ animationDelay: '0.2s' }}>
          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gray-300 rounded-full animate-pulse"></div>
        </div>
        
        {/* Status indicator */}
        <div className="absolute -bottom-1 -right-1 md:-bottom-2 md:-right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="w-3 h-3 md:w-4 md:h-4 bg-gray-600 rounded-full border-2 border-white flex items-center justify-center">
            <div className="w-1 h-1 md:w-2 md:h-2 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
      
      <div className="flex-1 relative">
        {/* Title with enhanced styling */}
        <div className="text-black font-black text-lg md:text-xl mb-1 md:mb-2 group-hover:text-gray-800 transition-colors duration-300 relative">
          {contact.title}
          {/* Animated underline */}
          <div className={`absolute -bottom-0.5 md:-bottom-1 left-0 w-0 h-0.5 md:h-0.5 bg-gradient-to-r ${contact.color} group-hover:w-full transition-all duration-700`}></div>
          
          {/* Hover icon */}
          <div className="absolute -right-6 md:-right-8 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 md:group-hover:translate-x-2">
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-gray-400" />
          </div>
        </div>
        
        {/* Content */}
        <div className="text-gray-600 text-base md:text-lg group-hover:text-gray-800 transition-colors duration-300 mb-2 md:mb-4">
          {contact.content}
        </div>
        
        {/* Action button with link */}
        <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-1 md:translate-y-2 group-hover:translate-y-0">
          <a 
            href={contact.href} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs md:text-sm px-3 md:px-4 py-1 md:py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-600 transition-colors duration-300 flex items-center gap-1 md:gap-2 group/btn"
          >
            {contact.actionText}
            <contact.icon className="w-2.5 h-2.5 md:w-3 md:h-3 group-hover/btn:scale-110 transition-transform duration-300" />
          </a>
        </div>
      </div>
      
      {/* Decorative corner elements */}
      <div className="absolute top-1 md:top-2 right-1 md:right-2 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
        <Star className="w-3 h-3 md:w-4 md:h-4 text-gray-400 animate-pulse" />
      </div>
    </div>
  ))}
</div>
            
            {/* Enhanced form with validation */}
            <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8 animate-float relative" style={{ animationDelay: '500ms' }}>
              {/* Form background pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50/30 to-transparent rounded-2xl md:rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              
              {/* Status messages */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3 animate-float">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="text-green-800 font-medium">Сообщение отправлено!</p>
                    <p className="text-green-600 text-sm">Мы свяжемся с вами в течение часа.</p>
                  </div>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3 animate-float">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                  <div>
                    <p className="text-red-800 font-medium">Ошибка отправки</p>
                    <p className="text-red-600 text-sm">Попробуйте снова или свяжитесь с нами напрямую.</p>
                  </div>
                </div>
              )}
              
              {/* Name field */}
              <div className="relative group">
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Ваше имя"
                  className={`w-full px-0 py-4 md:py-6 bg-transparent border-0 border-b-2 ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  } text-black placeholder-gray-400 focus:border-black focus:outline-none transition-all duration-300 font-light text-base md:text-lg peer`}
                />
                {/* Enhanced focus indicator */}
                <div className={`absolute bottom-0 left-0 w-0 h-0.5 ${
                    errors.name ? 'bg-red-500' : 'bg-gradient-to-r from-gray-600 to-gray-800'
                  } peer-focus:w-full transition-all duration-500`}></div>
                {/* Floating label effect */}
                <div className="absolute -top-1.5 md:-top-2 left-0 opacity-0 peer-focus:opacity-100 transition-opacity duration-300">
                  <span className="text-xs text-gray-500 bg-white px-1 md:px-2">Имя *</span>
                </div>
                {/* Character indicator */}
                <div className="absolute top-1 md:top-2 right-0 opacity-0 peer-focus:opacity-100 transition-opacity duration-300">
                  <Users className="w-3 h-3 md:w-4 md:h-4 text-gray-400" />
                </div>
                {/* Error message */}
                {errors.name && (
                  <div className="absolute -bottom-6 left-0 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3 text-red-500" />
                    <span className="text-xs text-red-500">{errors.name}</span>
                  </div>
                )}
              </div>
              
              {/* Telegram field (обязательное) */}
              <div className="relative group">
                <input 
                  type="text" 
                  name="telegram"
                  value={formData.telegram}
                  onChange={handleInputChange}
                  placeholder="Ваш Telegram @username *"
                  className={`w-full px-0 py-4 md:py-6 bg-transparent border-0 border-b-2 ${
                    errors.telegram ? 'border-red-500' : 'border-gray-300'
                  } text-black placeholder-gray-400 focus:border-black focus:outline-none transition-all duration-300 font-light text-base md:text-lg peer`}
                />
                <div className={`absolute bottom-0 left-0 w-0 h-0.5 ${
                    errors.telegram ? 'bg-red-500' : 'bg-gradient-to-r from-gray-600 to-gray-800'
                  } peer-focus:w-full transition-all duration-500`}></div>
                <div className="absolute -top-1.5 md:-top-2 left-0 opacity-0 peer-focus:opacity-100 transition-opacity duration-300">
                  <span className="text-xs text-gray-500 bg-white px-1 md:px-2">Telegram *</span>
                </div>
                <div className="absolute top-1 md:top-2 right-0 opacity-0 peer-focus:opacity-100 transition-opacity duration-300">
                  <MessageCircle className="w-3 h-3 md:w-4 md:h-4 text-gray-400" />
                </div>
                {errors.telegram && (
                  <div className="absolute -bottom-6 left-0 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3 text-red-500" />
                    <span className="text-xs text-red-500">{errors.telegram}</span>
                  </div>
                )}
                {/* Подсказка для формата */}
                <div className="absolute -bottom-6 right-0 opacity-0 peer-focus:opacity-100 transition-opacity duration-300">
                  <span className="text-xs text-gray-400">@username или username</span>
                </div>
              </div>
              
              {/* WhatsApp field (опционально) */}
              <div className="relative group">
                <input 
                  type="tel" 
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleInputChange}
                  placeholder="Ваш WhatsApp номер (опционально)"
                  className={`w-full px-0 py-4 md:py-6 bg-transparent border-0 border-b-2 ${
                    errors.whatsapp ? 'border-red-500' : 'border-gray-300'
                  } text-black placeholder-gray-400 focus:border-black focus:outline-none transition-all duration-300 font-light text-base md:text-lg peer`}
                />
                <div className={`absolute bottom-0 left-0 w-0 h-0.5 ${
                    errors.whatsapp ? 'bg-red-500' : 'bg-gradient-to-r from-gray-600 to-gray-800'
                  } peer-focus:w-full transition-all duration-500`}></div>
                <div className="absolute -top-1.5 md:-top-2 left-0 opacity-0 peer-focus:opacity-100 transition-opacity duration-300">
                  <span className="text-xs text-gray-500 bg-white px-1 md:px-2">WhatsApp</span>
                </div>
                <div className="absolute top-1 md:top-2 right-0 opacity-0 peer-focus:opacity-100 transition-opacity duration-300">
                  <Phone className="w-3 h-3 md:w-4 md:h-4 text-gray-400" />
                </div>
                {errors.whatsapp && (
                  <div className="absolute -bottom-6 left-0 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3 text-red-500" />
                    <span className="text-xs text-red-500">{errors.whatsapp}</span>
                  </div>
                )}
                {/* Подсказка для формата */}
                {/* <div className="absolute -bottom-6 right-0 opacity-0 peer-focus:opacity-100 transition-opacity duration-300">
                  <span className="text-xs text-gray-400">+998901234567</span>
                </div> */}
              </div>
              
              {/* Message field */}
              <div className="relative group">
                <textarea 
                  rows="3"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Расскажите о вашем проекте"
                  className={`w-full px-0 py-4 md:py-6 bg-transparent border-0 border-b-2 ${
                    errors.message ? 'border-red-500' : 'border-gray-300'
                  } text-black placeholder-gray-400 focus:border-black focus:outline-none transition-all duration-300 resize-none font-light text-base md:text-lg peer`}
                ></textarea>
                <div className={`absolute bottom-0 left-0 w-0 h-0.5 ${
                    errors.message ? 'bg-red-500' : 'bg-gradient-to-r from-gray-600 to-gray-800'
                  } peer-focus:w-full transition-all duration-500`}></div>
                <div className="absolute -top-1.5 md:-top-2 left-0 opacity-0 peer-focus:opacity-100 transition-opacity duration-300">
                  <span className="text-xs text-gray-500 bg-white px-1 md:px-2">Сообщение *</span>
                </div>
                <div className="absolute top-1 md:top-2 right-0 opacity-0 peer-focus:opacity-100 transition-opacity duration-300">
                  <MessageCircle className="w-3 h-3 md:w-4 md:h-4 text-gray-400" />
                </div>
                {errors.message && (
                  <div className="absolute -bottom-6 left-0 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3 text-red-500" />
                    <span className="text-xs text-red-500">{errors.message}</span>
                  </div>
                )}
              </div>
              
              {/* Enhanced submit button */}
              <button 
                type="submit"
                disabled={isSubmitting}
                className={`group/btn w-full py-4 md:py-6 bg-gradient-to-r from-black to-gray-800 text-white font-semibold hover:from-gray-800 hover:to-black transition-all duration-500 transform hover:scale-105 hover:shadow-xl md:hover:shadow-2xl mt-6 md:mt-8 rounded-lg md:rounded-xl relative overflow-hidden ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                <span className="relative z-10 flex items-center justify-center gap-2 md:gap-3 text-sm md:text-base">
                  {isSubmitting ? (
                    <>
                      <Loader className="w-4 h-4 md:w-5 md:h-5 animate-spin" />
                      Отправляем...
                    </>
                  ) : submitStatus === 'success' ? (
                    <>
                      <CheckCircle className="w-4 h-4 md:w-5 md:h-5" />
                      Отправлено!
                    </>
                  ) : (
                    <>
                      Отправить сообщение
                      <Send className="w-4 h-4 md:w-5 md:h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                    </>
                  )}
                </span>
                
                {/* Button glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover/btn:opacity-100 group-hover/btn:animate-pulse transition-all duration-300"></div>
              </button>
              
              {/* Form stats */}
              <div className="flex justify-center gap-4 md:gap-8 pt-4 md:pt-6 opacity-70">
                <div className="text-center">
                  <div className="text-xl md:text-2xl font-bold text-gray-800">1</div>
                  <div className="text-xs text-gray-600">час ответа</div>
                </div>
                <div className="text-center">
                  <div className="text-xl md:text-2xl font-bold text-gray-800">100%</div>
                  <div className="text-xs text-gray-600">конфиденциальность</div>
                </div>
                <div className="text-center">
                  <div className="text-xl md:text-2xl font-bold text-gray-800">24/7</div>
                  <div className="text-xs text-gray-600">доступность</div>
                </div>
              </div>
              
              {/* Privacy notice */}
              <div className="text-center text-xs text-gray-500 pt-4">
                <p>Отправляя форму, вы соглашаетесь на обработку персональных данных</p>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-2 md:top-4 right-2 md:right-4 opacity-0 hover:opacity-20 transition-opacity duration-500">
                <Sparkles className="w-4 h-4 md:w-6 md:h-6 text-gray-400 animate-pulse" />
              </div>
              <div className="absolute bottom-14 md:bottom-20 left-2 md:left-4 opacity-0 hover:opacity-15 transition-opacity duration-500" style={{ animationDelay: '0.3s' }}>
                <Target className="w-4 h-4 md:w-5 md:h-5 text-gray-400 animate-pulse" />
              </div>
            </form>
          </div>
          
        </div>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(1deg); }
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
        
        /* Error shake animation */
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default ContactsSection;