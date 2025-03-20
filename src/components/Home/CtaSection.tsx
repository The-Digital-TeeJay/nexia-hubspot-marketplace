
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CtaSection = () => {
  return (
    <section className="py-20 overflow-hidden relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-nexia-orange/5 to-nexia-blue/5 -z-10" />
      
      {/* Animated blobs */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-nexia-orange/10 rounded-full blur-3xl animate-pulse-slow -z-10" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-nexia-blue/10 rounded-full blur-3xl animate-pulse-slow -z-10" />
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="glass-card rounded-2xl p-8 md:p-12 max-w-4xl mx-auto text-center relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-r from-nexia-orange/10 to-nexia-blue/10 -z-10" />
          
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-nexia-orange to-nexia-blue" />
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para transformar seu negócio com <span className="hero-text-gradient">automação inteligente</span>?
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Agende uma demonstração personalizada e descubra como a Nexia pode 
            otimizar seus processos e impulsionar seus resultados.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="button-with-glow bg-gradient-to-r from-nexia-orange to-nexia-blue text-white rounded-full px-8 shadow-lg hover:shadow-xl transition-all">
              Agendar Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button size="lg" variant="outline" className="bg-white/80 backdrop-blur-sm hover:bg-white border-nexia-blue/20 text-foreground rounded-full px-8">
              Falar com Especialista
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
