import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Phone,
  ShieldCheck,
  TrendingUp,
  Wrench,
  CalendarCheck,
  Smartphone,
  Check,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import heroImage from "@/assets/hero-technician-tablet.jpg";
import mobileImage from "@/assets/tech-mobile-enrollment.jpg";

export const Route = createFileRoute("/become-a-contractor")({
  head: () => ({
    meta: [
      { title: "Become a Contractor — HVAC Protection Plus" },
      {
        name: "description",
        content:
          "Join HVAC Protection Plus as a contractor. Grow your business with new revenue opportunities, mobile enrollment, and protection plans for new and used HVAC systems.",
      },
      { property: "og:title", content: "Become a Contractor — HVAC Protection Plus" },
      {
        property: "og:description",
        content:
          "Join HVAC Protection Plus as a contractor. Grow your business with new revenue opportunities, mobile enrollment, and protection plans for new and used HVAC systems.",
      },
    ],
  }),
  component: BecomeAContractorPage,
});

function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-navy-foreground">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_oklch(0.78_0.16_75_/_0.12),_transparent_60%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:py-16 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-24">
        <div className="flex flex-col justify-center text-center lg:text-left">
          <span className="mx-auto mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-gold lg:mx-0">
            <ShieldCheck className="h-3.5 w-3.5" /> For Contractors
          </span>
          <h1 className="text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl">
            Grow Your Business.{" "}
            <span className="text-gold">Backed by HPP.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base text-white/75 sm:text-lg lg:mx-0">
            Create new revenue opportunities while providing homeowners with
            valuable HVAC protection. Enroll customers from the office or
            directly from the field using the HPP mobile platform.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <Link
              to="/contractor-signup"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-gold px-6 py-3.5 text-base font-semibold text-gold-foreground shadow-lg shadow-gold/20 transition-all hover:brightness-105 sm:w-auto"
            >
              Become a Contractor <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="#revenue"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-gold/60 px-6 py-3.5 text-base font-semibold text-navy-foreground transition-colors hover:bg-white/5 sm:w-auto"
            >
              View Contractor Benefits
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10">
            <img
              src={heroImage}
              alt="Professional HVAC technician speaking with a homeowner while using a tablet"
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

function RevenueOpportunities() {
  const cards = [
    {
      icon: TrendingUp,
      title: "Install Revenue",
      desc: "Earn additional revenue opportunities when enrolling customers during new HVAC installations.",
    },
    {
      icon: Wrench,
      title: "Service Call Opportunities",
      desc: "Offer protection plans during service calls and create additional revenue from existing customer relationships.",
    },
    {
      icon: CalendarCheck,
      title: "Maintenance Visit Sales",
      desc: "Present coverage options during maintenance visits and increase long-term customer value.",
    },
  ];
  return (
    <section id="revenue" className="bg-background py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-gold">
            Contractor Advantages
          </p>
          <h2 className="text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">
            More Ways to Grow Revenue
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {cards.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-border bg-background p-6 text-center shadow-[var(--shadow-card)] transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-elev)]"
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-navy">
                <c.icon className="h-6 w-6 text-gold" strokeWidth={2.2} />
              </div>
              <h3 className="mb-2 text-base font-bold text-navy">{c.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MobileEnrollment() {
  const bullets = [
    "Mobile-first enrollment process",
    "Complete enrollments from the field",
    "Fast and simple workflow",
    "Designed for technicians and office staff",
    "Works on phones, tablets, and desktop devices",
  ];
  return (
    <section className="bg-navy-soft py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-black/5">
            <img
              src={mobileImage}
              alt="HVAC technician using a tablet in the field near an HVAC unit"
              className="h-full w-full object-cover"
              loading="lazy"
              width={1024}
              height={768}
            />
          </div>
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-navy/70">
              Mobile Enrollment
            </p>
            <h2 className="text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">
              Enroll Customers in Minutes
            </h2>
            <ul className="mt-8 space-y-4">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-navy">
                    <Check className="h-3 w-3 text-gold" strokeWidth={3} />
                  </div>
                  <span className="text-base text-muted-foreground">{b}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/contractor-signup"
              className="mt-9 inline-flex items-center gap-2 rounded-md bg-navy px-6 py-3.5 text-sm font-semibold text-navy-foreground transition-all hover:bg-navy/90"
            >
              Get Started <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { n: "01", title: "Apply to Become a Contractor", desc: "Complete a short application to join the HPP contractor network." },
    { n: "02", title: "Get Approved", desc: "Our team reviews your application and gets you set up quickly." },
    { n: "03", title: "Enroll Customers", desc: "Use the HPP platform to quote and enroll customers in minutes." },
    { n: "04", title: "Earn Additional Revenue", desc: "Start adding revenue to every install, service call, and maintenance visit." },
  ];
  return (
    <section className="bg-background py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-gold">
            Simple Process
          </p>
          <h2 className="text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">
            Getting Started Is Easy
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {steps.map((s) => (
            <div
              key={s.n}
              className="relative rounded-2xl border border-border bg-background p-6 shadow-[var(--shadow-card)] transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-elev)]"
            >
              <span className="mb-4 block text-3xl font-bold text-gold/40">
                {s.n}
              </span>
              <h3 className="mb-2 text-base font-bold text-navy">{s.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
            </div>
          ))}
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
        <Smartphone className="mx-auto mb-6 h-12 w-12 text-gold" strokeWidth={1.8} />
        <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-6xl">
          Ready to Partner With HPP?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base text-white/75 sm:text-lg">
          Join a growing network of HVAC professionals offering protection plans
          for new and qualifying used HVAC systems.
        </p>
        <div className="mx-auto mt-9 flex w-full max-w-md flex-col items-center justify-center gap-3 sm:max-w-none sm:flex-row">
          <Link
            to="/contractor-signup"
            className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-gold px-7 py-4 text-base font-semibold text-gold-foreground shadow-xl shadow-gold/30 transition-all hover:brightness-105 sm:w-auto"
          >
            Apply Now <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href="tel:8559544822"
            className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-white/20 px-7 py-4 text-base font-semibold text-navy-foreground transition-colors hover:bg-white/5 sm:w-auto"
          >
            <Phone className="h-4 w-4" /> (855) 954-HVAC
          </a>
        </div>
      </div>
    </section>
  );
}

function BecomeAContractorPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <RevenueOpportunities />
        <MobileEnrollment />
        <HowItWorks />
        <FinalCTA />
      </main>
      <SiteFooter />
    </div>
  );
}
