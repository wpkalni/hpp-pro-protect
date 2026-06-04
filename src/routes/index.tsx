import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ShieldCheck,
  Clock,
  UserCheck,
  Smartphone,
  TrendingUp,
  DollarSign,
  Wrench,
  Home,
  Repeat,
  Award,
  
  HandshakeIcon,
  ChevronDown,
  ArrowRight,
  Check,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  Menu,
  ScanLine,
  PackageCheck,
  FileCheck2,
  Zap,
  MousePointerClick,
  Sliders,
  Briefcase,
} from "lucide-react";
import logo from "@/assets/hpp-logo.png";
import heroContractor from "@/assets/hero-contractor.jpg";
import contractor from "@/assets/contractor.jpg";
import family from "@/assets/family.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HPP HVAC Protection Plus — Add Revenue to Every HVAC Install" },
      {
        name: "description",
        content:
          "HPP gives HVAC contractors a simple way to offer protection on new and used systems, enroll customers fast, and build long-term retention after the install.",
      },
      { property: "og:title", content: "HPP HVAC Protection Plus" },
      {
        property: "og:description",
        content: "Protection for new and used HVAC systems. Built for contractors.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Landing,
});

const navItems = [
  "For Contractors",
  "For Homeowners",
  "How It Works",
  "Coverage",
  "Resources",
  "Why We Built HPP",
];

function Logo({ className = "" }: { className?: string }) {
  return <img src={logo} alt="HPP HVAC Protection Plus" className={className} />;
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-5 lg:h-20 lg:px-8">
        <a href="#" className="flex shrink-0 items-center gap-2">
          <Logo className="h-8 w-auto sm:h-9 lg:h-11" />
        </a>
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-navy"
            >
              {item}
              {(item === "For Contractors" ||
                item === "Resources" ||
                item === "Company") && (
                <ChevronDown className="h-3.5 w-3.5 opacity-60" />
              )}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="tel:8559544822"
            className="flex items-center gap-2 text-sm font-semibold text-navy"
          >
            <Phone className="h-4 w-4" />
            (855) 954-HVAC
          </a>
          <a
            href="/contractor-signup"
            className="inline-flex items-center gap-2 rounded-md bg-gold px-5 py-2.5 text-sm font-semibold text-gold-foreground shadow-sm transition-all hover:brightness-105 hover:shadow-md"
          >
            Become a Contractor
          </a>
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
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="block rounded-md px-3 py-2.5 text-sm font-medium text-foreground/80"
              >
                {item}
              </a>
            ))}
            <a
              href="/contractor-signup"
              className="mt-3 block rounded-md bg-gold px-4 py-3 text-center text-sm font-semibold text-gold-foreground"
            >
              Become a Contractor
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  const trust = [
    { icon: UserCheck, label: "No Inspectors Required" },
    { icon: Clock, label: "Enroll in Minutes" },
    { icon: ShieldCheck, label: "Backed by HPP. Built for You." },
  ];
  return (
    <section className="relative overflow-hidden bg-navy text-navy-foreground">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_oklch(0.78_0.16_75_/_0.12),_transparent_60%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:py-16 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-24">
        <div className="flex flex-col justify-center text-center lg:text-left">
          <span className="mx-auto mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-gold lg:mx-0">
            <ShieldCheck className="h-3.5 w-3.5" /> Built for HVAC Contractors
          </span>
          <h1 className="text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl xl:text-7xl">
            Help Homeowners Say Yes —{" "}
            <span className="text-gold">and Add Revenue</span> to Every Install.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base text-white/75 sm:text-lg lg:mx-0">
            HPP gives HVAC contractors a simple way to offer protection on new and
            used systems, enroll customers fast, and create long-term retention
            after the install.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="/contractor-signup"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-gold px-6 py-3.5 text-base font-semibold text-gold-foreground shadow-lg shadow-gold/20 transition-all hover:brightness-105 sm:w-auto"
            >
              Become an HPP Contractor <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/contractor-signup"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-gold/60 px-6 py-3.5 text-base font-semibold text-navy-foreground transition-colors hover:bg-white/5 sm:w-auto"
            >
              Sell a Contract
            </a>
          </div>
          <div className="mx-auto mt-10 grid w-full max-w-xl grid-cols-1 gap-5 border-t border-white/10 pt-8 sm:grid-cols-3 lg:mx-0">
            {trust.map((t) => (
              <div
                key={t.label}
                className="flex items-start justify-center gap-3 lg:justify-start"
              >
                <t.icon className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <span className="text-sm font-medium leading-tight text-white/90">
                  {t.label}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10">
            <img
              src={heroContractor}
              alt="Friendly HVAC business owner standing in front of his service van"
              className="h-full w-full object-cover"
              width={1280}
              height={1280}
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden max-w-xs rounded-xl bg-background p-5 shadow-2xl ring-1 ring-border sm:block">
            <div className="flex items-start gap-3">
              <div className="rounded-lg bg-navy/5 p-2.5">
                <ShieldCheck className="h-7 w-7 text-navy" strokeWidth={2.2} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-navy">
                  Coverage for New &amp; Used Systems
                </p>
                <p className="mt-1 text-sm font-bold text-gold">UP TO 10 YEARS OLD</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  const items = [
    {
      icon: DollarSign,
      title: "Add Revenue Per Install",
      desc: "Earn on every job by attaching protection at the point of sale.",
    },
    {
      icon: Briefcase,
      title: "Sell From the Field or Office",
      desc: "Quote and enroll wherever the customer is — truck, kitchen table, or desk.",
    },
    {
      icon: ShieldCheck,
      title: "Protect New & Used Systems",
      desc: "Coverage for new installs and used systems up to 10 years old.",
    },
    {
      icon: Repeat,
      title: "Keep Customers Coming Back",
      desc: "Build long-term retention with coverage that drives repeat business.",
    },
  ];
  return (
    <section className="bg-background py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-gold">
            Built for Contractor Growth
          </p>
          <h2 className="text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">
            More revenue. More retention. Every install.
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
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

function EnrollmentFlow() {
  const steps = [
    { n: 1, icon: PackageCheck, title: "Choose Program", desc: "Pick the protection plan that fits the job." },
    { n: 2, icon: ScanLine, title: "Add Equipment", desc: "Capture system details in seconds." },
    { n: 3, icon: FileCheck2, title: "Select Coverage", desc: "Tailor terms for new or used systems." },
    { n: 4, icon: Zap, title: "Activate Protection", desc: "Coverage is live the moment you confirm." },
  ];
  const bullets = [
    { icon: MousePointerClick, t: "Minimal clicks", d: "A short guided flow your team can run in seconds." },
    { icon: Smartphone, t: "Mobile and desktop friendly", d: "Works on a phone in the driveway or a tablet at the desk." },
    { icon: Sliders, t: "Dynamic pricing", d: "Quote real numbers in front of the customer, on the spot." },
    { icon: Zap, t: "Fast customer enrollment", d: "Sign, register, and activate in a single sitting." },
  ];
  return (
    <section id="enroll" className="bg-navy-soft py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-navy/70">
            How Enrollment Works
          </p>
          <h2 className="text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">
            Sell Coverage in Minutes.
          </h2>
          <p className="mt-5 text-base text-muted-foreground sm:text-lg">
            Contractors can quote, enroll, and register coverage from the field
            or office with a simple guided flow.
          </p>
        </div>

        <div className="mt-12 grid items-center gap-10 sm:mt-16 lg:grid-cols-12 lg:gap-12">
          <div className="space-y-5 lg:col-span-4">
            {bullets.map((b) => (
              <div key={b.t} className="flex gap-4 rounded-xl bg-background p-5 shadow-[var(--shadow-card)]">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy">
                  <b.icon className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <p className="font-semibold text-navy">{b.t}</p>
                  <p className="text-sm text-muted-foreground">{b.d}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center lg:col-span-4">
            <PhoneMockup />
          </div>

          <div className="lg:col-span-4">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-navy/70">
              Enrollment Flow
            </p>
            <h3 className="text-2xl font-bold text-navy sm:text-3xl">
              Quote. Enroll. Activate.
            </h3>
            <p className="mt-3 text-muted-foreground">
              A guided four-step flow your whole team can run.
            </p>
            <div className="mt-6 space-y-3">
              {steps.map((s) => (
                <div
                  key={s.n}
                  className="flex items-center gap-4 rounded-xl border border-border bg-background p-4 shadow-[var(--shadow-card)]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy text-sm font-bold text-gold">
                    {s.n}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-navy">{s.title}</p>
                    <p className="text-xs text-muted-foreground">{s.desc}</p>
                  </div>
                  <s.icon className="h-5 w-5 text-navy/40" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PhoneMockup() {
  return (
    <div className="relative w-[260px] sm:w-[280px]">
      <div className="overflow-hidden rounded-[2.5rem] bg-navy p-2 shadow-2xl ring-1 ring-black/5">
        <div className="rounded-[2rem] bg-background p-5">
          <div className="mb-4 flex items-center justify-between">
            <Logo className="h-7" />
            <div className="h-7 w-7 rounded-full bg-navy-soft" />
          </div>
          <p className="text-base font-bold text-navy">New Enrollment</p>
          <p className="mt-4 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
            Quote &amp; Sell
          </p>
          <div className="mt-2 rounded-xl border border-border p-4">
            <div className="flex items-center gap-2">
              <ScanLine className="h-4 w-4 text-navy" />
              <p className="text-sm font-semibold text-navy">Start a Quote</p>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">
              Add system details and pull live pricing.
            </p>
            <button className="mt-3 w-full rounded-lg bg-navy py-2.5 text-xs font-semibold text-navy-foreground">
              Begin Enrollment
            </button>
          </div>
          <p className="mt-5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
            Recent Sales
          </p>
          <div className="mt-2 space-y-2 text-xs">
            {[
              ["Smith Residence", "Active"],
              ["Johnson Home", "Active"],
              ["Williams Home", "Active"],
            ].map(([n, d]) => (
              <div key={n} className="flex justify-between border-b border-border pb-2">
                <span className="font-medium text-navy">{n}</span>
                <span className="text-gold">{d}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function CoverageBanner() {
  const items = [
    { icon: Home, t: "New & Used Systems", s: "Coverage up to 10 years old" },
    { icon: Wrench, t: "Parts & Labor", s: "Including compressor coverage" },
    { icon: ShieldCheck, t: "Flexible Terms", s: "Plans tailored to the job" },
    { icon: TrendingUp, t: "Easy to Attach", s: "Offered at point of sale" },
  ];
  return (
    <section className="bg-navy py-14 text-navy-foreground sm:py-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-gold">
            Coverage Options
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Protection for new and used HVAC systems.
          </h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div key={it.s} className="flex flex-col items-center text-center">
              <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full ring-1 ring-gold/50">
                <it.icon className="h-6 w-6 text-gold" strokeWidth={2} />
              </div>
              <p className="text-sm font-bold text-white">{it.t}</p>
              <p className="text-sm text-white/70">{it.s}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-[11px] text-white/50">
          Restrictions may apply. See contract for details.
        </p>
      </div>
    </section>
  );
}

function DifferentiatorCallouts() {
  return (
    <section className="bg-background py-14 sm:py-16">
      <div className="mx-auto grid max-w-7xl gap-5 px-5 sm:gap-6 md:grid-cols-2 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border-2 border-gold bg-gradient-to-br from-gold/15 via-gold/5 to-background p-7 shadow-[var(--shadow-card)] sm:p-9">
          <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-gold/10 blur-2xl" />
          <div className="relative flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold text-gold-foreground shadow-md">
              <FileCheck2 className="h-6 w-6" strokeWidth={2.2} />
            </div>
            <div>
              <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.22em] text-gold">
                HPP Advantage
              </p>
              <h3 className="text-xl font-bold text-navy sm:text-2xl">
                Home of the One-Page Rate Sheet
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                While competitors use complex rate books, HPP keeps it simple —
                one page, one glance, one quote.
              </p>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-navy/15 bg-navy p-7 text-navy-foreground shadow-[var(--shadow-card)] sm:p-9">
          <div className="absolute -right-8 -bottom-8 h-32 w-32 rounded-full bg-gold/10 blur-2xl" />
          <div className="relative flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold text-gold-foreground shadow-md">
              <Clock className="h-6 w-6" strokeWidth={2.2} />
            </div>
            <div>
              <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.22em] text-gold">
                Faster Activation
              </p>
              <h3 className="text-xl font-bold text-white sm:text-2xl">
                Coverage Activates in 30 Days
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/75 sm:text-base">
                Most competitors require 90 days. HPP gets your customers
                protected three times faster.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContractorNetwork() {
  const bullets = [
    { icon: TrendingUp, t: "Create an easy upsell on installs" },
    { icon: Repeat, t: "Build long-term customer retention" },
    { icon: Award, t: "Differentiate from competitors" },
    { icon: HandshakeIcon, t: "Give customers more confidence at close" },
  ];
  return (
    <section className="bg-background">
      <div className="mx-auto grid max-w-7xl items-stretch lg:grid-cols-2">
        <div className="relative min-h-[300px] sm:min-h-[400px] lg:min-h-[560px]">
          <img
            src={contractor}
            alt="HPP contractor in front of service van"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
            width={1024}
            height={1024}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
        </div>
        <div className="flex flex-col justify-center bg-navy-soft px-6 py-14 sm:py-16 lg:px-16">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-navy/70">
            For Contractors
          </p>
          <h2 className="text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">
            Turn Warranty Coverage Into a Contractor Growth Tool.
          </h2>
          <p className="mt-5 max-w-md text-muted-foreground">
            HPP isn&apos;t just protection — it&apos;s a sales lever. Use it to win
            more bids, lift ticket averages, and keep customers loyal long after
            the install is done.
          </p>
          <div className="mt-7 space-y-4">
            {bullets.map((b) => (
              <div key={b.t} className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-navy">
                  <b.icon className="h-4 w-4 text-gold" />
                </div>
                <span className="font-medium text-navy">{b.t}</span>
              </div>
            ))}
          </div>
          <a
            href="/contractor-signup"
            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-md bg-navy px-6 py-3.5 text-sm font-semibold text-navy-foreground transition-all hover:bg-navy/90 sm:w-fit"
          >
            Apply to Become a Contractor <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Homeowner() {
  return (
    <section className="bg-navy-soft">
      <div className="mx-auto grid max-w-7xl items-stretch lg:grid-cols-2">
        <div className="flex flex-col justify-center px-6 py-14 sm:py-16 lg:px-16">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-navy/70">
            For Homeowners
          </p>
          <h2 className="text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">
            Real protection.
            <br />
            Real peace of mind.
          </h2>
          <p className="mt-5 max-w-md text-muted-foreground">
            Whether your system is brand new or has a few years on it, HPP offers
            simple, dependable coverage so you&apos;re never caught off guard by
            an unexpected repair.
          </p>
          <a
            href="#"
            className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-md bg-navy px-6 py-3.5 text-sm font-semibold text-navy-foreground transition-all hover:bg-navy/90 sm:w-fit"
          >
            Learn More for Homeowners <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="relative min-h-[300px] sm:min-h-[360px] lg:min-h-[480px]">
          <img
            src={family}
            alt="Family at home enjoying HVAC protection"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
            width={1280}
            height={900}
          />
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    ["What does HPP cover?", "HPP covers parts, labor and compressor for qualifying new and used HVAC systems."],
    ["Can I offer HPP on every job?", "Most new installs and used systems up to 10 years old are eligible."],
    ["Do you cover older systems?", "Used systems up to 10 years old qualify for coverage."],
    ["How does enrollment work?", "Quote, enroll, and activate from the field or office in a short guided flow."],
    ["How do claims work?", "File from the field in the HPP app. Real humans review and process claims quickly."],
    ["Are there any inspection fees?", "No — HPP does not require inspections to enroll."],
  ];
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <section className="bg-background py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <p className="mb-10 text-center text-xs font-bold uppercase tracking-[0.25em] text-gold">
          Frequently Asked Questions
        </p>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {faqs.map(([q, a], i) => (
            <button
              key={q}
              onClick={() => setOpenIdx(openIdx === i ? null : i)}
              className="group rounded-xl border border-border bg-background p-5 text-left transition-all hover:border-gold/60 hover:shadow-[var(--shadow-card)]"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="text-sm font-semibold text-navy">{q}</span>
                <span
                  className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-border text-navy transition-transform ${
                    openIdx === i ? "rotate-45 bg-gold border-gold" : ""
                  }`}
                >
                  +
                </span>
              </div>
              {openIdx === i && (
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a}</p>
              )}
            </button>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-navy">
            View all FAQs <ArrowRight className="h-4 w-4 text-gold" />
          </a>
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
          Grow your business.
          <br />
          <span className="text-gold">Backed by HPP.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base text-white/75 sm:text-lg">
          Add revenue to every install and keep customers coming back —
          enroll jobs in minutes from anywhere.
        </p>
        <div className="mx-auto mt-9 flex w-full max-w-md flex-col items-center justify-center gap-3 sm:max-w-none sm:flex-row">
          <a
            href="/contractor-signup"
            className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-gold px-7 py-4 text-base font-semibold text-gold-foreground shadow-xl shadow-gold/30 transition-all hover:brightness-105 sm:w-auto"
          >
            Become an HPP Contractor <ArrowRight className="h-4 w-4" />
          </a>
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

function Footer() {
  const cols = [
    {
      h: "For Contractors",
      links: ["Become a Contractor", "Contractor Benefits", "How It Works", "Resources"],
    },
    {
      h: "For Homeowners",
      links: ["Homeowner Coverage", "File a Claim", "FAQs"],
    },
    { h: "Company", links: ["About Us", "Contact Us", "Careers"] },
  ];
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo className="h-12 brightness-0 invert" />
            <p className="mt-4 max-w-xs text-sm text-white/65">
              Coverage for new and used HVAC systems up to 10 years old.
            </p>
            <div className="mt-6 flex gap-3">
              {[Facebook, Instagram, Youtube, Linkedin].map((I, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-gold hover:text-gold-foreground"
                  aria-label="Social"
                >
                  <I className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.h}>
              <p className="mb-4 text-xs font-bold uppercase tracking-wider text-gold">{c.h}</p>
              <ul className="space-y-2.5">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-white/75 hover:text-white">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-wider text-gold">Contact Us</p>
            <ul className="space-y-3 text-sm text-white/75">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-gold" /> (855) 954-HVAC</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-gold" /> support@hvacprotectionplus.com</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-gold" /> Mon–Fri 8AM–6PM EST</li>
            </ul>
          </div>
        </div>
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row">
          <p>© 2025 HVAC Protection Plus. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <EnrollmentFlow />
        <CoverageBanner />
        <DifferentiatorCallouts />
        <ContractorNetwork />
        <Homeowner />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
