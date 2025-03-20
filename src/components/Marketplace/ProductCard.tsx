
import { Download, Star, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: {
    id: number;
    title: string;
    description: string;
    price: string;
    previousPrice?: string;
    downloads: number;
    rating: number;
    features: string[];
    image: string;
    seller: {
      name: string;
      isVerified: boolean;
    };
  };
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="glass-card overflow-hidden rounded-2xl shadow-lg transition-all hover:shadow-xl hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.title}
          className="w-full h-full object-cover"
        />
        {product.previousPrice && (
          <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-nexia-orange text-white text-sm font-medium">
            Oferta
          </div>
        )}
        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-sm font-bold">
          {product.previousPrice && (
            <span className="line-through text-gray-400 mr-2 text-xs">{product.previousPrice}</span>
          )}
          {product.price}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 line-clamp-1">{product.title}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-2">{product.description}</p>
        
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-1 text-sm">
            <Download className="h-4 w-4 text-nexia-blue" />
            <span className="text-muted-foreground">{product.downloads} downloads</span>
          </div>
          <div className="flex items-center space-x-1 text-sm">
            <div className="text-nexia-orange font-medium">{product.rating}</div>
            <div className="flex space-x-px">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-nexia-orange fill-nexia-orange' : 'text-gray-300'}`}
                />
              ))}
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-3 mb-6">
          {product.features.slice(0, 4).map((feature, i) => (
            <div key={i} className="flex items-center text-sm">
              <CheckCircle2 className="h-4 w-4 text-nexia-orange mr-2 shrink-0" />
              <span className="truncate">{feature}</span>
            </div>
          ))}
        </div>
        
        <div className="flex justify-between items-center pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-1 text-sm">
            <span>Por</span>
            <span className="font-medium">{product.seller.name}</span>
            {product.seller.isVerified && (
              <span className="bg-nexia-blue/10 text-nexia-blue text-xs px-2 py-0.5 rounded-full">
                Verificado
              </span>
            )}
          </div>
          
          <div className="flex items-center gap-2">
            <Button asChild variant="outline" size="sm" className="border-nexia-blue/20 hover:border-nexia-blue/50">
              <Link to={`/marketplace/${product.id}`}>
                Detalhes
              </Link>
            </Button>
            
            <Button size="sm" className="bg-gradient-to-r from-nexia-orange to-nexia-blue text-white">
              Comprar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
