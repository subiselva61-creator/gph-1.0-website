import type { Metadata } from "next";
import { AdvisorWidget } from "@/components/AdvisorWidget";
import { Footer } from "@/components/Footer";
import { LiquidEtherBackground } from "@/components/LiquidEtherBackground";
import { Navbar } from "@/components/Navbar";
import GradualBlur from "@/components/react-bits/GradualBlur";
import { CustomCursor } from "@/components/motion/CustomCursor";
import { GsapProvider } from "@/components/motion/GsapProvider";
import { Preloader } from "@/components/motion/Preloader";
import { siteConfig } from "@/lib/site";
import "./globals.css";

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
    <html lang="en" className="h-full antialiased">
      <body className="relative flex min-h-full flex-col bg-background-solid font-sans text-ink">
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(!matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.classList.add('is-loading')}}catch(e){}",
          }}
        />
        <LiquidEtherBackground />
        <Preloader />
        <CustomCursor />
        <GsapProvider>
          <div className="relative z-10 flex min-h-full flex-1 flex-col">
            <AdvisorWidget />
            <Navbar />
            <main className="relative min-w-0 w-full flex-1 overflow-x-clip">
              {children}
            </main>
            <Footer />
            <GradualBlur
              target="page"
              position="bottom"
              height="6rem"
              strength={2}
              divCount={5}
              curve="bezier"
              exponential
              opacity={1}
              zIndex={40}
              style={{ zIndex: 40 }}
            />
          </div>
        </GsapProvider>
      </body>
    </html>
  );
}
