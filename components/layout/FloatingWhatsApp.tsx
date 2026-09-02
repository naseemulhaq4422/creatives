"use client";

import React, { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { SITE_CONTACT } from "@/data/siteContent";

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const message = customMsg.trim() || "Hello! I would like to inquire about Creatives Digital Agency services & Institute courses.";
    window.open(`https://wa.me/923074422378?text=${encodeURIComponent(message)}`, "_blank");
    setIsOpen(false);
    setCustomMsg("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Popover Card */}
      {isOpen && (
        <div className="mb-3 w-80 rounded-xl bg-[#0D131F] border border-[#1E293B] shadow-2xl p-4 text-left animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-[#1E293B]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#10B981] flex items-center justify-center text-white">
                <MessageCircle className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-white">Creatives Direct Chat</h4>
                <p className="text-[10px] text-[#34D399] font-mono">15-Min Response Guarantee</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-[#64748B] hover:text-white rounded"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-[#94A3B8] my-3 leading-relaxed">
            Need a custom digital agency quote or institute admission guidance? Send a direct WhatsApp message to start immediately.
          </p>

          <form onSubmit={handleSend} className="space-y-2">
            <textarea
              value={customMsg}
              onChange={(e) => setCustomMsg(e.target.value)}
              placeholder="Type your message or project requirements..."
              rows={2}
              className="w-full bg-[#111726] border border-[#1E293B] rounded-lg p-2.5 text-xs text-white placeholder-[#64748B] focus:outline-none focus:border-[#10B981] resize-none"
            />
            <button
              type="submit"
              className="w-full py-2 px-3 rounded-lg bg-[#10B981] hover:bg-[#059669] text-white text-xs font-medium flex items-center justify-center gap-2 transition-colors"
            >
              <span>Open in WhatsApp</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}

      {/* Floating Button Trigger */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Direct WhatsApp Chat"
        className="group relative flex items-center gap-2 px-4 py-3 rounded-full bg-[#10B981] hover:bg-[#059669] text-white shadow-lg shadow-[#10B981]/25 hover:shadow-[#10B981]/40 transition-all duration-200"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="text-xs font-medium hidden sm:inline-block">15-Min WhatsApp</span>
        <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#34D399] border-2 border-[#080B11] animate-ping" />
        <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#34D399] border-2 border-[#080B11]" />
      </button>
    </div>
  );
};
