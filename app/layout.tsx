import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.laxmanbhagat.com.np"),
  title: "Dr. Laxman Kumar Bhagat | Consultant Psychiatrist in Biratnagar, Nepal",
  description:
    "Consultant Neuropsychiatrist at Birat Medical College Teaching Hospital, Biratnagar, Nepal. MD Psychiatry, AIIMS Delhi, NMC Reg. No. 28528. Depression, anxiety, addiction and sleep care.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Dr. Laxman Kumar Bhagat | Consultant Psychiatrist in Biratnagar, Nepal",
    description:
      "Consultant Neuropsychiatrist at Birat Medical College Teaching Hospital, Biratnagar, Nepal. View services, clinic details and book an appointment.",
    url: "/",
    siteName: "Dr. Laxman Kumar Bhagat",
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