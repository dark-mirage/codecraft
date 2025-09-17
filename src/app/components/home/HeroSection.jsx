
import { ChevronDown, ArrowRight} from 'lucide-react';

const HeroSection = () => {
   return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-gray-200/30 to-gray-300/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-gray-100/40 to-gray-200/40 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-gray-50/20 to-gray-100/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-7xl md:text-9xl font-black mb-8 text-transparent bg-gradient-to-b from-black via-gray-800 to-gray-600 bg-clip-text tracking-tight leading-none animate-float">
            Digital
            <br />
            <span className="font-light bg-gradient-to-r from-gray-600 to-gray-400 bg-clip-text">Solutions</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto font-light leading-relaxed animate-float" style={{ animationDelay: '200ms' }}>
            Разрабатываем современные веб-приложения, сайты и мобильные приложения с фокусом на качество и функциональность
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-float" style={{ animationDelay: '400ms' }}>
            <button className="group px-12 py-5 bg-gradient-to-r from-black to-gray-800 text-white font-semibold hover:from-gray-800 hover:to-black transition-all duration-500 transform hover:scale-105 hover:shadow-2xl min-w-[200px] rounded-lg relative overflow-hidden">
              <span className="relative z-10 flex items-center justify-center">
                Начать проект
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button className="px-12 py-5 border-2 border-black text-black font-semibold hover:bg-black hover:text-white transition-all duration-500 transform hover:scale-105 hover:shadow-2xl min-w-[200px] rounded-lg">
              Портфолио
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-gray-400 w-6 h-6" />
      </div>
    </section>
  );
}
export default HeroSection