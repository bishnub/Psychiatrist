import { doctor } from "@/lib/doctor";

const SITE = "https://www.laxmanbhagat.com.np";

export default function JsonLd() {
  const physician = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": `${SITE}/#physician`,
    name: "Dr. Laxman Bhagat",
    url: SITE,
    image: `${SITE}/doctor.jpg`,
    description:
      "Consultant Psychiatrist at Birat Teaching Hospital, Biratnagar, Nepal. MD Psychiatry, AIIMS Delhi.",
    medicalSpecialty: "Psychiatric",
    telephone: "+977-9807302924",
    email: "info@laxmanbhagat.com.np",
    knowsLanguage: ["Nepali", "English", "Hindi", "Maithili", "Bhojpuri"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Birat Teaching Hospital, Tankisinuwari",
      addressLocality: "Biratnagar",
      addressRegion: "Koshi Province",
      postalCode: "56613",
      addressCountry: "NP",
    },
    geo: {
        "@type": "GeoCoordinates",
        latitude: 26.5240888,
        longitude: 87.277822,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
    ],
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "All India Institute of Medical Sciences, Delhi" },
      { "@type": "CollegeOrUniversity", name: "Nobel Medical College Teaching Hospital, Biratnagar" },
    ],
    sameAs: [
      "https://www.facebook.com/61585771391702",
      "https://www.youtube.com/@dr.laxmanbhagat8599",
      "https://www.instagram.com/laxman.bhgt",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(physician).replace(/</g, "\\u003c"),
      }}
    />
  );
}