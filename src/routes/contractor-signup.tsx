import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ShieldCheck, Clock, UserCheck, ArrowRight, CheckCircle2 } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/contractor-signup")({
  head: () => ({
    meta: [
      { title: "Become an HPP Contractor — HVAC Protection Plus" },
      {
        name: "description",
        content:
          "Apply in under 2 minutes to become an HPP Contractor and start offering protection plans on installs, service calls, and maintenance visits.",
      },
      { property: "og:title", content: "Become an HPP Contractor" },
      {
        property: "og:description",
        content:
          "Get approved quickly and start offering protection plans on installs, service calls, and maintenance visits.",
      },
    ],
  }),
  component: ContractorSignupPage,
});

const HEAR_ABOUT = [
  "Referred by a Contractor",
  "HPP Sales Team",
  "Online Search",
  "Social Media",
  "Industry Event / Trade Show",
  "Email Outreach",
  "Other",
];

const ANNUAL_INSTALLS = ["0–249", "250–499", "500–999", "1,000+"];

const HVAC_BRANDS = [
  "Trane",
  "Carrier",
  "Lennox",
  "Rheem",
  "Ruud",
  "Goodman",
  "Amana",
  "York",
  "American Standard",
  "Daikin",
  "Mitsubishi",
  "Bosch",
  "Other",
];

const SERVICE_RATES = [
  "Up to $100/hr",
  "$100–$200/hr",
  "$200–$300/hr",
  "Over $300/hr",
];

const US_STATES = [
  "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY",
];

function Label({ children, required }: { children: React.ReactNode; required?: boolean }) {
  return (
    <label className="mb-1.5 block text-sm font-medium text-foreground">
      {children}
      {required && <span className="ml-0.5 text-destructive">*</span>}
    </label>
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="h-11 w-full rounded-md border border-input bg-background px-3.5 text-sm text-foreground shadow-sm transition-colors placeholder:text-muted-foreground focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
    />
  );
}

function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      {...props}
      className="h-11 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground shadow-sm transition-colors focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
    />
  );
}

function SectionCard({
  step,
  title,
  description,
  children,
}: {
  step: string;
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-border bg-card p-6 shadow-card sm:p-8 lg:p-10">
      <div className="mb-7 flex items-start gap-4 border-b border-border/70 pb-5">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-bold text-gold">
          {step}
        </span>
        <div>
          <h2 className="text-xl font-bold text-navy sm:text-2xl">{title}</h2>
          {description && (
            <p className="mt-1 text-sm text-muted-foreground">{description}</p>
          )}
        </div>
      </div>
      {children}
    </section>
  );
}

function ContractorSignupPage() {
  const [certified, setCertified] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!certified) return;
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-background">
        <SiteHeader />
        <main className="mx-auto flex max-w-2xl flex-col items-center px-5 py-24 text-center lg:py-32">
          <CheckCircle2 className="h-16 w-16 text-gold" strokeWidth={1.6} />
          <h1 className="mt-6 text-3xl font-bold text-navy sm:text-4xl">
            Application Received
          </h1>
          <p className="mt-4 max-w-lg text-base text-muted-foreground">
            Thank you for applying to become an HPP Contractor. An HPP team
            member will contact you regarding onboarding and activation.
          </p>
        </main>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-navy text-navy-foreground">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_oklch(0.78_0.16_75_/_0.12),_transparent_60%)]" />
          <div className="relative mx-auto max-w-4xl px-5 py-14 text-center sm:py-20 lg:px-8 lg:py-24">
            <span className="mx-auto mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-gold">
              <ShieldCheck className="h-3.5 w-3.5" /> Contractor Application
            </span>
            <h1 className="text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-6xl">
              Become an <span className="text-gold">HPP Contractor</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base text-white/75 sm:text-lg">
              Get approved quickly and start offering protection plans on
              installs, service calls, and maintenance visits.
            </p>
            <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-4 border-t border-white/10 pt-6 sm:grid-cols-3">
              {[
                { icon: Clock, label: "Apply in under 2 minutes" },
                { icon: UserCheck, label: "No inspectors required" },
                { icon: ShieldCheck, label: "Backed by HPP" },
              ].map((t) => (
                <div key={t.label} className="flex items-center justify-center gap-2.5">
                  <t.icon className="h-5 w-5 shrink-0 text-gold" />
                  <span className="text-sm font-medium text-white/90">{t.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form */}
        <section className="bg-navy-soft/40 py-14 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-3xl px-5 lg:px-8">
            <form onSubmit={handleSubmit} className="space-y-8 sm:space-y-10">
              {/* Contact Information */}
              <SectionCard step="1" title="Contact Information">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <Label required>First Name</Label>
                    <Input required name="firstName" autoComplete="given-name" />
                  </div>
                  <div>
                    <Label required>Last Name</Label>
                    <Input required name="lastName" autoComplete="family-name" />
                  </div>
                  <div>
                    <Label required>Email</Label>
                    <Input required type="email" name="email" autoComplete="email" />
                  </div>
                  <div>
                    <Label required>Phone</Label>
                    <Input required type="tel" name="phone" autoComplete="tel" />
                  </div>
                </div>
              </SectionCard>

              {/* Company Information */}
              <SectionCard step="2" title="Company Information">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <Label required>Company Name</Label>
                    <Input required name="companyName" autoComplete="organization" />
                  </div>
                  <div className="sm:col-span-2">
                    <Label required>Address</Label>
                    <Input required name="address" autoComplete="street-address" />
                  </div>
                  <div>
                    <Label required>City</Label>
                    <Input required name="city" autoComplete="address-level2" />
                  </div>
                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <Label required>State</Label>
                      <Select required name="state" defaultValue="">
                        <option value="" disabled>Select</option>
                        {US_STATES.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </Select>
                    </div>
                    <div>
                      <Label required>ZIP Code</Label>
                      <Input required name="zip" inputMode="numeric" autoComplete="postal-code" />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <Label>Website (Optional)</Label>
                    <Input type="url" name="website" placeholder="https://" autoComplete="url" />
                  </div>
                </div>
              </SectionCard>

              {/* Business Details */}
              <SectionCard step="3" title="Business Details">
                <div className="space-y-5">
                  <div>
                    <Label required>How did you hear about us?</Label>
                    <Select required name="hearAbout" defaultValue="">
                      <option value="" disabled>Select an option</option>
                      {HEAR_ABOUT.map((o) => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </Select>
                  </div>
                  <div>
                    <Label required>Number of Annual HVAC System Installs</Label>
                    <Select required name="annualInstalls" defaultValue="">
                      <option value="" disabled>Select a range</option>
                      {ANNUAL_INSTALLS.map((o) => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </Select>
                  </div>
                  <div>
                    <Label required>Primary HVAC Brand Installed</Label>
                    <Select required name="primaryBrand" defaultValue="">
                      <option value="" disabled>Select a brand</option>
                      {HVAC_BRANDS.map((o) => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </Select>
                  </div>
                  <div>
                    <Label required>Typical Hourly Service Rate</Label>
                    <Select required name="serviceRate" defaultValue="">
                      <option value="" disabled>Select a rate</option>
                      {SERVICE_RATES.map((o) => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </Select>
                  </div>
                </div>
              </SectionCard>

              {/* Primary Office Contact */}
              <SectionCard step="4" title="Primary Office Contact">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <Label required>Name</Label>
                    <Input required name="officeName" />
                  </div>
                  <div>
                    <Label required>Email</Label>
                    <Input required type="email" name="officeEmail" />
                  </div>
                  <div>
                    <Label required>Phone</Label>
                    <Input required type="tel" name="officePhone" />
                  </div>
                </div>
              </SectionCard>

              {/* Claims / Accounting Contact */}
              <SectionCard step="5" title="Claims / Accounting Contact">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <Label required>Name</Label>
                    <Input required name="claimsName" />
                  </div>
                  <div>
                    <Label required>Email</Label>
                    <Input required type="email" name="claimsEmail" />
                  </div>
                  <div>
                    <Label required>Phone</Label>
                    <Input required type="tel" name="claimsPhone" />
                  </div>
                </div>
              </SectionCard>

              {/* Submit */}
              <div className="rounded-2xl border border-border bg-card p-6 shadow-card sm:p-8">
                <label className="flex cursor-pointer items-start gap-3">
                  <input
                    type="checkbox"
                    checked={certified}
                    onChange={(e) => setCertified(e.target.checked)}
                    className="mt-0.5 h-5 w-5 shrink-0 cursor-pointer rounded border-input accent-gold"
                  />
                  <span className="text-sm font-medium text-foreground">
                    I certify that the information provided is accurate.
                  </span>
                </label>
                <button
                  type="submit"
                  disabled={!certified}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-gold px-6 py-4 text-base font-semibold text-gold-foreground shadow-lg shadow-gold/20 transition-all hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none"
                >
                  Submit Contractor Application <ArrowRight className="h-4 w-4" />
                </button>
                <p className="mt-4 text-center text-sm text-muted-foreground">
                  An HPP team member will contact you regarding onboarding and activation.
                </p>
              </div>
            </form>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
