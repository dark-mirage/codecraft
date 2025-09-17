const PortfolioSection = () => {
const projects = [
    { title: "E-commerce Platform", category: "Веб-приложение", gradient: "from-gray-900 to-black" },
    { title: "Banking Mobile App", category: "Мобильное приложение", gradient: "from-gray-800 to-gray-900" },
    { title: "Corporate Website", category: "Веб-сайт", gradient: "from-gray-700 to-gray-800" },
    { title: "SaaS Dashboard", category: "Веб-приложение", gradient: "from-gray-600 to-gray-700" },
    { title: "Learning Platform", category: "Веб-приложение", gradient: "from-gray-500 to-gray-600" },
    { title: "Fitness Tracker", category: "Мобильное приложение", gradient: "from-gray-400 to-gray-500" }
  ];

  return (
    <section id="портфолио" className="py-32 bg-gradient-to-b from-gray-50 to-white relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-6xl md:text-7xl font-black mb-8 text-transparent bg-gradient-to-b from-black to-gray-600 bg-clip-text animate-float">
              Портфолио
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed animate-float" style={{ animationDelay: '200ms' }}>
              Избранные проекты, демонстрирующие наш подход к решению задач
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group cursor-pointer animate-float" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="overflow-hidden rounded-2xl border border-gray-200 group-hover:border-transparent group-hover:shadow-3xl transition-all duration-500 transform group-hover:scale-105">
                  <div className={`bg-gradient-to-br ${project.gradient} h-64 relative transition-all duration-500 group-hover:scale-110`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500"></div>
                  </div>
                  <div className="p-8 bg-white group-hover:bg-gradient-to-br group-hover:from-gray-50 group-hover:to-white">
                    <span className="text-gray-500 text-sm font-semibold uppercase tracking-wider">{project.category}</span>
                    <h3 className="text-black text-xl font-black mt-2">{project.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection