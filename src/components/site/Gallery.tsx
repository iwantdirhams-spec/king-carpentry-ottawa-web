import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const items = [
  { src: g2, alt: "Custom-built modern farmhouse exterior in Ottawa", tag: "Custom Build", span: "lg:col-span-2 lg:row-span-2" },
  { src: g1, alt: "White oak custom kitchen with quartz countertops", tag: "Kitchen", span: "" },
  { src: g6, alt: "Vaulted wood ceiling open-concept living room", tag: "Renovation", span: "" },
  { src: g4, alt: "Luxury bathroom renovation with marble and custom vanity", tag: "Bathroom", span: "" },
  { src: g5, alt: "Custom home framing and trusses under construction", tag: "Framing", span: "" },
  { src: g3, alt: "Custom built-in shelving and millwork detail", tag: "Millwork", span: "lg:col-span-2" },
];

const Gallery = () => (
  <section id="gallery" className="py-24 md:py-32 bg-background">
    <div className="container-tight">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
        <div className="max-w-xl">
          <p className="text-xs uppercase tracking-[0.25em] text-accent font-semibold mb-3">Our work</p>
          <h2 className="font-display text-4xl md:text-5xl leading-tight">
            A portfolio built on craftsmanship.
          </h2>
        </div>
        <p className="text-muted-foreground max-w-md">
          A glimpse at the homes, kitchens, and custom projects we've built across the Ottawa area.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[220px] md:auto-rows-[280px] gap-4">
        {items.map((item, i) => (
          <figure
            key={i}
            className={`relative overflow-hidden rounded-xl group cursor-pointer ${item.span}`}
          >
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy"
              width={1024}
              height={1024}
              className="w-full h-full object-cover transition-smooth group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
            <figcaption className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-background/90 backdrop-blur text-xs font-semibold text-foreground tracking-wide">
              {item.tag}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);

export default Gallery;
