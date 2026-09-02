import React from "react";
import { cn } from "@/lib/utils";

interface SolidCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  accentBorder?: "none" | "purple" | "cyan" | "emerald";
  interactive?: boolean;
}

export const SolidCard: React.FC<SolidCardProps> = ({
  children,
  accentBorder = "none",
  interactive = true,
  className,
  ...props
}) => {
  const accentClasses = {
    none: "border-[#1E293B] hover:border-[#334155]",
    purple: "border-[#1E293B] hover:border-[#8B5CF6]/50 hover:shadow-[0_4px_25px_-5px_rgba(139,92,246,0.15)]",
    cyan: "border-[#1E293B] hover:border-[#00F0FF]/50 hover:shadow-[0_4px_25px_-5px_rgba(0,240,255,0.15)]",
    emerald: "border-[#1E293B] hover:border-[#10B981]/50 hover:shadow-[0_4px_25px_-5px_rgba(16,185,129,0.15)]",
  }[accentBorder];

  return (
    <div
      className={cn(
        "relative rounded-xl bg-[#111726] border p-6 sm:p-8 transition-all duration-300",
        interactive && "hover:-translate-y-1",
        accentClasses,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
