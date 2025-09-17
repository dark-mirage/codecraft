
import { Code, Smartphone, Globe, Check,  } from 'lucide-react';

const ServicesSection = () => {
const services = [
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Веб-сайты",
      description: "Современные адаптивные сайты с чистым кодом и высокой производительностью",
      features: ["Responsive дизайн", "SEO оптимизация", "Высокая скорость загрузки"],
      gradient: "from-gray-900 to-black"
    },
    {
      icon: <Code className="w-12 h-12" />,
      title: "Веб-приложения",
      description: "Сложные интерактивные приложения на современных технологиях",
      features: ["React/Next.js", "Node.js Backend", "Масштабируемая архитектура"],
      gradient: "from-gray-800 to-gray-900"
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Мобильные приложения",
      description: "Нативные и кроссплатформенные решения для iOS и Android",
      features: ["Native разработка", "React Native", "Интуитивный UX"],
      gradient: "from-gray-700 to-gray-800"
    }
  ];

  return (
    <section id="услуги" className="py-32 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-6xl md:text-7xl font-black mb-8 text-transparent bg-gradient-to-b from-black to-gray-600 bg-clip-text animate-float">
              Услуги
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed animate-float" style={{ animationDelay: '200ms' }}>
              Полный цикл разработки от концепции до внедрения и поддержки
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group animate-float" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="p-10 border border-gray-200 hover:border-transparent hover:shadow-3xl transition-all duration-500 h-full rounded-2xl bg-white group-hover:bg-gradient-to-br group-hover:from-gray-50 group-hover:to-white transform group-hover:scale-105">
                  <div className={`text-white mb-8 w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-black text-black mb-6">{service.title}</h3>
                  <p className="text-gray-600 mb-8 font-light leading-relaxed">{service.description}</p>
                  <ul className="space-y-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <div className="w-6 h-6 bg-gradient-to-br from-black to-gray-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection