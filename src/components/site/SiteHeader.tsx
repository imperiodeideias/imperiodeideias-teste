import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MAIN_NAV, SITE } from "@/lib/site";
import logo from "@/assets/imperio-logo.png";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-background/85 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container-imperio flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-2" aria-label={SITE.name}>
          <img src={logo} alt={SITE.name} className="h-8 w-auto" width={140} height={32} />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {MAIN_NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              activeProps={{ className: "text-primary" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="pill" size="pill" className="hidden sm:inline-flex">
            <Link to="/contato">Conversar</Link>
          </Button>
          <button
            className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground"
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menu"
            aria-expanded={open}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container-imperio py-6 flex flex-col gap-1">
            {MAIN_NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-3 text-lg font-semibold text-foreground/90 hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
            <Button asChild variant="pillFilled" size="pill" className="mt-3 self-start">
              <Link to="/contato" onClick={() => setOpen(false)}>Conversar</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
