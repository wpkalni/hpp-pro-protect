import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Phone,
  ShieldCheck,
  Shield,
  Home,
  Wrench,
  Clock,
  Check,
  Plus,
  Thermometer,
  Leaf,
  Award,
  HeartHandshake,
  FileCheck2,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import homeownerHero from "@/assets/homeowner-hero.jpg";
import familyImg from "@/assets/family.jpg";
import heroHvac from "@/assets/hero-hvac.jpg";

export const Route = createFileRoute("/homeowner-coverage")({
  head: () => ({
    meta: [
      { title: "Homeowner Coverage — HVAC Protection Plus" },
      {
        name: "description",
        content:
          "HPP offers dependable HVAC protection plans for homeowners. Coverage for new and used systems up to 10 years old. Labor-only and labor + materials options.",
      },
      { property: "og:title", content: "Homeowner Coverage — HVAC Protection Plus" },
      {
        property: "og:description",
        content:
          "Dependable HVAC protection plans for new and used systems. Simple enrollment through participating contractors.",
      },
    ],
  }),
  component: HomeownerCoveragePage,
});

function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-navy-foreground">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_oklch(0.78_0.16_75_/_0.12),_transparent_60%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:py-16 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-24">
        <div className="flex flex-col justify-center text-center lg:text-left">
          <span className="mx-auto mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-gold lg:mx-0">
            <Home className="h-3.5 w-3.5" /> For Homeowners
          </span>
          <h1 className="text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl">
            Protection That Keeps{" "}
            <span className="text-gold">Your Home Comfortable</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base text-white/75 sm:text-lg lg:mx-0">
            Whether your HVAC system is brand new or has a few years on it, HPP
            offers dependable protection plans designed to help manage unexpected
            repair costs and keep your home comfortable year-round.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <Link
              to="/coverage-options"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-gold px-6 py-3.5 text-base font-semibold text-gold-foreground shadow-lg shadow-gold/20 transition-all hover:brightness-105 sm:w-auto"
            >
              Explore Coverage Options <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:8559544822"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-gold/60 px-6 py-3.5 text-base font-semibold text-navy-foreground transition-colors hover:bg-white/5 sm:w-auto"
            >
              <Phone className="h-4 w-4" /> Contact Your Contractor
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10">
            <img
              src={homeownerHero}
              alt="Happy family in a modern home with an HVAC technician"
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

function CoverageOverview() {
  const items = [
    {
      icon: ShieldCheck,
      title: "Unexpected Repair Protection",
      desc: "Coverage helps manage sudden HVAC repair expenses so you can avoid large out-of-pocket costs.",
    },
    {
      icon: Home,
      title: "New & Used Systems",
      desc: "Protection available for both newly installed and qualifying used HVAC systems.",
    },
    {
      icon: Award,
      title: "Multiple Coverage Levels",
      desc: "Choose from a range of coverage options to match your comfort level and budget.",
    },
    {
      icon: Clock,
      title: "Fast Claims Process",
      desc: "Simple claims handled directly through your participating contractor with quick turnaround.",
    },
    {
      icon: HeartHandshake,
      title: "Contractor-Supported Service",
      desc: "Enjoy a seamless experience backed by HPP-trained contractors you can trust.",
    },
  ];
  return (
    <section className="bg-background py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-gold">
            Coverage Overview
          </p>
          <h2 className="text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">
            HVAC Protection Made Simple
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {items.map((it) => (
            <div
              key={it.title}
              className="rounded-2xl border border-border bg-background p-6 text-center shadow-[var(--shadow-card)] transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-elev)]"
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-navy">
                <it.icon className="h-6 w-6 text-gold" strokeWidth={2.2} />
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

function NewSystems() {
  const bullets = [
    "Coverage available for newly installed HVAC systems",
    "Helps manage future repair expenses",
    "Multiple coverage options available",
    "Backed by participating HPP contractors",
  ];
  return (
    <section className="bg-navy-soft py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-navy/70">
              New System Coverage
            </p>
            <h2 className="text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">
              Protection for Newly Installed Systems
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              When you invest in a new HVAC system, protect that investment with
              coverage that helps manage repair costs down the road. Enroll at
              the time of installation through your participating contractor.
            </p>
            <div className="mt-8 space-y-4">
              {bullets.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-navy">
                    <Check className="h-3 w-3 text-gold" strokeWidth={3} />
                  </div>
                  <span className="text-base text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-border">
              <img
                src={familyImg}
                alt="Family enjoying a comfortable home with a new HVAC system"
                className="h-full w-full object-cover"
                width={1280}
                height={854}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function UsedSystems() {
  const items = [
    {
      icon: Clock,
      title: "Systems Up To 10 Years Old",
      desc: "Protection available for qualifying HVAC systems up to a decade old.",
    },
    {
      icon: Award,
      title: "A Unique Industry Benefit",
      desc: "Unlike many competing programs, HPP covers qualifying used systems.",
    },
    {
      icon: ShieldCheck,
      title: "Extend Confidence",
      desc: "Helps homeowners feel more secure about older equipment performance.",
    },
    {
      icon: HeartHandshake,
      title: "Easy Enrollment",
      desc: "Simple enrollment through participating HPP contractors.",
    },
  ];
  return (
    <section className="bg-background py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-gold">
            Used System Coverage
          </p>
          <h2 className="text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">
            Coverage for Qualifying Systems Up To 10 Years Old
          </h2>
          <p className="mt-5 text-base text-muted-foreground sm:text-lg">
            HPP offers a unique advantage by providing protection for qualifying
            used systems — a benefit many competing programs do not offer.
          </p>
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

function PlanOptions() {
  const laborOnly = [
    "Approved labor reimbursement",
    "Cost-effective protection option",
    "Ideal for homeowners seeking basic coverage",
  ];
  const laborMaterials = [
    "Approved labor reimbursement",
    "Covered repair materials",
    "More comprehensive protection",
    "Greater peace of mind",
  ];
  return (
    <section className="bg-navy-soft py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-navy/70">
            Plan Options
          </p>
          <h2 className="text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">
            Choose the Coverage That Fits Your Needs
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:mt-16 lg:grid-cols-2 lg:gap-8">
          <div className="rounded-2xl border border-border bg-background p-7 shadow-[var(--shadow-card)]">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-navy">
              <Wrench className="h-6 w-6 text-gold" strokeWidth={2.2} />
            </div>
            <h3 className="mb-4 text-xl font-bold text-navy">Labor Only Plans</h3>
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
              <Shield className="h-6 w-6 text-gold" strokeWidth={2.2} />
            </div>
            <h3 className="mb-4 text-xl font-bold text-navy">Labor + Materials Plans</h3>
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

function WhyHPP() {
  const items = [
    { icon: Home, title: "New & Used Systems", desc: "Coverage for both new installs and qualifying existing systems." },
    { icon: Clock, title: "Up To 10 Years Old", desc: "A unique benefit for older qualifying HVAC equipment." },
    { icon: Shield, title: "Multiple Options", desc: "Labor-only or labor + materials plans available." },
    { icon: FileCheck2, title: "Fast Claims", desc: "Quick, contractor-supported claim handling." },
    { icon: HeartHandshake, title: "Contractor Supported", desc: "Service backed by trained HPP participating contractors." },
    { icon: Thermometer, title: "Simple Enrollment", desc: "Easy sign-up through your contractor at point of sale." },
  ];
  return (
    <section className="bg-background py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-gold">
            Why HPP
          </p>
          <h2 className="text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">
            Trusted Protection for Your Home
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {items.map((it) => (
            <div
              key={it.title}
              className="rounded-2xl border border-border bg-background p-6 transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-elev)]"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-navy">
                <it.icon className="h-5 w-5 text-gold" strokeWidth={2.2} />
              </div>
              <h3 className="mb-1.5 text-base font-bold text-navy">{it.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQPreview() {
  const faqs = [
    {
      q: "Can I purchase coverage on an older system?",
      a: "Qualifying HVAC systems up to 10 years old may be eligible for coverage. Contact a participating HPP contractor to learn more.",
    },
    {
      q: "How do I file a claim?",
      a: "Contact your servicing contractor. The contractor will diagnose the issue, complete the repair, and submit the claim on your behalf.",
    },
    {
      q: "What coverage options are available?",
      a: "HPP offers Labor Only and Labor + Materials coverage options. Your contractor can help you choose the plan that fits your needs.",
    },
  ];
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <section className="bg-navy-soft py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-navy/70">
            Common Questions
          </p>
          <h2 className="text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="mt-12 space-y-3 sm:mt-16">
          {faqs.map(({ q, a }, i) => (
            <button
              key={q}
              onClick={() => setOpenIdx(openIdx === i ? null : i)}
              className="w-full rounded-xl border border-border bg-background p-5 text-left transition-all hover:border-gold/60 hover:shadow-[var(--shadow-card)]"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="text-sm font-semibold text-navy">{q}</span>
                <span
                  className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-border text-navy transition-transform ${
                    openIdx === i ? "rotate-45 bg-gold border-gold" : ""
                  }`}
                >
                  <Plus className="h-3.5 w-3.5" strokeWidth={2.5} />
                </span>
              </div>
              {openIdx === i && (
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a}</p>
              )}
            </button>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/file-a-claim"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-navy/20 bg-background px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-navy-foreground"
          >
            View All FAQs <ArrowRight className="h-4 w-4" />
          </Link>
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
          Ready to Protect Your HVAC System?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base text-white/75 sm:text-lg">
          Talk with a participating contractor to learn more about available
          coverage options for your home.
        </p>
        <div className="mx-auto mt-9 flex w-full max-w-md flex-col items-center justify-center gap-3 sm:max-w-none sm:flex-row">
          <Link
            to="/coverage-options"
            className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-gold px-7 py-4 text-base font-semibold text-gold-foreground shadow-xl shadow-gold/30 transition-all hover:brightness-105 sm:w-auto"
          >
            Find Coverage Information <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href="tel:8559544822"
            className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-white/20 px-7 py-4 text-base font-semibold text-navy-foreground transition-colors hover:bg-white/5 sm:w-auto"
          >
            <Phone className="h-4 w-4" /> Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}

function HomeownerCoveragePage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <CoverageOverview />
        <NewSystems />
        <UsedSystems />
        <PlanOptions />
        <WhyHPP />
        <FAQPreview />
        <FinalCTA />
      </main>
      <SiteFooter />
    </div>
  );
}
