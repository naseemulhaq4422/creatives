import React from "react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { INSTITUTE_PILLARS } from "@/data/siteContent";
import { Sparkles, Users, Laptop, DollarSign, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/common/Button";

export const Institute: React.FC = () => {
  const pillarIcons: Record<string, React.ReactNode> = {
    Sparkles: <Sparkles className="w-6 h-6 text-[#8B5CF6]" />,
    Users: <Users className="w-6 h-6 text-[#00F0FF]" />,
    Laptop: <Laptop className="w-6 h-6 text-[#A78BFA]" />,
    DollarSign: <DollarSign className="w-6 h-6 text-[#10B981]" />,
  };

  return (
    <section id="institute" className="py-20 sm:py-28 bg-[#0D131F] border-b border-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Creatives Training Institute"
          badgeAccent="cyan"
          title="Empowering Absolute Beginners"
          titleHighlight="to Master Modern Tech."
          description="Start from zero, learn practically, build real projects, and develop verified skills that directly convert into high-earning freelance contracts and professional careers."
        />

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {INSTITUTE_PILLARS.map((pillar) => (
            <div
              key={pillar.number}
              className="p-7 rounded-2xl bg-[#111726] border border-[#1E293B] hover:border-[#2E3D5B] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-xl bg-[#0D131F] border border-[#1E293B]">
                    {pillarIcons[pillar.icon]}
                  </div>
                  <span className="text-xs font-mono text-[#64748B]">
                    PILLAR {pillar.number}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white font-heading">
                  {pillar.title}
                </h3>
                <p className="text-xs text-[#94A3B8] mt-2.5 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#1E293B] flex items-center gap-2 text-[11px] font-mono text-[#34D399]">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>100% Practical Focus</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
