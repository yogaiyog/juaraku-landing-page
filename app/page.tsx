import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { WhyAI } from "@/components/sections/WhyAI";
import { FlagshipPrograms } from "@/components/sections/FlagshipPrograms";
import { LearningRoadmap } from "@/components/sections/LearningRoadmap";
import { WhyParents } from "@/components/sections/WhyParents";
import { StudentProjects } from "@/components/sections/StudentProjects";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:shadow-lift"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <WhyAI />
        <FlagshipPrograms />
        <LearningRoadmap />
        <WhyParents />
        <StudentProjects />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
