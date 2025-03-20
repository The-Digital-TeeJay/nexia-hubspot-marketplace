
import { Brain, Workflow, LineChart, Clock, BarChart, Shield } from 'lucide-react';

const features = [
  {
    icon: <Brain className="h-8 w-8 text-nexia-orange" />,
    title: 'IA Avançada',
    description: 'Algoritmos de inteligência artificial que aprendem e evoluem com seu negócio.'
  },
  {
    icon: <Workflow className="h-8 w-8 text-nexia-blue" />,
    title: 'Automação de Fluxos',
    description: 'Automatize processos repetitivos e libere sua equipe para tarefas de maior valor.'
  },
  {
    icon: <LineChart className="h-8 w-8 text-nexia-orange" />,
    title: 'Análise Preditiva',
    description: 'Preveja tendências e comportamentos com base em dados históricos e em tempo real.'
  },
  {
    icon: <Clock className="h-8 w-8 text-nexia-blue" />,
    title: 'Eficiência Operacional',
    description: 'Reduza tempo e custos operacionais com processos otimizados e inteligentes.'
  },
  {
    icon: <BarChart className="h-8 w-8 text-nexia-orange" />,
    title: 'Dashboards Personalizados',
    description: 'Visualize métricas importantes em tempo real com painéis intuitivos.'
  },
  {
    icon: <Shield className="h-8 w-8 text-nexia-blue" />,
    title: 'Segurança Integrada',
    description: 'Proteção de dados e processos com as mais avançadas técnicas de criptografia.'
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-white to-gray-50">
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-card p-6 rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-3 rounded-xl bg-white inline-block mb-4 shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
