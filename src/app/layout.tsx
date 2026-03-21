import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import SocialSidebar from "@/components/SocialSidebar";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fabio Miceli - Full-Stack Developer | Il tuo problema è la mia soluzione",
  description: "Sviluppatore full-stack italiano specializzato in soluzioni rapide e impatto business. WordPress, React, Python. Velocità e precisione per il tuo progetto.",
  keywords: [
    "sviluppatore full-stack",
    "WordPress",
    "React",
    "Python",
    "Flask",
    "TypeScript",
    "sviluppo web",
    "consulenza tecnica",
    "Italia"
  ],
  authors: [{ name: "Fabio Miceli" }],
  creator: "Fabio Miceli",
  publisher: "Fabio Miceli",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://fabio-miceli-portfolio.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Fabio Miceli - Full-Stack Developer",
    description: "Il tuo problema è la mia soluzione. Velocemente. Sviluppatore full-stack italiano specializzato in impatto business.",
    url: "https://fabio-miceli-portfolio.vercel.app",
    siteName: "Fabio Miceli Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fabio Miceli - Full-Stack Developer",
      },
    ],
    locale: "it_IT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fabio Miceli - Full-Stack Developer",
    description: "Il tuo problema è la mia soluzione. Velocemente.",
    images: ["/og-image.jpg"],
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
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`dark ${inter.variable} ${manrope.variable}`}>
      <body className="font-sans antialiased">
        <Navbar />
        {children}
        <SocialSidebar />
      </body>
    </html>
  );
}
