import { ArrowUpRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  const handleContact = () => {
    window.open(
      "https://wa.me/628122770902",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="border-t border-border bg-background px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-7 py-16 sm:px-12 sm:py-20 lg:px-16">
          {/* Subtle gradient glow */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none absolute -right-32 -top-32
              h-96 w-96 rounded-full
              bg-primary/10 blur-3xl
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none absolute -bottom-40 -left-32
              h-80 w-80 rounded-full
              bg-primary/5 blur-3xl
            "
          />

          <div className="relative max-w-3xl">
            <p className="text-sm font-medium text-primary">
              Let&apos;s connect
            </p>

            <h2
              id="contact-heading"
              className="
                mt-4 text-4xl font-bold tracking-tight
                text-foreground sm:text-5xl lg:text-6xl
              "
            >
              Let&apos;s create better customer experiences together.
            </h2>

            <p
              className="
                mt-6 max-w-2xl text-sm leading-7
                text-muted-foreground sm:text-base
              "
            >
              Whether you&apos;re looking for a Customer Success professional,
              a Client Onboarding specialist, or simply want to connect,
              I&apos;d love to hear from you.
            </p>

            <div className="mt-9">
              <Button
                size="lg"
                className="rounded-full"
                onClick={handleContact}
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Contact me
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}