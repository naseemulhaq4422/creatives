import React from "react";
import { cn } from "@/lib/utils";

interface FloatingBadgeProps {
  icon?: React.ReactNode;
  label: string;
  sublabel?: string;
  accent?: "purple" | "cyan" | "emerald";
  className?: string;
  animationDelay?: string;
}

export const FloatingBadge: React.FC<FloatingBadgeProps> = ({
  icon,
  label,
  sublabel,
  accent = "purple",
  className,
  animationDelay = "0s",
}) => {
  const dotColor = {
    purple: "bg-[#8B5CF6]",
    cyan: "bg-[#00F0FF]",
    emerald: "bg-[#10B981]",
  }[accent];

  return (
    <div
      style={{ animationDelay }}
      className={cn(
        "glass-pill shadow-xl rounded-lg px-3.5 py-2 flex items-center gap-2.5 backdrop-blur-md animate-float-slow select-none",
        className
      )}
    >
      {icon ? (
        <div className="text-white flex-shrink-0">{icon}</div>
      ) : (
        <span className={cn("w-2 h-2 rounded-full flex-shrink-0", dotColor)} />
      )}
      <div className="flex flex-col text-left">
        <span className="text-xs font-semibold text-white leading-tight">{label}</span>
        {sublabel && (
          <span className="text-[10px] text-[#94A3B8] font-mono leading-tight">{sublabel}</span>
        )}
      </div>
    </div>
  );
};
