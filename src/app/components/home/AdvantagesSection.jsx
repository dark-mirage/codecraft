
const AdvantagesSection = () => {
    const advantages = [
    {
      title: "Современные технологии",
      description: "Используем проверенные технологии и лучшие практики разработки для создания надежных решений"
    },
    {
      title: "Индивидуальный подход",
      description: "Каждый проект уникален — разрабатываем решения под конкретные потребности бизнеса"
    },
    {
      title: "Точность в сроках",
      description: "Четко планируем этапы работы и всегда информируем о ходе выполнения проекта"
    },
    {
      title: "Долгосрочная поддержка",
      description: "Обеспечиваем техническое сопровождение и развитие проекта после запуска"
    }
  ];

  return (
    <section id="преимущества" className="py-32 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-6xl md:text-7xl font-black mb-8 text-transparent bg-gradient-to-b from-black to-gray-600 bg-clip-text animate-float">
              Преимущества
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed animate-float" style={{ animationDelay: '200ms' }}>
              Почему клиенты выбирают работу с нами
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex items-start space-x-8 group animate-float" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="w-16 h-16 bg-gradient-to-br from-black to-gray-700 text-white rounded-2xl flex items-center justify-center flex-shrink-0 font-black text-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3 className="text-3xl font-black text-black mb-4">{advantage.title}</h3>
                  <p className="text-gray-600 font-light leading-relaxed text-lg">{advantage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection