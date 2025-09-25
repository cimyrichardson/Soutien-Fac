import { Link } from "react-router-dom";
import { ArrowRight, Users, Trophy, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary to-accent min-h-[600px] flex items-center text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-white/5 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:30px_30px]"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Votre succès académique 
                <span className="text-accent"> commence ici</span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Depuis 2019, Soutien-Fac accompagne les étudiants dans leurs projets académiques : 
                admission universitaire, bourses d'études, visa étudiant et bien plus.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-accent"
              >
                <Link to="/bourses">
                  Découvrir les bourses
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                asChild
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 hover:text-white"
              >
                <Link to="/contact">
                  Nous contacter
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <div className="text-2xl font-bold">100+</div>
                <div className="text-white/80 text-sm">Étudiants accompagnés</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Trophy className="h-8 w-8 text-accent" />
                </div>
                <div className="text-2xl font-bold">85%</div>
                <div className="text-white/80 text-sm">Taux de réussite</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <BookOpen className="h-8 w-8 text-accent" />
                </div>
                <div className="text-2xl font-bold">6</div>
                <div className="text-white/80 text-sm">Années d'expérience</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="/logo soutien fac.jpg" 
                // src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Soutien-Fac Logo" 
                className="rounded-lg shadow-2xl "
              />
            </div>
            {/* Floating cards */}
            <div className="absolute -top-4 -left-4 bg-white text-primary p-4 rounded-lg shadow-lg transform rotate-3">
              <div className="text-2xl font-bold text-accent">100+</div>
              <div className="text-sm">Bourses disponibles</div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground p-4 rounded-lg shadow-lg transform -rotate-3">
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-sm">Support disponible</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;