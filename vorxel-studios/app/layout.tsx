import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import { siteConfig } from "@/lib/site-config";
import PendingNotice from "@/components/PendingNotice";
import "./globals.css";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--f-display", display: "swap" });
const body = Instrument_Sans({ subsets: ["latin"], variable: "--f-body", display: "swap" });

export const metadata: Metadata = {
  ...(siteConfig.url ? { metadataBase: new URL(siteConfig.url), alternates: { canonical: "/" } } : {}),
  title: siteConfig.title,
  description: siteConfig.description,
  openGraph: { title: siteConfig.title, description: siteConfig.description, siteName: siteConfig.name, locale: "pt_BR", type: "website", images: [{ url: siteConfig.logo, width: 1254, height: 1254, alt: "Logo da Vorxel Studios" }] },
  twitter: { card: "summary", title: siteConfig.title, description: siteConfig.description, images: [siteConfig.logo] },
};
export const viewport: Viewport = { themeColor: "#0A0A0A", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${body.variable}`}>
      <body>
        <noscript><style>{".rv{opacity:1!important;transform:none!important}"}</style></noscript>
        {children}
        <PendingNotice />
      </body>
    </html>
  );
}
