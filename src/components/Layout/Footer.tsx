
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Mail, PhoneCall, MapPin } from 'lucide-react';
import NexiaLogo from '../NexiaLogo';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-nexia-dark text-white py-16">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <NexiaLogo className="h-10 w-auto mb-4" />
            <p className="text-gray-300 mt-4 mb-6">
              Automatização inteligente para empresas que buscam eficiência e inovação.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-nexia-orange transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-nexia-orange transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-nexia-orange transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h4 className="text-lg font-bold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-nexia-orange transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-nexia-orange transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/marketplace" className="text-gray-300 hover:text-nexia-orange transition-colors">
                  Marketplace
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-nexia-orange transition-colors">
                  Sobre Nós
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h4 className="text-lg font-bold mb-6">Serviços</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-nexia-orange transition-colors">
                  Automação de Processos
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-nexia-orange transition-colors">
                  Inteligência Artificial
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-nexia-orange transition-colors">
                  Machine Learning
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-nexia-orange transition-colors">
                  Consultoria
                </a>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h4 className="text-lg font-bold mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-nexia-orange shrink-0" />
                <span className="text-gray-300">Próximo a Limeira, SP</span>
              </li>
              <li className="flex items-center">
                <PhoneCall className="mr-3 h-5 w-5 text-nexia-orange shrink-0" />
                <span className="text-gray-300">+55 (19) 9 9988-5889</span>
              </li>
              <li className="flex items-center">
                <PhoneCall className="mr-3 h-5 w-5 text-nexia-orange shrink-0" />
                <span className="text-gray-300">+55 (19) 9 9733-9377</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-nexia-orange shrink-0" />
                <span className="text-gray-300">contato@nexiabr.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Nexia. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-nexia-orange text-sm transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="text-gray-400 hover:text-nexia-orange text-sm transition-colors">
              Política de Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
