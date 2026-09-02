"use client";

import React, { useState } from "react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { FAQ_ITEMS } from "@/data/siteContent";
import { ChevronDown, MessageCircle } from "lucide-react";
import { SITE_CONTACT } from "@/data/siteContent";

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#0D131F] border-b border-[#1E293B]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Frequently Asked Questions"
          badgeAccent="purple"
          title="Common Questions."
          titleHighlight="Clear Answers."
          description="Everything you need to know about our Agency project delivery timelines, Institute admission criteria, and our 15-minute speed-to-lead response guarantee."
          align="center"
        />

        <div className="space-y-4">
          {FAQ_ITEMS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-[#111726] border-[#8B5CF6]/50 shadow-md"
                    : "bg-[#080B11] border-[#1E293B] hover:border-[#334155]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#111726] border border-[#1E293B] text-[#94A3B8]">
                      {faq.category}
                    </span>
                    <span className="text-sm sm:text-base font-bold text-white font-heading">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-[#94A3B8] transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? "transform rotate-180 text-[#8B5CF6]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-xs sm:text-sm text-[#94A3B8] leading-relaxed border-t border-[#1E293B]/60 mt-1">
                    <p className="pt-4">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 p-6 rounded-2xl bg-[#080B11] border border-[#1E293B] text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-semibold text-white">Have a specific custom inquiry?</h4>
            <p className="text-xs text-[#94A3B8]">Get an immediate response within 15 minutes directly on WhatsApp.</p>
          </div>
          <a
            href={SITE_CONTACT.whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 py-2.5 px-4 rounded-lg bg-[#10B981] hover:bg-[#059669] text-white text-xs font-semibold transition-colors flex-shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp ({SITE_CONTACT.phoneDisplay})</span>
          </a>
        </div>
      </div>
    </section>
  );
};
