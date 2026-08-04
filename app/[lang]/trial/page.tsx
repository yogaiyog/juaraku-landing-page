import type { Metadata } from "next";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { parseTrialParams } from "@/lib/assessment/params";
import { TrialPage } from "@/components/trial/TrialPage";

type SearchParams = Record<string, string | string[] | undefined>;

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: { lang: string };
  searchParams: SearchParams;
}): Promise<Metadata> {
  const lang: Locale = isLocale(params.lang) ? params.lang : "id";
  const dict = await getDictionary(lang);
  const parsed = parseTrialParams(searchParams);
  const title = parsed
    ? `${dict.trial.metaTitlePrefix} — ${parsed.name}`
    : dict.trial.metaTitlePrefix;

  return {
    title,
    description: dict.trial.metaDescription,
    robots: { index: false, follow: false },
  };
}

export default async function TrialClassPage({
  params,
  searchParams,
}: {
  params: { lang: string };
  searchParams: SearchParams;
}) {
  const lang: Locale = isLocale(params.lang) ? params.lang : "id";
  const dict = await getDictionary(lang);
  const initialParams = parseTrialParams(searchParams);

  return <TrialPage lang={lang} dict={dict} initialParams={initialParams} />;
}
