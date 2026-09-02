import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "secondary" | "whatsapp" | "cyan" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  showArrow?: boolean;
  children: React.ReactNode;
  external?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  href,
  variant = "primary",
  size = "md",
  showArrow = false,
  children,
  external = false,
  className,
  ...props
}) => {
  const baseStyles = "group relative inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#080B11] disabled:opacity-50 disabled:pointer-events-none rounded-lg select-none";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-2 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-6 py-3.5 gap-2.5",
  };

  const variantStyles = {
    primary: "bg-[#8B5CF6] hover:bg-[#7C3AED] text-white shadow-sm hover:shadow-[0_0_20px_rgba(139,92,246,0.35)] focus:ring-[#8B5CF6]",
    secondary: "bg-[#111726] hover:bg-[#161F33] text-[#F8FAFC] border border-[#1E293B] hover:border-[#334155] focus:ring-[#334155]",
    whatsapp: "bg-[#10B981] hover:bg-[#059669] text-white shadow-sm hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] focus:ring-[#10B981]",
    cyan: "bg-[#00F0FF] hover:bg-[#06B6D4] text-[#080B11] font-semibold shadow-sm hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] focus:ring-[#00F0FF]",
    outline: "bg-transparent hover:bg-[#111726] text-[#F8FAFC] border border-[#1E293B] hover:border-[#334155] focus:ring-[#1E293B]",
    ghost: "bg-transparent hover:bg-[#111726] text-[#94A3B8] hover:text-[#FFFFFF]",
  };

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </>
  );

  const combinedClasses = cn(baseStyles, sizeStyles[size], variantStyles[variant], className);

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
};
