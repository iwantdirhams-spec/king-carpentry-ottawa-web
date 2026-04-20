import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Sarah M.",
    role: "Custom Home, Kanata",
    text: "From day one, the King Carpentry team treated our build like it was their own home. They navigated permits with the City and coordinated with our architect flawlessly. The craftsmanship is genuinely remarkable.",
  },
  {
    name: "David & Anna L.",
    role: "Full Renovation, Westboro",
    text: "We interviewed five contractors. King stood out immediately — honest, detailed, and refused to cut corners. Our renovation came in on time and the finish work is something we're proud to show off.",
  },
  {
    name: "Michael T.",
    role: "Custom Build, Manotick",
    text: "Truly the most professional crew we've worked with. Polite, tidy, and incredibly skilled. They solved every issue before it became a problem. We'd hire them again in a heartbeat.",
  },
];

const Reviews = () => (
  <section id="reviews" className="py-24 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
    <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_30%_20%,_hsl(var(--accent))_0%,_transparent_50%)]" />
    <div className="container-tight relative">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-xs uppercase tracking-[0.25em] text-accent font-semibold mb-3">What clients say</p>
        <h2 className="font-display text-4xl md:text-5xl mb-5 leading-tight">
          Trusted by Ottawa homeowners who expect the best.
        </h2>
        <div className="flex items-center justify-center gap-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-accent text-accent" />
            ))}
          </div>
          <span className="text-primary-foreground/80 text-sm">5.0 average rating</span>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((r) => (
          <article
            key={r.name}
            className="relative p-8 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 backdrop-blur hover:border-accent/40 transition-smooth"
          >
            <Quote className="absolute top-6 right-6 w-8 h-8 text-accent/30" />
            <div className="flex mb-5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-primary-foreground/90 leading-relaxed mb-6 text-sm">"{r.text}"</p>
            <div className="pt-5 border-t border-primary-foreground/10">
              <p className="font-display text-lg">{r.name}</p>
              <p className="text-xs text-primary-foreground/60 tracking-wide uppercase mt-1">{r.role}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Reviews;
