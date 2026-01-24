import { TreePine, GraduationCap, Heart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const objectives = [
  {
    icon: TreePine,
    title: "Environment Conservation",
    description:
      "Tree plantation in village and forest areas, pollution control initiatives, and sustainable waste management systems.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "Developing modern school facilities, establishing community libraries, and providing guidance for competitive exams.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: Heart,
    title: "Health & Welfare",
    description:
      "Providing essential medical facilities, vaccination awareness programs, and regular health checkup camps for all.",
    color: "text-destructive",
    bgColor: "bg-destructive/10",
  },
];

const Objectives = () => {
  return (
    <section id="objectives" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-3">Our Core Objectives</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Making a lasting impact across Maharashtra in three key areas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {objectives.map((objective, index) => (
            <Card
              key={objective.title}
              className="bg-card border-none shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-2">
                <div className={`w-14 h-14 ${objective.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <objective.icon className={`w-7 h-7 ${objective.color}`} />
                </div>
                <CardTitle className="text-lg font-semibold text-foreground">
                  {objective.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center leading-relaxed">
                  {objective.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Objectives;
