import { Users, Award, Heart, Target, Calendar, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Solidarité",
      description: "Nous croyons en l'entraide et l'accompagnement bienveillant de chaque étudiant."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Nous visons l'excellence dans tous nos services pour garantir votre réussite."
    },
    {
      icon: Target,
      title: "Accompagnement",
      description: "Un suivi personnalisé et adapté aux besoins spécifiques de chaque étudiant."
    },
    {
      icon: Users,
      title: "Indépendance",
      description: "Nous vous donnons les outils pour devenir autonome dans vos démarches futures."
    }
  ];

  const stats = [
    { number: "100+", label: "Étudiants accompagnés", icon: Users },
    { number: "85%", label: "Taux de réussite", icon: TrendingUp },
    { number: "10+", label: "Universités partenaires", icon: Award },
    { number: "6", label: "Années d'expérience", icon: Calendar }
  ];

  const team = [
    {
      name: "Lorem Ipsum",
      role: "Directeur & Fondateur",
      description: "Expert en orientation académique avec 15 ans d'expérience dans l'enseignement supérieur.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Lorem Ipsum",
      role: "Responsable Bourses & Admissions",
      description: "Spécialiste des programmes de bourses internationales et des procédures d'admission.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Lorem Ipsum",
      role: "Conseiller Visa & Immigration",
      description: "Expert en procédures consulaires et réglementations d'immigration étudiante.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-accent text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              À propos de Soutien-Fac
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Depuis 2019, nous accompagnons les étudiants dans la réalisation 
              de leurs rêves académiques à travers le monde.
            </p>
          </div>
        </div>
      </section>

      {/* Notre Histoire */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Notre Histoire
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Fondée en 2019 par une équipe de professionnels passionnés par l'éducation, 
                  Soutien-Fac est née d'un constat simple : trop d'étudiants talentueux 
                  renoncent à leurs rêves académiques par manque d'accompagnement et d'information.
                </p>
                <p>
                  Notre mission est de démocratiser l'accès à l'enseignement supérieur international 
                  en offrant un accompagnement personnalisé, des conseils d'experts et un suivi 
                  continu à chaque étudiant qui nous fait confiance.
                </p>
                <p>
                  Aujourd'hui, nous sommes fiers d'avoir aidé plus de 100 étudiants à réaliser 
                  leurs projets académiques dans les meilleures universités du monde.
                </p>
              </div>
            </div>
            <div>
              <img 
                src="/logo soutien fac.jpg" 
                alt="Soutien-Fac Logo"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nos Valeurs
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Les principes qui guident notre action au quotidien et notre engagement 
              envers chaque étudiant.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center hover:shadow-brand transition-shadow duration-300">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-4">
                      <Icon className="h-8 w-8 text-accent-foreground" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Statistiques */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nos Résultats en Chiffres
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Des chiffres qui témoignent de notre engagement et de la qualité de notre accompagnement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="mx-auto w-20 h-20 bg-secondary rounded-full flex items-center justify-center mb-4">
                    <Icon className="h-10 w-10 text-accent" />
                  </div>
                  <div className="text-4xl font-bold text-accent mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Notre Équipe */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Notre Équipe
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Des professionnels expérimentés et passionnés, dédiés à votre réussite académique.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-brand transition-shadow duration-300">
                <CardHeader>
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
                  />
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-accent font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;