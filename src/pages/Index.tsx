
import MainLayout from '../components/Layout/MainLayout';
import HeroSection from '../components/Home/HeroSection';
import FeaturesSection from '../components/Home/FeaturesSection';
import SolutionsSection from '../components/Home/SolutionsSection';
import TestimonialsSection from '../components/Home/TestimonialsSection';
import BlogPreviewSection from '../components/Home/BlogPreviewSection';
import MarketplacePreviewSection from '../components/Home/MarketplacePreviewSection';
import CtaSection from '../components/Home/CtaSection';
import AiAssistant from '../components/AiAssistant/AiAssistant';

const Index = () => {
  return (
    <MainLayout>
      <HeroSection />
      <FeaturesSection />
      <SolutionsSection />
      <TestimonialsSection />
      <BlogPreviewSection />
      <MarketplacePreviewSection />
      <CtaSection />
      <AiAssistant />
    </MainLayout>
  );
};

export default Index;
