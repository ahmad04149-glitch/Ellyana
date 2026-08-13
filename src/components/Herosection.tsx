// src/components/HeroSection.tsx
import { Button } from "@/components/ui/button";
import { Phone, Sparkles, ArrowDown } from "lucide-react";

export function HeroSection() {
  return (
    <section
      aria-label="Introduction to Nila Ellyana"
      className="relative overflow-hidden bg-background px-6 py-10 sm:px-10 lg:px-16"
    >
      {/* Grid backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-size-[56px_56px] mask-[radial-gradient(ellipse_80%_60%_at_50%_0%,black_40%,transparent_100%)]"
        style={{
          backgroundImage:
            "linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)",
        }}
      />

      {/* Glow halo behind the portrait */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-10%] top-1/2 h-140 w-140 -translate-y-1/2 rounded-full bg-primary/25 blur-[120px]"
      />

      <div className="relative mx-auto flex max-w-6xl flex-col">
        {/* Hero content */}
        <div className="grid grid-cols-1 items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
          {/* Text */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-primary">
              <span className="relative flex h-2 w-2">
                <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              Open to new opportunities
            </div>

            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Nila Ellyana
            </h1>

            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
              Customer Success and Client Onboarding professional with
              experience in Business Development. I focus on building strong
              client relationships, creating seamless onboarding experiences,
              and helping customers achieve long-term value.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button
                size="lg"
                className="rounded-full"
                onClick={() => {
                  window.open(
                    "https://wa.me/628122770902",
                    "_blank",
                    "noopener,noreferrer"
                  );
                }}
              >
                <Phone className="mr-2 h-4 w-4" />
                Contact me
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="rounded-full"
                onClick={() =>
                  document
                    .getElementById("experience")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Explore my experience
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Portrait */}
          <div className="relative mx-auto w-full max-w-85">
            <Sparkles className="absolute -right-3 -top-6 h-8 w-8 text-primary/70" />
            <Sparkles className="absolute -right-10 top-10 h-4 w-4 text-primary/50" />

            <div className="relative aspect-4/5 overflow-hidden rounded-t-full rounded-b-3xl border border-border bg-card shadow-2xl shadow-primary/20">
              <img
                src="/nila-portrait.png"
                alt="Nila Ellyana, Customer Success and Client Onboarding professional"
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}