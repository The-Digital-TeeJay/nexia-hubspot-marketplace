
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
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
        isScrolled ? 'py-3 bg-white/80 backdrop-blur-md shadow-sm' : 'py-5 bg-transparent'
      }`}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <NexiaLogo className="h-8 w-auto" />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link 
            to="/" 
            className={`font-medium transition-colors hover:text-nexia-orange ${
              isActive('/') ? 'text-nexia-orange' : 'text-foreground'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/blog" 
            className={`font-medium transition-colors hover:text-nexia-orange ${
              isActive('/blog') ? 'text-nexia-orange' : 'text-foreground'
            }`}
          >
            Blog
          </Link>
          <Link 
            to="/marketplace" 
            className={`font-medium transition-colors hover:text-nexia-orange ${
              isActive('/marketplace') ? 'text-nexia-orange' : 'text-foreground'
            }`}
          >
            Marketplace
          </Link>
          <Button 
            className="ml-4 bg-gradient-to-r from-nexia-orange to-nexia-blue text-white hover:opacity-90 transition-opacity"
          >
            Contato
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex items-center" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 animate-fade-in">
          <div className="container flex flex-col space-y-4">
            <Link 
              to="/" 
              className={`font-medium px-4 py-2 rounded-lg ${
                isActive('/') ? 'bg-muted text-nexia-orange' : 'text-foreground'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/blog" 
              className={`font-medium px-4 py-2 rounded-lg ${
                isActive('/blog') ? 'bg-muted text-nexia-orange' : 'text-foreground'
              }`}
            >
              Blog
            </Link>
            <Link 
              to="/marketplace" 
              className={`font-medium px-4 py-2 rounded-lg ${
                isActive('/marketplace') ? 'bg-muted text-nexia-orange' : 'text-foreground'
              }`}
            >
              Marketplace
            </Link>
            <Button 
              className="m-4 bg-gradient-to-r from-nexia-orange to-nexia-blue text-white hover:opacity-90 transition-opacity"
            >
              Contato
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
