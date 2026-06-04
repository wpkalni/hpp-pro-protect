import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import {
  ShieldCheck,
  ArrowRight,
  Phone,
  TrendingUp,
  Home,
  Clock,
  Smartphone,
  Zap,
  Headphones,
  DollarSign,
  PackageCheck,
  Wrench,
  UserCheck,
  Target,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/why-we-built-hpp")({
  head: () => ({
    meta: [
      { title: "Why We Built HPP — HVAC Protection Plus" },
      {
        name: "description",
        content:
          "HPP was built to help HVAC contractors generate additional revenue, increase customer retention, and provide long-term protection for homeowners.",
      },
      { property: "og:title", content: "Why We Built HPP" },
      {
        property: "og:description",
        content:
          "HPP was built to help HVAC contractors generate additional revenue, increase customer retention, and provide long-term protection for homeowners.",
      },
    ],
  }),
  component: WhyWeBuiltHPPPage,
});

function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-navy-foreground">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_oklch(0.78_0.16_75_/_0.12),_transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-5 py-14 text-center sm:py-16 lg:px-8 lg:py-24">
        <span className="mx-auto mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-gold">
          <Target className="h-3.5 w-3.5" /> Our Story
        </span>
        <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl">
          Built for Contractors.{" "}
          <span className="text-gold">Designed to Protect Homeowners.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base text-white/75 sm:text-lg">
          HVAC Protection Plus was created to help contractors generate additional
          revenue, increase customer retention, and provide long-term protection
          for homeowners.
        </p>
        <div className="mx-auto mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            to="/contractor-signup"
            className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-gold px-6 py-3.5 text-base font-semibold text-gold-foreground shadow-lg shadow-gold/20 transition-all hover:brightness-105 sm:w-auto"
          >
            Become a Contractor <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href="tel:8559544822"
            className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-gold/60 px-6 py-3.5 text-base font-semibold text-navy-foreground transition-colors hover:bg-white/5 sm:w-auto"
          >
            <Phone className="h-4 w-4" /> Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}

function Mission() {
  return (
    <section className="bg-navy-soft py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-navy/70">
          Our Mission
        </p>
        <h2 className="text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">
          Make HVAC protection easy.
        </h2>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
          We built HPP to eliminate unnecessary complexity and give contractors a
          fast, modern way to offer protection plans on installs, service calls,
          and maintenance visits.
        </p>
      </div>
    </section>
  );
}

function WhyHPPExists() {
  const items = [
    {
      icon: TrendingUp,
      title: "Additional Revenue Opportunities",
      desc: "Support HVAC contractors with a simple upsell that adds value to every job.",
    },
    {
      icon: Home,
      title: "Help Homeowners Avoid Surprises",
      desc: "Help homeowners avoid unexpected repair costs with dependable coverage.",
    },
    {
      icon: ShieldCheck,
      title: "Cover What Others Won't",
      desc: "Cover systems that other programs won't — new and used up to 10 years old.",
    },
    {
      icon: Smartphone,
      title: "Mobile-First Enrollment",
      desc: "Create a simple, mobile-first enrollment experience your team can use anywhere.",
    },
    {
      icon: Clock,
      title: "Fast Claims Support",
      desc: "Deliver fast claims support and dependable coverage when it matters most.",
    },
  ];
  return (
    <section className="bg-background py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-gold">
            Why HPP Exists
          </p>
          <h2 className="text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">
            Built to solve real problems.
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
              <p className="text-sm leading-relaxed text-muted-foreground">
                {it.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatMakesHPPDifferent() {
  const features = [
    {
      icon: Smartphone,
      title: "Mobile-First Platform",
      desc: "Enroll customers from the field, the office, or anywhere in between.",
    },
    {
      icon: PackageCheck,
      title: "Coverage for New and Used Systems",
      desc: "Offer protection on both new installs and existing equipment.",
    },
    {
      icon: Wrench,
      title: "Systems Eligible Up To 10 Years Old",
      desc: "Qualify systems that other providers turn away.",
    },
    {
      icon: Zap,
      title: "Fast Enrollment Process",
      desc: "Quote and activate coverage in minutes, not hours.",
    },
    {
      icon: Headphones,
      title: "Contractor-Focused Support",
      desc: "Real people who understand the HVAC business and your needs.",
    },
    {
      icon: DollarSign,
      title: "Contractor-Selected Labor Reimbursement",
      desc: "Choose the rate that fits your business — $150, $200, or $250/hr.",
    },
  ];
  return (
    <section className="bg-navy-soft py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-navy/70">
            What Makes HPP Different
          </p>
          <h2 className="text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">
            Built different. Built better.
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
              <h3 className="mb-1.5 text-base font-bold text-navy">
                {f.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClosingCTA() {
  return (
    <section className="relative overflow-hidden bg-navy py-16 text-navy-foreground sm:py-20 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_oklch(0.78_0.16_75_/_0.15),_transparent_70%)]" />
      <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
        <ShieldCheck className="mx-auto mb-6 h-12 w-12 text-gold" strokeWidth={1.8} />
        <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-6xl">
          Ready to Partner With HPP?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base text-white/75 sm:text-lg">
          Join HVAC contractors who are offering better protection, increasing
          customer retention, and creating new revenue opportunities with HVAC
          Protection Plus.
        </p>
        <div className="mx-auto mt-9 flex w-full max-w-md flex-col items-center justify-center gap-3 sm:max-w-none sm:flex-row">
          <Link
            to="/contractor-signup"
            className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-gold px-7 py-4 text-base font-semibold text-gold-foreground shadow-xl shadow-gold/30 transition-all hover:brightness-105 sm:w-auto"
          >
            Become a Contractor <ArrowRight className="h-4 w-4" />
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

function WhyWeBuiltHPPPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Mission />
        <WhyHPPExists />
        <WhatMakesHPPDifferent />
        <ClosingCTA />
      </main>
      <SiteFooter />
    </div>
  );
}
