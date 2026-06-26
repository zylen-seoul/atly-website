import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";
import { locales, type Locale } from "@/lib/content";

export const metadata: Metadata = {
  metadataBase: new URL("https://atly.co.kr"),
  title: {
    default: "ATLY | Winterwear Digital Production Platform",
    template: "%s | ATLY"
  },
  description:
    "ATLY connects Korean fashion brands with China's high-end winterwear manufacturing network through transparent digital production management.",
  icons: {
    icon: "/favicon.ico"
  }
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const headerLocale = (await headers()).get("x-atly-locale") as Locale | null;
  const lang = headerLocale && locales.includes(headerLocale) ? headerLocale : "ko";

  return (
    <html lang={lang}>
      <body>
        {children}
      </body>
    </html>
  );
}
