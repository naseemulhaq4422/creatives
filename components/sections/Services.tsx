import React from "react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { SERVICES_DATA } from "@/data/siteContent";
import { TrendingUp, Code2, Boxes, Film, Layout, ShoppingBag, ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/common/Button";

export const Services: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    TrendingUp: <TrendingUp className="w-6 h-6 text-[#8B5CF6]" />,
    Code2: <Code2 className="w-6 h-6 text-[#00F0FF]" />,
    Boxes: <Boxes className="w-6 h-6 text-[#A78BFA]" />,
    Film: <Film className="w-6 h-6 text-[#F59E0B]" />,
    Layout: <Layout className="w-6 h-6 text-[#38BDF8]" />,
    ShoppingBag: <ShoppingBag className="w-6 h-6 text-[#10B981]" />,
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#080B11] border-b border-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Agency Capabilities"
          badgeAccent="purple"
          title="Digital Solutions"
          titleHighlight="Built for Growth."
          description="From enterprise web portals and high-retention video campaigns to 3D branding and local search dominance, we engineer full-funnel digital infrastructure."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="relative p-7 sm:p-8 rounded-2xl bg-[#0D131F] border border-[#1E293B] hover:border-[#334155] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Header of Card */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-[#111726] border border-[#1E293B] group-hover:border-[#334155] transition-colors">
                    {iconMap[service.iconName] || <TrendingUp className="w-6 h-6 text-[#8B5CF6]" />}
                  </div>
                  <span className="text-xs font-mono text-[#64748B] group-hover:text-[#A78BFA] transition-colors">
                    SERVICE {service.number}
                  </span>
                </div>

                {/* Category Pill */}
                <span className="inline-block text-[10px] font-mono uppercase tracking-widest text-[#94A3B8] px-2.5 py-0.5 rounded bg-[#111726] border border-[#1E293B] mb-3">
                  {service.category}
                </span>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-white font-heading group-hover:text-[#F8FAFC] transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#94A3B8] mt-2 leading-relaxed">
                  {service.shortDescription}
                </p>

                {/* Deliverables List */}
                <div className="mt-6 pt-5 border-t border-[#1E293B] space-y-2.5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#64748B] block">
                    Core Deliverables:
                  </span>
                  <ul className="space-y-2 text-xs text-[#CBD5E1]">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#10B981] flex-shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="mt-8 pt-4 border-t border-[#1E293B]">
                <a
                  href={`#contact?service=${encodeURIComponent(service.title)}`}
                  className="inline-flex items-center justify-between w-full text-xs font-medium text-[#C4B5FD] group-hover:text-white transition-colors"
                >
                  <span>Request Quote for {service.title}</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 text-[#8B5CF6]" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Speed-to-Lead Guarantee Banner Under Services */}
        <div className="mt-12 p-6 rounded-xl bg-[#0D131F] border border-[#1E293B] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-left">
            <div className="w-10 h-10 rounded-lg bg-[#10B981]/15 border border-[#10B981]/30 flex items-center justify-center text-[#10B981] flex-shrink-0">
              <Check className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Need a Custom Turnkey Execution?</h4>
              <p className="text-xs text-[#94A3B8]">Our team guarantees a direct 15-minute response on all project inquiries.</p>
            </div>
          </div>
          <Button href="#contact" variant="primary" size="sm" showArrow className="text-xs w-full sm:w-auto">
            Get Custom Proposal
          </Button>
        </div>
      </div>
    </section>
  );
};
