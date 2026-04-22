import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Star, Phone, MapPin } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { supabase } from "@/integrations/supabase/client";

const Hero = () => {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const projectType = String(data.get("project") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name || name.length > 100) return toast({ title: "Please enter your name." });
    if (!/^\S+@\S+\.\S+$/.test(email) || email.length > 255) return toast({ title: "Please enter a valid email." });
    if (!phone || phone.length > 30) return toast({ title: "Please enter a valid phone number." });
    if (!projectType) return toast({ title: "Please select a project type." });

    setSubmitting(true);
    const { error } = await supabase.from("contact_submissions").insert({
      name,
      email,
      phone,
      project_type: projectType,
      message: message || null,
    });
    setSubmitting(false);

    if (error) {
      console.error("Contact form submission error:", error);
      return toast({
        title: "Something went wrong",
        description: "Please try again or call us directly.",
        variant: "destructive",
      });
    }

    form.reset();
    toast({
      title: "Request received",
      description: "Thanks! A King Carpentry specialist will call you within 24 hours.",
    });
  };

  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">
      <img
        src={heroImg}
        alt="Custom-built luxury home interior in Ottawa with warm wood beams"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-hero" />

      <div className="relative container-tight w-full py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Copy */}
          <div className="text-background animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-background/30 bg-background/10 backdrop-blur-sm text-xs uppercase tracking-[0.2em] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              Ottawa's Custom Home Builders
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6">
              Built the <span className="text-gradient-gold italic">Right Way.</span><br />
              Crafted to Last a Lifetime.
            </h1>
            <p className="text-lg md:text-xl text-background/85 max-w-xl mb-8 leading-relaxed">
              From custom homes to full renovations — King Carpentry & Design partners with Ottawa homeowners who refuse to cut corners. Permits, design, and craftsmanship handled end-to-end.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-background/80">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <span>5.0 Google rating</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent" />
                <span>Serving Greater Ottawa</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:justify-self-end w-full max-w-md animate-fade-up" style={{ animationDelay: "0.15s" }}>
            <div className="bg-card text-card-foreground rounded-xl p-7 md:p-8 shadow-elegant border border-border">
              <div className="mb-5">
                <h2 className="font-display text-2xl mb-1">Get Your Free Consultation</h2>
                <p className="text-sm text-muted-foreground">No pressure. Just expert advice on your project.</p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-3">
                <Input name="name" placeholder="Full name" maxLength={100} required aria-label="Full name" />
                <Input name="email" type="email" placeholder="Email address" maxLength={255} required aria-label="Email" />
                <Input name="phone" type="tel" placeholder="Phone number" maxLength={30} required aria-label="Phone number" />
                <select
                  name="project"
                  className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>Project type</option>
                  <option>Custom home build</option>
                  <option>Major renovation</option>
                  <option>Addition / extension</option>
                  <option>Custom carpentry / millwork</option>
                  <option>Other</option>
                </select>
                <Textarea
                  name="message"
                  placeholder="Tell us a little about your project (optional)"
                  rows={3}
                  maxLength={1000}
                  aria-label="Project details"
                />
                <Button type="submit" variant="hero" size="lg" className="w-full" disabled={submitting}>
                  {submitting ? "Sending..." : "Request My Free Quote"}
                </Button>
                <p className="flex items-center justify-center gap-2 text-xs text-muted-foreground pt-1">
                  <Phone className="w-3 h-3" />
                  Or call us directly — response within 24h
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
