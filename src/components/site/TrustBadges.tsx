import { ShieldCheck, Award, Hammer, Users, Clock, BadgeCheck } from "lucide-react";

const badges = [
  { icon: ShieldCheck, label: "Licensed & Insured" },
  { icon: BadgeCheck, label: "City of Ottawa Permits" },
  { icon: Award, label: "5-Star Rated" },
  { icon: Hammer, label: "15+ Years Craftsmanship" },
  { icon: Users, label: "100+ Homes Built" },
  { icon: Clock, label: "On-Time Delivery" },
];

const TrustBadges = () => (
  <section className="bg-card border-y border-border">
    <div className="container-tight py-10">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {badges.map(({ icon: Icon, label }) => (
          <div key={label} className="flex flex-col items-center text-center gap-2">
            <Icon className="w-7 h-7 text-accent" strokeWidth={1.5} />
            <span className="text-xs md:text-sm font-medium text-muted-foreground tracking-wide">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBadges;
