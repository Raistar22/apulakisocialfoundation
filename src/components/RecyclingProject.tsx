import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// Image imports
import img1 from "@/assets/recycling/WhatsApp Image 2026-03-16 at 08.22.51.jpeg";
import img2 from "@/assets/recycling/WhatsApp Image 2026-03-16 at 08.22.52 (1).jpeg";
import img3 from "@/assets/recycling/WhatsApp Image 2026-03-16 at 08.22.52 (2).jpeg";
import img4 from "@/assets/recycling/WhatsApp Image 2026-03-16 at 08.22.52.jpeg";
import img5 from "@/assets/recycling/WhatsApp Image 2026-03-16 at 08.22.53 (1).jpeg";
import img6 from "@/assets/recycling/WhatsApp Image 2026-03-16 at 08.22.53.jpeg";
import img7 from "@/assets/recycling/WhatsApp Image 2026-03-16 at 08.22.54.jpeg";

const images = [
    { src: img1, alt: "Recycling Plastic Drums 1" },
    { src: img2, alt: "Recycling Plastic Drums 2" },
    { src: img3, alt: "Recycling Plastic Drums 3" },
    { src: img4, alt: "Recycling Plastic Drums 4" },
    { src: img5, alt: "Recycling Plastic Drums 5" },
    { src: img6, alt: "Recycling Plastic Drums 6" },
    { src: img7, alt: "Recycling Plastic Drums 7" },
];

const RecyclingProject = () => {
    return (
        <section id="recycling-project" className="py-20 bg-background/50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                        Recycling plastic drums into planters: a cost effective solution
                    </h2>
                    <div className="text-muted-foreground max-w-4xl mx-auto text-lg leading-relaxed">
                        <p className="mb-2">The project started in 2022.</p>
                        <p className="mb-2 font-semibold">Thank you for support from Fleetguard Filters Private Limited.</p>
                        <p>Maharashtra.</p>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        plugins={[
                            Autoplay({
                                delay: 3500,
                                stopOnInteraction: true,
                            }),
                        ]}
                        className="w-full"
                    >
                        <CarouselContent>
                            {images.map((image, index) => (
                                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                    <div className="p-3">
                                        <div className="group relative overflow-hidden rounded-2xl shadow-2xl bg-card">
                                            <img
                                                src={image.src}
                                                alt={image.alt}
                                                className="w-full h-[400px] object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-90"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                                <p className="text-white font-medium text-lg">
                                                    {image.alt}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <div className="flex justify-center gap-4 mt-8 md:hidden">
                            <CarouselPrevious className="static translate-y-0" />
                            <CarouselNext className="static translate-y-0" />
                        </div>
                        <div className="hidden md:block">
                            <CarouselPrevious className="-left-16 bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-110 transition-all border-none" />
                            <CarouselNext className="-right-16 bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-110 transition-all border-none" />
                        </div>
                    </Carousel>
                </div>
            </div>
        </section>
    );
};

export default RecyclingProject;
