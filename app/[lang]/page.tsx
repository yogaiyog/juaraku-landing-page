import { getDictionary } from "@/lib/i18n/get-dictionary";
import type { Locale } from "@/lib/i18n/config";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { FlagshipPrograms } from "@/components/sections/FlagshipPrograms";
import { LearningRoadmap } from "@/components/sections/LearningRoadmap";
import { WhyParents } from "@/components/sections/WhyParents";
import { StudentProjects } from "@/components/sections/StudentProjects";
import { Testimonials } from "@/components/sections/Testimonials";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { ClassOptions } from "@/components/sections/ClassOptions";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";

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
        className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:left-4 focus-visible:top-4 focus-visible:z-[100] focus-visible:rounded-full focus-visible:bg-white focus-visible:px-4 focus-visible:py-2 focus-visible:shadow-lift"
      >
        {dict.ui.skipToContent}
      </a>
      <Navbar dict={dict.navbar} ui={dict.ui} />
      <main>
        <Hero dict={dict.hero} />
        <FlagshipPrograms dict={dict.programs} />
        <LearningRoadmap dict={dict.roadmap} />
        <WhyParents dict={dict.parents} />
        <StudentProjects dict={dict.projects} />
        <HowItWorks dict={dict.howItWorks} />
        <ClassOptions dict={dict.classes} />
        <Testimonials dict={dict.testimonials} />
        <FAQ dict={dict.faq} />
      </main>
      <Footer dict={dict.footer} />
      <FloatingWhatsApp label={dict.ui.whatsappFloat} message={dict.ui.adminMessage} />
    </>
  );
}
