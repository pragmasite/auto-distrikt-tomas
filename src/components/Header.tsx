import { useState } from "react";
import { Link } from "react-router-dom";
import { Globe, Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const Header = () => {
  const { t, otherLang, otherLangPath } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link to="/" className="flex flex-col">
          <span
            className={`font-serif text-xl font-bold ${
              isScrolled ? "text-primary" : "text-white"
            }`}
          >
            AUTODISTRIKT
          </span>
          <span
            className={`text-xs tracking-widest ${
              isScrolled ? "text-muted-foreground" : "text-white/70"
            }`}
          >
            {t.nav.profession}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#uber-mich"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
          >
            {t.nav.aboutUs}
          </a>
          <a
            href="#leistungen"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
          >
            {t.nav.services}
          </a>
          <a
            href="#galerie"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
          >
            {t.nav.gallery}
          </a>
          <a
            href="#offnungszeiten"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
          >
            {t.nav.hours}
          </a>
          <a
            href="#kontakt"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
          >
            {t.nav.contact}
          </a>

          {/* Language Switcher */}
          <Link
            to={otherLangPath}
            className={`flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-primary ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
          >
            <Globe className="h-4 w-4" />
            {otherLang.toUpperCase()}
          </Link>

          <Button asChild>
            <a href="tel:+41-phone" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              {t.nav.call}
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-3">
          <Link
            to={otherLangPath}
            className={`flex items-center gap-1 text-sm ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
          >
            <Globe className="h-4 w-4" />
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 ${isScrolled ? "text-foreground" : "text-white"}`}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border">
          <nav className="container mx-auto px-4 py-4 space-y-3">
            <a
              href="#uber-mich"
              className="block text-sm font-medium text-foreground hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.aboutUs}
            </a>
            <a
              href="#leistungen"
              className="block text-sm font-medium text-foreground hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.services}
            </a>
            <a
              href="#galerie"
              className="block text-sm font-medium text-foreground hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.gallery}
            </a>
            <a
              href="#offnungszeiten"
              className="block text-sm font-medium text-foreground hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.hours}
            </a>
            <a
              href="#kontakt"
              className="block text-sm font-medium text-foreground hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.contact}
            </a>
            <Button asChild className="w-full">
              <a href="tel:+41-phone" className="flex items-center justify-center gap-2">
                <Phone className="h-4 w-4" />
                {t.nav.call}
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
