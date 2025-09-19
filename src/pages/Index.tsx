import Header from "@/components/Header";
import EventsSection from "@/components/EventsSection";

import ScheduleSection from "@/components/ScheduleSection";
import HeroHome from "@/components/Hero-home";
import PartnersSection from "@/components/PartnersSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
  <HeroHome />
      <EventsSection />
      <ScheduleSection />
      <PartnersSection />
      <Footer />
    </div>
  );
};

export default Index;