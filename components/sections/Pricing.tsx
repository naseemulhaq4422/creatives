"use client";

import React, { useState } from "react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { AGENCY_PRICING, SITE_CONTACT } from "@/data/siteContent";
import { Check, ArrowUpRight, MessageCircle, HelpCircle, ShieldCheck } from "lucide-react";
import { Button } from "@/components/common/Button";

export const Pricing: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"agency" | "institute">("agency");

  return (
    <section id="pricing" className="py-20 sm:py-28 bg-[#080B11] border-b border-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeader
            badge="Transparent Investment"
            badgeAccent="purple"
            title="Predictable Pricing."
            titleHighlight="Maximum ROI."
            description="Clear deliverables with zero hidden fees. Select between Agency Client Packages or Institute Batch Fee details."
            className="mb-0"
          />

          {/* Pricing Tabs */}
          <div className="flex items-center p-1 rounded-xl bg-[#0D131F] border border-[#1E293B] self-start md:self-auto">
            <button
              onClick={() => setActiveTab("agency")}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-150 ${
                activeTab === "agency"
                  ? "bg-[#8B5CF6] text-white shadow-sm"
                  : "text-[#94A3B8] hover:text-white"
              }`}
            >
              Agency Client Packages
            </button>
            <button
              onClick={() => setActiveTab("institute")}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-150 ${
                activeTab === "institute"
                  ? "bg-[#00F0FF] text-[#080B11] shadow-sm"
                  : "text-[#94A3B8] hover:text-white"
              }`}
            >
              Institute Batch Fees
            </button>
          </div>
        </div>

        {/* Tab 1: Agency Pricing */}
        {activeTab === "agency" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {AGENCY_PRICING.map((plan) => (
              <div
                key={plan.id}
                className={`relative rounded-2xl bg-[#0D131F] border transition-all duration-300 p-7 sm:p-8 flex flex-col justify-between ${
                  plan.popular
                    ? "border-[#8B5CF6] shadow-[0_0_30px_-5px_rgba(139,92,246,0.15)] bg-gradient-to-b from-[#111726] to-[#0D131F]"
                    : "border-[#1E293B] hover:border-[#334155]"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[#8B5CF6] text-white text-[11px] font-mono uppercase tracking-wider font-semibold shadow-md">
                    {plan.badge}
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-bold text-white font-heading">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-[#94A3B8] mt-1.5 min-h-[32px]">
                    {plan.positioning}
                  </p>

                  <div className="mt-6 mb-6 pb-6 border-b border-[#1E293B] flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-xs font-mono text-[#64748B]">
                      /{plan.period}
                    </span>
                  </div>

                  <div className="space-y-3 mb-8">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#64748B] block">
                      Package Inclusions:
                    </span>
                    <ul className="space-y-2.5 text-xs text-[#CBD5E1]">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-[#8B5CF6] flex-shrink-0 mt-0.5" />
                          <span className="leading-snug">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#1E293B]">
                  <Button
                    href={`#contact?package=${encodeURIComponent(plan.name)}`}
                    variant={plan.popular ? "primary" : "secondary"}
                    size="md"
                    showArrow
                    className="w-full text-xs justify-center"
                  >
                    {plan.ctaText}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Institute Pricing & Admission Details */}
        {activeTab === "institute" && (
          <div className="p-8 sm:p-12 rounded-2xl bg-[#0D131F] border border-[#1E293B] text-center max-w-3xl mx-auto space-y-6">
            <div className="w-12 h-12 rounded-xl bg-[#00F0FF]/15 border border-[#00F0FF]/30 text-[#00F0FF] flex items-center justify-center mx-auto">
              <ShieldCheck className="w-6 h-6" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading">
              Current Batch Fee & Admission Inquiries
            </h3>

            <p className="text-sm text-[#94A3B8] leading-relaxed max-w-xl mx-auto">
              Institute batch fees vary based on scholarship allocations, batch schedule (weekday vs weekend), and 1-on-1 mentorship seats. Contact our admissions counselor for transparent fee schedules and payment installments.
            </p>

            <div className="p-4 rounded-xl bg-[#111726] border border-[#1E293B] max-w-lg mx-auto text-left space-y-2 text-xs text-[#CBD5E1]">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#00F0FF]" />
                <span>Flexible installment options available for students</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#00F0FF]" />
                <span>Lifetime access to course recorded materials & resources</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#00F0FF]" />
                <span>Direct 1-on-1 portfolio and freelancing profile review</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-3.5">
              <Button
                href={SITE_CONTACT.whatsAppUrl}
                external
                variant="whatsapp"
                size="md"
                className="text-xs px-6 py-3"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Inquire Batch Fees on WhatsApp
              </Button>
              <Button
                href="#contact"
                variant="secondary"
                size="md"
                showArrow
                className="text-xs px-6 py-3"
              >
                Submit Admission Inquiry
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
