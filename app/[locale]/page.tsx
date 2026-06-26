import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HomePage } from "@/components/home-page";
import { getContent, locales, type Locale } from "@/lib/content";

type Props = {
  params: Promise<{ locale: Locale }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!locales.includes(locale)) notFound();
  const t = getContent(locale);

  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        ko: "/ko",
        en: "/en",
        zh: "/zh",
        ja: "/ja"
      }
    },
    openGraph: {
      title: t.meta.title,
      description: t.meta.description,
      url: `https://atly.co.kr/${locale}`,
      siteName: "ATLY",
      locale,
      type: "website",
      images: [{ url: "/assets/hero-editorial.png", width: 1200, height: 670, alt: "ATLY winterwear production atelier" }]
    },
    twitter: {
      card: "summary_large_image",
      title: t.meta.title,
      description: t.meta.description,
      images: ["/assets/hero-editorial.png"]
    },
    keywords: [
      "Korean apparel manufacturing",
      "down jacket manufacturer",
      "winterwear production",
      "outerwear production partner",
      "China manufacturing network",
      "패딩 생산",
      "겨울 의류 제조",
      "羽绒服加工"
    ]
  };
}

export default async function LocalePage({ params }: Props) {
  const { locale } = await params;
  if (!locales.includes(locale)) notFound();
  return <HomePage locale={locale} />;
}
