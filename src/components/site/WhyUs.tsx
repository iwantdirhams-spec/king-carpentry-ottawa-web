import { Check } from "lucide-react";
import gallery3 from "@/assets/gallery-3.jpg";

const reasons = [
  {
    title: "We treat your project like our own",
    desc: "Every decision — big or small — is made with the same care we'd put into our own home.",
  },
  {
    title: "No shortcuts. Ever.",
    desc: "We do things the right way the first time, even when it takes longer or costs us more.",
  },
  {
    title: "Permits & problem-solving handled",
    desc: "City of Ottawa permits, supply delays, design tweaks — we handle the friction so you don't have to.",
  },
  {
    title: "Architect-friendly collaboration",
    desc: "We speak the language of designers and architects, keeping your vision intact through execution.",
  },
  {
    title: "Polite, courteous crew on-site",
    desc: "A respectful, tidy, professional team that makes the build experience genuinely enjoyable.",
  },
  {
    title: "Hands-on involvement",
    desc: "You'll never feel left in the dark — we communicate clearly from planning to final walk-through.",
  },
];

const WhyUs = () => (
  <section id="why-us" className="py-24 md:py-32 bg-secondary/40">
    <div className="container-tight">
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        <div className="relative order-2 lg:order-1">
          <img
            src={gallery3}
            alt="Custom built-in millwork showcasing King Carpentry & Design craftsmanship"
            loading="lazy"
            width={1024}
            height={1024}
            className="rounded-xl shadow-elegant w-full h-full object-cover aspect-[4/5]"
          />
          <div className="absolute -bottom-6 -right-6 bg-card rounded-xl p-6 shadow-elegant border border-border max-w-xs hidden md:block">
            <p className="font-display text-3xl text-gradient-gold">100%</p>
            <p className="text-sm text-muted-foreground mt-1">
              Of clients say they'd hire us again — and refer us to friends.
            </p>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="text-xs uppercase tracking-[0.25em] text-accent font-semibold mb-3">Why King Carpentry</p>
          <h2 className="font-display text-4xl md:text-5xl mb-6 leading-tight">
            Quality, integrity, and a team that genuinely cares.
          </h2>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            We're not the cheapest — and we're proud of that. Our clients hire us because they want the project done properly, by people who treat it like it matters.
          </p>

          <ul className="space-y-5">
            {reasons.map(({ title, desc }) => (
              <li key={title} className="flex gap-4">
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-gold flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-gold-foreground" strokeWidth={3} />
                </div>
                <div>
                  <h3 className="font-display text-lg mb-1">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default WhyUs;
