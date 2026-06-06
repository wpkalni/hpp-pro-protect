import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Phone,
  ShieldCheck,
  Shield,
  ShieldPlus,
  Award,
  Crown,
  Star,
  Clock,
  CalendarDays,
  Home,
  DollarSign,
  Wrench,
  PackageCheck,
  Smartphone,
  Check,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import coverageHero from "@/assets/coverage-hero.jpg";

export const Route = createFileRoute("/coverage-options")({
  head: () => ({
    meta: [
      { title: "Coverage Options — HVAC Protection Plus" },
      {
        name: "description",
        content:
          "Explore flexible HVAC protection plans for new and used systems up to 10 years old. Labor-only and labor + materials coverage options available.",
      },
      { property: "og:title", content: "Coverage Options — HVAC Protection Plus" },
      {
        property: "og:description",
        content:
          "Flexible HVAC protection plans for new and used systems. Labor-only and labor + materials coverage options.",
      },
    ],
  }),
  component: CoverageOptionsPage,
});

function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-navy-foreground">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_oklch(0.78_0.16_75_/_0.12),_transparent_60%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:py-16 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-24">
        <div className="flex flex-col justify-center text-center lg:text-left">
          <span className="mx-auto mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-gold lg:mx-0">
            <ShieldCheck className="h-3.5 w-3.5" /> Coverage Options
          </span>
          <h1 className="text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl">
            Protection Plans for{" "}
            <span className="text-gold">New &amp; Used</span> HVAC Systems
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base text-white/75 sm:text-lg lg:mx-0">
            Flexible protection plans designed for both new systems and qualifying
            used systems up to 10 years old. Choose the coverage level that best
            fits your needs.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <Link
              to="/contractor-signup"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-gold px-6 py-3.5 text-base font-semibold text-gold-foreground shadow-lg shadow-gold/20 transition-all hover:brightness-105 sm:w-auto"
            >
              Get Coverage Information <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/become-a-contractor"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-gold/60 px-6 py-3.5 text-base font-semibold text-navy-foreground transition-colors hover:bg-white/5 sm:w-auto"
            >
              Become a Contractor
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10">
            <img
              src={coverageHero}
              alt="Professional HVAC technician standing beside a residential HVAC system"
              className="h-full w-full object-cover"
              width={1280}
              height={854}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function PlanOptions() {
  const plans = [
    {
      icon: Shield,
      title: "Standard Labor Coverage",
      desc: "Provides approved labor reimbursement for covered repairs.",
    },
    {
      icon: ShieldPlus,
      title: "Standard Labor + Materials Coverage",
      desc: "Provides approved labor reimbursement plus covered repair materials.",
    },
    {
      icon: Award,
      title: "Premium Labor Coverage",
      desc: "Enhanced labor coverage for qualifying HVAC systems.",
    },
    {
      icon: Crown,
      title: "Premium Labor + Materials Coverage",
      desc: "Comprehensive coverage including approved labor reimbursement and covered repair materials.",
    },
  ];
  return (
    <section className="bg-background py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-gold">
            Available Plans
          </p>
          <h2 className="text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">
            Coverage Options Designed for Every Need
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {plans.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-border bg-background p-6 text-center shadow-[var(--shadow-card)] transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-elev)]"
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-navy">
                <p.icon className="h-6 w-6 text-gold" strokeWidth={2.2} />
              </div>
              <h3 className="mb-2 text-base font-bold text-navy">{p.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Eligibility() {
  const items = [
    { icon: Star, title: "New HVAC Systems", desc: "Full coverage available for newly installed residential equipment." },
    { icon: Clock, title: "Used HVAC Systems", desc: "Protection plans for existing systems that qualify." },
    { icon: CalendarDays, title: "Systems Up To 10 Years Old", desc: "Coverage available for qualifying systems up to a decade old." },
    { icon: Home, title: "Residential HVAC Equipment", desc: "Designed for homeowners and residential properties." },
  ];
  return (
    <section className="bg-navy-soft py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-navy/70">
            Eligibility
          </p>
          <h2 className="text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">
            Coverage for New and Existing Systems
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {items.map((it) => (
            <div
              key={it.title}
              className="rounded-2xl border border-border bg-background p-6 text-center shadow-[var(--shadow-card)] transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-elev)]"
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full ring-1 ring-gold/50">
                <it.icon className="h-6 w-6 text-gold" strokeWidth={2} />
              </div>
              <h3 className="mb-2 text-base font-bold text-navy">{it.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function KeyFeatures() {
  const features = [
    {
      icon: DollarSign,
      title: "Contractor-Selected Labor Reimbursement",
      desc: "Choose reimbursement levels of $150, $200, or $250 per hour.",
    },
    {
      icon: Wrench,
      title: "Labor-Only Options",
      desc: "Flexible protection focused on labor reimbursement.",
    },
    {
      icon: PackageCheck,
      title: "Labor + Materials Options",
      desc: "Expanded protection that includes covered repair materials.",
    },
    {
      icon: Smartphone,
      title: "Fast Enrollment",
      desc: "Simple mobile enrollment process.",
    },
    {
      icon: Clock,
      title: "30-Day Activation",
      desc: "Coverage activates faster than many competing programs.",
    },
    {
      icon: ShieldCheck,
      title: "Coverage for Used Systems",
      desc: "Protection available for qualifying systems up to 10 years old.",
    },
  ];
  return (
    <section className="bg-background py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-gold">
            Program Benefits
          </p>
          <h2 className="text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">
            Why Contractors and Homeowners Choose HPP
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-border bg-background p-6 transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-elev)]"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-navy">
                <f.icon className="h-5 w-5 text-gold" strokeWidth={2.2} />
              </div>
              <h3 className="mb-1.5 text-base font-bold text-navy">{f.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Comparison() {
  const laborOnly = [
    "Approved labor reimbursement",
    "Ideal for cost-conscious customers",
    "Simple protection solution",
  ];
  const laborMaterials = [
    "Approved labor reimbursement",
    "Covered repair materials",
    "More comprehensive protection",
  ];
  return (
    <section className="bg-navy-soft py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-navy/70">
            Understand Your Options
          </p>
          <h2 className="text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">
            Labor Only vs Labor + Materials
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:mt-16 lg:grid-cols-2 lg:gap-8">
          <div className="rounded-2xl border border-border bg-background p-7 shadow-[var(--shadow-card)]">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-navy">
              <Wrench className="h-6 w-6 text-gold" strokeWidth={2.2} />
            </div>
            <h3 className="mb-4 text-xl font-bold text-navy">Labor Only</h3>
            <ul className="space-y-3">
              {laborOnly.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-navy">
                    <Check className="h-3 w-3 text-gold" strokeWidth={3} />
                  </div>
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-background p-7 shadow-[var(--shadow-card)]">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-navy">
              <PackageCheck className="h-6 w-6 text-gold" strokeWidth={2.2} />
            </div>
            <h3 className="mb-4 text-xl font-bold text-navy">Labor + Materials</h3>
            <ul className="space-y-3">
              {laborMaterials.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-navy">
                    <Check className="h-3 w-3 text-gold" strokeWidth={3} />
                  </div>
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-navy py-16 text-navy-foreground sm:py-20 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_oklch(0.78_0.16_75_/_0.15),_transparent_70%)]" />
      <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
        <ShieldCheck className="mx-auto mb-6 h-12 w-12 text-gold" strokeWidth={1.8} />
        <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-6xl">
          Ready to Explore Coverage Options?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base text-white/75 sm:text-lg">
          Discover flexible HVAC protection plans designed for new systems and
          qualifying used systems up to 10 years old.
        </p>
        <div className="mx-auto mt-9 flex w-full max-w-md flex-col items-center justify-center gap-3 sm:max-w-none sm:flex-row">
          <Link
            to="/contractor-signup"
            className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-gold px-7 py-4 text-base font-semibold text-gold-foreground shadow-xl shadow-gold/30 transition-all hover:brightness-105 sm:w-auto"
          >
            Request Information <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/become-a-contractor"
            className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-white/20 px-7 py-4 text-base font-semibold text-navy-foreground transition-colors hover:bg-white/5 sm:w-auto"
          >
            Become a Contractor
          </Link>
        </div>
      </div>
    </section>
  );
}

function CoverageOptionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <PlanOptions />
        <Eligibility />
        <KeyFeatures />
        <Comparison />
        <FinalCTA />
      </main>
      <SiteFooter />
    </div>
  );
}
