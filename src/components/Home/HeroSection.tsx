
import { ArrowRight, Bot, Zap, BarChart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-20 md:pt-32 pb-16 md:pb-24">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-nexia-blue/5 to-nexia-orange/5 -z-10" />
      
      {/* Animated Shapes */}
      <div className="absolute top-40 right-[10%] w-64 h-64 bg-nexia-orange/10 rounded-full blur-3xl animate-pulse-slow -z-10" />
      <div className="absolute bottom-20 left-[5%] w-72 h-72 bg-nexia-blue/10 rounded-full blur-3xl animate-pulse-slow -z-10" />
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in-stagger space-y-6 max-w-2xl">
            <div className="inline-flex items-center rounded-full bg-nexia-blue/10 px-3 py-1 text-sm font-medium text-nexia-blue">
              <span className="animate-pulse mr-1">●</span> Impulsionando a automação com IA
            </div>
            <h1 className="font-bold tracking-tight">
              Automatize com <span className="hero-text-gradient">Inteligência</span> e <span className="hero-text-gradient">Precisão</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              A Nexia transforma processos complexos em fluxos automatizados e inteligentes. 
              Nossa tecnologia de ponta combina IA com automação para criar soluções que economizam
              tempo, reduzem erros e potencializam resultados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="button-with-glow bg-gradient-to-r from-nexia-orange to-nexia-blue text-white rounded-full px-8 shadow-lg hover:shadow-xl transition-all">
                Começar Agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="bg-white/80 backdrop-blur-sm hover:bg-white border-nexia-blue/20 text-foreground rounded-full px-8">
                Saber Mais
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center">
                <div className="font-bold text-3xl text-nexia-blue">98%</div>
                <p className="text-sm text-muted-foreground">Precisão</p>
              </div>
              <div className="text-center">
                <div className="font-bold text-3xl text-nexia-blue">500+</div>
                <p className="text-sm text-muted-foreground">Clientes</p>
              </div>
              <div className="text-center">
                <div className="font-bold text-3xl text-nexia-blue">85%</div>
                <p className="text-sm text-muted-foreground">Economia</p>
              </div>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-nexia-orange to-nexia-blue rounded-full opacity-20 blur-3xl animate-pulse-slow"></div>
            
            <div className="relative glass-card p-8 max-w-md mx-auto animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-nexia-orange/10 to-nexia-blue/10 rounded-2xl -z-10"></div>
              
              <div className="space-y-6">
                <div className="p-4 rounded-xl bg-white/50 shadow-sm">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full bg-nexia-orange/10 flex items-center justify-center">
                      <Bot className="h-5 w-5 text-nexia-orange" />
                    </div>
                    <div>
                      <h4 className="font-medium">Assistente IA</h4>
                      <p className="text-sm text-muted-foreground">Automação inteligente</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 rounded-xl bg-white/50 shadow-sm">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full bg-nexia-blue/10 flex items-center justify-center">
                      <Zap className="h-5 w-5 text-nexia-blue" />
                    </div>
                    <div>
                      <h4 className="font-medium">Workflow Otimizado</h4>
                      <p className="text-sm text-muted-foreground">Processos eficientes</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 rounded-xl bg-white/50 shadow-sm">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full bg-nexia-orange/10 flex items-center justify-center">
                      <BarChart className="h-5 w-5 text-nexia-orange" />
                    </div>
                    <div>
                      <h4 className="font-medium">Análise de Dados</h4>
                      <p className="text-sm text-muted-foreground">Insights valiosos</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
