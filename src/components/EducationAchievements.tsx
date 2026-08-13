import { Trophy, GraduationCap } from "lucide-react";

const achievements = [
  {
    year: "2013",
    date: "Nov 2013",
    title: "Quarter Finalist of Farmers English Debate",
    institution: "Brawijaya University",
    description: "East Java level English debate competition.",
  },
  {
    year: "2012",
    date: "Oct 2012",
    title: "Quarter Finalist of Makasar Debate Open",
    institution: "State Hassanudin Polytechnic",
    description: "National level English debate competition.",
  },
];

export function EducationAchievements() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="border-t border-border bg-background px-6 py-20 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-medium text-primary">
              Education & Achievements
            </p>
          </div>

          <div>
            <h2
              id="education-heading"
              className="max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            >
              Knowledge, competition, and continuous growth.
            </h2>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-16">
          {/* Education */}
          <article className="grid gap-6 border-t border-border py-10 md:grid-cols-[140px_1fr] lg:grid-cols-[180px_1fr]">
            {/* Years */}
            <div>
              <span className="text-sm font-medium text-muted-foreground">
                2006 — 2013
              </span>
            </div>

            {/* Content */}
            <div className="relative">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <div className="flex items-center gap-2 text-primary">
                    <GraduationCap className="h-4 w-4" />

                    <span className="text-sm font-medium">
                      University Education
                    </span>
                  </div>

                  <h3 className="mt-4 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                    University of Brawijaya
                  </h3>

                  <p className="mt-1 text-sm font-medium text-muted-foreground">
                    Sarjana Administrasi Publik · Public Policy
                  </p>
                </div>
              </div>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
                Studied how public policies are developed, implemented,
                evaluated, and analyzed, with a focus on government and public
                administration.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full border border-border bg-card px-3 py-1.5 text-xs text-muted-foreground">
                  Public Policy Team
                </span>

                <span className="rounded-full border border-border bg-card px-3 py-1.5 text-xs text-muted-foreground">
                  Debate Team
                </span>
              </div>
            </div>
          </article>

          {/* Achievements heading */}
          <div className="grid gap-6 border-t border-border py-6 md:grid-cols-[140px_1fr] lg:grid-cols-[180px_1fr]">
            <div>
              <span className="text-sm font-medium text-muted-foreground">
                Achievements
              </span>
            </div>

            <p className="text-sm text-muted-foreground">
              Competitive experiences that strengthened communication,
              confidence, and critical thinking.
            </p>
          </div>

          {/* Achievement timeline */}
          <div className="border-t border-border">
            {achievements.map((achievement) => (
              <article
                key={achievement.title}
                className="group grid gap-6 border-b border-border py-8 md:grid-cols-[140px_1fr] lg:grid-cols-[180px_1fr]"
              >
                {/* Year */}
                <div className="flex items-start gap-3">
                  <span className="text-sm font-medium text-muted-foreground">
                    {achievement.year}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="max-w-2xl">
                    <div className="flex items-center gap-2">
                      <Trophy className="h-4 w-4 text-primary" />

                      <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        {achievement.date}
                      </span>
                    </div>

                    <h3 className="mt-3 text-lg font-semibold tracking-tight text-foreground">
                      {achievement.title}
                    </h3>

                    <p className="mt-1 text-sm font-medium text-primary">
                      {achievement.institution}
                    </p>

                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      {achievement.description}
                    </p>
                  </div>

                  <span className="hidden text-xs text-muted-foreground transition-colors group-hover:text-foreground sm:block">
                    Achievement
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}