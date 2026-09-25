import { ArrowUpRight } from "lucide-react";
import { SITE } from "@/lib/site";
import { Button } from "@/components/ui/button";

const STATS = [
  { value: String(SITE.stats.resources), label: "Resources" },
  { value: String(SITE.stats.purchases), label: "Purchases" },
  { value: "990", label: "Downloads" },
  { value: "5.0", label: "Featured rating" },
];

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <img
          src="/products/beyond.jpg"
          alt=""
          className="size-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/40 via-background/80 to-background" />
        <div className="grain absolute inset-0 opacity-20 mix-blend-overlay" />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-12 lg:py-28">
        <div className="lg:col-span-8">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            Minecraft studio · BuiltByBit
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold text-foreground sm:text-6xl lg:text-7xl">
            {SITE.tagline}
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
            {SITE.description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" asChild>
              <a href="#work">
                Browse products
                <ArrowUpRight />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href={SITE.discordUrl} target="_blank" rel="noreferrer">
                Join Discord
              </a>
            </Button>
          </div>
        </div>

        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-border shadow-border lg:col-span-4 lg:self-end">
          {STATS.map((stat) => (
            <div key={stat.label} className="bg-card px-4 py-5 sm:px-5">
              <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {stat.label}
              </dt>
              <dd className="mt-1 font-display text-3xl font-semibold tabular-nums text-foreground">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
