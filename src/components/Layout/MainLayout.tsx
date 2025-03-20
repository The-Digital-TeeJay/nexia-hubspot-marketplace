
import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import { useIsMobile } from '@/hooks/use-mobile';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="flex flex-col min-h-screen bg-transparent overflow-x-hidden">
      <Header />
      <main className={`flex-grow ${isMobile ? 'pt-16' : ''}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
