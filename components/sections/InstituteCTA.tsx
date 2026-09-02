import React from "react";
import { Button } from "@/components/common/Button";
import { MessageCircle, Sparkles, GraduationCap, ArrowUpRight } from "lucide-react";
import { SITE_CONTACT } from "@/data/siteContent";

export const InstituteCTA: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#080B11] border-b border-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl bg-gradient-to-r from-[#0D131F] via-[#111726] to-[#0D131F] border border-[#2E3D5B]/70 p-8 sm:p-12 lg:p-14 overflow-hidden text-center flex flex-col items-center">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-[#8B5CF6]/15 blur-[80px] pointer-events-none" />

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111726] border border-[#1E293B] text-xs font-mono text-[#00F0FF] mb-5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>New Batch Enrollment Open</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-heading tracking-tight max-w-2xl leading-tight">
            Start From Zero.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] via-[#A78BFA] to-[#00F0FF]">
              Build Something Real.
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-[#94A3B8] max-w-xl leading-relaxed">
            Join hundreds of beginners who transformed their career through hands-on technology mentorship, practical agency projects, and freelancing mastery.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5 w-full sm:w-auto">
            <Button
              href="#contact"
              variant="primary"
              size="md"
              showArrow
              className="text-xs px-6 py-3"
            >
              Apply for Admission
            </Button>
            <Button
              href="#courses"
              variant="secondary"
              size="md"
              className="text-xs px-5 py-3 text-[#C4B5FD]"
            >
              Explore Courses
            </Button>
            <Button
              href={SITE_CONTACT.whatsAppUrl}
              external
              variant="whatsapp"
              size="md"
              className="text-xs px-5 py-3"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Talk on WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
