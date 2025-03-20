
import { ArrowRight, Bot, Zap, BarChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useRef } from 'react';

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Animação de workflow n8n
  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Configurar canvas para tamanho do container
    const resizeCanvas = () => {
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Classe para nós do workflow
    class WorkflowNode {
      x: number;
      y: number;
      radius: number;
      color: string;
      connections: WorkflowNode[];
      processing: boolean;
      pulseSize: number;
      
      constructor(x: number, y: number, radius: number, color: string) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.connections = [];
        this.processing = false;
        this.pulseSize = 0;
      }
      
      connect(node: WorkflowNode) {
        this.connections.push(node);
      }
      
      draw(ctx: CanvasRenderingContext2D) {
        // Desenhar círculo principal
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        
        // Desenhar efeito de pulso quando ativo
        if (this.processing) {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius + this.pulseSize, 0, Math.PI * 2);
          ctx.strokeStyle = this.color;
          ctx.lineWidth = 2;
          ctx.stroke();
          
          this.pulseSize += 0.5;
          if (this.pulseSize > 20) {
            this.pulseSize = 0;
            this.processing = false;
            
            // Ativar nós conectados
            setTimeout(() => {
              this.connections.forEach(node => {
                node.processing = true;
              });
            }, 300);
          }
        }
        
        // Desenhar conexões
        this.connections.forEach(node => {
          ctx.beginPath();
          ctx.moveTo(this.x, this.y);
          ctx.lineTo(node.x, node.y);
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
          ctx.lineWidth = 2;
          ctx.stroke();
        });
      }
    }
    
    // Criar nós do workflow
    const nodes: WorkflowNode[] = [];
    const nodeCount = 10;
    const colors = ['#F97316', '#1E3A8A', '#4F46E5', '#A855F7', '#EC4899'];
    
    for (let i = 0; i < nodeCount; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const color = colors[Math.floor(Math.random() * colors.length)];
      nodes.push(new WorkflowNode(x, y, 8, color));
    }
    
    // Conectar nós aleatoriamente
    nodes.forEach(node => {
      const connectionCount = Math.floor(Math.random() * 3) + 1;
      for (let i = 0; i < connectionCount; i++) {
        const targetNode = nodes[Math.floor(Math.random() * nodes.length)];
        if (targetNode !== node) {
          node.connect(targetNode);
        }
      }
    });
    
    // Iniciar animação com o primeiro nó
    nodes[0].processing = true;
    
    // Função de animação
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Desenhar nós
      nodes.forEach(node => node.draw(ctx));
      
      // Verificar se algum nó está processando
      const isProcessing = nodes.some(node => node.processing);
      if (!isProcessing) {
        // Reiniciar animação
        setTimeout(() => {
          nodes[0].processing = true;
        }, 1000);
      }
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <section className="relative overflow-hidden pt-20 md:pt-32 pb-16 md:pb-24">
      {/* Canvas para animação de workflow */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 -z-20 opacity-20" 
      />
      
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
            
            {/* Card ampliado */}
            <div className="relative glass-card p-10 max-w-xl mx-auto animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-nexia-orange/10 to-nexia-blue/10 rounded-2xl -z-10"></div>
              
              <div className="space-y-8">
                <div className="p-6 rounded-xl bg-white/50 shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center space-x-6">
                    <div className="w-14 h-14 rounded-full bg-nexia-orange/10 flex items-center justify-center">
                      <Bot className="h-7 w-7 text-nexia-orange" />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">Assistente IA</h4>
                      <p className="text-muted-foreground">Automação inteligente com aprendizado contínuo</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 rounded-xl bg-white/50 shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center space-x-6">
                    <div className="w-14 h-14 rounded-full bg-nexia-blue/10 flex items-center justify-center">
                      <Zap className="h-7 w-7 text-nexia-blue" />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">Workflow Otimizado</h4>
                      <p className="text-muted-foreground">Processos eficientes e personalizados</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 rounded-xl bg-white/50 shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center space-x-6">
                    <div className="w-14 h-14 rounded-full bg-nexia-orange/10 flex items-center justify-center">
                      <BarChart className="h-7 w-7 text-nexia-orange" />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">Análise de Dados</h4>
                      <p className="text-muted-foreground">Insights valiosos e métricas precisas</p>
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
