import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import Providers from "@/components/Providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "NMF Global Services | Healthcare, IT & BPO Solutions",
    template: "%s | NMF Global Services",
  },
  description:
    "NMF Global Services provides healthcare support, medical transcription, billing, data analytics, Power BI, IT services, and back-office solutions to businesses worldwide.",
  keywords: [
    "Medical transcription services",
    "Healthcare BPO services",
    "Medical data entry services",
    "Medical billing support",
    "Healthcare outsourcing",
    "Power BI healthcare analytics",
    "Healthcare support services",
    "Medical back office services",
    "Healthcare data management",
    "Power BI dashboard services",
    "Data analytics services",
    "IT support services",
    "Healthcare IT services",
    "Business process outsourcing",
  ],
  authors: [{ name: "NMF Global Services" }],
  creator: "NMF Global Services",
  metadataBase: new URL("https://www.nmfglobalservices.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.nmfglobalservices.com",
    siteName: "NMF Global Services",
    title: "NMF Global Services | Healthcare, IT & BPO Solutions",
    description:
      "Empowering healthcare & businesses worldwide with reliable IT, outsourcing, and data analytics solutions.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NMF Global Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NMF Global Services | Healthcare, IT & BPO Solutions",
    description:
      "Empowering healthcare & businesses worldwide with reliable IT, outsourcing, and data analytics solutions.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Providers>
          <Navbar />
          <main className="flex-grow pt-20 pb-16 lg:pb-0">{children}</main>
          <Footer />
          <WhatsAppButton />
        </Providers>
      </body>
    </html>
  );
}
