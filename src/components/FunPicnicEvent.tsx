import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// Image imports
import img1 from "@/assets/fun picnic/WhatsApp Image 2026-03-22 at 08.37.41 (1).jpeg";
import img2 from "@/assets/fun picnic/WhatsApp Image 2026-03-22 at 08.37.41 (2).jpeg";
import img3 from "@/assets/fun picnic/WhatsApp Image 2026-03-22 at 08.37.41.jpeg";
import img4 from "@/assets/fun picnic/WhatsApp Image 2026-03-22 at 08.37.42 (1).jpeg";
import img5 from "@/assets/fun picnic/WhatsApp Image 2026-03-22 at 08.37.42 (2).jpeg";
import img6 from "@/assets/fun picnic/WhatsApp Image 2026-03-22 at 08.37.42.jpeg";
import img7 from "@/assets/fun picnic/WhatsApp Image 2026-03-22 at 08.37.43.jpeg";

const images = [
    { src: img1, alt: "Fun Picnic and Educational Activity 1" },
    { src: img2, alt: "Fun Picnic and Educational Activity 2" },
    { src: img3, alt: "Fun Picnic and Educational Activity 3" },
    { src: img4, alt: "Fun Picnic and Educational Activity 4" },
    { src: img5, alt: "Fun Picnic and Educational Activity 5" },
    { src: img6, alt: "Fun Picnic and Educational Activity 6" },
    { src: img7, alt: "Fun Picnic and Educational Activity 7" },
];

const FunPicnicEvent = () => {
    return (
        <section id="fun-picnic" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                        Apulakis educational activities: (Fun, Picnic and education) - Aug 2025
                    </h2>
                    <p className="text-muted-foreground max-w-4xl mx-auto text-lg leading-relaxed text-left md:text-center">
                        On the occasion of the month of Shravan, all the teachers and students of Zilla Parishad (ZP) Primary School Waghapur were taken on a field trip to Mankeshwar temple. On this occasion, the students were guided by the Apulaki Foundation volunteers, retired teachers, and served sweet food. Students enjoyed this educational activity.
                    </p>
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

export default FunPicnicEvent;
