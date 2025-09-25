import { useState } from "react";
import { Search, Filter, MapPin, Clock, DollarSign, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/layout/Layout";

const Bourses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");

  const scholarships = [
    {
      title: "Bourse d'Excellence Erasmus+",
      country: "France",
      university: "Université de la Sorbonne",
      level: "Master",
      amount: "€1,500/mois",
      deadline: "31 Mars 2024",
      description: "Bourse pour étudiants excellents en sciences sociales et humanités.",
      requirements: ["Licence avec mention Bien", "IELTS 6.5+", "Lettre de motivation"],
      type: "Complète"
    },
    {
      title: "Bourse du Gouvernement Canadien",
      country: "Canada", 
      university: "Université McGill",
      level: "Doctorat",
      amount: "CAD 35,000/an",
      deadline: "15 Avril 2024",
      description: "Programme de bourses pour la recherche en sciences et technologie.",
      requirements: ["Master en sciences", "Publications", "Projet de recherche"],
      type: "Recherche"
    },
    {
      title: "Scholarship DAAD",
      country: "Allemagne",
      university: "Université Technique de Munich",
      level: "Master",
      amount: "€850/mois",
      deadline: "30 Avril 2024", 
      description: "Bourse pour étudiants en ingénierie et technologies.",
      requirements: ["Licence en ingénierie", "Allemand B2 ou Anglais C1", "CV détaillé"],
      type: "Partielle"
    },
    {
      title: "Commonwealth Scholarship",
      country: "Royaume-Uni",
      university: "Université d'Oxford",
      level: "Master",
      amount: "£15,000/an",
      deadline: "20 Mai 2024",
      description: "Bourse prestigieuse pour étudiants des pays du Commonwealth.",
      requirements: ["Licence First Class", "IELTS 7.0+", "Leadership démontré"],
      type: "Complète"
    },
    {
      title: "Bourse Chevening",
      country: "Royaume-Uni", 
      university: "London School of Economics",
      level: "Master",
      amount: "£30,000/an",
      deadline: "2 Novembre 2024",
      description: "Bourse du gouvernement britannique pour futurs leaders.",
      requirements: ["2 ans d'expérience professionnelle", "IELTS 6.5+", "Projet professionnel"],
      type: "Leadership"
    },
    {
      title: "Bourse Merit Australia",
      country: "Australie",
      university: "Université de Melbourne", 
      level: "Bachelor",
      amount: "AUD 20,000/an",
      deadline: "31 Janvier 2024",
      description: "Bourse au mérite pour étudiants exceptionnels en première année.",
      requirements: ["Baccalauréat avec mention", "IELTS 6.0+", "Activités extrascolaires"],
      type: "Mérite"
    }
  ];

  const countries = ["France", "Canada", "Allemagne", "Royaume-Uni", "Australie"];
  const levels = ["Bachelor", "Master", "Doctorat"];

  const filteredScholarships = scholarships.filter(scholarship => {
    const matchesSearch = scholarship.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         scholarship.university.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         scholarship.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCountry = selectedCountry === "all" || scholarship.country === selectedCountry;
    const matchesLevel = selectedLevel === "all" || scholarship.level === selectedLevel;
    
    return matchesSearch && matchesCountry && matchesLevel;
  });

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Complète": return "bg-green-500/10 text-green-700 border-green-500/20";
      case "Partielle": return "bg-blue-500/10 text-blue-700 border-blue-500/20";
      case "Recherche": return "bg-purple-500/10 text-purple-700 border-purple-500/20";
      case "Leadership": return "bg-orange-500/10 text-orange-700 border-orange-500/20";
      case "Mérite": return "bg-yellow-500/10 text-yellow-700 border-yellow-500/20";
      default: return "bg-gray-500/10 text-gray-700 border-gray-500/20";
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-accent text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Bourses & Concours
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Découvrez les meilleures opportunités de bourses d'études 
              dans le monde entier et réalisez vos rêves académiques.
            </p>
          </div>
        </div>
      </section>

      {/* Filtres et recherche */}
      <section className="py-8 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Rechercher une bourse, université, pays..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedCountry} onValueChange={setSelectedCountry}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Pays" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous les pays</SelectItem>
                {countries.map(country => (
                  <SelectItem key={country} value={country}>{country}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedLevel} onValueChange={setSelectedLevel}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Niveau" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous les niveaux</SelectItem>
                {levels.map(level => (
                  <SelectItem key={level} value={level}>{level}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Liste des bourses */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              {filteredScholarships.length} bourses disponibles
            </h2>
            <p className="text-muted-foreground">
              Trouvez la bourse qui correspond parfaitement à votre profil académique.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredScholarships.map((scholarship, index) => (
              <Card key={index} className="hover:shadow-brand transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge className={getTypeColor(scholarship.type)} variant="outline">
                      {scholarship.type}
                    </Badge>
                    <Badge variant="outline" className="text-accent border-accent/20">
                      {scholarship.level}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{scholarship.title}</CardTitle>
                  <CardDescription>
                    {scholarship.university}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    {scholarship.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 text-accent mr-2" />
                      <span>{scholarship.country}</span>
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="h-4 w-4 text-accent mr-2" />
                      <span>{scholarship.amount}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-accent mr-2" />
                      <span>Échéance: {scholarship.deadline}</span>
                    </div>
                    <div className="flex items-center">
                      <GraduationCap className="h-4 w-4 text-accent mr-2" />
                      <span>{scholarship.level}</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Prérequis :</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {scholarship.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2 mt-2 flex-shrink-0"></div>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-2 pt-4">
                    <Button className="flex-1" size="sm">
                      Postuler maintenant
                    </Button>
                    <Button variant="outline" size="sm">
                      Plus d'infos
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredScholarships.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-12 w-12 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Aucune bourse trouvée
              </h3>
              <p className="text-muted-foreground mb-6">
                Essayez de modifier vos critères de recherche pour voir plus de résultats.
              </p>
              <Button 
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCountry("all");
                  setSelectedLevel("all");
                }}
              >
                Réinitialiser les filtres
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Besoin d'aide pour votre candidature ?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Notre équipe d'experts vous accompagne dans toutes vos démarches de candidature 
            pour maximiser vos chances de succès.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="shadow-brand">
              Consultation gratuite
            </Button>
            <Button variant="outline" size="lg">
              Voir nos services
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Bourses;