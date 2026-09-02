import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  badge?: string;
  badgeAccent?: "purple" | "cyan" | "emerald";
  title: string;
  titleHighlight?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  badgeAccent = "purple",
  title,
  titleHighlight,
  description,
  align = "left",
  className,
}) => {
  const dotColor = {
    purple: "bg-[#8B5CF6]",
    cyan: "bg-[#00F0FF]",
    emerald: "bg-[#10B981]",
  }[badgeAccent];

  const badgeBorder = {
    purple: "border-[#8B5CF6]/30 text-[#C4B5FD] bg-[#8B5CF6]/10",
    cyan: "border-[#00F0FF]/30 text-[#7DD3FC] bg-[#00F0FF]/10",
    emerald: "border-[#10B981]/30 text-[#6EE7B7] bg-[#10B981]/10",
  }[badgeAccent];

  return (
    <div
      className={cn(
        "flex flex-col mb-12 lg:mb-16",
        align === "center" ? "items-center text-center max-w-3xl mx-auto" : "max-w-3xl",
        className
      )}
    >
      {badge && (
        <div className={cn("inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider mb-4 border", badgeBorder)}>
          <span className={cn("w-1.5 h-1.5 rounded-full animate-pulse", dotColor)} />
          <span>{badge}</span>
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#F8FAFC] leading-[1.1]">
        {title}{" "}
        {titleHighlight && (
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] via-[#A78BFA] to-[#00F0FF]">
            {titleHighlight}
          </span>
        )}
      </h2>

      {description && (
        <p className="mt-4 text-base sm:text-lg md:text-xl text-[#94A3B8] leading-relaxed font-normal">
          {description}
        </p>
      )}
    </div>
  );
};
