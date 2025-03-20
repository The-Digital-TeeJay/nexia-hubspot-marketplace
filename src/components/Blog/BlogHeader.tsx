
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const categories = [
  "Todos",
  "Inteligência Artificial",
  "Automação",
  "Machine Learning",
  "Casos de Uso",
  "Tendências"
];

const BlogHeader = () => {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-nexia-blue/10 text-nexia-blue text-sm font-medium mb-4">
            Blog & Insights
          </div>
          <h1 className="mb-6">
            Novidades, artigos e <span className="hero-text-gradient">insights</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Acompanhe as últimas novidades sobre automação, inteligência artificial
            e transformação digital.
          </p>
        </div>
        
        <div className="relative max-w-xl mx-auto mb-12">
          <Input 
            type="text" 
            placeholder="Buscar artigos..." 
            className="pl-12 py-6 rounded-full shadow-sm"
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
        </div>
        
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                index === 0 
                  ? 'bg-nexia-blue text-white shadow-md' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogHeader;
