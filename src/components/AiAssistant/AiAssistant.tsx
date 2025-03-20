
import { useState } from 'react';
import { Bot, Send, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

const AiAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [conversation, setConversation] = useState<{ role: 'user' | 'assistant'; content: string }[]>([
    {
      role: 'assistant',
      content: 'Olá! Sou a assistente virtual da Nexia. Como posso ajudar você com soluções de automação e inteligência artificial hoje?'
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = () => {
    if (!message.trim()) return;

    // Adicionar mensagem do usuário
    const updatedConversation = [
      ...conversation,
      { role: 'user', content: message }
    ];
    setConversation(updatedConversation);
    setMessage('');
    setIsTyping(true);

    // Simular resposta do assistente
    setTimeout(() => {
      const botResponses = [
        "A inteligência artificial da Nexia pode automatizar diversos processos empresariais, como atendimento ao cliente, análise de dados e gerenciamento de tarefas repetitivas.",
        "Nossa plataforma utiliza algoritmos avançados de aprendizado de máquina para criar soluções personalizadas para cada cliente.",
        "A automação inteligente pode reduzir custos operacionais em até 70% e aumentar a produtividade da sua equipe.",
        "Temos soluções específicas para diferentes setores, como varejo, finanças, saúde e manufatura.",
        "O diferencial da Nexia é a combinação de IA com expertise humana, garantindo resultados mais precisos e adaptados ao seu negócio."
      ];
      
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      
      setConversation([
        ...updatedConversation,
        { role: 'assistant', content: randomResponse }
      ]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Botão flutuante */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 p-4 rounded-full bg-gradient-to-r from-nexia-orange to-nexia-blue text-white shadow-lg hover:shadow-xl transition-all z-50 animate-bounce"
          aria-label="Abrir assistente virtual"
        >
          <Bot className="h-6 w-6" />
        </button>
      )}

      {/* Dialog do assistente */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[425px] max-h-[80vh] flex flex-col">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Bot className="h-5 w-5 text-nexia-orange" />
              Assistente Virtual Nexia
            </DialogTitle>
            <DialogDescription>
              Tire suas dúvidas sobre automação e inteligência artificial
            </DialogDescription>
          </DialogHeader>
          
          <div className="flex-1 overflow-y-auto my-4 p-2 space-y-4 max-h-[300px]">
            {conversation.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.role === 'assistant' ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`p-3 rounded-lg max-w-[80%] ${
                    msg.role === 'assistant'
                      ? 'bg-muted text-foreground'
                      : 'bg-gradient-to-r from-nexia-orange to-nexia-blue text-white'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="p-3 rounded-lg bg-muted">
                  <div className="flex space-x-1">
                    <div className="h-2 w-2 bg-nexia-blue rounded-full animate-bounce"></div>
                    <div className="h-2 w-2 bg-nexia-blue rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="h-2 w-2 bg-nexia-blue rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <div className="flex items-center gap-2 mt-auto">
            <Textarea
              placeholder="Digite sua mensagem..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              className="resize-none"
              rows={2}
            />
            <Button 
              onClick={handleSendMessage} 
              size="icon" 
              className="bg-gradient-to-r from-nexia-orange to-nexia-blue text-white"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AiAssistant;
