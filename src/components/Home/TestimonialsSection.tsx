
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "A plataforma da Nexia transformou completamente nossos processos internos. Reduzimos o tempo de processamento em 70% e praticamente eliminamos erros humanos.",
    author: "Mariana Silva",
    position: "Diretora de Operações, TechCorp",
    rating: 5
  },
  {
    id: 2,
    content: "Implementamos as soluções da Nexia há 6 meses e já vimos um retorno sobre o investimento incrível. A automação inteligente realmente faz a diferença no nosso dia a dia.",
    author: "Carlos Mendes",
    position: "CEO, Inova Solutions",
    rating: 5
  },
  {
    id: 3,
    content: "A equipe da Nexia foi excepcional durante todo o processo de implementação. Eles realmente entendem nosso negócio e criaram uma solução sob medida para nós.",
    author: "Amanda Reis",
    position: "Gerente de Projetos, Global Finance",
    rating: 5
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <section className="py-20 md:py-32 bg-nexia-dark text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-nexia-blue/20 via-transparent to-transparent opacity-30 -z-10" />
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-nexia-orange/20 text-nexia-orange text-sm font-medium mb-4">
            Histórias de Sucesso
          </div>
          <h2 className="mb-6 text-white">O que nossos clientes <span className="text-nexia-orange">dizem</span></h2>
          <p className="text-gray-300 text-lg">
            Veja como nossas soluções estão transformando negócios em todo o Brasil.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="glass-card rounded-2xl p-8 md:p-10 bg-white/5 backdrop-blur-lg border border-white/10">
                    <div className="flex mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-nexia-orange fill-nexia-orange" />
                      ))}
                    </div>
                    <p className="text-xl md:text-2xl font-light mb-8 text-gray-100">
                      "{testimonial.content}"
                    </p>
                    <div>
                      <div className="font-medium text-lg">{testimonial.author}</div>
                      <div className="text-gray-400">{testimonial.position}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-nexia-orange' : 'bg-gray-600'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/10 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/20 transition-colors hidden md:block"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/10 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/20 transition-colors hidden md:block"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
