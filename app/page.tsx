import Image from "next/image";
import {
  ArrowRight,
  Baby,
  Brain,
  Clock,
  GraduationCap,
  Mail,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  Pill,
  ShieldCheck,
} from "lucide-react";
import { doctor } from "@/lib/doctor";
import StickyContactBar from "@/components/StickyContactBar";
import SocialLinks from "@/components/SocialLinks";
import MobileMenu from "@/components/MobileMenu";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";

const icons = {
  brain: Brain,
  pill: Pill,
  message: MessageCircle,
  baby: Baby,
} as const;

function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-10">
      <p className="text-sm font-semibold uppercase tracking-widest text-[#6B2737]">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-3xl font-semibold text-[#4A1C28] md:text-4xl">
        {title}
      </h2>
      <div className="mt-4 h-1 w-12 rounded-full bg-[#6B2737]" />
    </div>
  );
}

export default function Home() {
  const phoneHref = `tel:${doctor.contact.phone.replace(/\s/g, "")}`;

  return (
    <main>
      {/* NAV */}
      <JsonLd />

      <nav className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-md">
        <div className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a
            href="#top"
            className="font-serif text-lg font-semibold text-[#4A1C28]"
          >
            {doctor.name}
          </a>

          <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <a
              className="transition hover:text-[#6B2737]"
              href="#about"
            >
              About
            </a>

            <a
              className="transition hover:text-[#6B2737]"
              href="#education"
            >
              Education
            </a>

            <a
              className="transition hover:text-[#6B2737]"
              href="#practice"
            >
              Practice
            </a>

            <a
              className="transition hover:text-[#6B2737]"
              href="#services"
            >
              Services
            </a>

            <a
              className="transition hover:text-[#6B2737]"
              href="#faq"
            >
              FAQ
            </a>

            <a
              className="transition hover:text-[#6B2737]"
              href={doctor.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              Videos
            </a>
          </div>

          <a
            href="#contact"
            className="hidden rounded-full bg-[#6B2737] px-5 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-[#4A1C28] md:inline-block"
          >
            Book appointment
          </a>

          <MobileMenu />
        </div>
      </nav>

      {/* HERO */}
      <header
        id="top"
        className="relative overflow-hidden bg-gradient-to-br from-[#F6ECEE] via-white to-[#FBF8F3]"
      >
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#E8C8D0]/40 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-[#F0DDE1]/50 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-[1.3fr_1fr] md:py-28">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#E6D1D7] bg-white px-4 py-1.5 text-xs font-medium text-[#6B2737] shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#6B2737]" />
              Accepting new patients
            </span>

            <h1 className="mt-6 text-4xl font-semibold leading-tight text-[#4A1C28] md:text-6xl">
              {doctor.name}
            </h1>

            <p className="mt-3 text-xl text-[#6B2737]">
              {doctor.title}
            </p>

            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
              {doctor.tagline}
            </p>

            <p className="mt-2 flex items-center gap-2 text-sm text-slate-500">
              <ShieldCheck className="h-4 w-4 text-[#6B2737]" />
              {doctor.registration}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#6B2737] px-6 py-3 font-medium text-white shadow-lg shadow-[#6B2737]/20 transition hover:bg-[#4A1C28]"
              >
                Book an appointment
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href={phoneHref}
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 font-medium text-slate-700 transition hover:border-[#6B2737] hover:text-[#6B2737]"
              >
                <Phone className="h-4 w-4" />
                Call now
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="rounded-[2rem] bg-white/70 p-1 shadow-2xl shadow-[#4A1C28]/10 ring-1 ring-[#E6D1D7]">
              <Image
                src="/doctor.jpg"
                alt={`Portrait of ${doctor.name}`}
                width={480}
                height={560}
                priority
                className="h-80 w-72 rounded-[1.75rem] object-cover object-top md:h-[26rem] md:w-80"
              />
            </div>
          </div>
        </div>
      </header>

      {/* HIGHLIGHTS */}
      <section className="mx-auto -mt-10 max-w-5xl px-6">
        <div className="relative grid grid-cols-1 divide-y divide-slate-100 rounded-2xl border border-slate-100 bg-white shadow-xl shadow-slate-900/5 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {doctor.highlights.map((h) => (
            <div key={h.label} className="px-6 py-6 text-center">
              <p className="font-serif text-3xl font-semibold text-[#6B2737]">
                {h.value}
              </p>

              <p className="mt-1 text-sm text-slate-500">
                {h.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="mx-auto max-w-6xl px-6 py-20"
      >
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="Professional Summary"
          />

          <p className="max-w-3xl text-lg leading-relaxed text-slate-600">
            {doctor.about}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {doctor.interests.map((i) => (
              <span
                key={i}
                className="rounded-full bg-[#F6ECEE] px-4 py-1.5 text-sm text-[#6B2737] ring-1 ring-[#E6D1D7]"
              >
                {i}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* EDUCATION */}
      <section
        id="education"
        className="bg-white py-20"
      >
        <Reveal>
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeading
              eyebrow="Background"
              title="Education & Qualifications"
            />

            <ol className="relative ml-3 space-y-8 border-l-2 border-[#E6D1D7]">
              {doctor.education.map((e) => (
                <li
                  key={e.degree}
                  className="relative pl-8"
                >
                  <span className="absolute -left-[13px] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#6B2737] text-white ring-4 ring-white">
                    <GraduationCap className="h-3.5 w-3.5" />
                  </span>

                  <p className="text-sm font-semibold text-[#6B2737]">
                    {e.year}
                  </p>

                  <h3 className="mt-1 font-sans text-lg font-semibold text-slate-900">
                    {e.degree}
                  </h3>

                  <p className="text-slate-600">
                    {e.institution}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </section>

      {/* PRACTICE */}
      <section
        id="practice"
        className="mx-auto max-w-6xl px-6 py-20"
      >
        <Reveal>
          <SectionHeading
            eyebrow="Practice"
            title="Current Hospital / Clinic"
          />

          <div className="grid gap-6 md:grid-cols-2">
            {doctor.affiliations.map((a) => {
              const q = encodeURIComponent(a.mapQuery);

              return (
                <div
                  key={a.name}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
                >
                  <div className="p-7">
                    <h3 className="font-sans text-xl font-semibold text-slate-900">
                      {a.name}
                    </h3>

                    <p className="mt-1 text-[#6B2737]">
                      {a.role}
                    </p>

                    <ul className="mt-5 space-y-3 text-slate-600">
                      <li className="flex gap-3">
                        <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#6B2737]" />
                        {a.address}
                      </li>

                      <li className="flex gap-3">
                        <Clock className="mt-0.5 h-5 w-5 shrink-0 text-[#6B2737]" />
                        {a.timings}
                      </li>
                    </ul>

                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${q}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#6B2737] hover:text-[#4A1C28]"
                    >
                      <Navigation className="h-4 w-4" />
                      Get directions
                    </a>
                  </div>

                  <iframe
                    title={`Map showing ${a.name}`}
                    src={`https://www.google.com/maps?q=${q}&output=embed`}
                    className="h-64 w-full border-t border-slate-200"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
              );
            })}
          </div>
        </Reveal>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="bg-white py-20"
      >
        <Reveal>
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeading
              eyebrow="Care"
              title="Services Offered"
            />

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {doctor.services.map((s) => {
                const Icon =
                  icons[s.icon as keyof typeof icons] ?? Brain;

                return (
                  <div
                    key={s.title}
                    className="group rounded-2xl border border-slate-200 bg-slate-50/50 p-6 transition hover:-translate-y-1 hover:border-[#E6D1D7] hover:bg-white hover:shadow-lg"
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#F6ECEE] text-[#6B2737] transition group-hover:bg-[#6B2737] group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3 className="font-sans text-lg font-semibold text-slate-900">
                      {s.title}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {s.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <SectionHeading
            eyebrow="Process"
            title="What to expect"
          />

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                n: "01",
                t: "Book",
                d: "Call, WhatsApp or email to choose a convenient time.",
              },
              {
                n: "02",
                t: "Consultation",
                d: "A confidential, unhurried conversation to understand your concerns.",
              },
              {
                n: "03",
                t: "Care plan",
                d: "A clear treatment plan explained to you, with regular follow-up.",
              },
            ].map((s) => (
              <div
                key={s.n}
                className="rounded-2xl border border-slate-200 bg-white p-7"
              >
                <p className="font-serif text-4xl font-semibold text-[#9B5A68]">
                  {s.n}
                </p>

                <h3 className="mt-3 font-sans text-lg font-semibold text-slate-900">
                  {s.t}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {s.d}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="mx-auto max-w-3xl px-6 py-20"
      >
        <Reveal>
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently Asked Questions"
          />

          <div className="space-y-3">
            {doctor.faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-xl border border-slate-200 bg-white p-5 transition open:shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-slate-900 [&::-webkit-details-marker]:hidden">
                  {f.q}

                  <span className="text-2xl leading-none text-[#6B2737] transition group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </Reveal>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="bg-[#4A1C28] py-20 text-white"
      >
        <Reveal>
          <div className="mx-auto max-w-6xl px-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#E8C8D0]">
              Contact
            </p>

            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">
              Book a consultation
            </h2>

            <p className="mt-4 max-w-xl text-white/70">
              Reach out by phone or email to schedule an appointment.
            </p>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              <a
                href={phoneHref}
                className="flex min-w-0 items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#E8C8D0]">
                  <Phone className="h-5 w-5" />
                </span>

                <span className="min-w-0">
                  <span className="block text-sm text-white/60">Phone</span>
                  <span className="block whitespace-nowrap text-sm font-medium sm:text-base">
                    {doctor.contact.phone}
                  </span>
                </span>
              </a>

              <a
                href={`mailto:${doctor.contact.email}`}
                className="flex min-w-0 items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#E8C8D0]">
                  <Mail className="h-5 w-5" />
                </span>

                <span className="min-w-0">
                  <span className="block text-sm text-white/60">Email</span>
                  <span className="block whitespace-nowrap text-sm font-medium sm:text-base">
                    {doctor.contact.email}
                  </span>
                </span>
              </a>

              <a
                href={`https://wa.me/${doctor.contact.whatsapp}?text=${encodeURIComponent(
                  doctor.contact.whatsappMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-w-0 items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#E8C8D0]">
  <MessageCircle className="h-5 w-5" />
</span>

                <span className="min-w-0">
                  <span className="block text-sm text-white/60">WhatsApp</span>
                  <span className="block text-lg font-medium">Chat with us</span>
                </span>
              </a>
            </div>

            <div className="mt-10">
              <p className="mb-3 text-sm text-white/60">
                Follow for mental health insights and updates
              </p>

              <SocialLinks />
            </div>

            <p className="mt-8 max-w-2xl rounded-xl border border-amber-300/20 bg-amber-300/10 p-4 text-sm text-amber-100">
              Please do not share sensitive medical details over email. If
              you are in a crisis or emergency, contact your local emergency
              services or the nearest hospital immediately.
            </p>
          </div>
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#2F1119] py-8 pb-28 text-center text-xs text-white/50 md:pb-8">
        <SocialLinks className="mb-5 justify-center" />

        <p>
          © {new Date().getFullYear()} {doctor.name}. All rights reserved.
        </p>

        <p className="mt-1">
          The information shared here is meant to guide you, not to replace a
          personal consultation. Please book an appointment for advice
          specific to you.
        </p>
      </footer>

      <StickyContactBar />
    </main>
  );
}
