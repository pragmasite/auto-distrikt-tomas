import { Link } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-2">AUTODISTRIKT</h3>
            <p className="text-sm opacity-75">{t.footer.tagline}</p>
            <p className="text-sm opacity-75 mt-2">{t.footer.description}</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-serif font-bold mb-4">{t.footer.navigation}</h4>
            <nav className="space-y-2 text-sm">
              <a
                href="#uber-mich"
                className="opacity-75 hover:opacity-100 transition-opacity block"
              >
                {t.nav.aboutUs}
              </a>
              <a
                href="#leistungen"
                className="opacity-75 hover:opacity-100 transition-opacity block"
              >
                {t.nav.services}
              </a>
              <a
                href="#galerie"
                className="opacity-75 hover:opacity-100 transition-opacity block"
              >
                {t.nav.gallery}
              </a>
              <a
                href="#offnungszeiten"
                className="opacity-75 hover:opacity-100 transition-opacity block"
              >
                {t.nav.hours}
              </a>
              <a
                href="#kontakt"
                className="opacity-75 hover:opacity-100 transition-opacity block"
              >
                {t.nav.contact}
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-bold mb-4">{t.nav.contact}</h4>
            <div className="space-y-2 text-sm">
              <a
                href="tel:+41716441488"
                className="opacity-75 hover:opacity-100 transition-opacity block"
              >
                +41 71 644 14 88
              </a>
              <a
                href="mailto:info@autodistrikt.ch"
                className="opacity-75 hover:opacity-100 transition-opacity block"
              >
                info@autodistrikt.ch
              </a>
              <p className="opacity-75">Hauptstrasse 66, 8586 Erlen</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex items-center justify-between text-sm opacity-75">
          <p>
            © {currentYear} AUTODISTRIKT. {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
