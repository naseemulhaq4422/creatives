import React from "react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { TESTIMONIALS } from "@/data/siteContent";
import { Quote, Star, CheckCircle, ShieldCheck, UserCheck } from "lucide-react";

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#080B11] border-b border-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Verified Testimonials"
          badgeAccent="emerald"
          title="Endorsed by Clients &"
          titleHighlight="Institute Graduates."
          description="Authentic feedback from business leaders scaling their brands and students who launched practical freelancing careers through Creatives."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="p-7 sm:p-8 rounded-2xl bg-[#0D131F] border border-[#1E293B] hover:border-[#334155] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#F59E0B]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span
                    className={`text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded border ${
                      item.type === "client"
                        ? "bg-[#8B5CF6]/10 border-[#8B5CF6]/30 text-[#C4B5FD]"
                        : "bg-[#00F0FF]/10 border-[#00F0FF]/30 text-[#7DD3FC]"
                    }`}
                  >
                    {item.type === "client" ? "Agency Client" : "Institute Graduate"}
                  </span>
                </div>

                <div className="text-xs font-mono text-[#10B981] mb-2 font-medium">
                  &ldquo;{item.highlight}&rdquo;
                </div>

                <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-[#1E293B] flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#111726] border border-[#1E293B] flex items-center justify-center font-bold text-xs text-white font-mono flex-shrink-0">
                  {item.initials}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white font-heading">
                    {item.name}
                  </h4>
                  <p className="text-xs text-[#94A3B8]">
                    {item.role} • <span className="text-[#64748B]">{item.companyOrStatus}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
