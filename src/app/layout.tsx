import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";

import "./globals.css";
import Favicon from "/public/favicon.ico";

import GoogleAnalytics from "@/components/SEO/GoogleAnalytcs";

const nunito = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Decolgen Lab",
  description: "Delcolgen lab landing page",
  icons: [{ rel: "icon", url: Favicon.src }],
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
