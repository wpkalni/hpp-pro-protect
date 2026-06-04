import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";
import logo from "@/assets/hpp-logo.png";

export function SiteFooter() {
  const cols = [
    {
      h: "For Contractors",
      links: ["Become a Contractor", "Contractor Benefits", "How It Works", "Resources"],
    },
    { h: "For Homeowners", links: ["Homeowner Coverage", "File a Claim", "FAQs"] },
    { h: "Company", links: [
      { label: "Why We Built HPP", href: "/why-we-built-hpp" },
      { label: "Contact Us", href: "#" },
      { label: "Careers", href: "#" },
    ] },
  ];
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <img src={logo} alt="HPP HVAC Protection Plus" className="h-12 brightness-0 invert" />
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
