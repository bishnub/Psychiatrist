import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.laxmanbhagat.com.np"),
  title: "Dr. Laxman Bhagat | Consultant Psychiatrist in Biratnagar, Nepal",
  description:
    "Consultant Neuropsychiatrist at Birat Medical College Teaching Hospital, Biratnagar. MD Psychiatry, AIIMS Delhi. Depression, anxiety, addiction and sleep care.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Dr. Laxman Bhagat | Consultant Psychiatrist in Biratnagar",
    description:
      "Consultant Neuropsychiatrist at Birat Medical College Teaching Hospital, Biratnagar. View services, clinic details and book an appointment.",
    url: "/",
    siteName: "Dr. Laxman Bhagat",
    locale: "en_NP",
    type: "website",
    images: ["/doctor.jpg"],
  },
  verification: {
    google: "NxefvIUsmU9hKHR-9wsM-w8Hien3UZ2o_dM-uwmeaN0", 
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}