import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, Phone } from "lucide-react";
import logo from "@/assets/hpp-logo.png";

const navItems: { label: string; href: string; isLink?: boolean }[] = [
  { label: "For Contractors", href: "#" },
  { label: "For Homeowners", href: "#" },
  { label: "How It Works", href: "#" },
  { label: "Coverage", href: "/coverage-options", isLink: true },
  { label: "Resources", href: "#" },
  { label: "Why We Built HPP", href: "/why-we-built-hpp", isLink: true },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-5 lg:h-20 lg:px-8">
        <Link to="/" className="flex shrink-0 items-center gap-2">
          <img src={logo} alt="HPP HVAC Protection Plus" className="h-8 w-auto sm:h-9 lg:h-11" />
        </Link>
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const hasChevron = item.label === "For Contractors" || item.label === "Resources" || item.label === "Why We Built HPP";
            const Comp = item.isLink ? Link : "a";
            const linkProps = item.isLink ? { to: item.href } : { href: item.href };
            return (
              <Comp
                key={item.label}
                {...linkProps}
                className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-navy"
              >
                {item.label}
                {hasChevron && (
                  <ChevronDown className="h-3.5 w-3.5 opacity-60" />
                )}
              </Comp>
            );
          })}
        </nav>
        <div className="hidden items-center gap-4 lg:flex">
          <a href="tel:8559544822" className="flex items-center gap-2 text-sm font-semibold text-navy">
            <Phone className="h-4 w-4" />
            (855) 954-HVAC
          </a>
          <Link
            to="/become-a-contractor"
            className="inline-flex items-center gap-2 rounded-md bg-gold px-5 py-2.5 text-sm font-semibold text-gold-foreground shadow-sm transition-all hover:brightness-105 hover:shadow-md"
          >
            Become a Contractor
          </Link>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="shrink-0 rounded-md p-2 lg:hidden"
          aria-label="Menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="space-y-1 px-5 py-4">
            {navItems.map((item) => {
              const Comp = item.isLink ? Link : "a";
              const linkProps = item.isLink ? { to: item.href } : { href: item.href };
              return (
                <Comp
                  key={item.label}
                  {...linkProps}
                  className="block rounded-md px-3 py-2.5 text-sm font-medium text-foreground/80"
                >
                  {item.label}
                </Comp>
              );
            })}
            <Link
              to="/become-a-contractor"
              className="mt-3 block rounded-md bg-gold px-4 py-3 text-center text-sm font-semibold text-gold-foreground"
            >
              Become a Contractor
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
