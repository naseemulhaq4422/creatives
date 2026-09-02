import React from "react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { TECH_STACK } from "@/data/siteContent";
import { Code, Layers, FileCode, Palette, Database, PenTool, Image, Cloud, Target, Search, PlaySquare, Shield } from "lucide-react";

export const TechStack: React.FC = () => {
  const iconMapping: Record<string, React.ReactNode> = {
    Code: <Code className="w-4 h-4 text-[#8B5CF6]" />,
    Layers: <Layers className="w-4 h-4 text-[#00F0FF]" />,
    FileCode: <FileCode className="w-4 h-4 text-[#38BDF8]" />,
    Palette: <Palette className="w-4 h-4 text-[#A78BFA]" />,
    Database: <Database className="w-4 h-4 text-[#10B981]" />,
    PenTool: <PenTool className="w-4 h-4 text-[#F59E0B]" />,
    Image: <Image className="w-4 h-4 text-[#38BDF8]" />,
    Vector: <PenTool className="w-4 h-4 text-[#F43F5E]" />,
    Cloud: <Cloud className="w-4 h-4 text-[#8B5CF6]" />,
    Target: <Target className="w-4 h-4 text-[#00F0FF]" />,
    Search: <Search className="w-4 h-4 text-[#10B981]" />,
    PlaySquare: <PlaySquare className="w-4 h-4 text-[#EF4444]" />,
  };

  return (
    <section className="py-20 sm:py-24 bg-[#080B11] border-b border-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Enterprise Tooling"
          badgeAccent="purple"
          title="Powered by"
          titleHighlight="Modern Technology."
          description="We build client platforms and train students using industry-standard engineering, design, cloud infrastructure, and performance marketing tools."
          align="center"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {TECH_STACK.map((tech, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-[#0D131F] border border-[#1E293B] hover:border-[#334155] transition-all duration-200 flex flex-col items-center justify-center text-center space-y-2.5 group"
            >
              <div className="p-2.5 rounded-lg bg-[#111726] border border-[#1E293B] group-hover:border-[#8B5CF6]/40 transition-colors">
                {iconMapping[tech.icon] || <Code className="w-4 h-4 text-[#8B5CF6]" />}
              </div>
              <div>
                <span className="text-xs font-semibold text-white block group-hover:text-[#F8FAFC]">
                  {tech.name}
                </span>
                <span className="text-[10px] font-mono text-[#64748B] block mt-0.5">
                  {tech.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
