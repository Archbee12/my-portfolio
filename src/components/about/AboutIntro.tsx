
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { aboutIntro } from "./AboutContents";

export default function AboutIntro() {
  return (
    <section className="max-w-3xl space-y-6">
      <p className="text-sm font-medium tracking-wide text-accent">
        {aboutIntro.eyebrow}
      </p>

      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
        {aboutIntro.title}
      </h1>

      {aboutIntro.paragraphs.map((paragraph) => (
        <p
          key={paragraph}
          className="max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base"
        >
          {paragraph}
        </p>
      ))}

      <div className="flex flex-wrap gap-3 pt-2">
        <Button asChild>
          <Link href="/projects">
            Explore my projects
            <ArrowRight className="ml-2 size-4" />
          </Link>
        </Button>

        <Button asChild variant="outline">
          <Link href="/contact">Contact me</Link>
        </Button>
      </div>
    </section>
  );
}
