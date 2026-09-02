import React from "react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { PROCESS_STEPS } from "@/data/siteContent";
import { Search, PenTool, Terminal, Rocket, CheckCircle2 } from "lucide-react";

export const Process: React.FC = () => {
  const stepIcons = [
    <Search key="1" className="w-5 h-5 text-[#8B5CF6]" />,
    <PenTool key="2" className="w-5 h-5 text-[#00F0FF]" />,
    <Terminal key="3" className="w-5 h-5 text-[#A78BFA]" />,
    <Rocket key="4" className="w-5 h-5 text-[#10B981]" />,
  ];

  return (
    <section id="process" className="py-20 sm:py-28 bg-[#080B11] border-b border-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Execution Framework"
          badgeAccent="cyan"
          title="From First Idea"
          titleHighlight="to Digital Growth."
          description="A structured, predictable 4-stage engineering and campaign deployment framework built to maximize ROI and eliminate launch friction."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="relative p-7 rounded-2xl bg-[#0D131F] border border-[#1E293B] hover:border-[#334155] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Step Number & Icon */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-2xl font-mono font-extrabold text-[#64748B]">
                    {step.step}
                  </span>
                  <div className="p-2.5 rounded-xl bg-[#111726] border border-[#1E293B]">
                    {stepIcons[idx]}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white font-heading">
                  {step.title}
                </h3>

                {/* Summary */}
                <p className="text-xs text-[#94A3B8] mt-2.5 leading-relaxed">
                  {step.summary}
                </p>
              </div>

              {/* Deliverables tags */}
              <div className="mt-6 pt-4 border-t border-[#1E293B] space-y-1.5">
                {step.deliverables.map((deliv, i) => (
                  <div key={i} className="flex items-center gap-2 text-[11px] text-[#CBD5E1]">
                    <CheckCircle2 className="w-3 h-3 text-[#00F0FF] flex-shrink-0" />
                    <span>{deliv}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
