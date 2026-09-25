import { useState } from "react";
import { Menu, X } from "lucide-react";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { StudioLogo } from "@/components/studio-logo";

const NAV = [
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#reviews", label: "Reviews" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5 text-foreground">
          <StudioLogo className="size-8" />
          <span className="font-display text-sm font-semibold tracking-tight">{SITE.name}</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors duration-150 hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button variant="outline" size="sm" asChild>
            <a href={SITE.creatorUrl} target="_blank" rel="noreferrer">
              BuiltByBit
            </a>
          </Button>
          <Button size="sm" asChild>
            <a href={SITE.discordUrl} target="_blank" rel="noreferrer">
              Discord
            </a>
          </Button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-border md:hidden",
          "transition-[max-height,opacity] duration-250 ease-[cubic-bezier(0.22,1,0.36,1)]",
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="flex flex-col gap-1 px-4 py-3" aria-label="Mobile">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex min-h-11 items-center rounded-md px-3 text-sm font-medium text-foreground hover:bg-accent"
            >
              {item.label}
            </a>
          ))}
          <a
            href={SITE.creatorUrl}
            target="_blank"
            rel="noreferrer"
            className="flex min-h-11 items-center rounded-md px-3 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground"
          >
            BuiltByBit store
          </a>
          <a
            href={SITE.discordUrl}
            target="_blank"
            rel="noreferrer"
            className="flex min-h-11 items-center rounded-md px-3 text-sm font-medium text-primary hover:bg-accent"
          >
            Join Discord
          </a>
        </nav>
      </div>
    </header>
  );
}
