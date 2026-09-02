"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SectionHeader } from "@/components/common/SectionHeader";
import { CASE_STUDIES, CaseStudyItem } from "@/data/siteContent";
import { ArrowUpRight, TrendingUp, Tag, CheckCircle, ExternalLink, X } from "lucide-react";
import { Button } from "@/components/common/Button";

export const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedCase, setSelectedCase] = useState<CaseStudyItem | null>(null);

  const categories = [
    "All",
    "Commercial & Mobility",
    "Brand & 3D",
    "Local SEO & Retail",
    "Web & Portals",
  ];

  const filteredProjects = activeCategory === "All"
    ? CASE_STUDIES
    : CASE_STUDIES.filter((item) => item.category === activeCategory);

  return (
    <section id="work" className="py-20 sm:py-28 bg-[#080B11] border-b border-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeader
            badge="Selected Case Studies"
            badgeAccent="emerald"
            title="Selected Work &"
            titleHighlight="Real Results."
            description="Real campaigns, bespoke engineering, and measurable client revenue. No mock data."
            className="mb-0"
          />

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-[#0D131F] border border-[#1E293B] self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-150 ${
                  activeCategory === cat
                    ? "bg-[#1E293B] text-white shadow-sm"
                    : "text-[#94A3B8] hover:text-white hover:bg-[#111726]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetric Editorial Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project, idx) => {
            const isFeatured = idx === 0 && activeCategory === "All";
            return (
              <div
                key={project.id}
                onClick={() => setSelectedCase(project)}
                className={`cursor-pointer group relative rounded-2xl bg-[#0D131F] border border-[#1E293B] hover:border-[#334155] transition-all duration-300 overflow-hidden flex flex-col justify-between ${
                  isFeatured ? "md:col-span-2 lg:col-span-2" : ""
                }`}
              >
                {/* Visual Image Area */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#111726]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={500}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D131F] via-transparent to-transparent opacity-80" />

                  {/* Result Metric Badge Overlay */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#080B11]/90 backdrop-blur-md border border-[#1E293B] text-xs font-mono text-[#34D399]">
                    <TrendingUp className="w-3.5 h-3.5 text-[#10B981]" />
                    <span>{project.result}</span>
                  </div>

                  {/* Category Pill Overlay */}
                  <div className="absolute top-4 right-4 inline-flex items-center px-2.5 py-0.5 rounded text-[10px] font-mono uppercase bg-[#111726]/80 backdrop-blur-sm border border-[#1E293B] text-[#94A3B8]">
                    {project.category}
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-mono text-[#94A3B8] px-2 py-0.5 rounded bg-[#111726] border border-[#1E293B]"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-xl font-bold text-white font-heading group-hover:text-[#C4B5FD] transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-[#64748B] mt-1">
                      Client: {project.client}
                    </p>
                    <p className="text-xs text-[#94A3B8] mt-3 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#1E293B] flex items-center justify-between text-xs font-medium text-[#A78BFA] group-hover:text-white transition-colors">
                    <span>View Case Study Breakdown</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Case Study Modal */}
        {selectedCase && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
            <div className="relative w-full max-w-2xl rounded-2xl bg-[#0D131F] border border-[#1E293B] p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setSelectedCase(null)}
                className="absolute top-5 right-5 p-2 rounded-lg bg-[#111726] border border-[#1E293B] text-[#94A3B8] hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-[16/9] w-full rounded-xl overflow-hidden bg-[#111726] mb-6">
                <Image
                  src={selectedCase.image}
                  alt={selectedCase.title}
                  width={800}
                  height={450}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#10B981]/15 border border-[#10B981]/30 text-[#34D399] text-xs font-mono mb-3">
                <TrendingUp className="w-4 h-4" />
                <span>Verified Metric: {selectedCase.result}</span>
              </div>

              <h3 className="text-2xl font-bold text-white font-heading">
                {selectedCase.title}
              </h3>
              <p className="text-xs font-mono text-[#A78BFA] mt-1 mb-4">
                Client / Brand: {selectedCase.client} • Category: {selectedCase.category}
              </p>

              <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
                {selectedCase.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedCase.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono text-[#F8FAFC] px-3 py-1 rounded bg-[#111726] border border-[#1E293B]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#1E293B]">
                <Button
                  href={`#contact?case=${encodeURIComponent(selectedCase.title)}`}
                  variant="primary"
                  size="sm"
                  showArrow
                  onClick={() => setSelectedCase(null)}
                >
                  Request Similar Project
                </Button>
                <Button
                  href={`https://wa.me/923074422378?text=${encodeURIComponent(
                    `Hello Creatives! I was reviewing your case study on "${selectedCase.title}" and would like to discuss a similar project for my business.`
                  )}`}
                  external
                  variant="whatsapp"
                  size="sm"
                >
                  Discuss on WhatsApp
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
