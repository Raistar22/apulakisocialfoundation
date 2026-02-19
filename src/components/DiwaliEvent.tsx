import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// Image imports
import img1 from "@/assets/diwali/images/WhatsApp Image 2026-02-19 at 17.00.45 (1).jpeg";
import img2 from "@/assets/diwali/images/WhatsApp Image 2026-02-19 at 17.00.45.jpeg";
import img3 from "@/assets/diwali/images/WhatsApp Image 2026-02-19 at 17.00.46 (1).jpeg";
import img4 from "@/assets/diwali/images/WhatsApp Image 2026-02-19 at 17.00.46.jpeg";
import img5 from "@/assets/diwali/images/WhatsApp Image 2026-02-19 at 17.00.47 (1).jpeg";
import img6 from "@/assets/diwali/images/WhatsApp Image 2026-02-19 at 17.00.47 (2).jpeg";
import img7 from "@/assets/diwali/images/WhatsApp Image 2026-02-19 at 17.00.47.jpeg";
import img8 from "@/assets/diwali/images/WhatsApp Image 2026-02-19 at 17.00.48 (1).jpeg";
import img9 from "@/assets/diwali/images/WhatsApp Image 2026-02-19 at 17.00.48.jpeg";
import img10 from "@/assets/diwali/images/WhatsApp Image 2026-02-19 at 17.00.49 (1).jpeg";
import img11 from "@/assets/diwali/images/WhatsApp Image 2026-02-19 at 17.00.49.jpeg";
import img12 from "@/assets/diwali/images/WhatsApp Image 2026-02-19 at 17.00.50 (1).jpeg";
import img13 from "@/assets/diwali/images/WhatsApp Image 2026-02-19 at 17.00.50.jpeg";
import img14 from "@/assets/diwali/images/WhatsApp Image 2026-02-19 at 17.00.51 (1).jpeg";
import img15 from "@/assets/diwali/images/WhatsApp Image 2026-02-19 at 17.00.51.jpeg";
import img16 from "@/assets/diwali/images/WhatsApp Image 2026-02-19 at 17.04.15 (1).jpeg";
import img17 from "@/assets/diwali/images/WhatsApp Image 2026-02-19 at 17.04.15.jpeg";
import img18 from "@/assets/diwali/images/WhatsApp Image 2026-02-19 at 17.04.16 (1).jpeg";
import img19 from "@/assets/diwali/images/WhatsApp Image 2026-02-19 at 17.04.16.jpeg";
import img20 from "@/assets/diwali/images/WhatsApp Image 2026-02-19 at 17.04.17 (1).jpeg";
import img21 from "@/assets/diwali/images/WhatsApp Image 2026-02-19 at 17.04.17.jpeg";
import img22 from "@/assets/diwali/images/WhatsApp Image 2026-02-19 at 17.04.18.jpeg";
import img23 from "@/assets/diwali/images/WhatsApp Image 2026-02-19 at 17.04.19 (1).jpeg";
import img24 from "@/assets/diwali/images/WhatsApp Image 2026-02-19 at 17.04.19.jpeg";
import img25 from "@/assets/diwali/images/WhatsApp Image 2026-02-19 at 17.04.20 (1).jpeg";
import img26 from "@/assets/diwali/images/WhatsApp Image 2026-02-19 at 17.04.20.jpeg";
import img27 from "@/assets/diwali/images/WhatsApp Image 2026-02-19 at 17.04.21.jpeg";

const images = [
    { src: img1, alt: "Diwali 2025 Fort Making 1" },
    { src: img2, alt: "Diwali 2025 Fort Making 2" },
    { src: img3, alt: "Diwali 2025 Fort Making 3" },
    { src: img4, alt: "Diwali 2025 Fort Making 4" },
    { src: img5, alt: "Diwali 2025 Fort Making 5" },
    { src: img6, alt: "Diwali 2025 Fort Making 6" },
    { src: img7, alt: "Diwali 2025 Fort Making 7" },
    { src: img8, alt: "Diwali 2025 Fort Making 8" },
    { src: img9, alt: "Diwali 2025 Fort Making 9" },
    { src: img10, alt: "Diwali 2025 Fort Making 10" },
    { src: img11, alt: "Diwali 2025 Fort Making 11" },
    { src: img12, alt: "Diwali 2025 Fort Making 12" },
    { src: img13, alt: "Diwali 2025 Fort Making 13" },
    { src: img14, alt: "Diwali 2025 Fort Making 14" },
    { src: img15, alt: "Diwali 2025 Fort Making 15" },
    { src: img16, alt: "Diwali 2025 Fort Making 16" },
    { src: img17, alt: "Diwali 2025 Fort Making 17" },
    { src: img18, alt: "Diwali 2025 Fort Making 18" },
    { src: img19, alt: "Diwali 2025 Fort Making 19" },
    { src: img20, alt: "Diwali 2025 Fort Making 20" },
    { src: img21, alt: "Diwali 2025 Fort Making 21" },
    { src: img22, alt: "Diwali 2025 Fort Making 22" },
    { src: img23, alt: "Diwali 2025 Fort Making 23" },
    { src: img24, alt: "Diwali 2025 Fort Making 24" },
    { src: img25, alt: "Diwali 2025 Fort Making 25" },
    { src: img26, alt: "Diwali 2025 Fort Making 26" },
    { src: img27, alt: "Diwali 2025 Fort Making 27" },
];

const DiwaliEvent = () => {
    return (
        <section id="diwali-event" className="py-20 bg-background/50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                        Diwali 2025 Fort making competitions price distribution
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Celebrating our heritage and creativity through the traditional art of fort making during Diwali.
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

export default DiwaliEvent;
