import React from "react";
import Image from "next/image";
import { COURSES_DATA } from "@/data/siteContent";
import { Clock, Users, CheckCircle, ArrowUpRight, Award, MessageCircle } from "lucide-react";
import { Button } from "@/components/common/Button";
import { SITE_CONTACT } from "@/data/siteContent";

export const Courses: React.FC = () => {
  return (
    <section id="courses" className="py-20 sm:py-28 bg-[#0D131F] border-b border-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider mb-4 border border-[#00F0FF]/30 text-[#7DD3FC] bg-[#00F0FF]/10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] animate-pulse" />
              <span>Upcoming Batches</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-heading">
              Practical Technology Programs
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#94A3B8] max-w-md">
            All programs include 1-on-1 portfolio review, live freelancing onboarding (Upwork, Fiverr), and genuine agency client project experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {COURSES_DATA.map((course) => (
            <div
              key={course.id}
              className="rounded-2xl bg-[#111726] border border-[#1E293B] hover:border-[#334155] transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Course Visual Banner */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#0D131F]">
                  <Image
                    src={course.image}
                    alt={course.title}
                    width={600}
                    height={340}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111726] via-transparent to-transparent opacity-90" />

                  <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#080B11]/90 backdrop-blur-md border border-[#1E293B] text-[11px] font-mono text-[#00F0FF]">
                    <Clock className="w-3 h-3" />
                    <span>{course.duration}</span>
                  </div>

                  <div className="absolute top-3 right-3 inline-flex items-center px-2 py-1 rounded bg-[#080B11]/90 backdrop-blur-md border border-[#1E293B] text-[10px] font-mono text-[#C4B5FD]">
                    {course.format}
                  </div>
                </div>

                {/* Course Content */}
                <div className="p-6 sm:p-7">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#64748B] block mb-1">
                    PROGRAM 0{course.number} • {course.level}
                  </span>
                  <h3 className="text-xl font-bold text-white font-heading group-hover:text-[#A78BFA] transition-colors leading-snug">
                    {course.title}
                  </h3>
                  <p className="text-xs text-[#94A3B8] mt-2.5 leading-relaxed">
                    {course.summary}
                  </p>

                  {/* Modules Outline */}
                  <div className="mt-6 pt-5 border-t border-[#1E293B] space-y-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#64748B] block">
                      Curriculum Highlights:
                    </span>
                    <ul className="space-y-1.5 text-xs text-[#CBD5E1]">
                      {course.modules.slice(0, 5).map((module, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-[#00F0FF] flex-shrink-0 mt-0.5" />
                          <span className="leading-snug">{module}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Highlights Tags */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {course.highlights.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono text-[#34D399] px-2 py-0.5 rounded bg-[#10B981]/10 border border-[#10B981]/20"
                      >
                        ✓ {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Apply Actions */}
              <div className="p-6 sm:p-7 pt-0 border-t border-[#1E293B]/50 flex flex-col gap-2 mt-4">
                <Button
                  href={`#contact?course=${encodeURIComponent(course.title)}`}
                  variant="primary"
                  size="sm"
                  showArrow
                  className="w-full text-xs justify-center"
                >
                  {course.ctaText}
                </Button>
                <a
                  href={`https://wa.me/923074422378?text=${encodeURIComponent(
                    `Hello Creatives Training Institute! I am interested in admission for "${course.title}". Please send batch details.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-[#0D131F] hover:bg-[#151D30] border border-[#1E293B] text-[11px] font-medium text-[#34D399] transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Inquire on WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
