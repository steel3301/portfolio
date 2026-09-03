import type { Metadata } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import FloatingContactButton from "@/components/FloatingContactButton";
import Footer from "@/components/Footer";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600"],
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Kaustubh Warme — AI / ML Engineer",
  description:
    "AI/ML engineer building agentic systems, machine learning infrastructure, computer vision and cloud-native applications. Based in Pune, India.",
  keywords: [
    "Kaustubh Warme",
    "AI Engineer",
    "ML Engineer",
    "Agentic AI",
    "LLM",
    "RAG",
    "Federated Learning",
    "Computer Vision",
    "MLOps",
    "Pune",
  ],
  authors: [{ name: "Kaustubh Warme" }],
  creator: "Kaustubh Warme",
  metadataBase: new URL("https://kaustubhwarme.com"),
  openGraph: {
    title: "Kaustubh Warme — AI / ML Engineer",
    description:
      "AI/ML engineer building agentic systems, machine learning infrastructure, computer vision and cloud-native applications.",
    type: "website",
    locale: "en_US",
    url: "https://kaustubhwarme.com",
    siteName: "Kaustubh Warme",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaustubh Warme — AI / ML Engineer",
    description:
      "AI/ML engineer building agentic systems, machine learning infrastructure, computer vision and cloud-native applications.",
    creator: "@steel3301",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${ibmPlexMono.variable}`}
    >
      <body className="bg-paper text-ink antialiased flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 pt-14">{children}</main>
        <ContactSection />
        <Footer />
        <FloatingContactButton />
      </body>
    </html>
  );
}
