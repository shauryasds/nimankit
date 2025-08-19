import { Mail, MapPin, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="text-3xl font-bold text-gradient mb-4">
                NimankIT
              </div>
              <p className="text-foreground-secondary mb-6 leading-relaxed">
                Leading AI services agency specializing in intelligent chatbots, business automation, 
                and data-driven solutions. Transforming businesses with cutting-edge artificial intelligence.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="text-foreground-secondary">info@nimankit.in</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5" />
                  <span className="text-foreground-secondary">
                    105, Chaubepur, Kanpur<br />
                    Uttar Pradesh, India
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Quick Links
              </h3>
              <div className="space-y-3">
                <button
                  onClick={() => scrollToSection('home')}
                  className="block text-foreground-secondary hover:text-primary transition-colors duration-300"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="block text-foreground-secondary hover:text-primary transition-colors duration-300"
                >
                  About Us
                </button>
                <button
                  onClick={() => scrollToSection('services')}
                  className="block text-foreground-secondary hover:text-primary transition-colors duration-300"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="block text-foreground-secondary hover:text-primary transition-colors duration-300"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="block text-foreground-secondary hover:text-primary transition-colors duration-300"
                >
                  Contact
                </button>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Our Services
              </h3>
              <div className="space-y-3">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="block text-foreground-secondary hover:text-primary transition-colors duration-300"
                >
                  AI Chatbots
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="block text-foreground-secondary hover:text-primary transition-colors duration-300"
                >
                  Business Automation
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="block text-foreground-secondary hover:text-primary transition-colors duration-300"
                >
                  AI-Powered Websites
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="block text-foreground-secondary hover:text-primary transition-colors duration-300"
                >
                  Data-Driven Solutions
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="block text-foreground-secondary hover:text-primary transition-colors duration-300"
                >
                  Machine Learning
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-border mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-foreground-secondary text-center md:text-left">
                © {currentYear} NimankIT. All rights reserved.
              </div>
              
              <div className="flex items-center gap-6 text-sm">
                <span className="text-foreground-secondary">Made with ❤️ in India</span>
              </div>
            </div>
          </div>

          {/* Founder Credit */}
          <div className="text-center mt-6 pt-6 border-t border-border">
            <p className="text-foreground-secondary">
              Founded and led by <span className="text-primary font-semibold">Shaurya Deep Shukla</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;