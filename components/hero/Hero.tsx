import React from "react";
import Image from "next/image";
import { ArrowUpRight, Sparkles, Zap, CheckCircle2, Shield, Flame, Laptop, TrendingUp } from "lucide-react";
import { Button } from "@/components/common/Button";
import { HeroCanvas } from "@/components/hero/HeroCanvas";
import { FloatingBadge } from "@/components/hero/FloatingBadge";
import { SITE_CONTACT } from "@/data/siteContent";

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-[#080B11]"
    >
      {/* Background Architectural Canvas */}
      <HeroCanvas />

      {/* Subtle Background Radial Gradient Lighting (Restrained 10%) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#8B5CF6]/15 via-[#00F0FF]/10 to-transparent blur-[120px] pointer-events-none -z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            {/* Hero Live Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#111726] border border-[#1E293B] text-xs font-mono text-[#F8FAFC]">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              <span className="text-[#94A3B8]">Status:</span>
              <span className="text-white font-medium">Accepting Q3 Projects & New Institute Batch</span>
            </div>

            {/* Oversized Editorial Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-extrabold tracking-tight text-[#FFFFFF] leading-[1.05] font-heading">
              Build Your Brand.{" "}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] via-[#C4B5FD] to-[#00F0FF]">
                Start Your Career from Zero.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg md:text-xl text-[#94A3B8] leading-relaxed max-w-2xl font-normal">
              Partner with our premium agency for high-end digital solutions, or join our institute to learn in-demand tech skills from absolute scratch—no prior experience needed.
            </p>

            {/* Dual CTAs + WhatsApp Quick Link */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2 w-full sm:w-auto">
              <Button
                href="#contact"
                variant="primary"
                size="lg"
                showArrow
                className="w-full sm:w-auto text-sm px-7 py-4"
              >
                Get a Free Quote
              </Button>

              <Button
                href="#institute"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto text-sm px-6 py-4 text-[#C4B5FD] hover:text-white"
              >
                Explore Institute Courses
              </Button>
            </div>

            {/* Quick Micro-Trust Badges */}
            <div className="pt-4 grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-y-2.5 gap-x-6 text-xs text-[#94A3B8]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                <span>15-Min Speed-to-Lead</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#8B5CF6] flex-shrink-0" />
                <span>Zero Prior Tech Needed</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00F0FF] flex-shrink-0" />
                <span>99% Client Satisfaction</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F59E0B] flex-shrink-0" />
                <span>4K High-CTR Visuals</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Visual Composition & Floating Credibility Badges */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Visual Frame */}
            <div className="relative w-full max-w-lg rounded-2xl bg-[#0D131F] border border-[#1E293B] p-2 sm:p-3 shadow-2xl group">
              {/* Inner glow border on hover */}
              <div className="relative overflow-hidden rounded-xl bg-[#080B11]">
                <Image
                  src="/images/hero-tech.webp"
                  alt="Creatives Digital Agency 3D Technology Interface"
                  width={960}
                  height={540}
                  priority
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080B11]/80 via-transparent to-transparent pointer-events-none" />

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between px-3 py-2 rounded-lg bg-[#080B11]/85 backdrop-blur-md border border-[#1E293B]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#00F0FF]" />
                    <span className="text-xs font-mono text-white">Creatives Next-Gen Engine</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#10B981]">99.9% Uptime</span>
                </div>
              </div>

              {/* Floating Credibility Pill 1 (Top Right) */}
              <FloatingBadge
                label="4K Creative Visuals"
                sublabel="High-CTR Graphics"
                accent="purple"
                icon={<Flame className="w-4 h-4 text-[#8B5CF6]" />}
                className="absolute -top-4 -right-2 sm:-right-6"
                animationDelay="0s"
              />

              {/* Floating Credibility Pill 2 (Bottom Left) */}
              <FloatingBadge
                label="Zero to Hero"
                sublabel="No Prior Tech Needed"
                accent="cyan"
                icon={<Laptop className="w-4 h-4 text-[#00F0FF]" />}
                className="absolute -bottom-5 -left-2 sm:-left-6"
                animationDelay="1.5s"
              />

              {/* Floating Credibility Pill 3 (Middle Right) */}
              <FloatingBadge
                label="Speed-to-Lead"
                sublabel="15-Min Response"
                accent="emerald"
                icon={<Zap className="w-4 h-4 text-[#10B981]" />}
                className="hidden sm:flex absolute top-1/2 -right-8 transform -translate-y-1/2"
                animationDelay="0.8s"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
