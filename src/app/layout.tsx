import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Icelink Global | Quality Vehicles. Global Standards.",
  description:
    "Icelink Global is a sourcing, trading and distribution company connecting trusted international markets with customers and businesses across Africa. Explore quality vehicles, parts, electronics, and global market access.",
  metadataBase: new URL("https://icelinkglobal.com"),
  alternates: {
    canonical: "https://icelinkglobal.com",
  },
  openGraph: {
    title: "Icelink Global | Quality Vehicles. Global Standards.",
    description:
      "Icelink Global connects trusted international markets with customers and businesses across Africa. Quality vehicles, sourcing, parts & accessories.",
    url: "https://icelinkglobal.com",
    siteName: "Icelink Global",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Icelink Global | Quality Vehicles. Global Standards.",
    description:
      "Icelink Global connects trusted international markets with customers and businesses across Africa.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="min-h-screen flex flex-col antialiased">{children}</body>
    </html>
  );
}
