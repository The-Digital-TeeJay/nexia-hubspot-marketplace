
import { Button } from '@/components/ui/button';
import { Circle, CheckCircle2, ArrowRight } from 'lucide-react';

const SolutionsSection = () => {
  return (
    <section className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-60 h-60 bg-nexia-orange/10 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-nexia-blue/10 rounded-full blur-3xl -z-10" />
              
              <div className="glass-card relative max-w-md mx-auto lg:mx-0 p-8 shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-nexia-orange/5 to-nexia-blue/5 rounded-2xl -z-10"></div>
                
                <div className="space-y-8">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="text-lg font-bold">Automação Básica</div>
                      <Circle className="h-5 w-5 text-gray-300" />
                    </div>
                    <div className="h-1 w-full bg-gray-100 rounded-full">
                      <div className="h-1 w-1/4 bg-gray-300 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="text-lg font-bold">Automação Inteligente</div>
                      <Circle className="h-5 w-5 text-gray-300" />
                    </div>
                    <div className="h-1 w-full bg-gray-100 rounded-full">
                      <div className="h-1 w-2/4 bg-gray-300 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="text-lg font-bold">Nexia AI</div>
                      <CheckCircle2 className="h-5 w-5 text-nexia-orange" />
                    </div>
                    <div className="h-1 w-full bg-gray-100 rounded-full">
                      <div className="h-1 w-full bg-gradient-to-r from-nexia-orange to-nexia-blue rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-gray-100">
                    <div className="flex items-start">
                      <div className="bg-nexia-orange/10 p-2 rounded-lg mr-4">
                        <div className="text-2xl font-bold text-nexia-orange">95%</div>
                      </div>
                      <div>
                        <div className="font-medium">Ganho de eficiência</div>
                        <div className="text-sm text-muted-foreground">Resultados comprovados</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 space-y-6 max-w-2xl mx-auto lg:mx-0">
            <div className="inline-block px-3 py-1 rounded-full bg-nexia-blue/10 text-nexia-blue text-sm font-medium">
              Soluções Adaptáveis
            </div>
            <h2 className="mb-6">Soluções que <span className="hero-text-gradient">evoluem</span> com seu negócio</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Nossas soluções se adaptam às necessidades específicas da sua empresa, 
              crescendo e evoluindo à medida que seu negócio se expande. Com a Nexia, 
              você obtém um parceiro que entende os desafios únicos do seu setor.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-nexia-orange mr-3" />
                <span>Totalmente personalizável para seus processos</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-nexia-orange mr-3" />
                <span>Implementação rápida e sem interrupções</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-nexia-orange mr-3" />
                <span>Suporte técnico especializado 24/7</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-nexia-orange mr-3" />
                <span>Atualizações constantes baseadas em feedback</span>
              </div>
            </div>
            
            <div className="pt-6">
              <Button className="bg-gradient-to-r from-nexia-orange to-nexia-blue text-white rounded-lg px-8 shadow-md hover:shadow-lg hover:opacity-90 transition-all">
                Explorar Soluções
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
