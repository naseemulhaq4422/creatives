import React from "react";
import { Hero } from "@/components/hero/Hero";
import { MarqueeTicker } from "@/components/sections/MarqueeTicker";
import { AboutDual } from "@/components/sections/AboutDual";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Portfolio } from "@/components/sections/Portfolio";
import { Institute } from "@/components/sections/Institute";
import { Courses } from "@/components/sections/Courses";
import { InstituteCTA } from "@/components/sections/InstituteCTA";
import { Pricing } from "@/components/sections/Pricing";
import { TechStack } from "@/components/sections/TechStack";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* 01. Cinematic Hero Section */}
      <Hero />

      {/* 02. Continuous Marquee Ticker */}
      <MarqueeTicker />

      {/* 03. About Us (Dual Story + 2x2 Integrated Statistics Grid) */}
      <AboutDual />

      {/* 04. Agency Services (6 Cards) */}
      <Services />

      {/* 05. 4-Step Process Framework */}
      <Process />

      {/* 06. Selected Work & Real Case Studies */}
      <Portfolio />

      {/* 07. Creatives Training Institute */}
      <Institute />

      {/* 08. Institute Courses Breakdown */}
      <Courses />

      {/* 09. Institute Enrollment CTA */}
      <InstituteCTA />

      {/* 10. Transparent Pricing (Agency Packages vs Batch Inquiry) */}
      <Pricing />

      {/* 11. Technologies Stack */}
      <TechStack />

      {/* 12. Why Choose Creatives (6 Pillars) */}
      <WhyChooseUs />

      {/* 13. Verified Testimonials */}
      <Testimonials />

      {/* 14. FAQ Accordion */}
      <FAQ />

      {/* 15. Immersive Final CTA */}
      <FinalCTA />

      {/* 16. Conversion Contact Hub (Dual Proposal / Admission) */}
      <Contact />
    </div>
  );
}
