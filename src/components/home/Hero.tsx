
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import TypingEffect from "./TypingEffect";

export default function Hero() {
  return (
    <section className="flex min-h-[55vh] flex-col justify-center gap-6 py-12 sm:py-16 lg:min-h-[65vh]">
      <p className="text-sm font-medium tracking-widest text-accent">
        <TypingEffect />
      </p>

      <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl">
        Hi, I'm Deborah.
        <span className="mt-2 block text-accent">
          I build practical solutions with code.
        </span>
      </h1>

      <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
        I'm a Software Development student passionate about
        building useful applications, solving problems, and
        turning ideas into working software.
      </p>

      <div className="flex flex-wrap gap-4 pt-2">
        <Button asChild>
          <Link href="/projects">
            View My Projects
            <ArrowRight className="ml-2 size-4" />
          </Link>
        </Button>

        <Button asChild variant="outline">
          <Link href="/contact">
            Contact Me
            <Mail className="ml-2 size-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
