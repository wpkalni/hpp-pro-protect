import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Phone,
  Mail,
  ShieldCheck,
  ClipboardList,
  Search,
  Wrench,
  Send,
  DollarSign,
  Clock,
  Check,
  Plus,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import claimsHero from "@/assets/claims-hero.jpg";

export const Route = createFileRoute("/file-a-claim")({
  head: () => ({
    meta: [
      { title: "File a Claim — HVAC Protection Plus" },
      {
        name: "description",
        content:
          "HPP makes the claims process simple for contractors and homeowners. Fast resolution, no prior authorization required.",
      },
      { property: "og:title", content: "File a Claim — HVAC Protection Plus" },
      {
        property: "og:description",
        content:
          "Simple claims. Fast resolution. Repairs without prior authorization.",
      },
    ],
  }),
  component: FileAClaimPage,
});

function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-navy-foreground">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_oklch(0.78_0.16_75_/_0.12),_transparent_60%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:py-16 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-24">
        <div className="flex flex-col justify-center text-center lg:text-left">
          <span className="mx-auto mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-gold lg:mx-0">
            <ShieldCheck className="h-3.5 w-3.5" /> Claims Support
          </span>
          <h1 className="text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl">
            Simple Claims.{" "}
            <span className="text-gold">Fast Resolution.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base text-white/75 sm:text-lg lg:mx-0">
            HPP makes the claims process simple for contractors and homeowners.
            Repairs can be completed without prior authorization, helping get
            systems back up and running quickly.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="tel:8776746123"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-gold px-6 py-3.5 text-base font-semibold text-gold-foreground shadow-lg shadow-gold/20 transition-all hover:brightness-105 sm:w-auto"
            >
              <Phone className="h-4 w-4" /> Call Claims Team
            </a>
            <a
              href="mailto:claims@lsreinsure.com"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-gold/60 px-6 py-3.5 text-base font-semibold text-navy-foreground transition-colors hover:bg-white/5 sm:w-auto"
            >
              <Mail className="h-4 w-4" /> Email Claims
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10">
            <img
              src={claimsHero}
              alt="HVAC technician reviewing service information on a tablet"
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

function ClaimsContact() {
  const cards = [
    {
      icon: Phone,
      label: "Claims Phone",
      value: "(877) 674-6123",
      sub: "Monday–Friday, 10am–7pm ET",
      href: "tel:8776746123",
    },
    {
      icon: Mail,
      label: "Claims Email",
      value: "claims@lsreinsure.com",
      sub: "For claim submissions",
      href: "mailto:claims@lsreinsure.com",
    },
    {
      icon: Mail,
      label: "Support Email",
      value: "support@hvacprotectionplus.com",
      sub: "For general questions",
      href: "mailto:support@hvacprotectionplus.com",
    },
  ];
  return (
    <section className="bg-background py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-gold">
            Claims Contact
          </p>
          <h2 className="text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">
            Need Assistance?
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {cards.map((c) => (
            <a
              key={c.label}
              href={c.href}
              className="group rounded-2xl border border-border bg-background p-7 text-center shadow-[var(--shadow-card)] transition-all hover:-translate-y-0.5 hover:border-gold/60 hover:shadow-[var(--shadow-elev)]"
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-navy transition-colors group-hover:bg-gold">
                <c.icon
                  className="h-6 w-6 text-gold transition-colors group-hover:text-gold-foreground"
                  strokeWidth={2.2}
                />
              </div>
              <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.22em] text-muted-foreground">
                {c.label}
              </p>
              <p className="text-base font-semibold text-navy">{c.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{c.sub}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClaimsProcess() {
  const steps = [
    {
      n: 1,
      icon: ClipboardList,
      title: "Customer Contacts Contractor",
      desc: "Customer contacts contractor when a covered system needs repair.",
    },
    {
      n: 2,
      icon: Search,
      title: "Contractor Diagnoses",
      desc: "Contractor diagnoses the issue and identifies the required repair.",
    },
    {
      n: 3,
      icon: Wrench,
      title: "Repair Completed",
      desc: "Repair is completed. No prior authorization required.",
    },
    {
      n: 4,
      icon: Send,
      title: "Submit Invoice",
      desc: "Contractor submits an invoice to claims@lsreinsure.com or calls (877) 674-6123.",
    },
    {
      n: 5,
      icon: DollarSign,
      title: "Claim Reviewed & Paid",
      desc: "Claim is reviewed and contractor is paid via ACH.",
    },
  ];
  return (
    <section className="bg-navy-soft py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-navy/70">
            How Claims Work
          </p>
          <h2 className="text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">
            Simple 5-Step Claims Process
          </h2>
        </div>
        <div className="mt-12 sm:mt-16">
          <div className="relative">
            {/* desktop connector line */}
            <div className="absolute left-0 right-0 top-[3.25rem] hidden h-px bg-border lg:block" />
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
              {steps.map((s, i) => (
                <div
                  key={s.n}
                  className="relative flex flex-col items-center text-center"
                >
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-navy shadow-lg">
                    <s.icon
                      className="h-7 w-7 text-gold"
                      strokeWidth={2}
                    />
                  </div>
                  <div className="mt-6 flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold text-[10px] font-bold text-gold-foreground">
                      {s.n}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-gold">
                      Step {s.n}
                    </span>
                  </div>
                  <h3 className="mt-3 text-base font-bold text-navy">
                    {s.title}
                  </h3>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function NoAuthRequired() {
  return (
    <section className="bg-background py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-gold">
              Faster Claims
            </p>
            <h2 className="text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">
              No Prior Authorization Required
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Unlike many programs, HPP allows contractors to complete approved
              repairs first and submit claims afterward, helping customers get
              service faster.
            </p>
            <div className="mt-8 space-y-4">
              {[
                "Repairs start immediately — no waiting on approvals",
                "Submit claims after the work is done",
                "Faster turnaround for homeowners",
                "Less paperwork, more productivity",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-navy">
                    <Check className="h-3 w-3 text-gold" strokeWidth={3} />
                  </div>
                  <span className="text-base text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl bg-navy p-8 text-navy-foreground shadow-2xl sm:p-12">
            <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-gold/10 blur-3xl" />
            <div className="relative">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gold text-gold-foreground shadow-lg">
                <Clock className="h-8 w-8" strokeWidth={2} />
              </div>
              <p className="text-sm font-bold uppercase tracking-wider text-gold">
                HPP Advantage
              </p>
              <h3 className="mt-2 text-2xl font-bold sm:text-3xl">
                Speed matters when a system is down.
              </h3>
              <p className="mt-4 text-base text-white/75">
                Our no-authorization policy means contractors can move fast,
                homeowners get relief sooner, and claims are handled efficiently
                after the repair.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    {
      q: "How do claims start?",
      a: "Claims begin when the servicing contractor completes the repair and submits an invoice.",
    },
    {
      q: "Who submits the claim?",
      a: "The servicing contractor submits the claim on behalf of the homeowner.",
    },
    {
      q: "What information is needed?",
      a: "Customer information, contract information, equipment information, and repair diagnosis.",
    },
    {
      q: "Is prior authorization required?",
      a: "No. HPP does not require prior authorization for approved repairs.",
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
            Claims Frequently Asked Questions
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
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {a}
                </p>
              )}
            </button>
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
        <ShieldCheck className="mx-auto mb-6 h-12 w-12 text-gold" strokeWidth={1.8} />
        <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-6xl">
          Need Help With a Claim?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base text-white/75 sm:text-lg">
          Our claims team is ready to assist contractors with fast claim
          processing and support.
        </p>
        <div className="mx-auto mt-9 flex w-full max-w-md flex-col items-center justify-center gap-3 sm:max-w-none sm:flex-row">
          <a
            href="tel:8776746123"
            className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-gold px-7 py-4 text-base font-semibold text-gold-foreground shadow-xl shadow-gold/30 transition-all hover:brightness-105 sm:w-auto"
          >
            <Phone className="h-4 w-4" /> Call Claims Team
          </a>
          <a
            href="mailto:claims@lsreinsure.com"
            className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-white/20 px-7 py-4 text-base font-semibold text-navy-foreground transition-colors hover:bg-white/5 sm:w-auto"
          >
            <Mail className="h-4 w-4" /> Send Email
          </a>
        </div>
      </div>
    </section>
  );
}

function FileAClaimPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <ClaimsContact />
        <ClaimsProcess />
        <NoAuthRequired />
        <FAQ />
        <FinalCTA />
      </main>
      <SiteFooter />
    </div>
  );
}
