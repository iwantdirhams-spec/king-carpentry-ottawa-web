import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import heroImg from "@/assets/hero.jpg";

const FinalCTA = () => (
  <section className="relative py-24 md:py-32 overflow-hidden">
    <img
      src={heroImg}
      alt=""
      aria-hidden="true"
      loading="lazy"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-hero" />

    <div className="relative container-tight text-center text-background">
      <p className="text-xs uppercase tracking-[0.3em] text-accent font-semibold mb-5">Let's build it right</p>
      <h2 className="font-display text-4xl md:text-6xl leading-[1.05] mb-6 max-w-3xl mx-auto">
        Ready to start the home you've always wanted?
      </h2>
      <p className="text-lg md:text-xl text-background/85 max-w-2xl mx-auto mb-10 leading-relaxed">
        Book a free, no-pressure consultation. We'll walk through your vision, timelines, and what it takes to bring it to life — properly.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button
          variant="hero"
          size="xl"
          onClick={() => document.getElementById("top")?.scrollIntoView({ behavior: "smooth" })}
        >
          Get My Free Consultation
          <ArrowRight className="w-5 h-5" />
        </Button>
        <Button asChild variant="outline-light" size="xl">
          <a href="tel:+16135550199">
            <Phone className="w-5 h-5" />
            Call Us Directly
          </a>
        </Button>
      </div>

      <p className="mt-10 text-sm text-background/70">
        Serving Ottawa & surrounding areas · Licensed & Insured · Response within 24h
      </p>
    </div>
  </section>
);

export default FinalCTA;
