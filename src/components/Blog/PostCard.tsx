
import { Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PostCardProps {
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

const PostCard = ({ post }: PostCardProps) => {
  return (
    <Link
      to={`/blog/${post.id}`}
      className="group flex flex-col h-full overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
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
          <span className="text-sm text-muted-foreground flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {post.readTime}
          </span>
        </div>
        
        <h3 className="text-xl font-bold mb-3 group-hover:text-nexia-orange transition-colors">
          {post.title}
        </h3>
        
        <p className="text-muted-foreground mb-4 flex-1">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-3">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-8 h-8 rounded-full object-cover"
            />
            <div className="text-sm">
              <span className="font-medium">{post.author.name}</span>
              <span className="text-muted-foreground"> • {post.date}</span>
            </div>
          </div>
          
          <div className="flex items-center text-nexia-blue group-hover:text-nexia-orange transition-colors text-sm font-medium">
            Ler
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
