import type { Metadata } from "next";
import localFont from "next/font/local";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import {
  defaultLocale,
  locales,
  siteUrl,
  type Locale,
} from "@/lib/i18n/config";
import "../globals.css";

// Self-hosted latin subsets of the Google Fonts variable faces, so builds
// and dev are fully offline (no network fetch from fonts.googleapis.com).
const baloo = localFont({
  src: "../../lib/fonts/baloo-2-latin.woff2",
  weight: "400 800",
  variable: "--font-display",
  display: "swap",
});

const jakarta = localFont({
  src: "../../lib/fonts/plus-jakarta-sans-latin.woff2",
  weight: "200 800",
  variable: "--font-body",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: { lang: Locale };
}): Promise<Metadata> {
  const lang = params.lang;
  const dict = await getDictionary(lang);

  const languages = Object.fromEntries(
    locales.map((l) => [l, `/${l}`])
  ) as Record<string, string>;

  return {
    metadataBase: new URL(siteUrl),
    title: dict.metadata.title,
    description: dict.metadata.description,
    keywords: dict.metadata.keywords,
    alternates: {
      canonical: `/${lang}`,
      languages: { ...languages, "x-default": `/${defaultLocale}` },
    },
    openGraph: {
      title: dict.metadata.title,
      description: dict.metadata.description,
      type: "website",
      locale: lang === "id" ? "id_ID" : "en_US",
      alternateLocale: lang === "id" ? ["en_US"] : ["id_ID"],
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const lang = params.lang;
  const dict = await getDictionary(lang);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "JuaraKu",
    url: `${siteUrl}/${lang}`,
    inLanguage: lang === "id" ? "id-ID" : "en-US",
    description: dict.metadata.description,
  };

  return (
    <html lang={lang}>
      <body className={`${baloo.variable} ${jakarta.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
