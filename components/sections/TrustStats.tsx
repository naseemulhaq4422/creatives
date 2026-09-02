import React from "react";
import { TRUST_STATS } from "@/data/siteContent";
import { AnimatedCounter } from "@/components/common/AnimatedCounter";
import { Shield, Users, Briefcase, Globe } from "lucide-react";

export const TrustStats: React.FC = () => {
  const statIcons = [
    <Briefcase key="1" className="w-5 h-5 text-[#8B5CF6]" />,
    <Shield key="2" className="w-5 h-5 text-[#00F0FF]" />,
    <Users key="3" className="w-5 h-5 text-[#10B981]" />,
    <Globe key="4" className="w-5 h-5 text-[#F59E0B]" />,
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#080B11] border-b border-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="relative p-6 sm:p-7 rounded-xl bg-[#0D131F] border border-[#1E293B] hover:border-[#334155] transition-all duration-300 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-[#64748B] uppercase tracking-wider">
                  METRIC 0{idx + 1}
                </span>
                <div className="p-2 rounded-lg bg-[#111726] border border-[#1E293B]">
                  {statIcons[idx]}
                </div>
              </div>

              <div>
                <div className="text-4xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-base font-semibold text-[#F8FAFC] mt-1">
                  {stat.label}
                </div>
                <p className="text-xs text-[#94A3B8] mt-2 leading-relaxed font-normal">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
