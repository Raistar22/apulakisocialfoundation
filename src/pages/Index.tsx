import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Objectives from "@/components/Objectives";
import EventHighlight from "@/components/EventHighlight";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <EventHighlight />
        <Objectives />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
