
import { Brain, Workflow, LineChart, Clock, BarChart, Shield, Sparkles, Zap } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { useState } from 'react';

const features = [
  {
    icon: <Brain className="h-8 w-8 text-nexia-orange" />,
    title: 'IA Avançada',
    description: 'Algoritmos de inteligência artificial que aprendem e evoluem com seu negócio.',
    detailedDescription: 'Nossa tecnologia de IA utiliza redes neurais profundas e algoritmos de aprendizado por reforço para adaptar-se continuamente às mudanças no seu negócio. Quanto mais você utiliza, mais personalizada e eficiente ela se torna.'
  },
  {
    icon: <Workflow className="h-8 w-8 text-nexia-blue" />,
    title: 'Automação de Fluxos',
    description: 'Automatize processos repetitivos e libere sua equipe para tarefas de maior valor.',
    detailedDescription: 'Crie fluxos de trabalho personalizados que automatizam desde tarefas simples até processos complexos. Nossa plataforma se integra facilmente com suas ferramentas existentes, eliminando a necessidade de intervenção manual.'
  },
  {
    icon: <LineChart className="h-8 w-8 text-nexia-orange" />,
    title: 'Análise Preditiva',
    description: 'Preveja tendências e comportamentos com base em dados históricos e em tempo real.',
    detailedDescription: 'Utilizamos modelos estatísticos avançados e machine learning para identificar padrões ocultos em seus dados, permitindo prever comportamentos futuros de clientes, mercados e operações com alta precisão.'
  },
  {
    icon: <Clock className="h-8 w-8 text-nexia-blue" />,
    title: 'Eficiência Operacional',
    description: 'Reduza tempo e custos operacionais com processos otimizados e inteligentes.',
    detailedDescription: 'Nossas soluções identificam gargalos e ineficiências em seus processos, implementando melhorias que reduzem significativamente o tempo de execução e os custos operacionais, com ROI mensurável desde o primeiro mês.'
  },
  {
    icon: <BarChart className="h-8 w-8 text-nexia-orange" />,
    title: 'Dashboards Personalizados',
    description: 'Visualize métricas importantes em tempo real com painéis intuitivos.',
    detailedDescription: 'Crie dashboards totalmente personalizados que exibem exatamente as métricas que importam para seu negócio. Acompanhe em tempo real o desempenho de campanhas, vendas, produtividade e outros KPIs cruciais.'
  },
  {
    icon: <Shield className="h-8 w-8 text-nexia-blue" />,
    title: 'Segurança Integrada',
    description: 'Proteção de dados e processos com as mais avançadas técnicas de criptografia.',
    detailedDescription: 'Implementamos protocolos de segurança de nível empresarial, incluindo criptografia de ponta a ponta, autenticação multifator e monitoramento contínuo contra ameaças, garantindo a proteção total dos seus dados.'
  },
  {
    icon: <Sparkles className="h-8 w-8 text-nexia-orange" />,
    title: 'Experiências Personalizadas',
    description: 'Ofereça interações únicas para cada cliente com base em seu histórico e preferências.',
    detailedDescription: 'Nossa IA analisa o comportamento e as preferências de cada cliente para criar experiências altamente personalizadas, aumentando a satisfação, o engajamento e a taxa de conversão em todos os pontos de contato.'
  },
  {
    icon: <Zap className="h-8 w-8 text-nexia-blue" />,
    title: 'Implementação Rápida',
    description: 'Soluções prontas para uso com configuração simples e suporte dedicado.',
    detailedDescription: 'Implementamos nossas soluções em tempo recorde, com templates pré-configurados e integração plug-and-play. Nossa equipe de especialistas oferece suporte dedicado durante todo o processo de implantação.'
  }
];

const FeaturesSection = () => {
  const [expandedFeature, setExpandedFeature] = useState<number | null>(null);

  const toggleFeature = (index: number) => {
    setExpandedFeature(expandedFeature === index ? null : index);
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-nexia-orange/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-nexia-blue/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-nexia-orange/10 text-nexia-orange text-sm font-medium mb-4">
            Recursos Poderosos
          </div>
          <h2 className="mb-6">Tudo que você precisa para <span className="hero-text-gradient">automatizar</span> seu negócio</h2>
          <p className="text-muted-foreground text-lg">
            Nossa plataforma combina tecnologias de ponta para entregar soluções completas de automação inteligente.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Collapsible 
              key={index} 
              open={expandedFeature === index}
              onOpenChange={() => toggleFeature(index)}
              className="glass-card rounded-2xl transition-all duration-300 hover:shadow-lg overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-6">
                <div className="p-3 rounded-xl bg-white inline-block mb-4 shadow-sm">
                  {feature.icon}
                </div>
                <CollapsibleTrigger className="flex flex-col items-start w-full">
                  <h3 className="text-xl font-bold mb-3 group">{feature.title} 
                    <span className="inline-block ml-2 text-nexia-orange transition-transform duration-300">
                      {expandedFeature === index ? '−' : '+'}
                    </span>
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CollapsibleTrigger>
                
                <CollapsibleContent className="pt-4 pb-2">
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-sm text-muted-foreground">
                      {feature.detailedDescription}
                    </p>
                  </div>
                </CollapsibleContent>
              </div>
            </Collapsible>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
