import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";

import "./globals.css";
import Favicon from "/public/favicon.ico";

import GoogleAnalytics from "@/components/SEO/GoogleAnalytcs";

const nunito = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DecolGen Labs",
  description:
    "DecolGen Labs is a Web3 Development Lab, dedicated to exploring the identity and ownership of digital assets in integration with gamified experience to push forward the multi-chain adoption of NFT",
  icons: [{ rel: "icon", url: Favicon.src }],
  keywords: ["Decolgen Labs", "Decolgenlabs", "Starknet Decolgen", "Decolgen"],
  openGraph: {
    title: "DecolGen Labs",
    description:
      "DecolGen Labs is a Web3 Development Lab, dedicated to exploring the identity and ownership of digital assets in integration with gamified experience to push forward the multi-chain adoption of NFT",
    images: "https://www.decolgenlabs.com/images/art/post_story.png",
    url: "https://www.decolgenlabs.com/",
    type: "website",
    emails: "decolgenlabs@gmail.com",
    siteName: "Decolgen Labs",
  },
  twitter: {
    title: "DecolGen Labs",
    description:
      "DecolGen Labs is a Web3 Development Lab, dedicated to exploring the identity and ownership of digital assets in integration with gamified experience to push forward the multi-chain adoption of NFT",
    images: "https://www.decolgenlabs.com/images/art/post_story.png",
    site: "https://www.decolgenlabs.com/",
    creator: "@Decolgen Labs",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta property="og:image" content="<generated>" />
      <meta property="og:image:type" content="<generated>" />
      <meta property="og:image:width" content="<generated>" />
      <meta property="og:image:height" content="<generated>" />

      <body className={nunito.className}>{children}</body>
      <GoogleAnalytics />
    </html>
  );
}
