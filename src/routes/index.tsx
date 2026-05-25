import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ShieldCheck,
  Clock,
  UserCheck,
  Smartphone,
  Headphones,
  TrendingUp,
  DollarSign,
  XCircle,
  Wrench,
  Home,
  Calendar,
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
} from "lucide-react";
import logo from "@/assets/hpp-logo.png";
import heroHvac from "@/assets/hero-hvac.jpg";
import contractor from "@/assets/contractor.jpg";
import family from "@/assets/family.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HPP HVAC Protection Plus — Coverage for New & Used HVAC Systems" },
      {
        name: "description",
        content:
          "Contractor-first HVAC protection programs with fast enrollment, mobile-ready tools, and coverage for new and used systems up to 10 years old.",
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
  "Company",
];

function Logo({ className = "" }: { className?: string }) {
  return <img src={logo} alt="HPP HVAC Protection Plus" className={className} />;
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <Logo className="h-11 w-auto" />
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
            href="#enroll"
            className="inline-flex items-center gap-2 rounded-md bg-gold px-5 py-2.5 text-sm font-semibold text-gold-foreground shadow-sm transition-all hover:brightness-105 hover:shadow-md"
          >
            Become a Contractor
          </a>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="rounded-md p-2 lg:hidden"
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
              href="#enroll"
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
      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-24">
        <div className="flex flex-col justify-center">
          <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-gold">
            <ShieldCheck className="h-3.5 w-3.5" /> National HVAC Protection Network
          </span>
          <h1 className="text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
            Protection for{" "}
            <span className="text-gold">New &amp; Used</span>{" "}
            HVAC Systems.
          </h1>
          <p className="mt-6 max-w-lg text-lg text-white/75">
            Contractor-first coverage with fast enrollment, mobile-ready tools, and
            support for systems up to 10 years old.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#enroll"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-gold px-6 py-3.5 text-base font-semibold text-gold-foreground shadow-lg shadow-gold/20 transition-all hover:brightness-105"
            >
              Become a HPP Contractor <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-gold/60 px-6 py-3.5 text-base font-semibold text-navy-foreground transition-colors hover:bg-white/5"
            >
              Request Pricing
            </a>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-5 border-t border-white/10 pt-8 sm:grid-cols-3">
            {trust.map((t) => (
              <div key={t.label} className="flex items-start gap-3">
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
              src={heroHvac}
              alt="Premium HVAC system at a modern home"
              className="h-full w-full object-cover"
              width={1280}
              height={1280}
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden max-w-xs rounded-xl bg-background p-5 shadow-2xl ring-1 ring-border sm:block">
            <div className="flex items-start gap-3">
              <div className="rounded-lg bg-navy/5 p-2.5">
                <ShieldCheck className="h-7 w-7 text-navy" strokeWidth={2.2} />
                <div className="absolute -mt-3 ml-3.5 h-3 w-3 rounded-full bg-gold ring-2 ring-background" />
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
      title: "Competitive Labor Rates",
      desc: "Up to $300/hr labor reimbursement.",
    },
    {
      icon: XCircle,
      title: "No Red Tape",
      desc: "No inspectors. No hoops. Just fast, simple enrollment.",
    },
    {
      icon: Headphones,
      title: "Real Human Support",
      desc: "Contractor support when you need it.",
    },
    {
      icon: Smartphone,
      title: "Mobile First",
      desc: "Enroll, manage, and get paid from anywhere.",
    },
    {
      icon: TrendingUp,
      title: "More Opportunities",
      desc: "Offer protection on new installs and used systems up to 10 years old.",
    },
  ];
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-gold">
            Built Different. Built for the Trade.
          </p>
          <h2 className="text-4xl font-bold text-navy lg:text-5xl">
            Everything you need. None of what you don&apos;t.
          </h2>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {items.map((it) => (
            <div key={it.title} className="text-center">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-navy shadow-[var(--shadow-card)]">
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
    { n: 1, icon: PackageCheck, title: "Choose Program", desc: "Pick the protection plan that matches the job." },
    { n: 2, icon: ScanLine, title: "Add Equipment", desc: "Smart Scan captures system details in seconds." },
    { n: 3, icon: FileCheck2, title: "Select Coverage", desc: "Tailor terms for new or used systems." },
    { n: 4, icon: Zap, title: "Activate Protection", desc: "Coverage is live the moment you confirm." },
  ];
  return (
    <section id="enroll" className="bg-navy-soft py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-navy/70">
              For Contractors
            </p>
            <h2 className="text-4xl font-bold text-navy lg:text-5xl">
              Power up your business with HPP.
            </h2>
            <div className="mt-8 space-y-5">
              {[
                ["Coverage that builds trust", "Give your customers confidence with industry-leading protection."],
                ["Seamless process", "Enroll in minutes with our Smart Scan technology."],
                ["Generate commissioned revenue", "Earn more on every job with our contractor-first program."],
                ["Built for the field", "Designed by contractors, for contractors."],
              ].map(([t, d]) => (
                <div key={t} className="flex gap-3">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-gold" strokeWidth={3} />
                  <div>
                    <p className="font-semibold text-navy">{t}</p>
                    <p className="text-sm text-muted-foreground">{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Phone mockup */}
          <div className="flex justify-center lg:col-span-4">
            <PhoneMockup />
          </div>

          <div className="lg:col-span-4">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-navy/70">
              Enrollment Flow
            </p>
            <h3 className="text-3xl font-bold text-navy">
              Smart Enrollment.
              <br />
              Instant Coverage.
            </h3>
            <p className="mt-3 text-muted-foreground">
              Scan equipment. Get coverage. In seconds.
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
    <div className="relative w-[280px]">
      <div className="overflow-hidden rounded-[2.5rem] bg-navy p-2 shadow-2xl ring-1 ring-black/5">
        <div className="rounded-[2rem] bg-background p-5">
          <div className="mb-4 flex items-center justify-between">
            <Logo className="h-7" />
            <div className="h-7 w-7 rounded-full bg-navy-soft" />
          </div>
          <p className="text-base font-bold text-navy">Good morning, John</p>
          <p className="mt-4 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
            New Enrollment
          </p>
          <div className="mt-2 rounded-xl border border-border p-4">
            <div className="flex items-center gap-2">
              <ScanLine className="h-4 w-4 text-navy" />
              <p className="text-sm font-semibold text-navy">Smart Scan</p>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">
              Scan equipment to start a new enrollment.
            </p>
            <button className="mt-3 w-full rounded-lg bg-navy py-2.5 text-xs font-semibold text-navy-foreground">
              Start Scan
            </button>
          </div>
          <p className="mt-5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
            Recent Enrollments
          </p>
          <div className="mt-2 space-y-2 text-xs">
            {[
              ["Smith Residence", "05/17/24"],
              ["Johnson Home", "05/12/24"],
              ["Williams Home", "05/09/24"],
            ].map(([n, d]) => (
              <div key={n} className="flex justify-between border-b border-border pb-2">
                <span className="font-medium text-navy">{n}</span>
                <span className="text-muted-foreground">{d}</span>
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
    { icon: DollarSign, t: "Up to $300/hr", s: "Labor Reimbursement" },
    { icon: Wrench, t: "Parts, Labor &", s: "Compressor Coverage" },
    { icon: Home, t: "New & Used Systems", s: "Up to 10 Years Old" },
    { icon: XCircle, t: "No Age Restrictions", s: "On Common Components*" },
    { icon: Calendar, t: "Systems Up to", s: "10 Years Old" },
  ];
  return (
    <section className="bg-navy py-14 text-navy-foreground">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <p className="mb-10 text-center text-xs font-bold uppercase tracking-[0.25em] text-gold">
          Coverage That Works As Hard As You Do.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
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
          *Restrictions may apply. See contract for details.
        </p>
      </div>
    </section>
  );
}

function ContractorNetwork() {
  return (
    <section className="bg-background">
      <div className="mx-auto grid max-w-7xl items-stretch lg:grid-cols-2">
        <div className="relative min-h-[400px] lg:min-h-[560px]">
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
        <div className="flex flex-col justify-center bg-navy-soft px-6 py-16 lg:px-16">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-navy/70">
            Stronger Together.
          </p>
          <h2 className="text-4xl font-bold text-navy lg:text-5xl">
            Join the HPP Contractor Network.
          </h2>
          <p className="mt-5 max-w-md text-muted-foreground">
            Partner with a growing network of elite HVAC professionals and give your
            customers the protection they deserve — while growing your business.
          </p>
          <div className="mt-7 space-y-3">
            {[
              "Increase close rates",
              "Boost customer satisfaction",
              "Get backed by a company that pays",
            ].map((b) => (
              <div key={b} className="flex items-center gap-3">
                <Check className="h-5 w-5 text-gold" strokeWidth={3} />
                <span className="font-medium text-navy">{b}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 grid max-w-md grid-cols-3 gap-4 border-y border-border py-6">
            {[
              ["2,400+", "Contractors"],
              ["48", "States Served"],
              ["98%", "Claim Approval"],
            ].map(([n, l]) => (
              <div key={l}>
                <p className="text-2xl font-bold text-navy">{n}</p>
                <p className="text-xs text-muted-foreground">{l}</p>
              </div>
            ))}
          </div>
          <a
            href="#enroll"
            className="mt-8 inline-flex w-fit items-center gap-2 rounded-md bg-navy px-6 py-3.5 text-sm font-semibold text-navy-foreground transition-all hover:bg-navy/90"
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
        <div className="flex flex-col justify-center px-6 py-16 lg:px-16">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-navy/70">
            For Homeowners
          </p>
          <h2 className="text-4xl font-bold text-navy lg:text-5xl">
            Real protection.
            <br />
            Real peace of mind.
          </h2>
          <p className="mt-5 max-w-md text-muted-foreground">
            Whether your system is new or has a few years on it, HPP has you covered
            with simple, comprehensive protection for new and used systems up to 10
            years old.
          </p>
          <a
            href="#"
            className="mt-7 inline-flex w-fit items-center gap-2 rounded-md bg-navy px-6 py-3.5 text-sm font-semibold text-navy-foreground transition-all hover:bg-navy/90"
          >
            Learn More for Homeowners <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="relative min-h-[360px] lg:min-h-[480px]">
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
    ["How does the Smart Scan work?", "Scan equipment tags with the mobile app and we pre-fill enrollment in seconds."],
    ["Can I offer HPP on every job?", "Yes — most new installs and used systems up to 10 years old are eligible."],
    ["Do you cover older systems?", "Used systems up to 10 years old qualify for coverage."],
    ["How do claims work?", "File from the field in the HPP app. Real humans review and approve quickly."],
    ["How do I get paid?", "Direct deposit on approved claims, typically within days."],
    ["Are there any inspection fees?", "No — HPP does not require inspections to enroll."],
  ];
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <section className="bg-background py-20 lg:py-28">
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
    <section className="relative overflow-hidden bg-navy py-20 text-navy-foreground lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_oklch(0.78_0.16_75_/_0.15),_transparent_70%)]" />
      <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
        <ShieldCheck className="mx-auto mb-6 h-12 w-12 text-gold" strokeWidth={1.8} />
        <h2 className="text-4xl font-bold leading-tight lg:text-6xl">
          Grow your business.
          <br />
          <span className="text-gold">Backed by HPP.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-white/75">
          Join thousands of contractors enrolling jobs in minutes — right from the field.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#enroll"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-gold px-7 py-4 text-base font-semibold text-gold-foreground shadow-xl shadow-gold/30 transition-all hover:brightness-105"
          >
            Become a HPP Contractor <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="tel:8559544822"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 px-7 py-4 text-base font-semibold text-navy-foreground transition-colors hover:bg-white/5"
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
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-gold" /> Claims: (855) 954-HVAC</li>
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
        <ContractorNetwork />
        <Homeowner />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
