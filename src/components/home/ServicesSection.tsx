import { Link } from "react-router-dom";
import { 
  GraduationCap, 
  DollarSign, 
  FileText, 
  Award, 
  BookOpen,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: GraduationCap,
      title: "Admission Universitaire",
      description: "Accompagnement personnalisé pour votre inscription dans les meilleures universités.",
      features: ["Sélection d'universités", "Constitution de dossier", "Suivi personnalisé"]
    },
    {
      icon: DollarSign,
      title: "Bourses d'Études",
      description: "Découvrez et postulez aux bourses qui correspondent à votre profil académique.",
      features: ["Recherche ciblée", "Aide à la candidature", "Suivi des dossiers"]
    },
    {
      icon: FileText,
      title: "Visa Étudiant",
      description: "Assistance complète pour vos démarches de visa et documents de voyage.",
      features: ["Préparation dossier", "Simulation entretien", "Suivi procédures"]
    },
    {
      icon: Award,
      title: "Évaluation Diplômes",
      description: "Validation et reconnaissance de vos diplômes pour l'international.",
      features: ["Analyse de diplômes", "Équivalences", "Certification"]
    },
    {
      icon: BookOpen,
      title: "Préparation Pré-Fac",
      description: "Préparez-vous aux concours et examens d'entrée avec nos experts.",
      features: ["Cours de soutien", "Tests blancs", "Méthodologie"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nos Services d'Accompagnement
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Une gamme complète de services pour vous accompagner à chaque étape 
            de votre parcours académique et professionnel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-brand transition-all duration-300 hover:-translate-y-2"
              >
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <Icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-center">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="shadow-brand">
            <Link to="/services">
              Voir tous nos services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;