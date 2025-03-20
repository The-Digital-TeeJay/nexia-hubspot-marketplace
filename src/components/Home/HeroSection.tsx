import { ArrowRight, Bot, Zap, BarChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useRef, useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const isMobile = useIsMobile();

  // Track scroll position for parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

    // Get current screen width for mobile layout adjustments
    const isMobileView = window.innerWidth < 768;

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
      iconType: 'function' | 'data' | 'trigger' | 'api' | 'filter' | 'transformer' | 'notification';
      
      constructor(
        x: number, 
        y: number, 
        width: number, 
        height: number, 
        color: string, 
        label: string,
        iconType: 'function' | 'data' | 'trigger' | 'api' | 'filter' | 'transformer' | 'notification'
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

          case 'filter':
            // Draw filter funnel icon
            ctx.beginPath();
            ctx.moveTo(-size/2, -size/2);
            ctx.lineTo(size/2, -size/2);
            ctx.lineTo(size/4, size/4);
            ctx.lineTo(size/4, size/2);
            ctx.lineTo(-size/4, size/2);
            ctx.lineTo(-size/4, size/4);
            ctx.closePath();
            ctx.fillStyle = this.color;
            ctx.fill();
            break;

          case 'transformer':
            // Draw transformer/gear icon
            ctx.beginPath();
            ctx.arc(0, 0, size/2, 0, Math.PI * 2);
            ctx.strokeStyle = this.color;
            ctx.lineWidth = 2;
            ctx.stroke();
            
            // Draw gear teeth
            for (let i = 0; i < 8; i++) {
              const angle = (i / 8) * Math.PI * 2;
              ctx.beginPath();
              ctx.moveTo(
                (size/2) * Math.cos(angle),
                (size/2) * Math.sin(angle)
              );
              ctx.lineTo(
                (size/2 + 5) * Math.cos(angle),
                (size/2 + 5) * Math.sin(angle)
              );
              ctx.stroke();
            }
            break;

          case 'notification':
            // Draw bell icon
            ctx.beginPath();
            ctx.arc(0, size/2, size/4, 0, Math.PI, true);
            ctx.moveTo(-size/4, size/2);
            ctx.lineTo(-size/3, -size/3);
            ctx.arc(0, -size/3, size/3, Math.PI, 0, false);
            ctx.lineTo(size/4, size/2);
            ctx.strokeStyle = this.color;
            ctx.lineWidth = 2;
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
      trigger: '#F97316',   // Nexia Orange
      function: '#1E3A8A',  // Nexia Blue
      api: '#8B5CF6',       // Purple
      data: '#10B981',      // Green
      filter: '#F59E0B',    // Amber
      transformer: '#3B82F6', // Blue
      notification: '#EC4899', // Pink
      connector: '#64748B'     // Slate
    };
    
    // Create nodes with adjusted positioning for mobile
    // For mobile: Create more vertical layout with nodes stacked
    let nodes: WorkflowNode[] = [];
    
    if (isMobileView) {
      // Mobile layout - vertical arrangement
      nodes = [
        // Main flow - vertical orientation
        new WorkflowNode(50, 50, 100, 60, nodeColors.trigger, 'Início', 'trigger'),
        new WorkflowNode(50, 150, 100, 60, nodeColors.function, 'Validar', 'function'),
        new WorkflowNode(50, 250, 100, 60, nodeColors.api, 'API', 'api'),
        new WorkflowNode(50, 350, 100, 60, nodeColors.filter, 'Filtrar', 'filter'),
        
        // Second column
        new WorkflowNode(200, 100, 100, 60, nodeColors.data, 'Dados', 'data'),
        new WorkflowNode(200, 200, 100, 60, nodeColors.transformer, 'Transform', 'transformer'),
        new WorkflowNode(200, 300, 100, 60, nodeColors.function, 'Análise', 'function'),
        
        // Third column
        new WorkflowNode(350, 150, 100, 60, nodeColors.notification, 'Alertas', 'notification'),
        new WorkflowNode(350, 250, 100, 60, nodeColors.function, 'Integrar', 'function'),
        new WorkflowNode(350, 350, 100, 60, nodeColors.data, 'Armazenar', 'data'),
      ];
      
      // Vertical connections
      nodes[0].connect(nodes[1]); // Início -> Validar
      nodes[1].connect(nodes[2]); // Validar -> API
      nodes[2].connect(nodes[3]); // API -> Filtrar
      
      // Cross connections
      nodes[0].connect(nodes[4]); // Início -> Dados
      nodes[1].connect(nodes[5]); // Validar -> Transform
      nodes[2].connect(nodes[6]); // API -> Análise
      
      // Second to third column
      nodes[4].connect(nodes[7]); // Dados -> Alertas
      nodes[5].connect(nodes[8]); // Transform -> Integrar
      nodes[6].connect(nodes[9]); // Análise -> Armazenar
      
      // Cross connections between columns
      nodes[3].connect(nodes[6]); // Filtrar -> Análise
      nodes[5].connect(nodes[7]); // Transform -> Alertas
      nodes[7].connect(nodes[8]); // Alertas -> Integrar
      nodes[8].connect(nodes[9]); // Integrar -> Armazenar
    } else {
      // Desktop layout - keep existing horizontal layout
      nodes = [
        // Main trigger and initial branches
        new WorkflowNode(50, 120, 140, 70, nodeColors.trigger, 'Evento Inicial', 'trigger'),
        new WorkflowNode(250, 50, 140, 70, nodeColors.function, 'Validar Dados', 'function'),
        new WorkflowNode(250, 180, 140, 70, nodeColors.api, 'API Request', 'api'),
        
        // Top branch nodes
        new WorkflowNode(450, 20, 140, 70, nodeColors.filter, 'Filtrar Dados', 'filter'),
        new WorkflowNode(450, 120, 140, 70, nodeColors.data, 'Banco de Dados', 'data'),
        
        // Middle branch nodes
        new WorkflowNode(450, 220, 140, 70, nodeColors.transformer, 'Transformar', 'transformer'),
        new WorkflowNode(650, 70, 140, 70, nodeColors.function, 'Análise', 'function'),
        
        // Bottom branch nodes
        new WorkflowNode(650, 170, 140, 70, nodeColors.notification, 'Notificação', 'notification'),
        new WorkflowNode(650, 270, 140, 70, nodeColors.api, 'Webhook', 'api'),
        
        // Final integration nodes
        new WorkflowNode(850, 120, 140, 70, nodeColors.function, 'Integração', 'function'),
        new WorkflowNode(850, 220, 140, 70, nodeColors.data, 'Armazenar', 'data'),
        
        // Extended branches going down
        new WorkflowNode(450, 320, 140, 70, nodeColors.connector, 'Conectar API', 'api'),
        new WorkflowNode(450, 420, 140, 70, nodeColors.function, 'Processar JSON', 'function'),
        new WorkflowNode(650, 370, 140, 70, nodeColors.data, 'Armazenar Cache', 'data'),
        new WorkflowNode(850, 320, 140, 70, nodeColors.transformer, 'Transformar Dados', 'transformer'),
        new WorkflowNode(850, 420, 140, 70, nodeColors.notification, 'Alerta', 'notification'),
        
        // Deep-level processing branch
        new WorkflowNode(250, 320, 140, 70, nodeColors.filter, 'Filtrar Erros', 'filter'),
        new WorkflowNode(250, 420, 140, 70, nodeColors.function, 'Correção Auto', 'function'),
        new WorkflowNode(50, 370, 140, 70, nodeColors.api, 'Chamar IA', 'api'),
        
        // Bottom level integration
        new WorkflowNode(650, 470, 140, 70, nodeColors.function, 'Análise Final', 'function'),
        new WorkflowNode(850, 520, 140, 70, nodeColors.data, 'Relatório', 'data'),
        new WorkflowNode(450, 520, 140, 70, nodeColors.notification, 'Notificação Email', 'notification'),
        new WorkflowNode(250, 520, 140, 70, nodeColors.api, 'Webhook Final', 'api')
      ];
      
      // Create desktop connections - keep existing connections
      // Initial connections
      nodes[0].connect(nodes[1]); // Trigger -> Validate
      nodes[0].connect(nodes[2]); // Trigger -> API Request
      
      // Top branch
      nodes[1].connect(nodes[3]); // Validate -> Filter
      nodes[1].connect(nodes[4]); // Validate -> Database
      
      // Middle branch
      nodes[2].connect(nodes[5]); // API Request -> Transform
      nodes[3].connect(nodes[6]); // Filter -> Analysis
      nodes[4].connect(nodes[6]); // Database -> Analysis
      
      // Bottom branch
      nodes[5].connect(nodes[7]); // Transform -> Notification
      nodes[5].connect(nodes[8]); // Transform -> Webhook
      
      // Final integration
      nodes[6].connect(nodes[9]); // Analysis -> Integration
      nodes[7].connect(nodes[9]); // Notification -> Integration
      nodes[8].connect(nodes[10]); // Webhook -> Store
      nodes[9].connect(nodes[10]); // Integration -> Store
      
      // NEW: Additional connections for extended workflow
      nodes[5].connect(nodes[11]); // Transform -> Connect API
      nodes[11].connect(nodes[12]); // Connect API -> Process JSON
      nodes[12].connect(nodes[13]); // Process JSON -> Store Cache
      nodes[13].connect(nodes[14]); // Store Cache -> Transform Data
      nodes[14].connect(nodes[15]); // Transform Data -> Alert
      
      // NEW: Connections for deep-level processing branch
      nodes[2].connect(nodes[16]); // API Request -> Filter Errors
      nodes[16].connect(nodes[17]); // Filter Errors -> Auto Fix
      nodes[17].connect(nodes[18]); // Auto Fix -> Call AI
      
      // NEW: More complex integrations
      nodes[15].connect(nodes[19]); // Alert -> Final Analysis
      nodes[19].connect(nodes[20]); // Final Analysis -> Report
      nodes[14].connect(nodes[21]); // Transform Data -> Email Notification
      nodes[21].connect(nodes[22]); // Email Notification -> Final Webhook
      nodes[18].connect(nodes[22]); // Call AI -> Final Webhook
      nodes[17].connect(nodes[12]); // Auto Fix -> Process JSON (creating a loop)
    }
    
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
    <section className="relative overflow-hidden pt-20 md:pt-32 pb-16 md:pb-24">
      {/* Canvas for n8n workflow animation */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 -z-10" 
        style={{ 
          transform: `translateY(${scrollY * 0.2}px)` // Parallax effect on workflow animation
        }} 
      />
      
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/70 -z-5" />
      
      {/* Animated Shapes */}
      <div className="absolute top-40 right-[10%] w-64 h-64 bg-nexia-orange/10 rounded-full blur-3xl animate-pulse-slow -z-10" />
      <div className="absolute bottom-20 left-[5%] w-72 h-72 bg-nexia-blue/10 rounded-full blur-3xl animate-pulse-slow -z-10" />
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="fade-in-stagger space-y-4 md:space-y-6 max-w-2xl">
            <div className="inline-flex items-center rounded-full bg-nexia-blue/10 px-3 py-1 text-sm font-medium text-nexia-blue">
              <span className="animate-pulse mr-1">●</span> Impulsionando a automação com IA
            </div>
            <h1 className="font-bold tracking-tight text-2xl md:text-4xl">
              Automatize com <span className="hero-text-gradient">Inteligência</span> e <span className="hero-text-gradient">Precisão</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground">
              A Nexia transforma processos complexos em fluxos automatizados e inteligentes. 
              Nossa tecnologia de ponta combina IA com automação para criar soluções que economizam
              tempo, reduzem erros e potencializam resultados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2 md:pt-4">
              <Button size={isMobile ? "default" : "lg"} className="button-with-glow bg-gradient-to-r from-nexia-orange to-nexia-blue text-white rounded-full px-6 md:px-8 shadow-lg hover:shadow-xl transition-all">
                Começar Agora
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Button>
              <Button size={isMobile ? "default" : "lg"} variant="outline" className="bg-transparent backdrop-blur-sm hover:bg-white/30 border-nexia-blue/20 text-foreground rounded-full px-6 md:px-8">
                Saber Mais
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-2 md:gap-4 pt-4 md:pt-6">
              <div className="text-center">
                <div className="font-bold text-xl md:text-3xl text-nexia-blue">98%</div>
                <p className="text-xs md:text-sm text-muted-foreground">Precisão</p>
              </div>
              <div className="text-center">
                <div className="font-bold text-xl md:text-3xl text-nexia-blue">500+</div>
                <p className="text-xs md:text-sm text-muted-foreground">Clientes</p>
              </div>
              <div className="text-center">
                <div className="font-bold text-xl md:text-3xl text-nexia-blue">85%</div>
                <p className="text-xs md:text-sm text-muted-foreground">Economia</p>
              </div>
            </div>
          </div>
          
          <div className="relative flex justify-center items-center w-full">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 md:w-96 h-64 md:h-96 bg-gradient-to-br from-nexia-orange to-nexia-blue rounded-full opacity-20 blur-3xl animate-pulse-slow"></div>
            
            {/* Feature cards - centered and with parallax effect */}
            <div 
              className="relative w-[95%] md:w-[85%] mx-auto animate-float"
              style={{ 
                transform: `translateY(${-scrollY * 0.1}px)` // Reverse parallax effect for floating
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-nexia-orange/10 to-nexia-blue/10 rounded-2xl -z-10"></div>
              
              <div className="space-y-4 md:space-y-8">
                <div className="p-4 md:p-8 rounded-xl bg-transparent shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center space-x-4 md:space-x-6">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-nexia-orange/10 flex items-center justify-center">
                      <Bot className="h-6 w-6 md:h-8 md:w-8 text-nexia-orange" />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg md:text-xl">Assistente IA</h4>
                      <p className="text-sm md:text-base text-muted-foreground">Automação inteligente com aprendizado contínuo</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 md:p-8 rounded-xl bg-transparent shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center space-x-4 md:space-x-6">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-nexia-blue/10 flex items-center justify-center">
                      <Zap className="h-6 w-6 md:h-8 md:w-8 text-nexia-blue" />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg md:text-xl">Workflow Otimizado</h4>
                      <p className="text-sm md:text-base text-muted-foreground">Processos eficientes e personalizados</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 md:p-8 rounded-xl bg-transparent shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center space-x-4 md:space-x-6">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-nexia-orange/10 flex items-center justify-center">
                      <BarChart className="h-6 w-6 md:h-8 md:w-8 text-nexia-orange" />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg md:text-xl">Análise de Dados</h4>
                      <p className="text-sm md:text-base text-muted-foreground">Insights valiosos e métricas precisas</p>
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
