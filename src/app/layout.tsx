import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";

import "./globals.css";
import Favicon from "/public/favicon.ico";

import GoogleAnalytics from "@/components/SEO/GoogleAnalytcs";

const nunito = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.decolgenlabs.com/"),
  title: "DecolGen Labs",
  description:
    "DecolGen Labs is a Web3 Development Lab, dedicated to exploring the identity and ownership of digital assets in integration with gamified experience to push forward the multi-chain adoption of NFT",
  icons: {
    icon: Favicon.src,
    shortcut: Favicon.src,
    apple: Favicon.src,
    other: { rel: "apple-touch-icon-precomposed", url: Favicon.src },
  },
  keywords: [
    "Decolgen labs",
    "Decolgenlabs",
    "Who is Decolgen labs",
    "What is Decolgen labs",
  ],
  openGraph: {
    title: "DecolGen Labs",
    description:
      "DecolGen Labs is a Web3 Development Lab, dedicated to exploring the identity and ownership of digital assets in integration with gamified experience to push forward the multi-chain adoption of NFT",
    images: [
      {
        url: "https://www.decolgenlabs.com/images/banner.png",
        width: 1200,
        height: 600,
        type: "image/png",
      },
    ],
    locale: "en_US",
    url: "https://www.decolgenlabs.com/",
    type: "website",
    emails: "decolgenlabs@gmail.com",
    siteName: "Decolgen Labs",
  },
  twitter: {
    title: "DecolGen Labs",
    description:
      "DecolGen Labs is a Web3 Development Lab, dedicated to exploring the identity and ownership of digital assets in integration with gamified experience to push forward the multi-chain adoption of NFT",
    images: "https://www.decolgenlabs.com/images/banner.png",
    site: "https://www.decolgenlabs.com/",
    creator: "@FaceToSee_",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>{children}</body>
      <GoogleAnalytics />
    </html>
  );
}
