
import { Users, ShieldCheck, Zap, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';

const benefits = [
  {
    icon: <Users className="h-8 w-8 text-nexia-orange" />,
    title: "Acesso a clientes",
    description: "Alcance milhares de clientes em potencial através do nosso marketplace."
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-nexia-blue" />,
    title: "Suporte técnico",
    description: "Receba suporte para desenvolvimento, testes e manutenção dos seus fluxos."
  },
  {
    icon: <Zap className="h-8 w-8 text-nexia-orange" />,
    title: "Tecnologia avançada",
    description: "Utilize nossa infraestrutura e APIs para criar soluções mais poderosas."
  },
  {
    icon: <DollarSign className="h-8 w-8 text-nexia-blue" />,
    title: "Comissões atrativas",
    description: "Ganhe até 70% do valor de cada venda dos seus fluxos de automação."
  }
];

const PartnerSection = () => {
  return (
    <section className="py-20 md:py-32 bg-nexia-dark text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-nexia-blue/20 via-transparent to-transparent opacity-30 -z-10" />
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Users className="h-5 w-5 text-nexia-orange" />
            <span className="font-medium">Programa de Parceiros</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Desenvolva e venda seus <span className="text-nexia-orange">fluxos de automação</span>
          </h2>
          
          <p className="text-gray-300">
            Junte-se à nossa rede de parceiros e crie soluções de automação para 
            empresas de todos os tamanhos e setores.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="glass-card p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-3 rounded-xl bg-white/10 inline-block mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="glass-card p-8 md:p-12 rounded-2xl max-w-4xl mx-auto text-center bg-white/5 backdrop-blur-md border border-white/10">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Pronto para se tornar um parceiro?
          </h3>
          
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Preencha o formulário para receber mais informações sobre nosso programa de parceiros
            e começar a desenvolver e vender suas soluções na Nexia.
          </p>
          
          <Button size="lg" className="bg-gradient-to-r from-nexia-orange to-nexia-blue text-white rounded-full px-8 shadow-lg hover:opacity-90 transition-opacity">
            Quero ser parceiro
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
