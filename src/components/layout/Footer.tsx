import { Link } from "react-router-dom";
import { 
  GraduationCap, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin,
  MessageCircle,
  Globe
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <img 
                src="/soutien-fac-logo.jpg" 
                alt="Soutien-Fac Logo" 
                className="h-10 w-auto border border-white/20 rounded-md"
              />
            </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Depuis 2019, Soutien-Fac accompagne les étudiants dans leur parcours académique 
              avec expertise, solidarité et engagement.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Nos Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Admission Universitaire</Link></li>
              <li><Link to="/bourses" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Bourses d'Études</Link></li>
              <li><Link to="/services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Visa Étudiant</Link></li>
              <li><Link to="/services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Évaluation de Diplômes</Link></li>
              <li><Link to="/services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Préparation Pré-Fac</Link></li>
            </ul>
          </div>

          {/* Liens utiles */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Liens Utiles</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">À propos</Link></li>
              <li><Link to="/blog" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Blog & Conseils</Link></li>
              <li><Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Témoignages</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-primary-foreground/80">47 05 8219</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-primary-foreground/80">soutienfac19@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageCircle className="h-4 w-4 text-accent" />
                <a href="https://wa.me/50947058219" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  WhatsApp officiel
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-accent" />
                <span className="text-primary-foreground/80">21 Boulevard Pasteur, Saint-Priest, France</span>
              </div>
            </div>
          </div>
        </div>

        {/* Réseaux sociaux et copyright */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="https://web.facebook.com/SoutienFac" className="text-primary-foreground/60 hover:text-accent transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
          <p className="text-primary-foreground/60 text-sm">
            © 2025 Soutien-Fac. Tous droits réservés.
          </p>
          <p>
            <Link to="/privacy" className="text-primary-foreground/60 hover:text-accent transition-colors">
              Politique de confidentialité 
            </Link>
              {" "}| {" "} 
            <Link to="/terms" className="text-primary-foreground/60 hover:text-accent transition-colors">
              Conditions d'utilisation
            </Link>
          </p>
          <p className="flex items-center text-sm text-muted-foreground space-x-1">
            <Globe className="h-5 w-5"/>
            <a 
              href="https://richardsonclifordcimy.netlify.app/" 
              className="text-primary-foreground/60 hover:text-accent transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              >
                Credit Web
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;