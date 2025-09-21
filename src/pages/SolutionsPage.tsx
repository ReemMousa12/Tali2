import Header from '../components/Header';
import Footer from '../components/Footer';
import SolutionsSection from '../components/SolutionsSection';
import FeaturesSection from '../components/FeaturesSection';
import FloatingCircles from '../components/FloatingCircles';

const SolutionsPage = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Header />
      <div className="absolute inset-0 pointer-events-none">
        <FloatingCircles />
      </div>
      <main className="flex-1">
        <SolutionsSection />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
};

export default SolutionsPage;
