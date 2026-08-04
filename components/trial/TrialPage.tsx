"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhyAI } from "@/components/sections/WhyAI";
import { WhyParents } from "@/components/sections/WhyParents";
import { LearningRoadmap } from "@/components/sections/LearningRoadmap";
import { StudentProjects } from "@/components/sections/StudentProjects";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { generateAssessment } from "@/lib/assessment/generator";
import { trialQuery, type TrialParams } from "@/lib/assessment/params";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import { AssessmentForm } from "./AssessmentForm";
import { PersonalizedHero } from "./PersonalizedHero";
import { PersonalizedAssessment } from "./PersonalizedAssessment";
import { WhyLearnAICoding } from "./WhyLearnAICoding";
import { PricingPlans } from "./PricingPlans";

/**
 * The /{lang}/trial page. Renders the assessment input form when no (valid)
 * query params are present, and the personalized sales landing page once a
 * student has been generated. Editing returns to the form pre-filled, so the
 * assessment section always reflects the current values.
 */
export function TrialPage({
  lang,
  dict,
  initialParams,
}: {
  lang: Locale;
  dict: Dictionary;
  initialParams: TrialParams | null;
}) {
  const router = useRouter();
  const [params, setParams] = useState<TrialParams | null>(initialParams);
  const [editing, setEditing] = useState(initialParams === null);

  useEffect(() => {
    setParams(initialParams);
    setEditing(initialParams === null);
  }, [initialParams]);

  const handleGenerate = (p: TrialParams) => {
    router.replace(`/${lang}/trial?${trialQuery(p)}`);
  };

  if (editing || params === null) {
    return (
      <>
        <Navbar dict={dict.navbar} ui={dict.ui} />
        <main>
          <AssessmentForm
            dict={dict.trial}
            initial={params}
            onGenerate={handleGenerate}
            onCancel={params ? () => setEditing(false) : undefined}
          />
        </main>
        <Footer dict={dict.footer} />
      </>
    );
  }

  const result = generateAssessment(
    {
      studentName: params.name,
      speed: params.speed,
      conceptUnderstanding: params.conceptUnderstanding,
      problemSolving: params.problemSolving,
      focus: params.focus,
    },
    lang
  );

  return (
    <>
      <Navbar dict={dict.navbar} ui={dict.ui} />
      <main>
        <PersonalizedHero dict={dict.trial} name={params.name} onEdit={() => setEditing(true)} />
        <PersonalizedAssessment dict={dict.trial} result={result} name={params.name} />
        <WhyAI dict={dict.whyAI} />
        <WhyLearnAICoding dict={dict.trial.whyCoding} />
        <WhyParents dict={dict.parents} />
        <LearningRoadmap dict={dict.roadmap} />
        <StudentProjects dict={dict.projects} />
        <Testimonials dict={dict.testimonials} />
        <FAQ dict={dict.faq} />
        <PricingPlans dict={dict.trial} lang={lang} />
        <FinalCTA dict={dict.finalCta} />
      </main>
      <Footer dict={dict.footer} />
    </>
  );
}
