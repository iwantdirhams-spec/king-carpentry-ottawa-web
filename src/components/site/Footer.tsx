const Footer = () => (
  <footer className="bg-primary text-primary-foreground/70 py-10 border-t border-primary-foreground/10">
    <div className="container-tight flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
      <p className="font-display text-lg text-primary-foreground">
        King <span className="text-gradient-gold">Carpentry & Design</span>
      </p>
      <p>© {new Date().getFullYear()} King Carpentry & Design. Ottawa, Ontario.</p>
    </div>
  </footer>
);

export default Footer;
