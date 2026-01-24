import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-end pb-16 pt-32">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 via-foreground/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-card leading-tight mb-4 animate-fade-in">
            Preserving Nature for
            <br />
            a Better Future
          </h1>
          <p className="text-lg text-card/90 mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Serving Maharashtra through sustainable conservation, quality education, and accessible healthcare.
          </p>
          <Button
            variant="outline"
            className="border-card text-card bg-transparent hover:bg-card/10 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
            onClick={() => document.getElementById("objectives")?.scrollIntoView({ behavior: "smooth" })}
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
