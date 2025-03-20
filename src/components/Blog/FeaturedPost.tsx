
import { Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FeaturedPostProps {
  post: {
    id: number;
    title: string;
    excerpt: string;
    category: string;
    date: string;
    readTime: string;
    image: string;
    author: {
      name: string;
      avatar: string;
    };
  };
}

const FeaturedPost = ({ post }: FeaturedPostProps) => {
  return (
    <div className="glass-card p-6 rounded-2xl overflow-hidden shadow-lg">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="rounded-xl overflow-hidden h-64 lg:h-auto">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex flex-col justify-center">
          <div className="flex items-center space-x-3 mb-4">
            <span className="text-sm font-medium px-3 py-1 rounded-full bg-nexia-orange/10 text-nexia-orange">
              {post.category}
            </span>
            <span className="text-sm text-muted-foreground flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {post.readTime}
            </span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            {post.title}
          </h2>
          
          <p className="text-muted-foreground mb-6">
            {post.excerpt}
          </p>
          
          <div className="flex items-center justify-between mt-auto">
            <div className="flex items-center space-x-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <div className="font-medium">{post.author.name}</div>
                <div className="text-sm text-muted-foreground">{post.date}</div>
              </div>
            </div>
            
            <Link 
              to={`/blog/${post.id}`}
              className="flex items-center text-nexia-blue hover:text-nexia-orange transition-colors group"
            >
              Ler artigo
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
