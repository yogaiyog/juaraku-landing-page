import { getDictionary } from "@/lib/i18n/get-dictionary";
import type { Locale } from "@/lib/i18n/config";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { WhyAI } from "@/components/sections/WhyAI";
import { FlagshipPrograms } from "@/components/sections/FlagshipPrograms";
import { LearningRoadmap } from "@/components/sections/LearningRoadmap";
import { WhyParents } from "@/components/sections/WhyParents";
import { StudentProjects } from "@/components/sections/StudentProjects";
import { Testimonials } from "@/components/sections/Testimonials";
import { PricingBanner } from "@/components/sections/PricingBanner";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/Footer";

export default async function Home({
  params,
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(params.lang);

  return (
    <>
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:shadow-lift"
      >
        {dict.ui.skipToContent}
      </a>
      <Navbar dict={dict.navbar} ui={dict.ui} />
      <main>
        <Hero dict={dict.hero} />
        <WhyAI dict={dict.whyAI} />
        <FlagshipPrograms dict={dict.programs} />
        <LearningRoadmap dict={dict.roadmap} />
        <WhyParents dict={dict.parents} />
        <StudentProjects dict={dict.projects} />
        <Testimonials dict={dict.testimonials} />

        <FAQ dict={dict.faq} />
                <PricingBanner dict={dict.pricing} />
        <FinalCTA dict={dict.finalCta} />
      </main>
      <Footer dict={dict.footer} />
    </>
  );
}
