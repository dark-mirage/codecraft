
import { Star, } from 'lucide-react';

const ReviewsSection = () => {
 const reviews = [
    {
      name: "Александр Петров",
      company: "Tech Startup",
      rating: 5,
      text: "Профессиональная команда с высоким уровнем экспертизы. Проект был выполнен качественно и в срок.",
      avatar: "АП"
    },
    {
      name: "Марина Сидорова",
      company: "E-commerce Business",
      rating: 5,
      text: "Отличный результат! Конверсия нашего сайта увеличилась в несколько раз после редизайна.",
      avatar: "МС"
    },
    {
      name: "Дмитрий Козлов",
      company: "Digital Agency",
      rating: 5,
      text: "Рекомендую для серьезных проектов. Внимание к деталям и качество исполнения на высшем уровне.",
      avatar: "ДК"
    }
  ];

  return (
    <section id="отзывы" className="py-32 bg-gradient-to-b from-gray-50 to-white relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-6xl md:text-7xl font-black mb-8 text-transparent bg-gradient-to-b from-black to-gray-600 bg-clip-text animate-float">
              Отзывы
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed animate-float" style={{ animationDelay: '200ms' }}>
              Мнения клиентов о нашей работе
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="p-10 border border-gray-200 hover:border-transparent hover:shadow-3xl transition-all duration-500 group rounded-2xl bg-white group-hover:bg-gradient-to-br group-hover:from-gray-50 group-hover:to-white transform group-hover:scale-105 animate-float" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="flex mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-black fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-8 font-light leading-relaxed text-lg italic">"{review.text}"</p>
                <div className="border-t border-gray-200 pt-6 flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-black to-gray-600 text-white rounded-xl flex items-center justify-center font-bold text-sm mr-4">
                    {review.avatar}
                  </div>
                  <div>
                    <div className="font-black text-black text-lg">{review.name}</div>
                    <div className="text-gray-500 text-sm uppercase tracking-wider mt-1">{review.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection