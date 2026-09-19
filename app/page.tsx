import { doctor } from "@/lib/doctor";

const Section = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
  <section id={id} className="mx-auto max-w-5xl px-6 py-14">
    <h2 className="mb-6 text-2xl font-semibold text-teal-800">{title}</h2>
    {children}
  </section>
);

export default function Home() {
  const initials = doctor.name.replace("Dr. ", "").split(" ").map((n) => n[0]).join("");

  return (
    <main className="bg-stone-50 text-stone-800">
      {/* Nav */}
      <nav className="sticky top-0 z-10 border-b bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
          <span className="font-semibold text-teal-800">{doctor.name}</span>
          <div className="flex gap-5 text-sm">
            <a href="#education">Education</a>
            <a href="#practice">Practice</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 py-16 md:flex-row">
        <div className="flex h-40 w-40 shrink-0 items-center justify-center rounded-full bg-teal-100 text-4xl font-bold text-teal-800">
          {initials}
        </div>
        <div>
          <h1 className="text-4xl font-bold">{doctor.name}</h1>
          <p className="mt-1 text-lg text-teal-700">{doctor.title}</p>
          <p className="mt-1 text-sm text-stone-500">{doctor.registration}</p>
          <p className="mt-4 max-w-xl">{doctor.about}</p>
          <a href="#contact" className="mt-6 inline-block rounded-lg bg-teal-700 px-5 py-2 text-white hover:bg-teal-800">
            Book an appointment
          </a>
        </div>
      </header>

      <Section id="education" title="Education & Qualifications">
        <ul className="space-y-3">
          {doctor.education.map((e) => (
            <li key={e.degree} className="rounded-lg border bg-white p-4">
              <p className="font-medium">{e.degree}</p>
              <p className="text-sm text-stone-600">{e.institution} · {e.year}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="practice" title="Current Hospital / Clinic">
        <div className="grid gap-4 md:grid-cols-2">
          {doctor.affiliations.map((a) => (
            <div key={a.name} className="rounded-lg border bg-white p-4">
              <p className="font-medium">{a.name}</p>
              <p className="text-sm text-teal-700">{a.role}</p>
              <p className="mt-2 text-sm">{a.address}</p>
              <p className="text-sm text-stone-600">{a.timings}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="services" title="Services Offered">
        <div className="grid gap-4 md:grid-cols-2">
          {doctor.services.map((s) => (
            <div key={s.title} className="rounded-lg border bg-white p-4">
              <p className="font-medium">{s.title}</p>
              <p className="mt-1 text-sm text-stone-600">{s.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="contact" title="Contact">
        <div className="rounded-lg border bg-white p-6">
          <p>
            Email:{" "}
            <a className="text-teal-700 underline" href={`mailto:${doctor.contact.email}`}>
              {doctor.contact.email}
            </a>
          </p>
          <p className="mt-2">
            Phone:{" "}
            <a className="text-teal-700 underline" href={`tel:${doctor.contact.phone.replace(/\s/g, "")}`}>
              {doctor.contact.phone}
            </a>
          </p>
          <p className="mt-4 text-xs text-stone-500">
            Please do not share sensitive medical details over email. If you are in a crisis or emergency,
            contact your local emergency services or the nearest hospital immediately.
          </p>
        </div>
      </Section>

      <footer className="border-t py-6 text-center text-xs text-stone-500">
        © {new Date().getFullYear()} {doctor.name}. This website is for information only and is not a substitute
        for professional medical advice.
      </footer>
    </main>
  );
}