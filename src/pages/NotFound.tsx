
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import MainLayout from "../components/Layout/MainLayout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <MainLayout>
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center max-w-lg px-4">
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-nexia-orange to-nexia-blue opacity-10 blur-3xl -z-10"></div>
            <h1 className="text-9xl font-bold hero-text-gradient">404</h1>
          </div>
          
          <h2 className="text-2xl font-bold mb-4">Página não encontrada</h2>
          <p className="text-muted-foreground mb-8">
            A página que você está procurando não existe ou foi movida.
            Verifique o URL ou retorne à página inicial.
          </p>
          
          <Button asChild size="lg" className="bg-gradient-to-r from-nexia-orange to-nexia-blue text-white rounded-full px-8">
            <Link to="/" className="flex items-center">
              <Home className="mr-2 h-5 w-5" />
              Voltar para Home
            </Link>
          </Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default NotFound;
