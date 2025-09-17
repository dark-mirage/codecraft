

const WorkflowSection = () => {
   const steps = [
    { title: "Анализ", description: "Глубокое изучение задач и требований проекта" },
    { title: "Планирование", description: "Создание детального плана и технического задания" },
    { title: "Дизайн", description: "Разработка пользовательского интерфейса и UX" },
    { title: "Разработка", description: "Программирование с использованием лучших практик" },
    { title: "Тестирование", description: "Комплексная проверка функциональности" },
    { title: "Запуск", description: "Развертывание и ввод в эксплуатацию" }
  ];

  return (
    <section id="этапы-работы" className="py-32 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-6xl md:text-7xl font-black mb-8 text-transparent bg-gradient-to-b from-black to-gray-600 bg-clip-text animate-float">
              Процесс работы
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed animate-float" style={{ animationDelay: '200ms' }}>
              Структурированный подход к реализации проектов
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <div key={index} className="text-center group animate-float" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="w-20 h-20 bg-gradient-to-br from-black to-gray-700 text-white rounded-2xl flex items-center justify-center text-xl font-black mb-8 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="text-2xl font-black text-black mb-4">{step.title}</h3>
                <p className="text-gray-600 font-light leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


export default WorkflowSection