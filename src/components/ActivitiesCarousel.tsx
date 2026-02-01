import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import activity1 from "@/assets/activity-1.jpg";
import activity2 from "@/assets/activity-2.jpg";
import activity3 from "@/assets/activity-3.jpg";
import activity4 from "@/assets/activity-4.jpg";
import activity5 from "@/assets/activity-5.jpg";
import activity6 from "@/assets/activity-6.jpg";
import activity7 from "@/assets/activity-7.jpg";
import activity8 from "@/assets/activity-8.jpg";
import activity9 from "@/assets/activity-9.jpg";
import activity10 from "@/assets/activity-10.jpg";
import activity11 from "@/assets/activity-11.jpg";
import activity12 from "@/assets/activity-12.jpg";
import activity13 from "@/assets/activity-13.jpg";
import activity14 from "@/assets/activity-14.jpg";
import activity15 from "@/assets/activity-15.jpg";
import activity16 from "@/assets/activity-16.jpg";
import activity17 from "@/assets/activity-17.jpg";
import activity18 from "@/assets/activity-18.jpg";
import activity19 from "@/assets/activity-19.jpg";
import activity20 from "@/assets/activity-20.jpg";

const activities = [
  { src: activity1, alt: "Tree Plantation News Coverage" },
  { src: activity2, alt: "Community Gathering at Mankeshwar Temple" },
  { src: activity3, alt: "Prabhat News Coverage" },
  { src: activity4, alt: "Tree Planting Activity" },
  { src: activity5, alt: "Sakal News Coverage" },
  { src: activity6, alt: "Kalpvruksha Foundation Event" },
  { src: activity7, alt: "Community Meeting" },
  { src: activity8, alt: "Foundation Members Gathering" },
  { src: activity9, alt: "Felicitation Ceremony" },
  { src: activity10, alt: "Tree Plantation Program" },
  { src: activity11, alt: "Lokmanthan News Coverage" },
  { src: activity12, alt: "Community Group Photo" },
  { src: activity13, alt: "Rainy Day Plantation Drive" },
  { src: activity14, alt: "Sarpanch Felicitation" },
  { src: activity15, alt: "Coconut Offering Ceremony" },
  { src: activity16, alt: "Foundation Banner with Members" },
  { src: activity17, alt: "Vrukshabishi Waghapur Banner" },
  { src: activity18, alt: "Community Gathering in Rain" },
  { src: activity19, alt: "Tree Planting by Elder" },
  { src: activity20, alt: "Sapling Planting Ceremony" },
];

const ActivitiesCarousel = () => {
  return (
    <section id="activities" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Activities
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Glimpses of our tree plantation drives, awareness programs, and community engagement initiatives across Maharashtra
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
                stopOnInteraction: true,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {activities.map((activity, index) => (
                <CarouselItem key={index} className="md:basis-1/2">
                  <div className="p-2">
                    <div className="overflow-hidden rounded-lg shadow-lg bg-background">
                      <img
                        src={activity.src}
                        alt={activity.alt}
                        className="w-full h-[500px] object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className="p-3 bg-background">
                        <p className="text-sm text-muted-foreground text-center">
                          {activity.alt}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-primary text-primary-foreground hover:bg-primary/90" />
            <CarouselNext className="bg-primary text-primary-foreground hover:bg-primary/90" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesCarousel;
