import Header from "@/components/Header";
import EventsSection from "@/components/EventsSection";

import ScheduleSection from "@/components/ScheduleSection";
import PricingSection from "@/components/PricingSection";
import PartnersSection from "@/components/PartnersSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <EventsSection />
  
      <ScheduleSection />
      <PartnersSection />
      <Footer />
    </div>
  );
};

export default Index;