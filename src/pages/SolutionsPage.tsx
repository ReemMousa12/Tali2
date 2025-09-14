import Header from '../components/Header';
import Footer from '../components/Footer';
import SolutionsSection from '../components/SolutionsSection';
import FeaturesSection from '../components/FeaturesSection';

const SolutionsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <SolutionsSection />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
};

export default SolutionsPage;
