import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import image1 from "@/assets/first gen/Whatsapp/WhatsApp Image 2026-02-01 at 21.38.38.jpeg";
import image2 from "@/assets/first gen/Whatsapp/WhatsApp Image 2026-02-01 at 21.38.39.jpeg";
import image3 from "@/assets/first gen/Whatsapp/WhatsApp Image 2026-02-01 at 21.38.40.jpeg";
import image4 from "@/assets/first gen/Whatsapp/WhatsApp Image 2026-02-01 at 21.38.41.jpeg";
import image5 from "@/assets/first gen/Whatsapp/WhatsApp Image 2026-02-01 at 21.38.42.jpeg";
import image6 from "@/assets/first gen/Whatsapp/WhatsApp Image 2026-02-01 at 21.38.43.jpeg";
import image7 from "@/assets/first gen/Whatsapp/WhatsApp Image 2026-02-01 at 21.38.44.jpeg";

const images = [
    { src: image1, alt: "Climate Change Impact 1" },
    { src: image2, alt: "Climate Change Impact 2" },
    { src: image3, alt: "Climate Change Impact 3" },
    { src: image4, alt: "Climate Change Impact 4" },
    { src: image5, alt: "Climate Change Impact 5" },
    { src: image6, alt: "Climate Change Impact 6" },
    { src: image7, alt: "Climate Change Impact 7" },
];

const ClimateImpact = () => {
    return (
        <section id="climate-impact" className="py-20 bg-primary/5">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
                        "We are the first generation to feel the effect of climate change and the last generation who can do something about it."
                    </h2>
                    <div className="space-y-4">
                        <p className="text-xl md:text-2xl text-primary font-medium">
                            At native we are putting all our efforts into planting to see the big difference.
                        </p>
                        <div className="pt-6">
                            <p className="text-lg text-muted-foreground italic">
                                Thank you team,
                            </p>
                            <p className="text-xl font-bold text-foreground">
                                Apulaki Social Foundation.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        plugins={[
                            Autoplay({
                                delay: 4000,
                                stopOnInteraction: true,
                            }),
                        ]}
                        className="w-full"
                    >
                        <CarouselContent>
                            {images.map((image, index) => (
                                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                    <div className="p-2">
                                        <div className="overflow-hidden rounded-2xl shadow-xl aspect-[4/3]">
                                            <img
                                                src={image.src}
                                                alt={image.alt}
                                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                            />
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <div className="hidden md:block">
                            <CarouselPrevious className="-left-12 bg-background border-primary text-primary hover:bg-primary hover:text-primary-foreground" />
                            <CarouselNext className="-right-12 bg-background border-primary text-primary hover:bg-primary hover:text-primary-foreground" />
                        </div>
                    </Carousel>
                </div>
            </div>
        </section>
    );
};

export default ClimateImpact;
