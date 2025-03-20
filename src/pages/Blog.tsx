
import { useEffect } from 'react';
import MainLayout from '../components/Layout/MainLayout';
import BlogHeader from '../components/Blog/BlogHeader';
import FeaturedPost from '../components/Blog/FeaturedPost';
import PostCard from '../components/Blog/PostCard';
import Newsletter from '../components/Blog/Newsletter';

const featuredPost = {
  id: 1,
  title: "Como a IA está reinventando a automação de processos empresariais",
  excerpt: "Descubra como a combinação de IA e automação está criando uma nova era de eficiência operacional e transformando a maneira como as empresas funcionam.",
  category: "Inteligência Artificial",
  date: "12 Mar 2023",
  readTime: "7 min de leitura",
  image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  author: {
    name: "Mariana Alves",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  }
};

const posts = [
  {
    id: 2,
    title: "5 maneiras de automatizar processos financeiros",
    excerpt: "Aprenda como a automação pode tornar a gestão financeira da sua empresa mais eficiente e precisa.",
    category: "Automação",
    date: "24 Fev 2023",
    readTime: "5 min de leitura",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: {
      name: "Carlos Santos",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    }
  },
  {
    id: 3,
    title: "O futuro do trabalho com automação inteligente",
    excerpt: "Uma análise sobre como a automação está transformando o ambiente de trabalho e criando novas oportunidades.",
    category: "Tendências",
    date: "15 Fev 2023",
    readTime: "6 min de leitura",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: {
      name: "Ana Ferreira",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  },
  {
    id: 4,
    title: "Machine Learning na prática: casos reais de sucesso",
    excerpt: "Conheça histórias de empresas que implementaram machine learning e obtiveram resultados impressionantes.",
    category: "Machine Learning",
    date: "08 Fev 2023",
    readTime: "8 min de leitura",
    image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: {
      name: "Roberto Lima",
      avatar: "https://randomuser.me/api/portraits/men/22.jpg"
    }
  },
  {
    id: 5,
    title: "Como começar com automação de marketing",
    excerpt: "Um guia passo a passo para implementar automação nos seus processos de marketing e aumentar a eficiência.",
    category: "Marketing",
    date: "01 Fev 2023",
    readTime: "6 min de leitura",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: {
      name: "Juliana Costa",
      avatar: "https://randomuser.me/api/portraits/women/33.jpg"
    }
  },
  {
    id: 6,
    title: "Automação e segurança: como proteger seus dados",
    excerpt: "Entenda os desafios de segurança em ambientes automatizados e aprenda a proteger informações sensíveis.",
    category: "Segurança",
    date: "25 Jan 2023",
    readTime: "7 min de leitura",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: {
      name: "Marcelo Sousa",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg"
    }
  }
];

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <MainLayout>
      <BlogHeader />
      
      <section className="py-12 bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <FeaturedPost post={featuredPost} />
        </div>
      </section>
      
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Artigos Recentes</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
          
          <div className="flex justify-center mt-12">
            <button className="px-6 py-2 rounded-full border border-nexia-blue/20 hover:border-nexia-blue/50 transition-colors">
              Carregar mais artigos
            </button>
          </div>
        </div>
      </section>
      
      <Newsletter />
    </MainLayout>
  );
};

export default Blog;
