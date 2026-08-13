import { HeartHandshake, MessageCircle, Handshake } from "lucide-react";

const strengths = [
  {
    icon: HeartHandshake,
    title: "Relationship Building",
    description:
      "Building trust and meaningful relationships with clients through genuine understanding and consistent communication.",
  },
  {
    icon: MessageCircle,
    title: "Communication",
    description:
      "Listening carefully, understanding different perspectives, and communicating solutions clearly.",
  },
  {
    icon: Handshake,
    title: "Negotiation",
    description:
      "Finding mutually beneficial solutions while balancing customer needs and business goals.",
  },
];

export function AboutMe() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="border-t border-border bg-background px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* Label / statement */}
          <div>
            <p className="text-sm font-medium text-primary">About Me</p>

            <h2
              id="about-heading"
              className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            >
              Building meaningful relationships through every client
              interaction.
            </h2>
          </div>

          {/* Introduction */}
          <div className="space-y-5 text-sm leading-7 text-muted-foreground sm:text-base">
            <p>
              I am a passionate client-facing professional with experience in
              both sales and after-sales, with a strong ability to build and
              maintain meaningful relationships with clients.
            </p>

            <p>
              I enjoy understanding clients&apos; needs, providing the right
              solutions, and creating positive experiences throughout their
              journey.
            </p>

            <p>
              I believe that success in a client-facing role goes beyond
              achieving targets. It is about{" "}
              <strong className="font-semibold text-foreground">
                building trust, delivering value, and creating long-term
                relationships.
              </strong>
            </p>
          </div>
        </div>

        {/* Strengths */}
        <div className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
          {strengths.map((strength) => {
            const Icon = strength.icon;

            return (
              <div
                key={strength.title}
                className="bg-background p-7 transition-colors hover:bg-muted/50"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card">
                  <Icon className="h-4 w-4 text-primary" />
                </div>

                <h3 className="mt-6 text-lg font-semibold text-foreground">
                  {strength.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {strength.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}