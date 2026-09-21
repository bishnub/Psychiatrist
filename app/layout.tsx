import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.laxmanbhagat.com.np"),
  title: "Dr. Laxman Bhagat | Consultant Neuropsychiatrist in Nepal",
  description:
    "Dr. Laxman Bhagat, Consultant Neuropsychiatrist at Birat Teaching Hospital, Biratnagar, Koshi Province, Nepal. MD Psychiatry, AIIMS Delhi. Consultations for depression, anxiety, addiction, sleep disorders and more.",
  alternates: { canonical: "/" },
  openGraph: { 
    images: ["/doctor.jpg"],
    title: "Dr. Laxman Bhagat | Consultant Neuropsychiatrist",
    description: "Consultant Neuropsychiatrist. Clinic details, services and appointments.",
    url: "/",
    siteName: "Dr. Laxman Bhagat",
    locale: "en_NP",
    type: "website", 
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}