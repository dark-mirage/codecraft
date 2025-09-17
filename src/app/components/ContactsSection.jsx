import { Mail, Phone, MapPin } from 'lucide-react';

const ContactsSection = () => {
return (
    <section id="контакты" className="py-32 bg-gradient-to-b from-gray-50 to-white relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-6xl md:text-7xl font-black mb-8 text-transparent bg-gradient-to-b from-black to-gray-600 bg-clip-text animate-float">
              Контакты
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed animate-float" style={{ animationDelay: '200ms' }}>
              Готовы обсудить ваш проект
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-12 animate-float" style={{ animationDelay: '300ms' }}>
              {[
                { icon: Mail, title: "Email", content: "hello@webstudio.com" },
                { icon: Phone, title: "Телефон", content: "+7 (999) 123-45-67" },
                { icon: MapPin, title: "Адрес", content: "Москва, Россия" }
              ].map((contact, index) => (
                <div key={index} className="flex items-start space-x-6 group">
                  <div className="w-14 h-14 bg-gradient-to-br from-black to-gray-700 text-white rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
                    <contact.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-black font-black text-xl mb-2">{contact.title}</div>
                    <div className="text-gray-600 text-lg">{contact.content}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <form className="space-y-8 animate-float" style={{ animationDelay: '500ms' }}>
              <div>
                <input 
                  type="text" 
                  placeholder="Ваше имя"
                  className="w-full px-0 py-6 bg-transparent border-0 border-b-2 border-gray-300 text-black placeholder-gray-400 focus:border-black focus:outline-none transition-all duration-300 font-light text-lg"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Email"
                  className="w-full px-0 py-6 bg-transparent border-0 border-b-2 border-gray-300 text-black placeholder-gray-400 focus:border-black focus:outline-none transition-all duration-300 font-light text-lg"
                />
              </div>
              <div>
                <textarea 
                  rows="4"
                  placeholder="Расскажите о вашем проекте"
                  className="w-full px-0 py-6 bg-transparent border-0 border-b-2 border-gray-300 text-black placeholder-gray-400 focus:border-black focus:outline-none transition-all duration-300 resize-none font-light text-lg"
                ></textarea>
              </div>
              <button className="w-full py-6 bg-gradient-to-r from-black to-gray-800 text-white font-semibold hover:from-gray-800 hover:to-black transition-all duration-500 transform hover:scale-105 hover:shadow-2xl mt-8 rounded-xl">
                Отправить сообщение
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection