import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
];

const Header = () => (
  <header className="absolute top-0 inset-x-0 z-30">
    <div className="container-tight flex items-center justify-between py-5">
      <a href="#top" className="flex items-center gap-2 text-background">
        <span className="font-display text-xl md:text-2xl tracking-wide">
          King <span className="text-gradient-gold">Carpentry</span>
        </span>
      </a>
      <nav className="hidden md:flex items-center gap-8">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="text-sm text-background/80 hover:text-accent transition-colors tracking-wide"
          >
            {l.label}
          </a>
        ))}
      </nav>
      <Button asChild variant="hero" size="sm">
        <a href="tel:+16135550199">
          <Phone className="w-4 h-4" />
          <span className="hidden sm:inline">Call Now</span>
        </a>
      </Button>
    </div>
  </header>
);

export default Header;
