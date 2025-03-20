
import { ArrowRight, Bot, Zap, BarChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useRef } from 'react';

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Enhanced n8n workflow animation
  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = (canvas.parentElement?.clientWidth || window.innerWidth) * dpr;
      canvas.height = (canvas.parentElement?.clientHeight || window.innerHeight) * dpr;
      canvas.style.width = `${canvas.parentElement?.clientWidth || window.innerWidth}px`;
      canvas.style.height = `${canvas.parentElement?.clientHeight || window.innerHeight}px`;
      ctx.scale(dpr, dpr);
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Workflow node class
    class WorkflowNode {
      x: number;
      y: number;
      width: number;
      height: number;
      color: string;
      label: string;
      connections: { node: WorkflowNode; status: 'idle' | 'active' | 'success' | 'error' }[];
      status: 'idle' | 'active' | 'success' | 'error';
      processingTime: number;
      totalProcessingTime: number;
      iconType: 'function' | 'data' | 'trigger' | 'api';
      
      constructor(
        x: number, 
        y: number, 
        width: number, 
        height: number, 
        color: string, 
        label: string,
        iconType: 'function' | 'data' | 'trigger' | 'api'
      ) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.label = label;
        this.connections = [];
        this.status = 'idle';
        this.processingTime = 0;
        this.totalProcessingTime = Math.random() * 100 + 50;
        this.iconType = iconType;
      }
      
      connect(node: WorkflowNode) {
        this.connections.push({ node, status: 'idle' });
      }
      
      activate() {
        if (this.status === 'idle') {
          this.status = 'active';
          this.processingTime = 0;
        }
      }
      
      update() {
        if (this.status === 'active') {
          this.processingTime++;
          
          if (this.processingTime >= this.totalProcessingTime) {
            // 90% chance of success, 10% chance of error
            this.status = Math.random() > 0.1 ? 'success' : 'error';
            
            // If success, activate connected nodes after a delay
            if (this.status === 'success') {
              this.connections.forEach((connection, index) => {
                connection.status = 'active';
                setTimeout(() => {
                  connection.status = 'idle';
                  connection.node.activate();
                }, 300 * (index + 1));
              });
            }
            
            // Reset after some time
            setTimeout(() => {
              this.status = 'idle';
              this.connections.forEach(connection => {
                connection.status = 'idle';
              });
            }, 2000);
          }
        }
      }
      
      drawIcon(ctx: CanvasRenderingContext2D) {
        ctx.save();
        ctx.translate(this.x + this.width / 2, this.y + this.height / 2 - 8);
        
        const size = 18;
        
        switch (this.iconType) {
          case 'function':
            // Draw function icon (f())
            ctx.font = 'bold 16px Arial';
            ctx.fillStyle = this.color;
            ctx.textAlign = 'center';
            ctx.fillText('f()', 0, 5);
            break;
            
          case 'data':
            // Draw database icon
            ctx.beginPath();
            ctx.ellipse(0, -size/3, size/2, size/6, 0, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
            
            ctx.beginPath();
            ctx.moveTo(-size/2, -size/3);
            ctx.lineTo(-size/2, size/2);
            ctx.arc(0, size/2, size/2, Math.PI, 0);
            ctx.lineTo(size/2, -size/3);
            ctx.fillStyle = this.color;
            ctx.fill();
            break;
            
          case 'trigger':
            // Draw lightning bolt icon
            ctx.beginPath();
            ctx.moveTo(-2, -size/2);
            ctx.lineTo(4, 0);
            ctx.lineTo(-2, 0);
            ctx.lineTo(4, size/2);
            ctx.lineWidth = 3;
            ctx.strokeStyle = this.color;
            ctx.stroke();
            break;
            
          case 'api':
            // Draw API/code brackets icon
            ctx.beginPath();
            ctx.moveTo(-size/2, -size/2);
            ctx.lineTo(-size/4, -size/2);
            ctx.lineTo(-size/4, size/2);
            ctx.lineTo(-size/2, size/2);
            
            ctx.moveTo(size/2, -size/2);
            ctx.lineTo(size/4, -size/2);
            ctx.lineTo(size/4, size/2);
            ctx.lineTo(size/2, size/2);
            
            ctx.lineWidth = 3;
            ctx.strokeStyle = this.color;
            ctx.stroke();
            break;
        }
        
        ctx.restore();
      }
      
      draw(ctx: CanvasRenderingContext2D) {
        // Draw connections first (so they appear behind nodes)
        this.connections.forEach(connection => {
          const startX = this.x + this.width;
          const startY = this.y + this.height / 2;
          const endX = connection.node.x;
          const endY = connection.node.y + connection.node.height / 2;
          
          // Calculate control points for curved line
          const controlPointX = startX + (endX - startX) / 2;
          
          // Draw connection line
          ctx.beginPath();
          ctx.moveTo(startX, startY);
          ctx.bezierCurveTo(
            controlPointX, startY,
            controlPointX, endY,
            endX, endY
          );
          
          // Set line style based on connection status
          switch(connection.status) {
            case 'active':
              ctx.strokeStyle = '#F97316';
              ctx.lineWidth = 3;
              break;
            case 'idle':
              ctx.strokeStyle = 'rgba(200, 200, 200, 0.3)';
              ctx.lineWidth = 2;
              break;
            case 'success':
              ctx.strokeStyle = '#22C55E';
              ctx.lineWidth = 3;
              break;
            case 'error':
              ctx.strokeStyle = '#EF4444';
              ctx.lineWidth = 3;
              break;
          }
          
          ctx.stroke();
          
          // Draw animated particles if connection is active
          if (connection.status === 'active') {
            const particleProgress = (Date.now() % 1000) / 1000;
            const particleX = startX + (endX - startX) * particleProgress;
            const particleY = startY + (endY - startY) * particleProgress;
            
            ctx.beginPath();
            ctx.arc(particleX, particleY, 4, 0, Math.PI * 2);
            ctx.fillStyle = '#F97316';
            ctx.fill();
          }
        });
        
        // Draw node background with status color
        let nodeColor;
        let textColor = '#FFF';
        let shadowColor;
        
        switch (this.status) {
          case 'active':
            nodeColor = this.color;
            shadowColor = this.color;
            break;
          case 'success':
            nodeColor = '#22C55E';
            shadowColor = '#22C55E';
            break;
          case 'error':
            nodeColor = '#EF4444';
            shadowColor = '#EF4444';
            break;
          default:
            nodeColor = '#2D3748';
            textColor = this.color;
            shadowColor = 'rgba(0,0,0,0.1)';
        }
        
        // Node shadow
        ctx.save();
        ctx.shadowColor = shadowColor;
        ctx.shadowBlur = 10;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 4;
        
        // Draw rounded rectangle
        ctx.beginPath();
        const radius = 8;
        ctx.moveTo(this.x + radius, this.y);
        ctx.lineTo(this.x + this.width - radius, this.y);
        ctx.arc(this.x + this.width - radius, this.y + radius, radius, -Math.PI / 2, 0);
        ctx.lineTo(this.x + this.width, this.y + this.height - radius);
        ctx.arc(this.x + this.width - radius, this.y + this.height - radius, radius, 0, Math.PI / 2);
        ctx.lineTo(this.x + radius, this.y + this.height);
        ctx.arc(this.x + radius, this.y + this.height - radius, radius, Math.PI / 2, Math.PI);
        ctx.lineTo(this.x, this.y + radius);
        ctx.arc(this.x + radius, this.y + radius, radius, Math.PI, Math.PI * 3 / 2);
        ctx.closePath();
        
        // Fill with gradient if active
        if (this.status === 'active') {
          const gradient = ctx.createLinearGradient(this.x, this.y, this.x + this.width, this.y + this.height);
          gradient.addColorStop(0, '#F97316');
          gradient.addColorStop(1, '#1E3A8A');
          ctx.fillStyle = gradient;
        } else {
          ctx.fillStyle = nodeColor;
        }
        
        ctx.fill();
        ctx.restore();
        
        // Draw progress bar if active
        if (this.status === 'active') {
          const progressWidth = (this.processingTime / this.totalProcessingTime) * this.width;
          ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
          ctx.fillRect(this.x, this.y + this.height - 4, progressWidth, 4);
        }
        
        // Draw icon
        this.drawIcon(ctx);
        
        // Draw label
        ctx.font = '12px Arial';
        ctx.fillStyle = textColor;
        ctx.textAlign = 'center';
        ctx.fillText(this.label, this.x + this.width / 2, this.y + this.height / 2 + 20);
      }
    }
    
    // Create workflow diagram
    const nodeColors = {
      trigger: '#F97316',  // Nexia Orange
      function: '#1E3A8A', // Nexia Blue
      api: '#8B5CF6',      // Purple
      data: '#10B981'      // Green
    };
    
    // Create nodes in a structured workflow pattern
    const nodes: WorkflowNode[] = [
      new WorkflowNode(100, 120, 140, 70, nodeColors.trigger, 'Trigger', 'trigger'),
      new WorkflowNode(300, 80, 140, 70, nodeColors.function, 'Processar Dados', 'function'),
      new WorkflowNode(300, 180, 140, 70, nodeColors.api, 'API Request', 'api'),
      new WorkflowNode(500, 50, 140, 70, nodeColors.data, 'Banco de Dados', 'data'),
      new WorkflowNode(500, 150, 140, 70, nodeColors.function, 'Transformar', 'function'),
      new WorkflowNode(500, 250, 140, 70, nodeColors.api, 'Webhook', 'api'),
      new WorkflowNode(700, 100, 140, 70, nodeColors.function, 'Enviar Email', 'function'),
      new WorkflowNode(700, 200, 140, 70, nodeColors.data, 'Salvar Resultado', 'data')
    ];
    
    // Create connections between nodes to form workflow
    nodes[0].connect(nodes[1]);
    nodes[0].connect(nodes[2]);
    nodes[1].connect(nodes[3]);
    nodes[1].connect(nodes[4]);
    nodes[2].connect(nodes[5]);
    nodes[4].connect(nodes[6]);
    nodes[5].connect(nodes[6]);
    nodes[6].connect(nodes[7]);
    
    // Start animation with trigger node
    nodes[0].activate();
    
    // Draw function to render the workflow
    const draw = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width / window.devicePixelRatio, canvas.height / window.devicePixelRatio);
      
      // Update and draw nodes
      nodes.forEach(node => {
        node.update();
        node.draw(ctx);
      });
      
      // Check if any node is active
      const isAnyNodeActive = nodes.some(node => node.status === 'active' || 
        node.connections.some(conn => conn.status === 'active'));
      
      // If no nodes are active, restart the workflow after a delay
      if (!isAnyNodeActive) {
        setTimeout(() => {
          nodes[0].activate();
        }, 2000);
      }
      
      requestAnimationFrame(draw);
    };
    
    draw();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <section className="relative overflow-hidden pt-24 md:pt-32 pb-16 md:pb-24">
      {/* Canvas for n8n workflow animation */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 -z-10" 
      />
      
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/70 -z-5" />
      
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
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-nexia-orange to-nexia-blue rounded-full opacity-20 blur-3xl animate-pulse-slow"></div>
            
            {/* Feature cards - enlarged */}
            <div className="relative glass-card p-10 w-full mx-auto animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-nexia-orange/10 to-nexia-blue/10 rounded-2xl -z-10"></div>
              
              <div className="space-y-8">
                <div className="p-8 rounded-xl bg-white/70 shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center space-x-6">
                    <div className="w-16 h-16 rounded-full bg-nexia-orange/10 flex items-center justify-center">
                      <Bot className="h-8 w-8 text-nexia-orange" />
                    </div>
                    <div>
                      <h4 className="font-medium text-xl">Assistente IA</h4>
                      <p className="text-muted-foreground">Automação inteligente com aprendizado contínuo</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-8 rounded-xl bg-white/70 shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center space-x-6">
                    <div className="w-16 h-16 rounded-full bg-nexia-blue/10 flex items-center justify-center">
                      <Zap className="h-8 w-8 text-nexia-blue" />
                    </div>
                    <div>
                      <h4 className="font-medium text-xl">Workflow Otimizado</h4>
                      <p className="text-muted-foreground">Processos eficientes e personalizados</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-8 rounded-xl bg-white/70 shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center space-x-6">
                    <div className="w-16 h-16 rounded-full bg-nexia-orange/10 flex items-center justify-center">
                      <BarChart className="h-8 w-8 text-nexia-orange" />
                    </div>
                    <div>
                      <h4 className="font-medium text-xl">Análise de Dados</h4>
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
