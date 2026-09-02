import React from "react";
import { MARQUEE_ITEMS } from "@/data/siteContent";
import { Sparkles } from "lucide-react";

export const MarqueeTicker: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden bg-[#0D131F] border-y border-[#1E293B] py-3.5 select-none group">
      {/* Gradient Fades for Left and Right */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#0D131F] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#0D131F] to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-marquee-left group-hover:[animation-play-state:paused]">
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, index) => (
          <div key={index} className="flex items-center gap-6 px-4">
            <span className="text-xs sm:text-sm font-mono uppercase tracking-wider text-[#94A3B8] font-medium whitespace-nowrap hover:text-white transition-colors">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]/60 flex-shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
};
