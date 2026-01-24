import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Objectives from "@/components/Objectives";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Objectives />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
