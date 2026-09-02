import React from "react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { WHY_CHOOSE_US } from "@/data/siteContent";
import { CheckCircle2, Cpu, Target, GraduationCap, Zap, BarChart3 } from "lucide-react";

export const WhyChooseUs: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    CheckCircle2: <CheckCircle2 className="w-5 h-5 text-[#8B5CF6]" />,
    Cpu: <Cpu className="w-5 h-5 text-[#00F0FF]" />,
    Target: <Target className="w-5 h-5 text-[#A78BFA]" />,
    GraduationCap: <GraduationCap className="w-5 h-5 text-[#10B981]" />,
    Zap: <Zap className="w-5 h-5 text-[#F59E0B]" />,
    BarChart3: <BarChart3 className="w-5 h-5 text-[#38BDF8]" />,
  };

  return (
    <section className="py-20 sm:py-28 bg-[#0D131F] border-b border-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Why Creatives"
          badgeAccent="cyan"
          title="Engineered for Quality."
          titleHighlight="Driven by Results."
          description="Whether you are an ambitious business scaling your brand or an aspiring student starting your tech career, here is why industry leaders trust Creatives."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-[#111726] border border-[#1E293B] hover:border-[#334155] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-xl bg-[#0D131F] border border-[#1E293B]">
                    {iconMap[item.icon]}
                  </div>
                  <span className="text-xs font-mono text-[#64748B]">
                    PILLAR 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white font-heading group-hover:text-[#F8FAFC]">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#94A3B8] mt-2.5 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#1E293B] flex items-center gap-1.5 text-[11px] font-mono text-[#64748B] group-hover:text-[#A78BFA] transition-colors">
                <span>Verified Core Standard</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
