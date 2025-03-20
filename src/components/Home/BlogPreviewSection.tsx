
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const featuredPosts = [
  {
    id: 1,
    title: "Como a IA está revolucionando o atendimento ao cliente",
    excerpt: "Descubra como as empresas estão utilizando inteligência artificial para melhorar o relacionamento com clientes.",
    category: "Inteligência Artificial",
    date: "10 Mar 2023",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "5 maneiras de automatizar processos financeiros",
    excerpt: "Aprenda como a automação pode tornar a gestão financeira da sua empresa mais eficiente e precisa.",
    category: "Automação",
    date: "24 Fev 2023",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "O futuro do trabalho com automação inteligente",
    excerpt: "Uma análise sobre como a automação está transformando o ambiente de trabalho e criando novas oportunidades.",
    category: "Tendências",
    date: "15 Fev 2023",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

const BlogPreviewSection = () => {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16">
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-nexia-blue/10 text-nexia-blue text-sm font-medium mb-4">
              Blog & Insights
            </div>
            <h2 className="mb-4">Últimas novidades & <span className="hero-text-gradient">artigos</span></h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Mantenha-se atualizado com as últimas tendências e novidades no mundo da automação e inteligência artificial.
            </p>
          </div>
          
          <div className="mt-6 md:mt-0">
            <Button asChild variant="ghost" className="group">
              <Link to="/blog" className="flex items-center text-nexia-blue hover:text-nexia-orange transition-colors">
                Ver todos os artigos
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post, index) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="group relative flex flex-col h-full overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <div className="flex-1 p-6 bg-white flex flex-col">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-medium px-3 py-1 rounded-full bg-nexia-orange/10 text-nexia-orange">
                    {post.category}
                  </span>
                  <span className="text-sm text-muted-foreground">{post.date}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-nexia-orange transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 flex-1">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center text-nexia-blue group-hover:text-nexia-orange transition-colors text-sm font-medium">
                  Ler artigo
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreviewSection;
