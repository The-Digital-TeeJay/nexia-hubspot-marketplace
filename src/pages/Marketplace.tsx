
import { useEffect } from 'react';
import MainLayout from '../components/Layout/MainLayout';
import MarketplaceHeader from '../components/Marketplace/MarketplaceHeader';
import ProductCard from '../components/Marketplace/ProductCard';
import PartnerSection from '../components/Marketplace/PartnerSection';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    id: 1,
    title: "Automação de Email Marketing",
    description: "Fluxo completo para campanhas de email marketing com segmentação inteligente e análise de resultados.",
    price: "R$ 997",
    downloads: 124,
    rating: 4.8,
    features: ["Segmentação automática", "Templates responsivos", "Análise de resultados", "Integrações"],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    seller: {
      name: "Nexia",
      isVerified: true
    }
  },
  {
    id: 2,
    title: "Chatbot para Atendimento",
    description: "Sistema inteligente de chatbot para automatizar o atendimento ao cliente com IA conversacional.",
    price: "R$ 1,290",
    previousPrice: "R$ 1,590",
    downloads: 98,
    rating: 4.7,
    features: ["IA conversacional", "Aprendizado contínuo", "Multilíngue", "Relatórios detalhados"],
    image: "https://images.unsplash.com/photo-1622927252377-3b9bc5a1fe4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    seller: {
      name: "AutomationPro",
      isVerified: true
    }
  },
  {
    id: 3,
    title: "Automação de RH e Recrutamento",
    description: "Solução completa para automatizar processos de recrutamento, seleção e onboarding de novos colaboradores.",
    price: "R$ 1,490",
    downloads: 86,
    rating: 4.5,
    features: ["Triagem de currículos", "Agendamento de entrevistas", "Onboarding digital", "Avaliação de desempenho"],
    image: "https://images.unsplash.com/photo-1573497161161-c3e73707e25c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    seller: {
      name: "HR Solutions",
      isVerified: true
    }
  },
  {
    id: 4,
    title: "Dashboard Financeiro Inteligente",
    description: "Painel de controle financeiro com análise preditiva e alertas automáticos para gestão eficiente.",
    price: "R$ 890",
    previousPrice: "R$ 1,190",
    downloads: 152,
    rating: 4.9,
    features: ["Análise preditiva", "Alertas em tempo real", "Múltiplas integrações", "Relatórios personalizados"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    seller: {
      name: "FinTechFlow",
      isVerified: true
    }
  },
  {
    id: 5,
    title: "Automação de Redes Sociais",
    description: "Solução para agendamento, publicação e análise de conteúdo em múltiplas plataformas de redes sociais.",
    price: "R$ 790",
    downloads: 210,
    rating: 4.6,
    features: ["Agendamento automático", "Recomendação de conteúdo", "Análise de performance", "Gestão multicanal"],
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    seller: {
      name: "Social Automator",
      isVerified: false
    }
  },
  {
    id: 6,
    title: "Pipeline de Vendas Inteligente",
    description: "Sistema de automação para gestão completa do pipeline de vendas com previsão e análise de oportunidades.",
    price: "R$ 1,290",
    downloads: 78,
    rating: 4.7,
    features: ["CRM integrado", "Qualificação automática", "Previsão de fechamento", "Acompanhamento de métricas"],
    image: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    seller: {
      name: "SalesFlow",
      isVerified: true
    }
  }
];

const Marketplace = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <MainLayout>
      <MarketplaceHeader />
      
      <section className="py-16 bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold">Soluções em Destaque</h2>
            
            <div className="hidden md:flex items-center gap-4">
              <span className="text-muted-foreground">Ordenar por:</span>
              <select className="px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-nexia-blue/20">
                <option>Mais populares</option>
                <option>Mais recentes</option>
                <option>Menor preço</option>
                <option>Maior preço</option>
                <option>Melhor avaliação</option>
              </select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-nexia-orange/5 to-nexia-blue/5 shadow-sm text-center">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">
                Precisa de uma solução personalizada?
              </h3>
              <p className="text-muted-foreground mb-6">
                Não encontrou o que procurava? Nossa equipe pode desenvolver uma 
                solução sob medida para as necessidades específicas da sua empresa.
              </p>
              <Button className="bg-gradient-to-r from-nexia-orange to-nexia-blue text-white px-8">
                Solicitar Orçamento
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <PartnerSection />
    </MainLayout>
  );
};

export default Marketplace;
