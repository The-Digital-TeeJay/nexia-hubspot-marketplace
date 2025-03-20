import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import NexiaLogo from '../NexiaLogo';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-0.5 bg-white/95 backdrop-blur-sm' 
          : 'py-1 bg-transparent backdrop-blur-sm'
      }`}
      style={{ boxShadow: isScrolled ? '0 1px 3px rgba(0,0,0,0.05)' : 'none' }}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-12">
        <Link to="/" className="flex items-center">
          <NexiaLogo className={`${isScrolled ? 'h-32 md:h-36' : 'h-36 md:h-40'} w-auto transition-all duration-300`} />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4">
          <div className="flex items-center space-x-1">
            <Link 
              to="/" 
              className="relative group overflow-hidden font-medium transition-all duration-300"
            >
              <span className={`relative z-10 px-3 py-1 rounded-lg inline-block text-sm ${
                isActive('/') ? 'text-white' : 'text-foreground hover:text-white'
              }`}>Home</span>
              <span className={`absolute inset-0 rounded-lg bg-gradient-to-r from-nexia-orange to-nexia-blue 
                              transform transition-all duration-500 ${
                                isActive('/') 
                                  ? 'opacity-100' 
                                  : 'opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100'
                              }`}></span>
            </Link>
            
            <Link 
              to="/blog" 
              className="relative group overflow-hidden font-medium transition-all duration-300"
            >
              <span className={`relative z-10 px-3 py-1 rounded-lg inline-block text-sm ${
                isActive('/blog') ? 'text-white' : 'text-foreground hover:text-white'
              }`}>Blog</span>
              <span className={`absolute inset-0 rounded-lg bg-gradient-to-r from-nexia-orange to-nexia-blue 
                              transform transition-all duration-500 ${
                                isActive('/blog') 
                                  ? 'opacity-100' 
                                  : 'opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100'
                              }`}></span>
            </Link>
            
            <Link 
              to="/marketplace" 
              className="relative group overflow-hidden font-medium transition-all duration-300"
            >
              <span className={`relative z-10 px-3 py-1 rounded-lg inline-block text-sm ${
                isActive('/marketplace') ? 'text-white' : 'text-foreground hover:text-white'
              }`}>Marketplace</span>
              <span className={`absolute inset-0 rounded-lg bg-gradient-to-r from-nexia-orange to-nexia-blue 
                              transform transition-all duration-500 ${
                                isActive('/marketplace') 
                                  ? 'opacity-100' 
                                  : 'opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100'
                              }`}></span>
            </Link>
          </div>
          
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost"
              className="flex items-center gap-1.5 text-nexia-blue hover:text-nexia-orange transition-colors text-xs"
              size="sm"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              Fale com o Time
            </Button>
            <Button 
              className="bg-gradient-to-r from-nexia-orange to-nexia-blue text-white hover:opacity-90 transition-opacity text-xs"
              size="sm"
            >
              Contato
            </Button>
          </div>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex items-center" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMobileMenuOpen ? (
            <X className="h-5 w-5 text-foreground" />
          ) : (
            <Menu className="h-5 w-5 text-foreground" />
          )}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg py-2 animate-fade-in">
          <div className="container flex flex-col space-y-2">
            <Link 
              to="/" 
              className={`font-medium px-4 py-2 rounded-lg relative overflow-hidden group ${
                isActive('/') ? 'bg-gradient-to-r from-nexia-orange to-nexia-blue text-white' : 'text-foreground'
              }`}
            >
              <span className="relative z-10">Home</span>
              <span className={`absolute inset-0 bg-gradient-to-r from-nexia-orange to-nexia-blue 
                              transform transition-transform duration-300 ${
                                isActive('/') ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                              }`}></span>
            </Link>
            <Link 
              to="/blog" 
              className={`font-medium px-4 py-2 rounded-lg relative overflow-hidden group ${
                isActive('/blog') ? 'bg-gradient-to-r from-nexia-orange to-nexia-blue text-white' : 'text-foreground'
              }`}
            >
              <span className="relative z-10">Blog</span>
              <span className={`absolute inset-0 bg-gradient-to-r from-nexia-orange to-nexia-blue 
                              transform transition-transform duration-300 ${
                                isActive('/blog') ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                              }`}></span>
            </Link>
            <Link 
              to="/marketplace" 
              className={`font-medium px-4 py-2 rounded-lg relative overflow-hidden group ${
                isActive('/marketplace') ? 'bg-gradient-to-r from-nexia-orange to-nexia-blue text-white' : 'text-foreground'
              }`}
            >
              <span className="relative z-10">Marketplace</span>
              <span className={`absolute inset-0 bg-gradient-to-r from-nexia-orange to-nexia-blue 
                              transform transition-transform duration-300 ${
                                isActive('/marketplace') ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                              }`}></span>
            </Link>
            <div className="flex flex-col gap-2 p-2">
              <Button 
                variant="ghost"
                className="flex items-center justify-start gap-2 text-nexia-blue hover:text-nexia-orange transition-colors w-full text-sm"
                size="sm"
              >
                <MessageCircle className="h-3.5 w-3.5" />
                Fale com o Time
              </Button>
              <Button 
                className="w-full bg-gradient-to-r from-nexia-orange to-nexia-blue text-white hover:opacity-90 transition-opacity"
                size="sm"
              >
                Contato
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
