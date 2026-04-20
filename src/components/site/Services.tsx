import { Home, Hammer, FileCheck2, Ruler, Layers, Wrench } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Custom Home Builds",
    desc: "From foundation to finishing touches — bespoke homes designed and built to your exact vision.",
  },
  {
    icon: Layers,
    title: "Major Renovations",
    desc: "Whole-home remodels and custom upgrades where design, precision, and finish quality matter most.",
  },
  {
    icon: Ruler,
    title: "Architect & Designer Coordination",
    desc: "We collaborate seamlessly with your design professionals to keep vision and execution aligned.",
  },
  {
    icon: FileCheck2,
    title: "Permits & City Approvals",
    desc: "We handle the entire permit process with the City of Ottawa so you don't have to.",
  },
  {
    icon: Wrench,
    title: "Structural Work",
    desc: "Sourcing and coordinating trusses, framing, and structural materials with trusted suppliers.",
  },
  {
    icon: Hammer,
    title: "Custom Carpentry & Millwork",
    desc: "Built-ins, trim, cabinetry, and bespoke woodwork executed with old-school craftsmanship.",
  },
];

const Services = () => (
  <section id="services" className="py-24 md:py-32 bg-background">
    <div className="container-tight">
      <div className="max-w-2xl mb-16">
        <p className="text-xs uppercase tracking-[0.25em] text-accent font-semibold mb-3">What we do</p>
        <h2 className="font-display text-4xl md:text-5xl mb-5 leading-tight">
          End-to-end carpentry & construction services
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          One trusted team for the entire journey — from blueprints and permits to the last piece of trim.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(({ icon: Icon, title, desc }) => (
          <article
            key={title}
            className="group p-7 rounded-xl bg-card border border-border hover:border-accent/40 hover:shadow-elegant transition-smooth"
          >
            <div className="w-12 h-12 rounded-lg bg-gradient-gold flex items-center justify-center mb-5 group-hover:scale-110 transition-smooth">
              <Icon className="w-6 h-6 text-gold-foreground" strokeWidth={1.75} />
            </div>
            <h3 className="font-display text-xl mb-2">{title}</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">{desc}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
