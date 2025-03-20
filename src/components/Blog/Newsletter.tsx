
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { Mail } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      toast.error('Por favor, informe seu email');
      return;
    }
    
    // This would normally send to an API
    toast.success('Obrigado por se inscrever na nossa newsletter!');
    setEmail('');
  };
  
  return (
    <section className="py-12 md:py-16 bg-nexia-dark text-white overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Mail className="h-5 w-5 text-nexia-orange" />
            <span className="font-medium">Newsletter</span>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Mantenha-se atualizado com novidades semanais
          </h2>
          
          <p className="text-gray-300 mb-8">
            Receba nossos artigos, tutoriais e novidades diretamente no seu email.
            Prometemos não enviar spam.
          </p>
          
          <form onSubmit={handleSubmit} className="relative max-w-md mx-auto">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Seu melhor email..."
              className="pl-4 pr-36 py-6 rounded-full bg-white/5 backdrop-blur-sm border-white/10 text-white placeholder:text-gray-400"
            />
            <Button 
              type="submit"
              className="absolute right-1.5 top-1.5 bottom-1.5 bg-gradient-to-r from-nexia-orange to-nexia-blue text-white rounded-full px-5"
            >
              Inscrever-se
            </Button>
          </form>
          
          <p className="mt-4 text-sm text-gray-400">
            Ao se inscrever, você concorda com nossa Política de Privacidade.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
