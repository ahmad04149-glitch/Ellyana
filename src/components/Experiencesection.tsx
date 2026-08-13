import { MapPin, ArrowUpRight } from "lucide-react";

const experiences = [
  {
    number: "01",
    role: "Client Onboarding Specialist",
    company: "SleekFlow",
    period: "Jan 2024 — 2026",
    location: "Indonesia · Remote",
    description:
      "Guide customers through onboarding, product adoption, and best practices while working closely with sales, product, and support teams.",
  },
  {
    number: "02",
    role: "Customer Success",
    company: "Xendit",
    period: "2022 — 2024",
    location: "Indonesia",
    description:
      "Build strong customer relationships, understand client needs, and help customers achieve value through effective solutions.",
  },
  {
    number: "03",
    role: "Business Development",
    company: "Glints",
    period: "2021 — 2022",
    location: "Indonesia",
    description:
      "Develop client relationships, identify business opportunities, and create solutions aligned with customer needs.",
  },
];

export function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="border-t border-border bg-background px-6 py-20 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-primary">Experience</p>

            <h2
              id="experience-heading"
              className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            >
              A career built around meaningful relationships, client success,
              and continuous growth.
            </h2>
          </div>

          <span className="shrink-0 text-sm text-muted-foreground">
            {experiences.length} roles
          </span>
        </div>

        {/* Bento Grid */}
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {/* Featured Experience */}
          <article
            className="
              group relative flex min-h-[320px] flex-col
              justify-between overflow-hidden rounded-2xl
              border border-border bg-card p-7
              transition-colors hover:bg-muted/50
              md:row-span-2
            "
          >
            {/* Subtle gradient glow */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none absolute -right-24 -top-24
                h-72 w-72 rounded-full
                bg-primary/10 blur-3xl
              "
            />

            <div className="relative">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-muted-foreground">
                  {experiences[0].number}
                </span>

                <ArrowUpRight
                  className="
                    h-5 w-5 text-muted-foreground
                    transition-colors
                    group-hover:text-foreground
                  "
                />
              </div>

              <div className="mt-16">
                <p className="text-sm font-medium text-primary">
                  {experiences[0].company}
                </p>

                <h3
                  className="
                    mt-2 text-2xl font-semibold tracking-tight
                    text-foreground sm:text-3xl
                  "
                >
                  {experiences[0].role}
                </h3>

                <p
                  className="
                    mt-4 max-w-md text-sm leading-6
                    text-muted-foreground
                  "
                >
                  {experiences[0].description}
                </p>
              </div>
            </div>

            <div
              className="
                relative mt-8 flex flex-wrap items-center gap-4
                border-t border-border pt-5
                text-xs text-muted-foreground
              "
            >
              <span>{experiences[0].period}</span>

              <span className="flex items-center gap-1.5">
                <MapPin className="h-3 w-3" />
                {experiences[0].location}
              </span>
            </div>
          </article>

          {/* Other Experiences */}
          {experiences.slice(1).map((experience) => (
            <article
              key={experience.number}
              className="
                group relative flex min-h-[152px]
                flex-col justify-between overflow-hidden
                rounded-2xl border border-border
                bg-background p-6
                transition-colors hover:bg-muted/50
              "
            >
              {/* Subtle gradient glow */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none absolute -bottom-20 -right-20
                  h-48 w-48 rounded-full
                  bg-primary/5 blur-3xl
                "
              />

              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <span className="text-sm font-medium text-muted-foreground">
                    {experience.number}
                  </span>

                  <ArrowUpRight
                    className="
                      h-4 w-4 text-muted-foreground
                      transition-colors
                      group-hover:text-foreground
                    "
                  />
                </div>

                <div className="mt-8">
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                    <h3 className="text-lg font-semibold tracking-tight text-foreground">
                      {experience.role}
                    </h3>

                    <span className="text-sm font-medium text-primary">
                      · {experience.company}
                    </span>
                  </div>

                  <div
                    className="
                      mt-2 flex flex-wrap gap-3
                      text-xs text-muted-foreground
                    "
                  >
                    <span>{experience.period}</span>

                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {experience.location}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}