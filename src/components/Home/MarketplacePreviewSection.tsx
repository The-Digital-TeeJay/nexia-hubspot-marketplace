
import { ArrowRight, Download, CheckCircle2, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const featuredProducts = [
  {
    id: 1,
    title: "Automação de Email Marketing",
    description: "Fluxo completo para campanhas de email marketing com segmentação inteligente.",
    price: "R$ 997",
    downloads: 124,
    rating: 4.8,
    features: ["Segmentação automática", "Templates responsivos", "Análise de resultados", "Integrações"],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Chatbot para Atendimento",
    description: "Sistema inteligente de chatbot para automatizar o atendimento ao cliente.",
    price: "R$ 1,290",
    downloads: 98,
    rating: 4.7,
    features: ["IA conversacional", "Aprendizado contínuo", "Multilíngue", "Relatórios detalhados"],
    image: "https://images.unsplash.com/photo-1622927252377-3b9bc5a1fe4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

const MarketplacePreviewSection = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16">
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-nexia-orange/10 text-nexia-orange text-sm font-medium mb-4">
              Marketplace
            </div>
            <h2 className="mb-4">Fluxos de automação <span className="hero-text-gradient">prontos para usar</span></h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Descubra soluções de automação prontas para implementação imediata na sua empresa.
            </p>
          </div>
          
          <div className="mt-6 md:mt-0">
            <Button asChild variant="ghost" className="group">
              <Link to="/marketplace" className="flex items-center text-nexia-blue hover:text-nexia-orange transition-colors">
                Explorar marketplace
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              className="glass-card overflow-hidden rounded-2xl shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-sm font-medium">
                  {product.price}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                <p className="text-muted-foreground mb-4">{product.description}</p>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-1 text-sm">
                    <Download className="h-4 w-4 text-nexia-blue" />
                    <span className="text-muted-foreground">{product.downloads} downloads</span>
                  </div>
                  <div className="flex items-center space-x-1 text-sm">
                    <div className="text-nexia-orange font-medium">{product.rating}</div>
                    <div className="flex space-x-px">
                      {[...Array(5)].map((_, i) => (
                        <svg 
                          key={i} 
                          className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-nexia-orange fill-nexia-orange' : 'text-gray-300'}`}
                          xmlns="http://www.w3.org/2000/svg" 
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {product.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-sm">
                      <CheckCircle2 className="h-4 w-4 text-nexia-orange mr-2 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <Button asChild variant="outline" className="border-nexia-blue/20 hover:border-nexia-blue/50">
                    <Link to={`/marketplace/${product.id}`}>
                      Ver detalhes
                    </Link>
                  </Button>
                  
                  <Button className="bg-gradient-to-r from-nexia-orange to-nexia-blue text-white">
                    Comprar agora
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-8 rounded-2xl bg-nexia-dark text-white text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-4">
              <Users className="h-5 w-5 text-nexia-orange" />
              <span className="font-medium">Programa de Parceiros</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Torne-se um parceiro da Nexia
            </h3>
            <p className="text-gray-300 mb-6">
              Desenvolva e venda seus fluxos de automação no nosso marketplace. 
              Aproveite nossa base de clientes e expanda seu negócio.
            </p>
            <Button className="bg-gradient-to-r from-nexia-orange to-nexia-blue text-white hover:opacity-90 transition-opacity">
              Saiba mais sobre parcerias
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketplacePreviewSection;
