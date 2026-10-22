import { Code2, Database, Layers3 } from "lucide-react";
import { focusAreas } from "./AboutContents";

const icons = [Code2, Database, Layers3];

export default function FocusAreas() {
  return (
    <section className="space-y-8">
      <div className="max-w-2xl space-y-3">
        <p className="text-sm font-medium tracking-wide text-accent">
          WHAT I DO
        </p>

        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Areas I&apos;m developing
        </h2>

        <p className="leading-7 text-muted-foreground">
          The areas I&apos;m actively exploring and applying as I grow as a
          developer.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {focusAreas.map((area, index) => {
          const Icon = icons[index];

          return (
            <article
              key={area.title}
              className="rounded-xl border border-border bg-card p-5 sm:p-6"
            >
              <div className="mb-5 flex size-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Icon className="size-5" />
              </div>

              <h3 className="text-lg font-semibold tracking-tight">
                {area.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {area.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {area.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
