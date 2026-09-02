"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { COURSES_DATA, CourseItem, SITE_CONTACT } from "@/data/siteContent";
import { Clock, Users, CheckCircle, ArrowUpRight, Search, ShieldCheck, Sparkles, MessageCircle, Laptop, GraduationCap, X, Send, CheckCircle2, ChevronRight } from "lucide-react";
import { Button } from "@/components/common/Button";
import { formatWhatsAppMessage } from "@/lib/utils";

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCourseModal, setSelectedCourseModal] = useState<CourseItem | null>(null);

  // Admission Modal Form State
  const [admissionForm, setAdmissionForm] = useState({
    name: "",
    phone: "",
    email: "",
    background: "Absolute Beginner (Zero Tech Knowledge)",
    goals: "",
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const categories = ["All", "Design & 3D", "Marketing & SEO", "Web & Coding"];

  const filteredCourses = COURSES_DATA.filter((course) => {
    const matchesCat = selectedCategory === "All" || course.category === selectedCategory;
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.tools.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  const handleApplySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, string> = {};
    if (!admissionForm.name.trim()) errors.name = "Full name is required";
    if (!admissionForm.phone.trim()) errors.phone = "WhatsApp number is required";
    if (!admissionForm.email.trim() || !admissionForm.email.includes("@")) errors.email = "Valid email is required";
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "institute",
          name: admissionForm.name,
          phone: admissionForm.phone,
          email: admissionForm.email,
          course: selectedCourseModal?.title,
          background: admissionForm.background,
          goals: admissionForm.goals,
        }),
      });
      setSubmitSuccess(true);
    } catch (err) {
      console.error(err);
      setSubmitSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#080B11] text-[#94A3B8] pt-28 pb-20">
      {/* Breadcrumb & Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex items-center gap-2 text-xs font-mono text-[#64748B] mb-4">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#C4B5FD]">Institute Courses</span>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider mb-4 border border-[#00F0FF]/30 text-[#7DD3FC] bg-[#00F0FF]/10">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] animate-pulse" />
          <span>Creatives Training Institute • Course Catalog</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white font-heading tracking-tight leading-tight">
          Master Modern Tech Skills.{" "}
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] via-[#C4B5FD] to-[#00F0FF]">
            Launch Your Career from Zero.
          </span>
        </h1>

        <p className="mt-4 text-base sm:text-lg text-[#94A3B8] max-w-3xl leading-relaxed">
          Explore our complete catalog of live, practical technology programs. Every course starts from scratch and includes 1-on-1 mentorship, live commercial client projects, and freelancing profile setup.
        </p>

        {/* Search & Filter Bar */}
        <div className="mt-10 p-3 sm:p-4 rounded-2xl bg-[#0D131F] border border-[#1E293B] flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? "bg-[#8B5CF6] text-white shadow-sm"
                    : "text-[#94A3B8] hover:text-white hover:bg-[#111726]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#64748B] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search courses or tools (e.g. Next.js, Figma)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#111726] border border-[#1E293B] rounded-xl pl-9 pr-3.5 py-2 text-xs text-white placeholder-[#64748B] focus:outline-none focus:border-[#8B5CF6]"
            />
          </div>
        </div>
      </div>

      {/* Courses Catalog Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredCourses.length === 0 ? (
          <div className="text-center py-20 p-8 rounded-2xl bg-[#0D131F] border border-[#1E293B]">
            <p className="text-base text-white font-semibold">No courses matched your search criteria.</p>
            <p className="text-xs text-[#94A3B8] mt-1">Try searching for a different keyword or reset filters.</p>
            <button
              onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
              className="mt-4 px-4 py-2 rounded-lg bg-[#8B5CF6] text-white text-xs font-medium"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="rounded-2xl bg-[#0D131F] border border-[#1E293B] hover:border-[#334155] transition-all duration-300 overflow-hidden flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  {/* Banner Image */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#111726]">
                    <Image
                      src={course.image}
                      alt={course.title}
                      width={600}
                      height={340}
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D131F] via-transparent to-transparent opacity-90" />

                    <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#080B11]/90 backdrop-blur-md border border-[#1E293B] text-[11px] font-mono text-[#00F0FF]">
                      <Clock className="w-3 h-3" />
                      <span>{course.duration}</span>
                    </div>

                    <div className="absolute top-3 right-3 inline-flex items-center px-2 py-1 rounded bg-[#080B11]/90 backdrop-blur-md border border-[#1E293B] text-[10px] font-mono text-[#C4B5FD]">
                      {course.format}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-7">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#64748B] block mb-1">
                      PROGRAM 0{course.number} • {course.level}
                    </span>

                    <h2 className="text-xl font-bold text-white font-heading group-hover:text-[#A78BFA] transition-colors leading-snug">
                      {course.title}
                    </h2>

                    <p className="text-xs text-[#94A3B8] mt-2.5 leading-relaxed">
                      {course.summary}
                    </p>

                    {/* Tools Mastered */}
                    <div className="mt-5">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#64748B] block mb-2">
                        Tools Mastered:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {course.tools.map((tool, i) => (
                          <span
                            key={i}
                            className="text-[10px] font-mono text-[#F8FAFC] px-2 py-0.5 rounded bg-[#111726] border border-[#1E293B]"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Syllabus Outline */}
                    <div className="mt-5 pt-4 border-t border-[#1E293B] space-y-1.5">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#64748B] block">
                        Modules & Syllabus:
                      </span>
                      <ul className="space-y-1 text-xs text-[#CBD5E1]">
                        {course.modules.map((mod, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle className="w-3.5 h-3.5 text-[#00F0FF] flex-shrink-0 mt-0.5" />
                            <span className="leading-snug">{mod}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Career Outcomes */}
                    <div className="mt-5 pt-4 border-t border-[#1E293B]">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#64748B] block mb-1.5">
                        Career Outcomes:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {course.careerOutcomes.map((career, i) => (
                          <span
                            key={i}
                            className="text-[10px] font-mono text-[#34D399] px-2 py-0.5 rounded bg-[#10B981]/10 border border-[#10B981]/20"
                          >
                            💼 {career}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="p-6 sm:p-7 pt-0 border-t border-[#1E293B]/60 flex flex-col gap-2 mt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedCourseModal(course);
                      setSubmitSuccess(false);
                      setFormErrors({});
                    }}
                    className="w-full py-2.5 px-4 rounded-lg bg-[#8B5CF6] hover:bg-[#7C3AED] text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors shadow-sm"
                  >
                    <span>Apply for Admission</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={`https://wa.me/923074422378?text=${encodeURIComponent(
                      `Hello Creatives Training Institute! I want admission in "${course.title}". Please send batch schedule and fee details.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-[#111726] hover:bg-[#151D30] border border-[#1E293B] text-[11px] font-medium text-[#34D399] transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Inquire on WhatsApp</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 4 Pillars of Institute Guarantee */}
        <div className="mt-20 p-8 sm:p-10 rounded-2xl bg-[#0D131F] border border-[#1E293B] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="space-y-2">
            <div className="p-2.5 rounded-lg bg-[#8B5CF6]/15 text-[#A78BFA] w-fit">
              <Sparkles className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-white">Zero Tech Background</h4>
            <p className="text-xs text-[#94A3B8]">No coding or design background required. We teach from scratch.</p>
          </div>

          <div className="space-y-2">
            <div className="p-2.5 rounded-lg bg-[#00F0FF]/15 text-[#00F0FF] w-fit">
              <Users className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-white">1-on-1 Mentorship</h4>
            <p className="text-xs text-[#94A3B8]">Direct instructor access, screen-share reviews, and personalized fixes.</p>
          </div>

          <div className="space-y-2">
            <div className="p-2.5 rounded-lg bg-[#10B981]/15 text-[#10B981] w-fit">
              <Laptop className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-white">Live Client Projects</h4>
            <p className="text-xs text-[#94A3B8]">Work on actual agency client briefs to build a verified portfolio.</p>
          </div>

          <div className="space-y-2">
            <div className="p-2.5 rounded-lg bg-[#F59E0B]/15 text-[#F59E0B] w-fit">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-white">Freelance Client Setup</h4>
            <p className="text-xs text-[#94A3B8]">Complete training on Upwork, Fiverr, proposal pitching, and payment receipt.</p>
          </div>
        </div>
      </div>

      {/* Interactive Admission Modal */}
      {selectedCourseModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg rounded-2xl bg-[#0D131F] border border-[#1E293B] p-6 sm:p-8 shadow-2xl">
            <button
              onClick={() => setSelectedCourseModal(null)}
              className="absolute top-5 right-5 p-1.5 rounded-lg bg-[#111726] border border-[#1E293B] text-[#94A3B8] hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>

            {submitSuccess ? (
              <div className="text-center py-6 space-y-4 animate-in fade-in duration-200">
                <div className="w-12 h-12 rounded-full bg-[#10B981]/15 border border-[#10B981]/30 text-[#10B981] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white font-heading">Application Sent!</h3>
                <p className="text-xs text-[#34D399] font-mono">Dispatched to: {SITE_CONTACT.email}</p>
                <p className="text-xs text-[#94A3B8]">
                  Our admission counselor will contact you within 15 minutes. You can also connect directly on WhatsApp to finalize your seat.
                </p>
                <div className="pt-3 flex flex-col gap-2">
                  <a
                    href={`https://wa.me/923074422378?text=${encodeURIComponent(
                      `Hello Creatives! I just submitted an admission application for "${selectedCourseModal.title}".`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-lg bg-[#10B981] hover:bg-[#059669] text-white text-xs font-semibold flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Continue on WhatsApp ({SITE_CONTACT.phoneDisplay})</span>
                  </a>
                  <button
                    onClick={() => setSelectedCourseModal(null)}
                    className="w-full py-2 text-xs text-[#94A3B8] hover:text-white"
                  >
                    Close
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#00F0FF]/10 text-[#00F0FF] text-[10px] font-mono mb-2">
                  <span>Admission Application</span>
                </div>
                <h3 className="text-xl font-bold text-white font-heading">
                  {selectedCourseModal.title}
                </h3>
                <p className="text-xs text-[#94A3B8] mt-1 mb-5">
                  Duration: {selectedCourseModal.duration} • Format: {selectedCourseModal.format}
                </p>

                <form onSubmit={handleApplySubmit} className="space-y-3.5 text-left">
                  <div>
                    <label className="block text-[11px] font-mono uppercase text-[#94A3B8] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Hamza Shafiq"
                      value={admissionForm.name}
                      onChange={(e) => setAdmissionForm({ ...admissionForm, name: e.target.value })}
                      className="w-full bg-[#111726] border border-[#1E293B] rounded-lg px-3 py-2 text-xs text-white placeholder-[#64748B] focus:outline-none focus:border-[#00F0FF]"
                    />
                    {formErrors.name && <p className="text-[10px] text-[#EF4444] mt-0.5">{formErrors.name}</p>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-mono uppercase text-[#94A3B8] mb-1">
                        WhatsApp / Phone *
                      </label>
                      <input
                        type="tel"
                        placeholder="03074422378"
                        value={admissionForm.phone}
                        onChange={(e) => setAdmissionForm({ ...admissionForm, phone: e.target.value })}
                        className="w-full bg-[#111726] border border-[#1E293B] rounded-lg px-3 py-2 text-xs text-white placeholder-[#64748B] focus:outline-none focus:border-[#00F0FF]"
                      />
                      {formErrors.phone && <p className="text-[10px] text-[#EF4444] mt-0.5">{formErrors.phone}</p>}
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono uppercase text-[#94A3B8] mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        placeholder="you@email.com"
                        value={admissionForm.email}
                        onChange={(e) => setAdmissionForm({ ...admissionForm, email: e.target.value })}
                        className="w-full bg-[#111726] border border-[#1E293B] rounded-lg px-3 py-2 text-xs text-white placeholder-[#64748B] focus:outline-none focus:border-[#00F0FF]"
                      />
                      {formErrors.email && <p className="text-[10px] text-[#EF4444] mt-0.5">{formErrors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase text-[#94A3B8] mb-1">
                      Current Background
                    </label>
                    <select
                      value={admissionForm.background}
                      onChange={(e) => setAdmissionForm({ ...admissionForm, background: e.target.value })}
                      className="w-full bg-[#111726] border border-[#1E293B] rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#00F0FF]"
                    >
                      <option value="Absolute Beginner (Zero Tech Knowledge)">Absolute Beginner (Zero Tech Knowledge)</option>
                      <option value="Intermediate Self-Learner">Intermediate Self-Learner</option>
                      <option value="University Student">University Student</option>
                      <option value="Working Professional Switching Careers">Working Professional</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase text-[#94A3B8] mb-1">
                      Learning Goals / Questions
                    </label>
                    <textarea
                      rows={2}
                      placeholder="What is your goal (e.g. freelancing, getting clients, job placement)?"
                      value={admissionForm.goals}
                      onChange={(e) => setAdmissionForm({ ...admissionForm, goals: e.target.value })}
                      className="w-full bg-[#111726] border border-[#1E293B] rounded-lg px-3 py-2 text-xs text-white placeholder-[#64748B] focus:outline-none focus:border-[#00F0FF] resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 px-4 rounded-lg bg-[#00F0FF] hover:bg-[#06B6D4] text-[#080B11] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md"
                    >
                      <span>{isSubmitting ? "Submitting..." : "Submit Admission Application"}</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
