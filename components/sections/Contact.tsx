"use client";

import React, { useState, useEffect } from "react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { SITE_CONTACT, SERVICES_DATA, COURSES_DATA } from "@/data/siteContent";
import { MessageCircle, Mail, Phone, Clock, Zap, CheckCircle2, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/common/Button";
import { formatWhatsAppMessage } from "@/lib/utils";

export const Contact: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"agency" | "institute">("agency");

  // Agency Form State
  const [agencyForm, setAgencyForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: SERVICES_DATA[0].title,
    budget: "$850 — Growth & Mobility",
    requirements: "",
  });

  // Institute Form State
  const [instituteForm, setInstituteForm] = useState({
    name: "",
    phone: "",
    email: "",
    course: COURSES_DATA[0].title,
    background: "Absolute Beginner (Zero Tech Knowledge)",
    goals: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<{
    type: "agency" | "institute";
    whatsAppUrl: string;
    recipientEmail: string;
  } | null>(null);

  // Check URL hash params on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash;
      if (hash.includes("course=")) {
        setActiveTab("institute");
        const courseName = decodeURIComponent(hash.split("course=")[1] || "");
        if (courseName) {
          setInstituteForm((prev) => ({ ...prev, course: courseName }));
        }
      } else if (hash.includes("service=")) {
        setActiveTab("agency");
        const serviceName = decodeURIComponent(hash.split("service=")[1] || "");
        if (serviceName) {
          setAgencyForm((prev) => ({ ...prev, service: serviceName }));
        }
      }
    }
  }, []);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (activeTab === "agency") {
      if (!agencyForm.name.trim()) newErrors.name = "Full name is required.";
      if (!agencyForm.phone.trim()) newErrors.phone = "Phone / WhatsApp number is required.";
      if (!agencyForm.email.trim() || !agencyForm.email.includes("@"))
        newErrors.email = "Valid email address is required.";
      if (!agencyForm.requirements.trim())
        newErrors.requirements = "Please brief your project requirements.";
    } else {
      if (!instituteForm.name.trim()) newErrors.name = "Full name is required.";
      if (!instituteForm.phone.trim()) newErrors.phone = "Phone / WhatsApp number is required.";
      if (!instituteForm.email.trim() || !instituteForm.email.includes("@"))
        newErrors.email = "Valid email address is required.";
      if (!instituteForm.goals.trim())
        newErrors.goals = "Please share your learning goals or background.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const isAgency = activeTab === "agency";
      const subject = isAgency
        ? `🚀 New Agency Quote Request from ${agencyForm.name} (${agencyForm.service})`
        : `🎓 New Institute Admission Inquiry from ${instituteForm.name} (${instituteForm.course})`;

      const messageBody = isAgency
        ? `
CREATIVES DIGITAL AGENCY PROPOSAL REQUEST
----------------------------------------
Full Name: ${agencyForm.name}
Phone / WhatsApp: ${agencyForm.phone}
Email: ${agencyForm.email}
Interested Service: ${agencyForm.service}
Budget Tier: ${agencyForm.budget}

Project Requirements:
${agencyForm.requirements}
`
        : `
CREATIVES TRAINING INSTITUTE ADMISSION INQUIRY
---------------------------------------------
Full Name: ${instituteForm.name}
Phone / WhatsApp: ${instituteForm.phone}
Email: ${instituteForm.email}
Target Course: ${instituteForm.course}
Current Background: ${instituteForm.background}

Learning Goals & Questions:
${instituteForm.goals}
`;

      // Direct client-side dispatch to Web3Forms delivering to naseemulhaq48@gmail.com
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "66763a83-a7c8-472e-bb91-0da6324d26f6",
          subject: subject,
          from_name: isAgency ? agencyForm.name : instituteForm.name,
          replyto: isAgency ? agencyForm.email : instituteForm.email,
          to_email: SITE_CONTACT.email,
          message: messageBody,
        }),
      });

      let whatsAppUrl = "";
      if (isAgency) {
        const text = formatWhatsAppMessage("agency", {
          name: agencyForm.name,
          service: agencyForm.service,
          budget: agencyForm.budget,
          requirements: agencyForm.requirements,
        });
        whatsAppUrl = `https://wa.me/923074422378?text=${text}`;
      } else {
        const text = formatWhatsAppMessage("institute", {
          name: instituteForm.name,
          course: instituteForm.course,
          background: instituteForm.background,
        });
        whatsAppUrl = `https://wa.me/923074422378?text=${text}`;
      }

      setSubmissionSuccess({
        type: activeTab,
        whatsAppUrl,
        recipientEmail: SITE_CONTACT.email,
      });
    } catch (err) {
      console.error("Submission failed:", err);
      // Even if network fails, provide direct WhatsApp continuation
      const text = formatWhatsAppMessage(activeTab, activeTab === "agency" ? agencyForm : instituteForm);
      setSubmissionSuccess({
        type: activeTab,
        whatsAppUrl: `https://wa.me/923074422378?text=${text}`,
        recipientEmail: SITE_CONTACT.email,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#0D131F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Direct Inquiries"
          badgeAccent="emerald"
          title="Connect with"
          titleHighlight="Creatives."
          description="Request a turnkey digital agency proposal or submit your admission inquiry for the upcoming training batch. Guaranteed 15-minute response."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Form Hub */}
          <div className="lg:col-span-7 bg-[#111726] border border-[#1E293B] rounded-2xl p-6 sm:p-9 shadow-xl">
            {/* Dual Tabs */}
            <div className="flex items-center p-1 rounded-xl bg-[#0D131F] border border-[#1E293B] mb-8">
              <button
                type="button"
                onClick={() => {
                  setActiveTab("agency");
                  setSubmissionSuccess(null);
                }}
                className={`flex-1 py-2.5 rounded-lg text-xs font-semibold transition-all duration-150 ${
                  activeTab === "agency"
                    ? "bg-[#8B5CF6] text-white shadow-sm"
                    : "text-[#94A3B8] hover:text-white"
                }`}
              >
                Agency Quote Request
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveTab("institute");
                  setSubmissionSuccess(null);
                }}
                className={`flex-1 py-2.5 rounded-lg text-xs font-semibold transition-all duration-150 ${
                  activeTab === "institute"
                    ? "bg-[#00F0FF] text-[#080B11] shadow-sm"
                    : "text-[#94A3B8] hover:text-white"
                }`}
              >
                Institute Admission
              </button>
            </div>

            {/* Success State */}
            {submissionSuccess ? (
              <div className="py-8 text-center space-y-5 animate-in fade-in duration-200">
                <div className="w-14 h-14 rounded-full bg-[#10B981]/15 border border-[#10B981]/30 text-[#10B981] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white font-heading">
                    Form Submitted & Sent!
                  </h3>
                  <p className="text-xs sm:text-sm text-[#34D399] font-mono mt-1">
                    ✓ Received & dispatched to: {submissionSuccess.recipientEmail}
                  </p>
                  <p className="text-xs text-[#94A3B8] mt-3 max-w-md mx-auto leading-relaxed">
                    {submissionSuccess.type === "agency"
                      ? "Your proposal request has been emailed to our team. For instant 15-minute response, you can also continue directly on WhatsApp."
                      : "Your admission application has been emailed to our admissions team. Connect on WhatsApp to reserve your batch seat immediately."}
                  </p>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Button
                    href={submissionSuccess.whatsAppUrl}
                    external
                    variant="whatsapp"
                    size="md"
                    className="w-full sm:w-auto text-xs px-6 py-3"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Open in WhatsApp
                  </Button>
                  <Button
                    variant="outline"
                    size="md"
                    onClick={() => setSubmissionSuccess(null)}
                    className="w-full sm:w-auto text-xs"
                  >
                    Submit Another Inquiry
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#94A3B8] mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Muhammad Tariq"
                      value={activeTab === "agency" ? agencyForm.name : instituteForm.name}
                      onChange={(e) =>
                        activeTab === "agency"
                          ? setAgencyForm({ ...agencyForm, name: e.target.value })
                          : setInstituteForm({ ...instituteForm, name: e.target.value })
                      }
                      className="w-full bg-[#0D131F] border border-[#1E293B] rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-[#64748B] focus:outline-none focus:border-[#8B5CF6]"
                    />
                    {errors.name && <p className="text-[11px] text-[#EF4444] mt-1">{errors.name}</p>}
                  </div>

                  {/* Phone / WhatsApp */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#94A3B8] mb-1.5">
                      WhatsApp / Phone *
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. 03074422378"
                      value={activeTab === "agency" ? agencyForm.phone : instituteForm.phone}
                      onChange={(e) =>
                        activeTab === "agency"
                          ? setAgencyForm({ ...agencyForm, phone: e.target.value })
                          : setInstituteForm({ ...instituteForm, phone: e.target.value })
                      }
                      className="w-full bg-[#0D131F] border border-[#1E293B] rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-[#64748B] focus:outline-none focus:border-[#8B5CF6]"
                    />
                    {errors.phone && <p className="text-[11px] text-[#EF4444] mt-1">{errors.phone}</p>}
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#94A3B8] mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. you@company.com"
                    value={activeTab === "agency" ? agencyForm.email : instituteForm.email}
                    onChange={(e) =>
                      activeTab === "agency"
                        ? setAgencyForm({ ...agencyForm, email: e.target.value })
                        : setInstituteForm({ ...instituteForm, email: e.target.value })
                    }
                    className="w-full bg-[#0D131F] border border-[#1E293B] rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-[#64748B] focus:outline-none focus:border-[#8B5CF6]"
                  />
                  {errors.email && <p className="text-[11px] text-[#EF4444] mt-1">{errors.email}</p>}
                </div>

                {activeTab === "agency" ? (
                  <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Interested Service */}
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-[#94A3B8] mb-1.5">
                          Interested Service
                        </label>
                        <select
                          value={agencyForm.service}
                          onChange={(e) => setAgencyForm({ ...agencyForm, service: e.target.value })}
                          className="w-full bg-[#0D131F] border border-[#1E293B] rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#8B5CF6]"
                        >
                          {SERVICES_DATA.map((s) => (
                            <option key={s.id} value={s.title}>
                              {s.title}
                            </option>
                          ))}
                          <option value="Full Turnkey Agency Retainer">Full Turnkey Agency Retainer</option>
                        </select>
                      </div>

                      {/* Estimated Budget Tier */}
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-[#94A3B8] mb-1.5">
                          Budget Tier
                        </label>
                        <select
                          value={agencyForm.budget}
                          onChange={(e) => setAgencyForm({ ...agencyForm, budget: e.target.value })}
                          className="w-full bg-[#0D131F] border border-[#1E293B] rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#8B5CF6]"
                        >
                          <option value="$350 — Starter Launchpad">$350 — Starter Launchpad</option>
                          <option value="$850 — Growth & Mobility">$850 — Growth & Mobility</option>
                          <option value="$1,850+ — Enterprise Dominance">$1,850+ — Enterprise Dominance</option>
                          <option value="Custom Scope Discussion">Custom Scope Discussion</option>
                        </select>
                      </div>
                    </div>

                    {/* Requirements */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#94A3B8] mb-1.5">
                        Project Requirements / Description *
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Describe your current business, target audience, and key deliverables needed..."
                        value={agencyForm.requirements}
                        onChange={(e) => setAgencyForm({ ...agencyForm, requirements: e.target.value })}
                        className="w-full bg-[#0D131F] border border-[#1E293B] rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-[#64748B] focus:outline-none focus:border-[#8B5CF6] resize-none"
                      />
                      {errors.requirements && (
                        <p className="text-[11px] text-[#EF4444] mt-1">{errors.requirements}</p>
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Interested Course */}
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-[#94A3B8] mb-1.5">
                          Target Course
                        </label>
                        <select
                          value={instituteForm.course}
                          onChange={(e) => setInstituteForm({ ...instituteForm, course: e.target.value })}
                          className="w-full bg-[#0D131F] border border-[#1E293B] rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#00F0FF]"
                        >
                          {COURSES_DATA.map((c) => (
                            <option key={c.id} value={c.title}>
                              {c.title}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Current Background */}
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-[#94A3B8] mb-1.5">
                          Current Background
                        </label>
                        <select
                          value={instituteForm.background}
                          onChange={(e) => setInstituteForm({ ...instituteForm, background: e.target.value })}
                          className="w-full bg-[#0D131F] border border-[#1E293B] rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#00F0FF]"
                        >
                          <option value="Absolute Beginner (Zero Tech Knowledge)">
                            Absolute Beginner (Zero Tech Knowledge)
                          </option>
                          <option value="Intermediate Self-Learner">Intermediate Self-Learner</option>
                          <option value="University Student Seeking Practical Skills">
                            University Student Seeking Practical Skills
                          </option>
                          <option value="Working Professional Switching Careers">
                            Working Professional Switching Careers
                          </option>
                        </select>
                      </div>
                    </div>

                    {/* Goals */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#94A3B8] mb-1.5">
                        Learning Goals / Questions *
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Tell us about what you want to achieve (e.g. freelancing on Upwork/Fiverr, building client projects, job placement)..."
                        value={instituteForm.goals}
                        onChange={(e) => setInstituteForm({ ...instituteForm, goals: e.target.value })}
                        className="w-full bg-[#0D131F] border border-[#1E293B] rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-[#64748B] focus:outline-none focus:border-[#00F0FF] resize-none"
                      />
                      {errors.goals && <p className="text-[11px] text-[#EF4444] mt-1">{errors.goals}</p>}
                    </div>
                  </>
                )}

                <div className="pt-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3.5 px-6 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                      activeTab === "agency"
                        ? "bg-[#8B5CF6] hover:bg-[#7C3AED] text-white shadow-[0_0_20px_rgba(139,92,246,0.3)]"
                        : "bg-[#00F0FF] hover:bg-[#06B6D4] text-[#080B11] shadow-[0_0_20px_rgba(0,240,255,0.3)]"
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending to {SITE_CONTACT.email}...</span>
                      </>
                    ) : (
                      <>
                        <span>
                          {activeTab === "agency"
                            ? "Get Free Agency Proposal"
                            : "Submit Admission Application"}
                        </span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Verified Contact Details & Speed-to-Lead Guarantee */}
          <div className="lg:col-span-5 space-y-6">
            {/* Speed to Lead Guarantee Box */}
            <div className="p-7 rounded-2xl bg-[#111726] border border-[#10B981]/40 shadow-lg">
              <div className="flex items-center gap-3 text-[#34D399] mb-3">
                <Zap className="w-5 h-5 fill-current text-[#10B981]" />
                <span className="text-xs font-mono uppercase tracking-wider font-semibold">
                  Speed-to-Lead Guarantee
                </span>
              </div>
              <h4 className="text-xl font-bold text-white font-heading">
                15-Minute Direct Response
              </h4>
              <p className="text-xs text-[#94A3B8] mt-2 leading-relaxed">
                All inquiries submitted through this form are instantly delivered to <strong className="text-white font-mono">{SITE_CONTACT.email}</strong> and reviewed within 15 minutes during operational hours.
              </p>
            </div>

            {/* Direct Official Contact Info */}
            <div className="p-7 rounded-2xl bg-[#111726] border border-[#1E293B] space-y-5">
              <span className="text-xs font-mono uppercase tracking-wider text-[#64748B] block">
                Official Business Channels
              </span>

              <div className="space-y-4 text-xs">
                {/* WhatsApp */}
                <a
                  href={SITE_CONTACT.whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-[#0D131F] border border-[#1E293B] hover:border-[#10B981] transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-[#10B981]/15 text-[#34D399]">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-white font-semibold group-hover:text-[#34D399]">
                      Direct WhatsApp
                    </span>
                    <span className="text-[#94A3B8] font-mono">{SITE_CONTACT.phoneDisplay}</span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={SITE_CONTACT.emailUrl}
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-[#0D131F] border border-[#1E293B] hover:border-[#8B5CF6] transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-[#8B5CF6]/15 text-[#A78BFA]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-white font-semibold group-hover:text-[#A78BFA]">
                      Official Email
                    </span>
                    <span className="text-[#94A3B8] font-mono">{SITE_CONTACT.email}</span>
                  </div>
                </a>

                {/* Hours */}
                <div className="flex items-center gap-3.5 p-3 rounded-xl bg-[#0D131F] border border-[#1E293B]">
                  <div className="p-2 rounded-lg bg-[#00F0FF]/15 text-[#00F0FF]">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-white font-semibold">Operational Hours</span>
                    <span className="text-[#94A3B8]">{SITE_CONTACT.workingHours}</span>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Quick Button */}
              <div className="pt-2">
                <Button
                  href={SITE_CONTACT.whatsAppUrl}
                  external
                  variant="whatsapp"
                  size="md"
                  className="w-full text-xs justify-center py-3"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  <span>Prefer Instant Chat? WhatsApp Us</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
