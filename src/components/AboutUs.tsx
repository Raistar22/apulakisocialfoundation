import { TreePine, BookOpen, Users, Lightbulb, Heart, Globe } from "lucide-react";

const AboutUs = () => {
  const objectives = [
    {
      icon: TreePine,
      title: "Environment Conservation",
      items: [
        "Plantation around the village, school areas, and forest areas with regular care",
        "Measures to lower the impact of pollution",
        "Control environmental deterioration and organize functional programs",
        "Awareness on plastic, environment hygiene, potable water, and waste management",
      ],
    },
    {
      icon: BookOpen,
      title: "Education",
      items: [
        "Develop facilities for schools, hostels, sports complexes, and higher education",
        "Provide modern, technical, and linguistic education facilities",
        "Libraries and reading rooms for competitive exam students",
      ],
    },
    {
      icon: Users,
      title: "Social Work",
      items: [
        "Conserve and pursue science, art, culture, and sports",
        "Arrange workshops, seminars, conferences, and training programs",
        "Awareness programs for women, students, farmers, disabled, and senior citizens",
        "Scholarships and career guidance for students",
        "Cultural programs for the community",
      ],
    },
    {
      icon: Lightbulb,
      title: "Enlightening & Awareness Work",
      items: [
        "Lectures, seminars, and workshops on environment, agriculture, law, and education",
        "Promote healthy life awareness",
        "Practical implementation programs for environment protection",
      ],
    },
    {
      icon: Heart,
      title: "Health",
      items: [
        "Provide medical facilities and charitable hospitals",
        "Awareness on diseases, vaccination, epidemics, and hygiene",
        "Dispensary, gymkhana, and sports complex facilities",
        "Health camps, workshops, and ambulance services",
        "Programs for malnutrition, differently-abled, and women empowerment",
      ],
    },
    {
      icon: Globe,
      title: "Commonwealth Objectives",
      items: [
        "Tree plantation and conservation",
        "Eradication of superstition",
        "Woman empowerment",
        "Competitive exams and career guidance",
        "Agricultural development and water management",
        "Service in Environment, Education, and Agriculture sectors",
      ],
    },
  ];

  return (
    <section id="about" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Organization Info */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Who We Are
          </h2>
          <div className="max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-primary mb-2">
              Apulaki Social Foundation
            </h3>
            <p className="text-muted-foreground mb-4">
              Waghapur, Tal. Purandar, Dist. Pune - 412104
            </p>
            <p className="text-muted-foreground">
              <span className="font-medium text-foreground">Area of Operation:</span> Maharashtra
            </p>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-primary/10 rounded-xl p-6 md:p-8 mb-12 max-w-3xl mx-auto text-center">
          <p className="text-lg text-foreground leading-relaxed">
            We are a dedicated social organization working towards environment conservation, 
            quality education, social welfare, health awareness, and community development 
            across Maharashtra.
          </p>
        </div>

        {/* Objectives Grid */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Our Objectives & Functions
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {objectives.map((objective) => (
              <div
                key={objective.title}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <objective.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground">{objective.title}</h4>
                </div>
                <ul className="space-y-2">
                  {objective.items.map((item, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-secondary mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
