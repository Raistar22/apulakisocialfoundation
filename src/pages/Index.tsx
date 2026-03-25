import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import ActivitiesCarousel from "@/components/ActivitiesCarousel";
import ClimateImpact from "@/components/ClimateImpact";
import DiwaliEvent from "@/components/DiwaliEvent";
import EventHighlight from "@/components/EventHighlight";
import Objectives from "@/components/Objectives";
import ResearchReport from "@/components/ResearchReport";
import FunPicnicEvent from "@/components/FunPicnicEvent";
import RecyclingProject from "@/components/RecyclingProject";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <ActivitiesCarousel />
        <ClimateImpact />
        <DiwaliEvent />
        <FunPicnicEvent />
        <RecyclingProject />
        <ResearchReport />
        <EventHighlight />
        <Objectives />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
