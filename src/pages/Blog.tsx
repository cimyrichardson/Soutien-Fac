import { Calendar, User, ArrowRight, BookOpen, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/layout/Layout";

const Blog = () => {
  const articles = [
    {
      title: "Comment rédiger une lettre de motivation gagnante",
      excerpt: "Découvrez les techniques essentielles pour créer une lettre de motivation qui se démarque et convainc les admissions.",
      author: "Dr. Mamadou Diop",
      date: "15 Mars 2024",
      readTime: "5 min",
      category: "Admission",
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      featured: true
    },
    {
      title: "Top 10 des erreurs à éviter dans votre dossier d'admission",
      excerpt: "Les erreurs les plus courantes qui peuvent compromettre votre admission et comment les éviter.",
      author: "Aïssatou Kane",
      date: "10 Mars 2024",
      readTime: "7 min",
      category: "Conseils",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Guide complet pour obtenir votre visa étudiant",
      excerpt: "Tout ce que vous devez savoir sur les procédures de visa étudiant, documents requis et conseils pratiques.",
      author: "Ibrahima Sarr",
      date: "5 Mars 2024",
      readTime: "10 min",
      category: "Visa",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Les meilleures bourses d'études pour 2024",
      excerpt: "Notre sélection des bourses les plus attractives et accessibles pour cette année académique.",
      author: "Aïssatou Kane", 
      date: "28 Février 2024",
      readTime: "6 min",
      category: "Bourses",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Préparer son entretien d'admission : les clés du succès",
      excerpt: "Techniques et conseils pour briller lors de votre entretien d'admission universitaire.",
      author: "Dr. Mamadou Diop",
      date: "20 Février 2024", 
      readTime: "8 min",
      category: "Admission",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Étudier à l'étranger : gérer le choc culturel",
      excerpt: "Comment s'adapter rapidement à un nouvel environnement culturel et académique.",
      author: "Équipe Soutien-Fac",
      date: "15 Février 2024",
      readTime: "5 min",
      category: "Vie étudiante",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  const categories = ["Tous", "Admission", "Bourses", "Visa", "Conseils", "Vie étudiante"];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Admission": return "bg-blue-500/10 text-blue-700 border-blue-500/20";
      case "Bourses": return "bg-green-500/10 text-green-700 border-green-500/20";
      case "Visa": return "bg-purple-500/10 text-purple-700 border-purple-500/20";
      case "Conseils": return "bg-orange-500/10 text-orange-700 border-orange-500/20";
      case "Vie étudiante": return "bg-pink-500/10 text-pink-700 border-pink-500/20";
      default: return "bg-gray-500/10 text-gray-700 border-gray-500/20";
    }
  };

  const featuredArticle = articles.find(article => article.featured);
  const regularArticles = articles.filter(article => !article.featured);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-accent text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Blog & Ressources
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Conseils d'experts, guides pratiques et ressources pour réussir 
              votre parcours académique international.
            </p>
          </div>
        </div>
      </section>

      {/* Catégories */}
      <section className="py-8 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                size="sm"
                className="hover:bg-accent hover:text-accent-foreground"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Article Featured */}
      {featuredArticle && (
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="overflow-hidden shadow-brand">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative">
                  <img 
                    src={featuredArticle.image} 
                    alt={featuredArticle.title}
                    className="w-full h-[300px] lg:h-full object-cover"
                  />
                  <Badge 
                    className={`absolute top-4 left-4 ${getCategoryColor(featuredArticle.category)}`}
                    variant="outline"
                  >
                    {featuredArticle.category}
                  </Badge>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="mb-4">
                    <Badge variant="secondary" className="mb-4">Article Featured</Badge>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                      {featuredArticle.title}
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                      {featuredArticle.excerpt}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-2" />
                        {featuredArticle.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {featuredArticle.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        {featuredArticle.readTime}
                      </div>
                    </div>
                  </div>
                  
                  <Button size="lg" className="self-start">
                    Lire l'article
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Derniers articles</h2>
            <p className="text-muted-foreground">
              Découvrez nos conseils d'experts et guides pratiques pour réussir votre parcours.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-brand transition-shadow duration-300">
                <div className="relative">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <Badge 
                    className={`absolute top-3 left-3 ${getCategoryColor(article.category)}`}
                    variant="outline"
                  >
                    {article.category}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg leading-tight hover:text-accent transition-colors cursor-pointer">
                    {article.title}
                  </CardTitle>
                  <CardDescription>
                    {article.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {article.author}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {article.readTime}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      {article.date}
                    </div>
                    <Button variant="ghost" size="sm" className="hover:text-accent">
                      Lire la suite
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-2xl mx-auto text-center shadow-brand">
            <CardHeader>
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-accent-foreground" />
              </div>
              <CardTitle className="text-2xl">Restez informé(e)</CardTitle>
              <CardDescription className="text-lg">
                Recevez nos derniers conseils et actualités directement dans votre boîte mail.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Votre adresse email"
                  className="flex-1 px-4 py-2 border border-input rounded-md bg-background"
                />
                <Button>S'abonner</Button>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Pas de spam, désabonnement à tout moment.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;