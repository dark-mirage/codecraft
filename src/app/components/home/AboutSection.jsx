import { Users, Award, Clock,} from 'lucide-react';

const AboutSection = () => {
 return (
    <section id="о-нас" className="py-32 bg-gradient-to-b from-white to-gray-50 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-6xl md:text-7xl font-black mb-8 text-transparent bg-gradient-to-b from-black to-gray-600 bg-clip-text animate-float">
              О нас
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed animate-float" style={{ animationDelay: '200ms' }}>
              Команда профессионалов, создающая цифровые продукты высочайшего качества. 
              Мы сосредоточены на деталях и стремимся к совершенству в каждом проекте.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-16">
            {[
              { icon: Users, number: "50+", text: "Проектов реализовано" },
              { icon: Award, number: "5", text: "Лет экспертизы" },
              { icon: Clock, number: "24/7", text: "Техническая поддержка" }
            ].map((item, index) => (
              <div key={index} className="text-center group animate-float" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="w-24 h-24 bg-gradient-to-br from-black to-gray-700 text-white rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl">
                  <item.icon className="w-12 h-12" />
                </div>
                <h3 className="text-4xl font-black text-black mb-4 bg-gradient-to-b from-black to-gray-600 bg-clip-text">{item.number}</h3>
                <p className="text-gray-600 font-light">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection