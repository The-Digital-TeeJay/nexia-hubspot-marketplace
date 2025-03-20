
import { Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const categories = [
  "Todos",
  "Atendimento ao Cliente",
  "Vendas",
  "Marketing",
  "Recursos Humanos",
  "Financeiro"
];

const MarketplaceHeader = () => {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-nexia-orange/10 text-nexia-orange text-sm font-medium mb-4">
            Marketplace
          </div>
          <h1 className="mb-6">
            Fluxos de automação <span className="hero-text-gradient">prontos para usar</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Descubra e implemente soluções de automação desenvolvidas por especialistas
            para diversos setores e necessidades.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto mb-12">
          <div className="relative flex-grow">
            <Input 
              type="text" 
              placeholder="Buscar soluções..." 
              className="pl-12 py-6 rounded-full shadow-sm"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
          </div>
          
          <Button variant="outline" className="md:w-auto py-6 px-6 rounded-full border-nexia-blue/20 flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Filtros
          </Button>
        </div>
        
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                index === 0 
                  ? 'bg-nexia-orange text-white shadow-md' 
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

export default MarketplaceHeader;
