
import { journey } from "./AboutContents";

export default function MyJourney() {
  return (
    <section className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
      <div className="space-y-3">
        <p className="text-sm font-medium tracking-wide text-accent">
          MY JOURNEY
        </p>

        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Growing through experience
        </h2>

        <p className="leading-7 text-muted-foreground">
          Every experience gives me an opportunity to learn,
          solve problems, and improve how I work.
        </p>
      </div>

      <div className="space-y-8 border-l border-border pl-5 sm:pl-7">
        {journey.map((item, index) => (
          <article key={item.label} className="relative space-y-2">
            <span
              className={`absolute -left-[25px] top-1.5 size-2.5 rounded-full sm:-left-[33px] ${
                index === 0 ? "bg-accent" : "bg-border"
              }`}
            />

            <p className="text-xs font-medium uppercase tracking-wide text-accent">
              {item.label}
            </p>

            <h3 className="text-lg font-semibold">{item.title}</h3>

            <p className="text-sm text-muted-foreground">
              {item.organization}
            </p>

            <p className="text-sm leading-6 text-muted-foreground">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
