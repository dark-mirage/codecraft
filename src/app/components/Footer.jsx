import { Mail, Phone, MapPin } from "lucide-react";
const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-white to-gray-100 border-t border-gray-200 py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 animate-float">
            <div>
              <div className="text-3xl font-black text-transparent bg-gradient-to-r from-black to-gray-600 bg-clip-text mb-6">
                WebStudio
              </div>
              <p className="text-gray-600 font-light leading-relaxed">
                Создаем цифровые решения высочайшего качества
              </p>
            </div>
            
            <div>
              <h4 className="text-black font-black mb-6 text-xl">Услуги</h4>
              <ul className="space-y-4 text-gray-600 font-light">
                <li><a href="#" className="hover:text-black transition-colors duration-300 hover:font-medium">Веб-сайты</a></li>
                <li><a href="#" className="hover:text-black transition-colors duration-300 hover:font-medium">Веб-приложения</a></li>
                <li><a href="#" className="hover:text-black transition-colors duration-300 hover:font-medium">Мобильные приложения</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-black font-black mb-6 text-xl">Компания</h4>
              <ul className="space-y-4 text-gray-600 font-light">
                <li><a href="#" className="hover:text-black transition-colors duration-300 hover:font-medium">О нас</a></li>
                <li><a href="#" className="hover:text-black transition-colors duration-300 hover:font-medium">Портфолио</a></li>
                <li><a href="#" className="hover:text-black transition-colors duration-300 hover:font-medium">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-black font-black mb-6 text-xl">Контакты</h4>
              <ul className="space-y-4 text-gray-600 font-light">
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  hello@webstudio.com
                </li>
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  +7 (999) 123-45-67
                </li>
                <li className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  Москва, Россия
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-20 pt-10 text-center">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-500 font-light">&copy; 2024 WebStudio. Все права защищены.</p>
              <div className="flex space-x-8">
                <a href="#" className="text-gray-500 hover:text-black transition-colors duration-300 font-light">Политика конфиденциальности</a>
                <a href="#" className="text-gray-500 hover:text-black transition-colors duration-300 font-light">Условия использования</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer