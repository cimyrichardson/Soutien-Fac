import { 
  GraduationCap, 
  DollarSign, 
  FileText, 
  Award, 
  BookOpen,
  CheckCircle,
  ArrowRight,
  Search
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";

const Services = () => {
  const services = [
    {
      icon: GraduationCap,
      title: "Admission Universitaire",
      description: "Accompagnement complet pour votre admission dans les meilleures universités internationales.",
      features: [
        "Conseil en orientation académique",
        "Sélection d'universités adaptées à votre profil",
        "Constitution et optimisation du dossier",
        "Préparation aux entretiens d'admission",
        "Suivi personnalisé jusqu'à l'acceptation"
      ],
      process: "Nous analysons votre profil, identifions les meilleures opportunités et vous accompagnons dans chaque étape du processus d'admission."
    },
    {
      icon: DollarSign,
      title: "Bourses d'Études",
      description: "Trouvez et obtenez les bourses qui correspondent parfaitement à votre profil académique.",
      features: [
        "Base de données de 100+ bourses disponibles",
        "Recherche personnalisée selon votre profil",
        "Aide à la rédaction de lettres de motivation",
        "Préparation aux entretiens de sélection",
        "Suivi des candidatures et résultats"
      ],
      process: "Notre équipe identifie les bourses adaptées à votre situation et vous accompagne dans toutes vos candidatures."
    },
    {
      icon: FileText,
      title: "Visa Étudiant",
      description: "Assistance complète pour toutes vos démarches administratives et visa étudiant.",
      features: [
        "Préparation du dossier de visa",
        "Vérification des documents requis",
        "Simulation d'entretien consulaire",
        "Conseils pour le financement",
        "Suivi jusqu'à l'obtention du visa"
      ],
      process: "Nous vous guidons pas à pas dans les procédures consulaires pour maximiser vos chances d'obtention."
    },
    {
      icon: Award,
      title: "Évaluation de Diplômes",
      description: "Validation et reconnaissance de vos diplômes pour l'international.",
      features: [
        "Analyse de vos diplômes existants",
        "Recherche d'équivalences internationales",
        "Assistance pour la certification",
        "Conseil en complément de formation",
        "Dossier de reconnaissance officielle"
      ],
      process: "Nous évaluons vos acquis et vous aidons à obtenir les reconnaissances nécessaires pour vos projets."
    },
    {
      icon: BookOpen,
      title: "Préparation Pré-Fac",
      description: "Préparez-vous efficacement aux concours et examens d'entrée avec nos experts.",
      features: [
        "Cours de renforcement par matière",
        "Tests blancs et examens simulés",
        "Méthodologie et techniques d'examen",
        "Suivi personnalisé des progrès",
        "Coaching mental et préparation psychologique"
      ],
      process: "Notre programme de préparation vous donne tous les outils pour réussir vos concours d'entrée."
    },
    {
      icon: Search,
      title: "Recherche de Conférences",
      description: "Identification et mise en relation avec des conférences académiques et professionnelles.",
      features: [
        "Recherche ciblée par domaine d'étude",
        "Analyse des critères d'éligibilité",
        "Aide à la préparation de propositions",
        "Accompagnement dans les démarches",
        "Suivi des candidatures et networking"
      ],
      process: "Nous vous aidons à identifier les meilleures conférences dans votre domaine et vous accompagnons pour maximiser vos opportunités."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-accent text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nos Services d'Accompagnement
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Une gamme complète de services personnalisés pour vous accompagner 
              à chaque étape de votre parcours académique international.
            </p>
          </div>
        </div>
      </section>

      {/* Services détaillés */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={index} 
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    !isEven ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  <div className={!isEven ? 'lg:col-start-2' : ''}>
                    <Card className="h-full border-0 shadow-brand">
                      <CardHeader>
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center">
                            <Icon className="h-8 w-8 text-accent" />
                          </div>
                          <div>
                            <CardTitle className="text-2xl">{service.title}</CardTitle>
                          </div>
                        </div>
                        <CardDescription className="text-lg">
                          {service.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-foreground mb-3">Ce que nous proposons :</h4>
                          <ul className="space-y-2">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start">
                                <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                                <span className="text-muted-foreground">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-secondary/50 p-4 rounded-lg">
                          <h4 className="font-semibold text-foreground mb-2">Notre approche :</h4>
                          <p className="text-muted-foreground">{service.process}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className={!isEven ? 'lg:col-start-1' : ''}>
                    <img 
                      src={`https://images.unsplash.com/photo-${
                        index % 2 === 0 ? '1523240795612-9a054b0db644' : '1434030216411-0b793f4b4173'
                      }?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                      alt={service.title}
                      className="rounded-lg shadow-xl w-full h-[400px] object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Prêt à commencer votre parcours ?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour une consultation gratuite et découvrez 
            comment nous pouvons vous aider à atteindre vos objectifs académiques.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="shadow-brand">
              <Link to="/contact">
                Consultation gratuite
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/bourses">
                Voir les bourses disponibles
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;