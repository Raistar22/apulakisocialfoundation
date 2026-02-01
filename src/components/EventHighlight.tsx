import eventPhoto from "@/assets/event-photo.jpg";

const EventHighlight = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-8">
          Our Recent Event
        </h2>
        <div className="max-w-4xl mx-auto">
          <img
            src={eventPhoto}
            alt="Apulaki Social Foundation tree plantation event"
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <p className="text-center text-muted-foreground mt-4">
            Tree Plantation Drive - August 2024
          </p>
        </div>
      </div>
    </section>
  );
};

export default EventHighlight;
