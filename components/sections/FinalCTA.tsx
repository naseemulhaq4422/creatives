import React from "react";
import { Button } from "@/components/common/Button";
import { MessageCircle, ArrowUpRight, Zap, Sparkles } from "lucide-react";
import { SITE_CONTACT } from "@/data/siteContent";

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#080B11] border-b border-[#1E293B] relative overflow-hidden">
      {/* Background Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-[#8B5CF6]/15 via-[#00F0FF]/10 to-transparent blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D131F] border border-[#1E293B] text-xs font-mono text-[#34D399] mb-6">
          <Zap className="w-3.5 h-3.5" />
          <span>{SITE_CONTACT.speedToLead}</span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white font-heading tracking-tight max-w-3xl leading-[1.1]">
          Ready to Elevate Your Brand or{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] via-[#C4B5FD] to-[#00F0FF]">
            Launch Your Tech Career?
          </span>
        </h2>

        <p className="mt-5 text-sm sm:text-lg text-[#94A3B8] max-w-2xl leading-relaxed">
          Whether you need a full-funnel digital partner for commercial growth or want to master high-income skills from absolute zero, Creatives is ready to execute.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3.5 w-full sm:w-auto">
          <Button
            href="#contact"
            variant="primary"
            size="lg"
            showArrow
            className="text-xs sm:text-sm px-8 py-4 w-full sm:w-auto"
          >
            Get a Free Quote
          </Button>

          <Button
            href="#institute"
            variant="secondary"
            size="lg"
            className="text-xs sm:text-sm px-6 py-4 text-[#C4B5FD] w-full sm:w-auto"
          >
            Join the Institute
          </Button>

          <Button
            href={SITE_CONTACT.whatsAppUrl}
            external
            variant="whatsapp"
            size="lg"
            className="text-xs sm:text-sm px-6 py-4 w-full sm:w-auto"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Chat on WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};
