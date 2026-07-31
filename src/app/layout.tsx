import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { AnnouncementBar } from "@/components/meridian/AnnouncementBar";
import { BrandTicker } from "@/components/meridian/BrandTicker";
import { themeInitScript } from "@/components/meridian/ThemeToggle";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { GsapProvider } from "@/components/motion/GsapProvider";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Green Hydrogen Investment Advisory`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Green Hydrogen Investment Advisory`,
    description: siteConfig.description,
    images: [
      {
        url: "/og-logo.jpg",
        width: 800,
        height: 800,
        alt: `${siteConfig.name} logo`,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: `${siteConfig.name} | Green Hydrogen Investment Advisory`,
    description: siteConfig.description,
    images: ["/og-logo.jpg"],
  },
  icons: {
    icon: [{ url: "/logo.jpg", type: "image/jpeg" }],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="flex min-h-screen flex-col bg-paper font-sans text-ink">
        <GsapProvider>
          <AnnouncementBar />
          <BrandTicker />
          <Navbar />
          <main className="min-w-0 flex-1 overflow-x-clip">{children}</main>
          <Footer />
        </GsapProvider>
      </body>
    </html>
  );
}
