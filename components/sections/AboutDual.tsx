"use client";

import React from "react";
import { ArrowRight, ArrowUpRight, Sparkles, Building2, GraduationCap, Briefcase, Star, Users, Globe, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/common/Button";
import { AnimatedCounter } from "@/components/common/AnimatedCounter";
import { SITE_CONTACT, TRUST_STATS } from "@/data/siteContent";

export const AboutDual: React.FC = () => {
  const statIcons = [
    <Briefcase key="1" className="w-5 h-5 text-[#8B5CF6]" />,
    <Star key="2" className="w-5 h-5 text-[#00F0FF]" />,
    <GraduationCap key="3" className="w-5 h-5 text-[#10B981]" />,
    <Globe key="4" className="w-5 h-5 text-[#A78BFA]" />,
  ];

  return (
    <section id="about" className="py-20 sm:py-28 lg:py-32 bg-[#080B11] border-b border-[#1E293B] relative overflow-hidden">
      {/* Subtle Background Lighting Behind Stats (Restrained 10%) */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[400px] bg-gradient-to-br from-[#8B5CF6]/10 via-[#00F0FF]/5 to-transparent blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN: Story + Agency/Institute Pillars + CTAs (~48%) */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-6 text-left">
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest border border-[#8B5CF6]/30 text-[#C4B5FD] bg-[#8B5CF6]/10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] animate-pulse" />
              <span>ABOUT CREATIVES</span>
            </div>

            {/* Main Editorial Heading */}
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white font-heading leading-[1.08]">
              We Build Brands.{" "}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] via-[#C4B5FD] to-[#00F0FF]">
                We Build Careers.
              </span>
            </h2>

            {/* Structured Editorial Paragraphs */}
            <div className="space-y-4 text-xs sm:text-sm md:text-base text-[#94A3B8] leading-relaxed font-normal">
              <p>
                <strong className="text-white font-semibold">Creatives Digital Agency & Institute</strong> is built around two unified goals: helping businesses grow through premium digital solutions and empowering individuals to build modern technology careers from zero.
              </p>
              <p>
                Our agency combines digital marketing, SEO, web and app development, branding, 3D design, social media, video production, UI/UX, and e-commerce expertise to create practical digital systems that drive visibility, leads, and measurable revenue.
              </p>
              <p className="text-xs sm:text-sm text-[#CBD5E1]">
                Our institute takes the same practical approach into education—helping beginners master in-demand technology through 1-on-1 mentorship, live real-world projects, freelancing guidance, and hands-on training.
              </p>
            </div>

            {/* Mini Highlights: Dual Ecosystem Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full pt-2">
              {/* Pillar 1: Agency */}
              <div className="p-4 rounded-xl bg-[#0D131F] border border-[#1E293B] hover:border-[#8B5CF6]/40 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-1.5 rounded-md bg-[#8B5CF6]/15 text-[#A78BFA]">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-white font-heading">Digital Agency</span>
                </div>
                <p className="text-[11px] text-[#94A3B8] leading-snug">
                  Full-stack marketing, Next.js web apps, 3D branding, local SEO & lead generation engines.
                </p>
              </div>

              {/* Pillar 2: Institute */}
              <div className="p-4 rounded-xl bg-[#0D131F] border border-[#1E293B] hover:border-[#00F0FF]/40 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-1.5 rounded-md bg-[#00F0FF]/15 text-[#00F0FF]">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-white font-heading">Training Institute</span>
                </div>
                <p className="text-[11px] text-[#94A3B8] leading-snug">
                  Zero-to-hero practical tech training, live projects, 1-on-1 mentorship & Upwork/Fiverr mastery.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <Button
                href="#contact"
                variant="primary"
                size="md"
                showArrow
                className="text-xs px-6 py-3.5"
              >
                Let&apos;s Work Together
              </Button>

              <a
                href="#work"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#C4B5FD] hover:text-white transition-colors"
              >
                <span>Explore Our Work</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: 2x2 Integrated Statistics Grid (~52%)        */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 relative">
            {/* Optional Floating Credibility Badge */}
            <div className="absolute -top-4 -right-2 sm:-right-4 z-20 hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#111726]/90 backdrop-blur-md border border-[#2E3D5B] text-[10px] font-mono text-[#34D399] shadow-xl animate-float-slow">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
              <span>REAL PROJECTS. REAL RESULTS.</span>
            </div>

            {/* 2x2 Statistics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {TRUST_STATS.map((stat, idx) => (
                <div
                  key={idx}
                  className="group relative p-6 sm:p-7 rounded-2xl bg-[#0D131F] border border-[#1E293B] hover:border-[#334155] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-[#111726] border border-[#1E293B] group-hover:border-[#334155] transition-colors">
                      {statIcons[idx]}
                    </div>
                    <span className="text-[10px] font-mono text-[#64748B] uppercase tracking-wider">
                      METRIC 0{idx + 1}
                    </span>
                  </div>

                  <div>
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-[#F8FAFC] mt-1.5">
                      {stat.label}
                    </div>
                    <p className="text-[11px] text-[#94A3B8] mt-2 leading-relaxed font-normal">
                      {stat.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
